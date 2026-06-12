---
description: >-
  How to style your form in the Themes tab — apply a theme, adjust colors and
  fonts, design the header, and set a background, all without code.
---

# Styling your form

Style your form to match your brand using the **Themes** tab in the form editor. You change colors, fonts, sizing, corner radius, shadows, and more — without writing any code.

This guide walks through the theming options, from applying a ready-made theme to fine-tuning the header and background. For a tour of the whole editor, see [Form editor: UI overview](ui-overview.md).

## About form themes

A theme is a collection of visual settings that apply across your whole form — colors, fonts, spacing, and shape. The Themes tab gives you a no-code interface to adjust those settings, start from a preset, and save the result.

<div data-with-frame="true" align="left"><img src="../../assets/forms-theme/eud-themes-tab.png" alt="The Themes tab open in the form editor, showing the theme settings panel."></div>

You can export a custom theme as a JSON file and import it on another form to reuse the same style. This keeps a consistent look across every form you build.

## Choose and apply a theme

The fastest way to restyle a form is to pick a different theme.

Open the **Theme** dropdown under the **General** category and select one of the presets. Each preset comes in several variations, including compact and dark versions, so you have a wide range of starting points.

<div data-with-frame="true" align="left"><img src="../../assets/forms-theme/eud-theme-list.png" alt="The Theme dropdown under the General category listing the available theme presets."></div>

Applying a theme is a starting point, not a commitment — you can adjust any individual setting afterwards.

## Enable dark mode

Dark mode suits low-light viewing and pairs well with darker brand palettes.

Set the **Light / Dark** toggle to **Dark** to switch the form to a dark color scheme.

<div data-with-frame="true" align="left"><img src="../../assets/forms-theme/eud-dark-theme-mode.png" alt="The Light and Dark toggle switched to Dark."></div>

## Show questions without boxes

By default, each question sits in its own box. You can remove these boxes for a lighter, more open look.

Under the **General** category, set **Question appearance** to **Without Panels**. The boxes around individual questions disappear.

<div data-with-frame="true" align="left"><img src="../../assets/forms-theme/eud-survey-with-question-boxes.png" alt="Form questions each shown inside their own box."></div>

<div data-with-frame="true" align="left"><img src="../../assets/forms-theme/eud-question-without-panels-boxes.png" alt="The same form questions shown without individual boxes."></div>

Panels (groups of questions) keep their own borders, so grouped questions stay visually contained even when individual boxes are off.

<div data-with-frame="true" align="left"><img src="../../assets/forms-theme/eud-questions-within-panel.png" alt="Questions grouped inside a panel that keeps its border."></div>

## Style the form header

The header is the area at the top of the form that holds your logo, title, and description. You can style each part.

### Add a logo

To add your logo to the header:

1. Switch to the **Designer** tab.
2. Open **Logo** in the **Survey Header** category.
3. Paste an image link in the **Survey logo** field, or click the folder icon to upload a file.
4. Optionally set **Logo width** and **Logo height** (in CSS units) to resize it.
5. Choose a **Logo fit** option: None, Contain, Cover, or Fill.

<div data-with-frame="true" align="left"><img src="../../assets/forms-theme/eud-add-logo.png" alt="The logo upload field and sizing options in the Survey Header category."></div>

To position the logo, switch to the **Themes** tab, open the **Header** category, and set the **Logo alignment** property.

<div data-with-frame="true" align="left"><img src="../../assets/forms-theme/eud-logo-alignment.png" alt="The Logo alignment property in the Header category."></div>

### Title and description

The title and description sit alongside the logo in the header. The following settings live under the **Header** category in the **Themes** tab.

#### Adjust text width

Use the **Text width** property to set how much of the header area the title and description occupy.

<div data-with-frame="true" align="left"><img src="../../assets/forms-theme/eud-header-area-text-width.png" alt="The Text width property that controls the header text area."></div>

#### Customize fonts

Find the **Survey title font** and **Survey description font** sections. For each, you can set:

* **Font family** — choose from the dropdown.
* **Font weight** — Regular, Semi-bold, Bold, or Heavy.
* **Color** — pick a color or enter an RGB, HEX, or HSL value.
* **Opacity** — set the percentage next to the color.
* **Font size** — set the size in pixels.

<div data-with-frame="true" align="left"><img src="../../assets/forms-theme/eud-survey-title-desctiption-font.png" alt="Font family, weight, color, opacity, and size controls for the title and description."></div>

#### Align text

Use the **Survey title alignment** and **Survey description alignment** properties to set the horizontal and vertical position of each.

<div data-with-frame="true" align="left"><img src="../../assets/forms-theme/eud-survey-title-description-alignment.png" alt="The alignment controls for the survey title and description."></div>

### Customize the header area

Switch the **View** toggle to **Advanced** to reveal the full set of header-area settings.

* **Height** — set the header height on desktop.
* **Height on smartphones** — set the header height on mobile.
* **Background color** — choose None, Accent, or Custom (with a color picker).
* **Background image** — paste a link or upload a file, then set the display style (Cover, Stretch, Contain, or Tile), the opacity, and whether the header content overlaps the image.

<div data-with-frame="true" align="left"><img src="../../assets/forms-theme/eud-header-height.png" alt="The Height and Height on smartphones properties for the header."></div>

<div data-with-frame="true" align="left"><img src="../../assets/forms-theme/eud-header-area-background-color.png" alt="The header Background color options: None, Accent, and Custom."></div>

<div data-with-frame="true" align="left"><img src="../../assets/forms-theme/eud-header-area-background-image.png" alt="The header Background image settings with display, opacity, and overlap controls."></div>

### Adjust the header content area

With the **View** toggle set to **Advanced**, use the **Content area width** property to choose whether the header content matches the survey width or the container width.

<div data-with-frame="true" align="left"><img src="../../assets/forms-theme/eud-content-area-width.png" alt="The Content area width property in the advanced header settings."></div>

## Background options

You can style the background behind the whole form, not just the header.

Under the **Background** category:

* **Background color** — pick a color, or enter an RGB, HEX, or HSL value.
* **Background image** — paste a link or click the folder icon to upload a file.
* **Image display** — choose Auto, Contain, or Cover.
* **Image position** — toggle between Fixed and Scroll.
* **Opacity** — set how transparent the background appears.

<div data-with-frame="true" align="left"><img src="../../assets/forms-theme/eud-background-image.png" alt="The form Background settings: color, image, display style, position, and opacity."></div>

## What to do next

For a tour of the other editor tabs, see [Form editor: UI overview](ui-overview.md).

To style a form embedded on your website with your own CSS, see **Style the form** in [Embed forms on your website](publish-a-form.md).
