# ISolve

ISolve is the real website for a web design side hustle created by two friends. It's a single-page React app with animated sections, an embedded portfolio, and a contact form powered by Web3Forms.

## Our Projects

Explore a few of the responsive websites built with React, Tailwind CSS, and modern web tools:

- [HK Cutz](https://hkcutz.info/)
- [LEDAUTO](https://ledauto.info/)
- [IllumiYYC](https://illumiyyc.com/)

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

MIT License

Copyright (c) 2025 Taha Malik & Harris Jan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

