# Griffel CSS Extraction Bundle Size Comparison

This repo is used to compare Fluent UI bundle size with and without Griffel CSS extraction.

## Setup

1. Clone this repo
2. `yarn` to install deps.

## Usage

### Baseline

The baseline uses the default Fluent configuration that uses [Griffel ahead-of-time compilation](https://griffel.js.org/react/ahead-of-time-compilation/introduction).

```shell
# Bundle everything up
yarn bundle

# Get sizes
yarn size
```

### CSS Extraction

Extraction configures [Griffel's CSS extraction](https://griffel.js.org/react/css-extraction/introduction) feature to remove all CSS from the Javascript bundles.

```shell
# Bundle everything up
yarn bundle:extract

# Get sizes
yarn size:extract
```
