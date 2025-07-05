# 🏠 ApanaGhr - Smart Home Landing Page

**ApanaGhr** is a sleek, modern, and fully responsive smart home landing page built using Next.js, TypeScript, and Tailwind CSS. It includes elegant animations, a dark/light mode toggle, a custom welcome screen, and reusable UI components for product-focused marketing websites.

---

## 🚀 Tech Stack

| Layer        | Technology                                |
|--------------|--------------------------------------------|
| Framework    | [Next.js 13](https://nextjs.org/)          |
| Language     | TypeScript, JavaScript                     |
| Styling      | Tailwind CSS, PostCSS, Autoprefixer        |
| UI/UX        | Framer Motion, Lucide React, React Icons   |
| Deployment   | Ready for platforms like [Vercel](https://vercel.com/) |

---

## 📁 Project Structure

```
apanaghr-landing/
├── components/              # Reusable UI components (Navbar, Footer, etc.)
├── pages/                   # Routes including 404.tsx and dynamic pages
├── public/                  # Static files like images (/3.png)
├── styles/                  # Global styles (globals.css)
├── tsconfig.json            # TypeScript config with path aliases
├── tailwind.config.js       # Tailwind CSS scanning configuration
├── postcss.config.js        # PostCSS + Autoprefixer setup
├── package.json             # Scripts and dependencies
├── _app.tsx                 # App entry point with welcome screen logic
└── README.md                # You’re here!
```

---

## ✨ Features

- 🌓 Dark/Light Mode toggle with Lucide icons
- 💬 Custom animated welcome modal (auto-dismiss after 4.5 seconds)
- 📬 Newsletter Signup Section
- 🧠 Testimonial Showcase Section
- ⚠️ Custom 404 Error Page
- 🌀 Smooth UI transitions with Framer Motion
- ✅ Fully responsive with Tailwind CSS

---

## 📦 Dependencies

Key packages used:

- `next@13.4.12`
- `react@18.2.0`, `react-dom@18.2.0`
- `tailwindcss@^3.3.2`, `postcss`, `autoprefixer`
- `framer-motion@^10.16.1`
- `lucide-react@^0.270.0`, `react-icons`
- Type definitions: `@types/node`, `@types/react`
- `typescript@5.8.3`

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Tummepallilakshman/apanaghr-landing.git
cd apanaghr-landing
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see the site live.

---

## 🛠 Available Scripts

| Script          | Description                  |
|-----------------|------------------------------|
| `npm run dev`   | Start development server     |
| `npm run build` | Build for production         |
| `npm start`     | Start production server      |

---

## 📄 Configuration Highlights

- **Tailwind CSS** scans:
  ```js
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ]
  ```

- **PostCSS** plugins:
  ```js
  tailwindcss: {},
  autoprefixer: {}
  ```

- **tsconfig.json**:
  - Module alias: `@/*` for easier imports
  - Includes all `.ts` and `.tsx` files

---

## 🧪 Entry Point

Main entry is `_app.tsx` (TypeScript version), which contains:
- Welcome screen
- Dark mode toggle
- Animation logic
- Injected layout components (Navbar, Footer)

---

## ❗ Custom 404 Page

The file `pages/404.tsx` shows:
- Large `404` message
- Custom styles with Tailwind
- Button to return to Home

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Credits

Made with ❤️ using:
- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide React](https://lucide.dev)
- [Framer Motion](https://www.framer.com/motion/)

---

## 🚀 Future Enhancements

- Add CMS integration (Sanity, Contentful)
- Improve SEO and accessibility
- Add Lighthouse optimization
- Add deployment instructions for Vercel

---
