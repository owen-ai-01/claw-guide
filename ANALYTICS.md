# Analytics Setup for Claw Guide

This document outlines how to add analytics to your Claw Guide website.

## Quick Options

### Option 1: Plausible (Recommended)
1. Sign up at [plausible.io](https://plausible.io) and get your domain setup
2. Add the following script inside the `<head>` section of `server.js` (after the styles):

```html
<script defer data-domain="your-domain.trycloudflare.com" src="https://plausible.io/js/script.js"></script>
```

3. Set environment variable (optional):
```bash
export ANALYTICS_PROVIDER=plausible
export PLAUSIBLE_DOMAIN=your-domain.trycloudflare.com
```

### Option 2: Google Analytics (GA4)
1. Create a GA4 property in Google Analytics
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Add the following script inside the `<head>` section:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

4. Set environment variables:
```bash
export ANALYTICS_PROVIDER=gtag
export GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## Current Implementation

The website includes an analytics placeholder in the HTML head. To enable analytics:

1. **Locate the placeholder** in `server.js` (around line 594):
   ```html
   <!-- Analytics placeholder: insert Plausible/GTag script here -->
   ```

2. **Replace the placeholder** with your chosen analytics script.

3. **Optional**: Modify the render function to conditionally include scripts based on environment variables (example below).

## Environment-Based Integration (Advanced)

To make analytics configurable via environment variables, modify the `render()` function in `server.js`:

```javascript
// Add at the beginning of the render function
const analyticsScript = process.env.ANALYTICS_PROVIDER === 'plausible' && process.env.PLAUSIBLE_DOMAIN
  ? `<script defer data-domain="${process.env.PLAUSIBLE_DOMAIN}" src="https://plausible.io/js/script.js"></script>`
  : process.env.ANALYTICS_PROVIDER === 'gtag' && process.env.GA_MEASUREMENT_ID
  ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}"></script>
     <script>
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', '${process.env.GA_MEASUREMENT_ID}');
     </script>`
  : '';

// Then insert ${analyticsScript} in the head section after the placeholder
```

## Local Development

For local development, analytics can be disabled by not setting the environment variables or by setting:

```bash
export ANALYTICS_PROVIDER=none
```

## Next Steps

- [ ] Choose an analytics provider
- [ ] Add your script to `server.js`
- [ ] Set environment variables in your deployment
- [ ] Verify data is being collected
- [ ] Review key metrics: page views, user engagement, conversion paths