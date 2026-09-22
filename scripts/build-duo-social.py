"""Render the Duo share card from brand typography and unmodified app captures.

Requires fonttools + brotli (Python) and the site's existing sharp dependency.
Run from the site checkout: python3 scripts/build-duo-social.py
"""
from pathlib import Path
import base64
import re
import subprocess
import tempfile
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / 'public/press/duo'


def image(path, x, y, width, height):
    data = base64.b64encode(path.read_bytes()).decode()
    mime = 'image/jpeg' if path.suffix == '.jpg' else 'image/png'
    return f'<image x="{x}" y="{y}" width="{width}" height="{height}" href="data:{mime};base64,{data}"/>'


def text(value, x, y, size, color='#0d1219', font='barlow-condensed-black', tracking=0):
    face = TTFont(ROOT / 'public/fonts' / f'{font}.woff2')
    glyphs, cmap = face.getGlyphSet(), face.getBestCmap()
    scale = size / face['head'].unitsPerEm
    paths = []
    for char in value:
        glyph = glyphs[cmap[ord(char)]]
        pen = SVGPathPen(glyphs)
        glyph.draw(TransformPen(pen, (scale, 0, 0, -scale, x, y)))
        paths.append(f'<path d="{pen.getCommands()}"/>')
        x += glyph.width * scale + tracking
    return f'<g fill="{color}">' + ''.join(paths) + '</g>'


def device(display, capture, x, y, width):
    inner = display == 'inner'
    fw, fh, left, top, sw, sh = (3093,2247,120,120,2853,2007) if inner else (2194,1574,80,88,2034,1398)
    scale = width / fw
    path = re.search(r'<path fill="white" d="([^"]+)"', (ASSETS / f'{display}-display-mask.svg').read_text()).group(1)
    return f'''<g transform="translate({x} {y}) scale({scale})">
      <defs><clipPath id="{display}-screen"><path d="{path}"/></clipPath></defs>
      <g transform="translate({left} {top})" clip-path="url(#{display}-screen)">
        {image(ASSETS / capture, 0, 0, sw, sh)}
      </g>
      {image(ASSETS / f'iphone-duo-{display}-landscape.png', 0, 0, fw, fh)}
    </g>'''


svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#f1f4f8"/>
  <path d="M 770 0 H 1200 V 630 H 580 Z" fill="#dfe8ed"/>
  <path d="M 1090 0 H 1200 V 210 L 820 630 H 650 Z" fill="#c6e2e7"/>
  <defs><clipPath id="app-icon"><rect x="56" y="46" width="50" height="50" rx="11"/></clipPath></defs>
  <g clip-path="url(#app-icon)">{image(ROOT / 'public/press/assets/dee-app-icon.png', 56, 46, 50, 50)}</g>
  {text('DEE', 119, 88, 48)}
  {text('MUAY THAI / IPHONE DUO', 56, 157, 16, '#04778c', 'barlow-semibold', 1.6)}
  {text('YOUR CORNER.', 53, 268, 100)}
  {text('BESIDE', 53, 365, 100, '#04778c')}
  {text('THE MAT.', 53, 462, 100, '#04778c')}
  {device('inner', 'home-opened.png', 595, 67, 550)}
  {device('outer', 'round-timer.jpg', 690, 282, 445)}
  {text('Your plan. Your rounds. Your rhythm.', 56, 517, 23, '#4d5b6a', 'barlow-regular')}
  {text('dee.training', 56, 580, 23, '#0d1219', 'barlow-semibold')}
  {text('APP PREVIEW', 238, 578, 14, '#4d5b6a', 'barlow-semibold', 1.3)}
</svg>'''

with tempfile.NamedTemporaryFile(suffix='.svg') as source:
    source.write(svg.encode())
    source.flush()
    subprocess.run(['node', '--input-type=module', '-e',
        "import sharp from 'sharp'; await sharp(process.argv[1]).png().toFile(process.argv[2]);",
        source.name, str(ASSETS / 'social-preview-v2.png')], cwd=ROOT, check=True)
print('Wrote social-preview-v2.png (1200 × 630)')
