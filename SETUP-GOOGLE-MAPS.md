# Google Maps Setup Instructions

The website currently uses a Google Maps iframe embed which works without any API key. This is the simplest solution for GitHub Pages deployment.

## Current Setup (Iframe - No API Key Needed)
The map is embedded using an iframe and works immediately without any configuration.

## Alternative: JavaScript API (Requires API Key)

If you want more customization and interactive features, you can use the Google Maps JavaScript API:

### Step 1: Get a Free API Key
1. Go to [Google Cloud Console](https://console.cloud.google.com/google/maps-apis)
2. Create a new project or select an existing one
3. Enable the "Maps JavaScript API"
4. Go to "Credentials" and create an API key
5. Restrict the API key to your domain for security

### Step 2: Update the Website
1. Open `index.html`
2. Find the commented script tag at the bottom:
   \`\`\`html
   <!-- <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"></script> -->
   \`\`\`
3. Uncomment it and replace `YOUR_API_KEY` with your actual API key
4. Remove or comment out the iframe embed in the contact section
5. Add a div with `id="map"` and `class="map-container"` in its place

### Step 3: Enable JavaScript Functions
1. Open `script.js`
2. Uncomment the `initMap` function at the bottom of the file
3. Customize the marker position if needed

### Update the Exact Location
To show your exact office location instead of Kisii city center:

1. Go to [Google Maps](https://www.google.com/maps)
2. Find your exact office location
3. Right-click on the location and select "What's here?"
4. Copy the coordinates (lat, lng)
5. Update the `kisiiLocation` variable in the `initMap` function:
   \`\`\`javascript
   const kisiiLocation = { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE }
   \`\`\`

### For Iframe Embed (Current Method)
To customize the iframe location:
1. Go to [Google Maps](https://www.google.com/maps)
2. Find your office location
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the iframe in `index.html` with your custom one

## Recommendation
For GitHub Pages, stick with the iframe embed as it requires no API key and works immediately.
