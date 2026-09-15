import pathlib
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
import argparse
parser=argparse.ArgumentParser();parser.add_argument('--output',required=True);args=parser.parse_args()
root=pathlib.Path(__file__).resolve().parents[1]; out=pathlib.Path(args.output);out.mkdir(parents=True,exist_ok=True)
for name in ['barlow-regular','barlow-semibold','barlow-condensed-black','barlow-condensed-bold']:
 font=TTFont(root/'public/fonts'/f'{name}.woff2');font.flavor=None;font.save(out/f'{name}.ttf')
font=TTFont(out/'barlow-condensed-black.ttf');glyphs=font.getGlyphSet(); cmap=font.getBestCmap();x=0; paths=[]
for ch in 'DEE':
 name=cmap[ord(ch)];pen=SVGPathPen(glyphs);glyphs[name].draw(TransformPen(pen,(1,0,0,1,x,0)));paths.append(pen.getCommands());x+=glyphs[name].width
svg=f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {x} 750" role="img" aria-label="Dee"><title>Dee wordmark</title><g transform="translate(0 715) scale(1 -1)" fill="#0d1219">'+''.join(f'<path d="{d}"/>' for d in paths)+'</g></svg>'
(root/'public/press/assets/dee-wordmark.svg').write_text(svg)
print('Brand fonts converted; existing typographic wordmark outlined.')
