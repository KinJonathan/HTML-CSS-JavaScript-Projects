# Random Password Generator

A small client-side web app that generates secure, random passwords. Provides options to include letters, numbers and symbols and allows copying the generated password to the clipboard.

## Features

- Generate a random password with configurable length and character sets
- Copy password to clipboard with one click
- Simple, dependency-free HTML/CSS/JavaScript implementation

## Usage

1. Open `index.html` in a browser (double-click or serve the folder).
2. Click the Generate button to create a password.
3. Click the Copy button (or the generated password) to copy it to the clipboard.

If you prefer to serve the project locally with a simple HTTP server, run one of these commands from the project folder:

```bash
# Python 3
python -m http.server 8000

# Node (http-server package)
# npm i -g http-server
http-server -p 8000
```

Then open http://localhost:8000 in your browser.

## Project structure

- `index.html` — the app HTML
- `styles.css` — styles for the UI
- `index.js` — password generation and UI logic
- `README.md` — this file

## Notes

This project is frontend-only and requires no build step. Ensure JavaScript is enabled in the browser. Variable names in `index.js` such as `inputE1`, `alertContainerE1` and helper functions like `copyPassword()` are used for generating and copying passwords — modify them for clarity if needed.

## License

Kiniale Jonah KJ Interbational
