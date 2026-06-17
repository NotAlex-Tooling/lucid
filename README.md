<div align="center">

<img src="lucid-logo.png" alt="Lucid" width="120" height="120" />

# Lucid

Browser-based image enhancement, analysis, and forensics — everything runs locally in your browser, nothing is ever uploaded.

</div>

---

## What it does

Lucid is a client-side image intelligence tool for investigators, OSINT analysts, and anyone who needs to examine images in detail. All processing happens on your machine.

- **Enhancement** — Brightness, contrast, saturation, gamma, color balance, an interactive curves editor, unsharp masking, and adaptive auto presets that compute their values from the image and write them into the sliders.
- **Forensic filters** — CLAHE, auto white balance, dehaze, edge detection, emboss, histogram equalization, grayscale, invert, and denoise.
- **Forensic analysis** — Error Level Analysis (ELA), JPEG quantization-table fingerprinting with estimated quality, and embedded EXIF thumbnail comparison.
- **Perspective correction** — Click the four corners of a document, screen, or plate shot at an angle and warp it flat.
- **ML super-resolution** — In-browser neural upscaling via ONNX Runtime Web, with a built-in model, optional downloadable models, or your own `.onnx`. A dedicated text & plates mode adds a denoise → upscale → back-projection → sharpening pipeline.
- **Annotation** — Shapes, arrows, text labels, blur regions, and pixel measurement.
- **Metadata & OSINT** — Full EXIF/IPTC/ICC/XMP extraction, SHA-256 hashing, GPS mapping, OCR (whole image or a selected region), and reverse image search via Google Lens, Yandex, TinEye, and Bing.
- **Case report** — One click exports a self-contained HTML report with hashes, images, the full audit trail, settings, and metadata.
- **Offline / PWA** — After one online session, Lucid works with the network unplugged.

---

## How to use

Load an image by file upload, clipboard paste (`Ctrl+V`), a URL, or by dragging it onto the canvas. The main canvas shows your image with real-time enhancements; use the tabbed sidebar for enhancement, transform, magnifier, annotation, OSINT, and metadata tools.

### Keyboard shortcuts

| Shortcut | Action |
|----------|--------|
| `A` | Toggle annotation visibility |
| `M` | Toggle magnifier |
| `P` | Activate color picker |
| `R` / `C` / `B` / `T` / `L` / `U` | Select tool: Rect / Circle / Blur / Text / Line / Measure |
| `Esc` | Deselect tool / cancel perspective correction |
| `Space + Drag` | Pan when zoomed |
| `\` (hold) | Compare with the unmodified original |
| `Ctrl+Z` / `Ctrl+Shift+Z` | Undo / Redo |
| `Ctrl+V` | Paste image from clipboard |
| `Scroll` | Zoom toward cursor |

> On macOS, use `Cmd` instead of `Ctrl`.

---

## Notes

- Works in any modern browser with ES6 module support (Chrome, Firefox, Safari, Edge).
- A minimum screen width of 1024px is recommended.
- Supported formats: JPG, PNG, GIF, BMP, WebP, TIFF, HEIC/HEIF.
- All image data stays on your machine and is never sent to a server.
