# ISolve

ISolve is the real website for a web design side hustle created by two friends. It's a single-page React app with animated sections, an embedded portfolio, and a contact form powered by Web3Forms.

## Features

- **React + Bootstrap** – the app is built with [Create React App](https://create-react-app.dev/) and uses React Bootstrap components.
- **Animated Sections** – scrolling reveals hero, offerings, reasons to choose ISolve, portfolio examples, and a contact form.
- **Portfolio Previews** – the "Our Work" section embeds external websites in iframes so visitors can preview previous projects.
- **Contact Form** – sends submissions through the [Web3Forms](https://web3forms.com/) API.

## Project Structure

```
public/          Static assets and HTML template
src/
  assets/        Images and media files
  components/    React components for each section of the page
  pages/         Page-level React components (currently only `home.jsx`)
  styles/        CSS for each section and global styles
  tests/         Sample Jest/React Testing Library tests
```

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Run the development server**
   ```bash
   npm start
   ```
   The site will be available at [http://localhost:3000](http://localhost:3000).
3. **Run tests** (optional)
   ```bash
   npm test
   ```
4. **Build for production**
   ```bash
   npm run build
   ```
   The optimized build will be in the `build` directory.

## License

This project is provided for demonstration purposes and has no specific license.

