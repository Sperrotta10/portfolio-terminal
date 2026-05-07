---
name: Terminal Essence
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#bdc9c6'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#879391'
  outline-variant: '#3d4947'
  surface-tint: '#72d7cb'
  primary: '#b5fff4'
  on-primary: '#003732'
  primary-container: '#81e6d9'
  on-primary-container: '#00675f'
  inverse-primary: '#006a62'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b4'
  tertiary: '#ffefdc'
  on-tertiary: '#432c00'
  tertiary-container: '#ffcd7e'
  on-tertiary-container: '#795510'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#8ff4e7'
  primary-fixed-dim: '#72d7cb'
  on-primary-fixed: '#00201d'
  on-primary-fixed-variant: '#005049'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#ffdead'
  tertiary-fixed-dim: '#efbf71'
  on-tertiary-fixed: '#281900'
  on-tertiary-fixed-variant: '#604100'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-lg:
    fontFamily: JetBrains Mono, monospace
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: JetBrains Mono, monospace
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: JetBrains Mono, monospace
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: JetBrains Mono, monospace
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  code:
    fontFamily: Fira Code, monospace
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.6'
  label:
    fontFamily: JetBrains Mono, monospace
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
spacing:
  base: 4px
  unit-1: 4px
  unit-2: 8px
  unit-4: 16px
  unit-8: 32px
  gutter: 24px
  margin-page: 48px
  max-width: 1200px
---

## Brand & Style

This design system is built for developers, technical writers, and power users who find comfort in the precision of a command-line interface. The personality is utilitarian, focused, and intellectually rigorous. It avoids the "clutter" of traditional web design in favor of a syntax-highlighted aesthetic.

The visual style is a hybrid of **Minimalism** and **Brutalism**. It utilizes heavy whitespace to maintain legibility while employing raw, monospaced typography and sharp structural lines to evoke a code editor environment. The emotional response is one of "flow state"—calm, productive, and distraction-free.

## Colors

The palette is strictly limited to maintain the terminal aesthetic. 
- **Base:** The background uses a deep, non-pure black (#101010) to reduce eye strain while maintaining high contrast.
- **Accent:** Mint Cyan (#81e6d9) is used exclusively for "active" states, primary actions, and structural logic (like git branches or prompt symbols).
- **Surfaces:** Secondary containers use a slightly elevated gray (#1a1a1a) to distinguish code blocks or sidebars from the main canvas.
- **Status:** Standard terminal colors (Red for errors, Amber for warnings) should be desaturated to match the Mint Cyan's tonal value.

## Typography

This design system uses monospaced typefaces exclusively to reinforce the technical nature of the interface. JetBrains Mono is preferred for its increased x-height and exceptional readability in long-form text. 

For technical data and actual code snippets, Fira Code should be used to leverage programming ligatures (e.g., `=>`, `!=`). All headings are set in sentence case to maintain a modern, understated feel. Avoid bolding body text; use the Mint Cyan accent color for emphasis instead.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy. Content is centered within a 1200px container to prevent line lengths from becoming illegible on ultra-wide monitors. 

Spacing is strictly mathematical, based on a 4px baseline grid. Components and text blocks should align to these increments to mirror the rigid structure of a terminal emulator. Use generous inner padding (24px+) within containers to prevent the dense monospaced type from feeling cramped.

## Elevation & Depth

Depth is conveyed through **Low-contrast outlines** rather than shadows. 
- **Level 0 (Background):** #101010.
- **Level 1 (Cards/Sidebar):** #1a1a1a with a 1px solid border of #2a2a2a.
- **Active State:** Any focused or "top-level" window gains a subtle 1px border of the Mint Cyan accent (#81e6d9) at 50% opacity.

Avoid all drop shadows. To simulate overlapping windows (e.g., modals), use a 100% opaque background with a high-contrast border. This maintains the "flat-file" aesthetic of a code editor.

## Shapes

The design system utilizes **Sharp** (0px) corners for almost all structural elements, including buttons, input fields, and code blocks. This reinforces the "brutalist terminal" aesthetic. 

The only exception to this rule is the "Mac-style" window controls (Close, Minimize, Maximize), which remain perfectly circular to provide a familiar visual metaphor for application windows.

## Components

### Window Frames
The primary container for content. Features a top bar (#1a1a1a) with three circular window controls on the left. The window title is centered in the top bar using the `label` type style.

### Buttons
Terminal-style buttons are rectangular with no rounded corners. 
- **Primary:** Solid #81e6d9 background with #101010 text.
- **Ghost:** 1px border of #e0e0e0 with #e0e0e0 text.
- **Hover:** All buttons gain a "block cursor" effect—an underscore or trailing vertical bar that blinks.

### Input Fields
Inputs are preceded by a terminal prompt indicator (`$`) in Mint Cyan. The field itself is a simple bottom border or a subtle box. The cursor is a solid block (`█`) in the accent color.

### Code Blocks
Containers with #1a1a1a background and a subtle Mint Cyan left-border (2px). Syntax highlighting should use a limited palette: Cyan for functions/logic, Gray for comments, and White for variables.

### Git Branch Visualizer
Simulated git branches use thin 1px lines in Mint Cyan to connect list items or represent version history in the UI, reinforcing the developer-centric narrative.