# Movie/Show Search and Embed

This project is a web application that lets users search for movies or TV shows, view details, and watch content directly using embedded links from various sources. It was created by ChatGPT and is currently live on the following URLs:

- [chromecrash.github.io/gptmov](https://chromecrash.github.io/gptmov)
- [gptmov.pages.dev](https://gptmov.pages.dev)
- [gptmov.netlify.app](https://gptmov.netlify.app/)

## Features

- **Movie/TV Show Search**: Users can search for movies or TV shows by entering a query, with dynamic suggestions displayed as they type.
- **Watch Movies and Shows**: Users can watch content directly through embedded iframes using multiple streaming sources.
- **Embed Options**: Users can select from multiple sources to stream or embed movies and shows.
- **TV Show Episode/Season Support**: For TV shows, users can specify season and episode details and choose between individual episodes or full seasons, depending on the embed source.
- **Adblocker Reminder**: A friendly reminder encourages users to use an adblocker to avoid unwanted ads or redirects.

## Project Structure

The main file, `index.html`, includes:
- **HTML Markup**: Defines the search form, embed settings, and display elements.
- **CSS Styles**: Provides a dark theme layout with a clean, centered interface.
- **JavaScript Logic**: Handles data fetching from the OMDb API, displaying suggestions, embedding content, and managing settings for TV shows and embed sources.

## Usage

### Requirements

- **OMDb API Key**: Obtain an API key from [OMDb](https://www.omdbapi.com/) and replace the placeholder in the script (`const apiKey = 'your_api_key_here';`) with your actual key.

### Instructions

1. **Run Locally**:
   - Open `index.html` in a browser to launch the app.

2. **Search for Movies/TV Shows**:
   - Start typing in the search box; suggestions will appear automatically.
   - Select the desired result to view embedding options and start watching.

3. **Select Media Type**:
   - Use the dropdown to choose "Movie" or "TV Show."
   - For TV shows, fields for season and episode will appear.

4. **Choose Embed Source**:
   - Different sources support different types of content, and options will adjust automatically based on the selection.

5. **Embed and Watch**:
   - Once a movie or show is selected, an iframe will load, allowing you to watch the content directly.

### Embed Sources Supported

- Movies and TV Shows:
  - Embed.su
  - SuperEmbed.stream
  - 2Embed.cc
  - VidLink.pro
  - VidSrc.me
  - Smashy.stream

- TV Shows Only:
  - VidSrc.me
  - Smashy.stream
  - 2Embed.cc (supports individual episodes or full seasons)

## Customization

- **OMDb API Key**: Replace `const apiKey = 'your_api_key_here';` in the JavaScript with your OMDb API key.
- **Styling**: Adjust the CSS in the `<style>` section to personalize the design.

## Creator

This project was created by ChatGPT.

## License

This project is open-source and free to use.
