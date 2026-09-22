# Duo page assets

- `home-opened.png`: unmodified revised home capture, 22 September 2026.
- `plan-opened.png`: unmodified Tweak your plan capture, 22 September 2026.
- Both captures are 2853 × 2007, from Dee in the iOS 27.1 simulator with sample data, using Xcode 27.1.
- `iphone-duo-inner-landscape.png`: unmodified Apple Design Resources / iPhone Duo / Night Sky / Inner Open Landscape PNG, 3093 × 2247. Licence accepted by the owner for Dee’s mockup.
- Inner display opening: x=120, y=120, width=2853, height=2007. `inner-display-mask.svg` follows the alpha aperture with 8 source pixels beneath the opaque bezel. The mask covers the entire display opening and does not reach the exterior transparent region.
- Outer-frame dimensions and mask are shared with the existing still and video on the page.

`build-duo-social.py` renders the 1200 × 630 social card from those assets and the existing Barlow fonts. Python dependencies: fonttools and brotli. Rendering uses the site’s existing sharp dependency. Text is outlined to keep the output independent of installed system fonts. Re-run it when changing the card; give a changed card a new filename in the page metadata to avoid reusing an old image cache.

The flat official frames do not depict a physical tent angle. Simulator captures do not establish physical-device posture or display-handoff behaviour.
