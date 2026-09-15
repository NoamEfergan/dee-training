"""Build the two-page fact sheet, editorial copy and deterministic press ZIP.
Run with Python 3, reportlab, Pillow and pypdf. Supply DEE_PRESS_FONT_DIR
containing TTF conversions of the site's four Barlow WOFF2 files.
Only the explicitly public press directory is packaged.
"""
import os,json,pathlib,zipfile,hashlib,html
from reportlab.pdfgen import canvas
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import Paragraph
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from pypdf import PdfReader
root=pathlib.Path(__file__).resolve().parents[1];p=root/'public/press'; c=json.loads((root/'src/content/press.json').read_text())
font_dir=pathlib.Path(os.environ['DEE_PRESS_FONT_DIR'])
for name,filename in [('Body','barlow-regular'),('Bold','barlow-semibold'),('Display','barlow-condensed-black'),('Heading','barlow-condensed-bold')]:pdfmetrics.registerFont(TTFont(name,str(font_dir/f'{filename}.ttf')))
W,H=595.276,841.89; ink='#0d1219';muted='#586476';teal='#04778c';paper='#f1f4f8'
cv=canvas.Canvas(str(p/'dee-fact-sheet.pdf'),pagesize=(W,H),pageCompression=1,invariant=1)
cv.setTitle('Dee — press fact sheet');cv.setAuthor(c['creator']);cv.setSubject('Muay Thai Coach · Product, platforms, access and editorial contact');cv.setCreator('Dee press kit')
def txt(text,x,y,w,size=10.2,lead=14.2,font='Body',color=ink):
 style=ParagraphStyle('copy',fontName=font,fontSize=size,leading=lead,textColor=colors.HexColor(color))
 q=Paragraph(html.escape(text).replace('\n','<br/>'),style);_,h=q.wrap(w,H);q.drawOn(cv,x,y-h);return y-h

def label(text,x,y,w=510):return txt(text.upper(),x,y,w,8.2,11,'Bold',teal)
def block(title,body,x,y,w=245):
 y=txt(title,x,y,w,19,21,'Heading');y-=8;y=txt(body,x,y,w);return y-15

def base(page):
 cv.setFillColor(colors.HexColor(paper));cv.rect(0,0,W,H,fill=1,stroke=0)
 cv.setStrokeColor(colors.HexColor('#ccd5df'));cv.line(40,43,W-40,43)
 txt('DEE / PRESS KIT',40,32,170,8,10,'Bold');txt('dee.training/press  ·  info@dee.training',208,32,280,8,10,'Body',muted);txt(f'{page} / 2',525,32,35,8,10,'Bold')
 cv.linkURL(c['url'],(208,20,310,35),relative=0);cv.linkURL('mailto:'+c['contact'],(320,20,495,35),relative=0)
base(1);label('Muay Thai Coach / '+c['updated'],40,804)
y=txt('YOUR PLAN.\nYOUR ROUND.\nYOUR CORNER.',40,777,370,49,43,'Display')
y=txt(c['shortDescription'],40,y-24,350,12,16)
cv.drawImage(str(p/'assets/dee-app-icon.png'),447,691,width=108,height=108,mask='auto')
cv.setStrokeColor(colors.HexColor(ink));cv.line(40,y-23,555,y-23)
y-=47
left=y; right=y
left=block(c['watch']['title'],c['watch']['body'],40,left,245)
left=txt('The initial transfer needs iPhone. After sync, start, pause, resume and end the workout on Watch. Voice, haptics and a recap keep the session on your wrist.',40,left+4,245)-20
left=block('Current releases',f"iOS {c['release']['ios']} · {c['release']['iosDate']}\nAndroid {c['release']['android']}\n{c['release']['requirements']}",40,left,245)
left=block('What’s new on iOS',c['release']['news'],40,left,245)
right=block('Planning & customization',c['features'][0]['body'],310,right,245)
right=block('The workout experience',c['features'][1]['body'],310,right,245)
right=block('Progress & consistency',c['features'][3]['body'],310,right,245)
low=min(left,right)-2
low=label('iOS access',40,low)
low=txt(c['release']['access'],40,low-8,515,9.8,13.1)
assert low>58,f'Page 1 content below footer: {low}'
cv.showPage();base(2);label('Platforms, privacy & review access',40,804)
y=txt('MADE FOR YOUR\nWAY TO TRAIN.',40,778,515,43,41,'Display')-18
left=y;right=y
for i in [4,5,6]:left=block(c['features'][i]['title'],c['features'][i]['body'],40,left,245)
left=block('Apple Health',c['watch']['note'],40,left,245)
right=block('AI & offline boundaries',c['factSheet']['ai'],310,right,245)
right=block('Dee on Android',c['factSheet']['android'],310,right,245)
right=txt(c['android']['differences'],310,right+4,245,9.5,13,'Body',muted)-21
right=block('No separate Dee account',c['factSheet']['account'],310,right,245)
low=min(left,right)
cv.setStrokeColor(colors.HexColor('#ccd5df'));cv.line(40,low+4,555,low+4)
low=label('For reviewers',40,low-12)
low=txt('Install; set goals and equipment; build a plan; adjust a session; follow a round; finish and inspect progress. For Watch, confirm the plan has synced before leaving the phone behind. Try your preferred accessibility and language settings.',40,low-8,515,10,13.5)-15
low=txt(c['reviewerAccess'],40,low,515,10,13.5)-17
low=txt(c['founder']['body'].split('. ')[0]+'.',40,low,515,9.5,12.5)-12
low=txt('Featured writing: '+c['article']['title']+' — '+c['article']['publication']+'. Full feature reference, screenshots, video and editorial credits: dee.training/press.',40,low,515,9.2,12.5,'Body',muted)
assert low>55,f'Page 2 content below footer: {low}'
cv.save();assert len(PdfReader(p/'dee-fact-sheet.pdf').pages)==2
# Text download uses the same complete source as the page.
lines=[c['name'],'Press kit · '+c['updated'],c['url'],'Press: '+c['contact'],'Creator: '+c['creator'],'','SHORT DESCRIPTION',c['shortDescription'],'','EXTENDED DESCRIPTION',c['extendedDescription'],'','STORY ANGLES']
for s in c['storyAngles']:lines.extend([s['title'],s['body'],''])
lines.extend(['FEATURE REFERENCE'])
for f in c['features']:lines.extend([f['title']+' ['+f['platform']+']',f['body'],*['- '+d for d in f['details']],''])
lines.extend(['ANDROID',c['android']['body'],*c['android']['features'],c['android']['requirements'],c['android']['access'],c['android']['differences'],'','CURRENT RELEASE',c['release']['news'],c['release']['access'],c['release']['pricingNote'],'','FOUNDER',c['founder']['body'],'','PUBLISHED ARTICLE',c['article']['title'],c['article']['url'],'','REVIEWER WALKTHROUGH'])
for i,s in enumerate(c['reviewer'],1):lines.extend([f'{i}. '+s['title'],s['body']])
lines.extend([c['reviewerAccess'],'App Store: '+c['appStore'],'Google Play: '+c['googlePlay'],'','ASSET CAPTIONS',c['captureNote']])
for a in c['assets']:lines.extend([a['file'],a['title']+' — '+a['caption']])
for v in c['videos']:lines.extend([v['file'],v['title']+' — '+v['caption']])
lines.extend(['','EDITORIAL CREDITS',c['credits']])
(p/'dee-editorial-copy.txt').write_text('\n'.join(lines)+'\n')
(p/'assets/README.txt').write_text('Dee press assets\n\n'+c['credits']+'\n\n'+c['captureNote']+'\n\nThe wordmark reproduces the existing website typography as vector outlines. dee-presentation.png is a designed presentation image; screenshots/ contains app images without marketing overlays.\n')
# Captions come from the same editorial source as the page.
def stamp(t):return f'{int(t)//3600:02}:{int(t)//60%60:02}:{t%60:06.3f}'
for video in c['videos']:
 target=root/'public'/video['captions'].lstrip('/')
 target.write_text('WEBVTT\n\n'+'\n\n'.join(f'{i}\n{stamp(a)} --> {stamp(b)}\n{text}' for i,(a,b,text) in enumerate(video['cues'],1))+'\n')
# Explicit public allowlist: no private correspondence, build logs or evidence.
files=[f for f in p.rglob('*') if f.is_file() and f.suffix in {'.png','.jpg','.svg','.pdf','.txt','.mp4','.vtt'}]
manifest={'updated':c['updated'],'url':c['url'],'files':[{'path':str(f.relative_to(p)),'bytes':f.stat().st_size,'sha256':hashlib.sha256(f.read_bytes()).hexdigest()} for f in sorted(files)]}
(p/'asset-manifest.json').write_text(json.dumps(manifest,indent=2)+'\n')
files.append(p/'asset-manifest.json')
with zipfile.ZipFile(p/'dee-press-kit.zip','w',compression=zipfile.ZIP_DEFLATED,compresslevel=6) as z:
 for f in sorted(files):
  info=zipfile.ZipInfo('dee-press-kit/'+str(f.relative_to(p)),date_time=(2026,9,15,0,0,0));info.compress_type=zipfile.ZIP_DEFLATED;info.external_attr=0o644<<16;z.writestr(info,f.read_bytes())
print(f'Built 2-page PDF, complete editorial copy and ZIP with {len(files)} public files.')
