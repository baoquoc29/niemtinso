# DTA Website

Website cho Digital Transformation Association được xây dựng bằng React.js và Tailwind CSS.

## Công nghệ sử dụng

- **React.js 18** - Thư viện UI
- **Vite** - Build tool
- **Tailwind CSS** - Framework CSS
- **JSX** - Cú pháp JavaScript

## Cài đặt

1. Cài đặt dependencies:
```bash
npm install
```

2. Chạy development server:
```bash
npm run dev
```

3. Build cho production:
```bash
npm run build
```

## Tính năng

- ✅ Responsive design (Laptop, iPad, Mobile)
- ✅ Header với navigation menu
- ✅ Hero section với animated network visualization
- ✅ Gradient background (purple to orange/red)
- ✅ Mobile menu hamburger
- ✅ Language selector (VIE/ENG)

## Cấu trúc thư mục

```
niemtinso/
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Component header với navigation
│   │   └── Hero.jsx        # Component hero section
│   ├── App.jsx             # Component chính
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet/iPad**: 768px - 1024px
- **Laptop/Desktop**: > 1024px
