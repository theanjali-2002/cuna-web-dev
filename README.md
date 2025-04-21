# Carleton Natyam Website

This project is a static website for Carleton Natyam, a student club dedicated to the classical Indian dance form Bharatanatyam. The website showcases the club's mission, events, team members, and provides a way for visitors to join or connect with the club.

## Project Structure

- `index.html`: The main HTML file containing the structure of the website.
- `styles.css`: The CSS file with styling rules for the website.
- `script.js`: The JavaScript file handling UI interactions, animations, and dynamic content loading.
- `content.json`: A JSON file acting as a simple CMS to store the website's content such as hero section, about us, events, and team.

## Features

- Responsive navigation menu with mobile toggle.
- Membership application.
- Dynamic content loading from `content.json` to populate various sections of the website.
- Animated jasmine flower effect in the background.
- Active navigation highlighting based on scroll position.
- Sections include Home, About Us, Events, Team, Join, and Footer with social links.

## Jasmine Flower Animation 🌸

One of the key highlights of this website is the animated jasmine flower stream floating gracefully across the screen. Inspired by traditional South Asian Classcial Dance aesthetics, the animation is built entirely using:

- SVG paths to draw the jasmine flowers with a soft glow.
- JavaScript animation logic that simulates a smooth flowing S-curve across the screen.
- CSS effects for floating movement, varying opacity, and random sizing to make each flower unique.

The animation is created dynamically using JavaScript and rendered in a fixed container with absolute positioning, allowing the flowers to drift down in a gentle, organic path — symbolizing elegance and fluidity in Bharatanatyam dance.

This effect was custom-coded using JavaScript and SVG, and styled with CSS animations. Each flower follows a curved S-path from top to bottom using trigonometric functions like `sin()` to simulate wave-like motion. The animation includes:

- Custom SVG flower design
- Randomized size, rotation, and opacity for natural variation
- Smooth animation using `requestAnimationFrame`

Mathematics concepts used:

- Sine waves (Math.sin) for curved motion
- Responsive positioning based on screen dimensions
- Incremental progress for continuous animation
- Gaussian blur filter to simulate glowing petals

💡 This animation was designed to reflect the graceful and dynamic essence of Bharatanatyam while giving the site a lively and soft ambiance.

## Setup and Usage

1. Clone or download the repository.

2. To properly load the JSON content, serve the project using a local web server. You can use:

   - **VSCode Live Server extension**: Right-click `index.html` and select "Open with Live Server".
   - **Python HTTP server** (if Python is installed):

     ```bash
     cd path/to/cuna-web-dev
     python -m http.server 8000
     ```

     Then open `http://localhost:8000` in your browser.

3. Open the website in your browser via the local server URL.

## Development

- The website content is managed in `content.json`. Update this file to change text, images, links, and other content without modifying HTML.

- The `script.js` file dynamically loads and renders content from `content.json` into the HTML structure.

- Styles are defined in `styles.css` using Tailwind CSS utility classes and custom styles.

## Dependencies

- The project uses Tailwind CSS for styling (assumed to be included or built into `styles.css`).

- No backend or build tools are required; this is a static website.

## License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.

## Contact

For questions or contributions, please contact the Carleton Natyam club at [cunatyam@gmail.com](mailto:cunatyam@gmail.com) or reach out to the developer at [theanjali27@gmail.com](mailto:theanjali27@gmail.com)
