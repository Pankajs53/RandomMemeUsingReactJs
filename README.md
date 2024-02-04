Random Gifs Project
This React project fetches random GIFs from the Giphy API and allows users to generate random GIFs or search for GIFs based on tags.

Features
Random GIFs: The Random component displays a randomly generated GIF each time the page is loaded or the "Generate" button is clicked.

Tagged GIFs: The Tag component lets users input a tag, and it fetches a GIF related to that tag from the Giphy API.

How to Use
Random GIFs:

The Random component is displayed by default.
It fetches a random GIF using the Giphy API and updates the display.
Tagged GIFs:

Switch to the Tag component.
Input a tag into the text field and click "Generate" to fetch a GIF related to that tag.
Project Structure
Components:

Random: Displays a randomly generated GIF.
Tag: Allows users to search for GIFs based on tags.
Spinner: A loading spinner component.
Custom Hook:

useGif: Handles the logic for fetching GIFs from the Giphy API.
Styling:

Styles are managed using Tailwind CSS and can be made more better.
