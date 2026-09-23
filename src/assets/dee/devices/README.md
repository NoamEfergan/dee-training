# Official Apple device frame

Source: https://developer.apple.com/design/resources/
Package: https://devimages-cdn.apple.com/design/resources/download/Bezel-iPhone-17.dmg
Asset: PNG/iPhone 17 Pro Max/iPhone 17 Pro Max - Deep Blue - Portrait.png

Downloaded and Apple Design Resources license accepted with the owner’s explicit approval on 2026-09-16. The original PNG is unchanged. See the included license and https://developer.apple.com/app-store/marketing/guidelines/.

The 1470 × 3000 frame has a 1320 × 2868 screen opening at x=75, y=66. The campaign’s original screenshots match that opening exactly. CSS positions the screenshot behind the frame, preserves its aspect ratio, and clips only the screen corners. Keep devices upright and unobscured, without added device shadows.

## Android / Google Pixel 8a

`pixel-8a-back.webp` and `pixel-8a-mask.webp` are unmodified device artwork from the installed Android Studio `plugins/android/resources/device-art-resources/pixel_8a` bundle. Its layout defines a 1198 × 2539 device and 1080 × 2400 display at (57, 57). The back artwork already includes the glass edge, camera and screen corners: render it ABOVE the screenshot. The emulator mask is retained as source reference only; combining it with the full frame produces a visible double edge. See https://developer.android.com/distribute/marketing-tools/device-art-generator for Android device artwork in websites and promotional materials.

`../paid/android-pixel-8a-home.png` is an unchanged 540 × 1200 owned Pixel 8a capture from the 2026-09-15 Android device verification, `docs/android-parity/device-pixel8a-2026-09-15-p8a-home.png` in the Dee Android worktree. It shows seeded training data from the app (revision 9c4cb52c), not an iOS screenshot reskinned as Android. Both capture and device display have the same 9:20 ratio.

## Apple Watch Series 11

`apple-watch-series-11-42mm-jet-black-sport-band.png` is unchanged Apple artwork from [Apple Design Resources](https://developer.apple.com/design/resources/), package `Bezel-Apple-Watch-Series-11-2025.dmg`, asset `PNG/Sport Band/Apple Watch S11 - 42mm - Aluminum Jet Black + Sport Band Black.png`. Noam explicitly approved its license use on 23 September 2026. The package contains the same Apple Design Resources license already recorded above (matching SHA-256).

The 520 × 800 frame has a 374 × 446 transparent screen opening at x=73, y=177. Dee's original Watch simulator captures are 368 × 448; the press page scales them into that opening and places the unchanged artwork above. The original captures remain available as direct PNG downloads.
