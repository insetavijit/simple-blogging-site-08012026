# Bootstrap + 11ty Starter

A modern, fast, and beautiful website starter template built with **Eleventy (11ty)** and **Bootstrap 5**.

## 🚀 Features

- ⚡ **Lightning Fast** - Eleventy generates pure HTML with zero client-side JS by default
- 🎨 **Beautiful Design** - Modern Bootstrap 5 with custom Sass theming
- 📱 **Fully Responsive** - Mobile-first approach with Bootstrap's grid system
- 🔧 **Highly Customizable** - Sass variables for easy brand customization
- 🔍 **SEO Optimized** - Clean HTML structure with meta tags
- 🌙 **Modern Stack** - Nunjucks templating, Sass preprocessing, ES6+ JavaScript

## 📁 Project Structure

```
bootstoneX1/
├── _data/                    # Global data files
│   └── site.json             # Site configuration
├── _includes/                # Templates and partials
│   ├── layouts/
│   │   └── base.njk          # Base layout
│   └── partials/
│       ├── header.njk        # Navigation header
│       └── footer.njk        # Site footer
├── src/                      # Source files
│   ├── assets/
│   │   ├── scss/
│   │   │   ├── main.scss     # Main SCSS entry
│   │   │   └── _custom.scss  # Custom styles
│   │   ├── js/
│   │   │   └── main.js       # Main JavaScript
│   │   └── images/           # Image assets
│   ├── index.njk             # Homepage
│   ├── about.njk             # About page
│   └── contact.njk           # Contact page
├── .eleventy.js              # Eleventy configuration
├── package.json              # Project dependencies
└── README.md                 # This file
```

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```

3. **Open in browser:**
   Navigate to `http://localhost:8080`

### Build for Production

```bash
npm run build
```

The built site will be in the `_site` directory.

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start development server with live reload |
| `npm run build` | Build for production |
| `npm run clean` | Remove the `_site` directory |
| `npm run sass:build` | Compile Sass to CSS |
| `npm run sass:watch` | Watch Sass files for changes |

## 🎨 Customization

### Colors

Edit the color variables in `src/assets/scss/main.scss`:

```scss
$primary: #6366f1;    // Indigo
$secondary: #64748b;  // Slate
$success: #22c55e;    // Green
// ... more colors
```

### Typography

Update the font family in the same file:

```scss
$font-family-sans-serif: 'Inter', system-ui, sans-serif;
```

### Site Data

Modify `_data/site.json` to update:
- Site title and description
- Navigation links
- Social media URLs

## 📚 Resources

- [Eleventy Documentation](https://www.11ty.dev/docs/)
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/)
- [Nunjucks Documentation](https://mozilla.github.io/nunjucks/)
- [Sass Documentation](https://sass-lang.com/documentation)

## 📄 License

MIT License - feel free to use this template for your projects!

---

Built with ❤️ using [Eleventy](https://www.11ty.dev/) and [Bootstrap](https://getbootstrap.com/)
