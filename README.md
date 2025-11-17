# ArtisOn - Connect with Local Artisans

A modern web platform connecting individuals with skilled local artisans. Easily find trusted professionals near you.

## 🚀 Features

- **Artisan Search**: Search by trade, location, and availability
- **Detailed Profiles**: View artisan profiles, reviews, and past work
- **Interactive Map**: Visualize available artisans on a map (Leaflet)
- **Review System**: Ratings and customer feedback
- **Smart Chatbot**: Real-time assistance
- **Artisan Dashboard**: Dedicated interface for professionals
- **Authentication**: Secure login system via Supabase

## 🛠️ Technologies

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **UI Framework**: shadcn/ui + Tailwind CSS
- **Routing**: React Router DOM
- **Backend**: Supabase (Auth + Database)
- **Maps**: Leaflet + React Leaflet
- **Forms**: React Hook Form + Zod
- **State Management**: TanStack Query (React Query)
- **Icons**: Lucide React

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)
- Supabase account (for database)

### Setup Steps

```bash
# Clone the repository
git clone https://github.com/AkremBelkahla/artis-on.git

# Navigate to the project directory
cd artis-on

# Install dependencies
npm install

# Configure environment variables
# Create a .env file in the root and add your Supabase credentials
# VITE_SUPABASE_URL=your_supabase_url
# VITE_SUPABASE_ANON_KEY=your_anon_key

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

## 📝 Available Scripts

```bash
# Development
npm run dev

# Production build
npm run build

# Development build
npm run build:dev

# Preview build
npm run preview

# Linting
npm run lint
```

## 🗂️ Project Structure

```
artis-on/
├── src/
│   ├── assets/          # Images and assets
│   ├── components/      # Reusable components
│   │   └── ui/         # shadcn/ui components
│   ├── data/           # Static data
│   ├── hooks/          # Custom hooks
│   ├── integrations/   # External integrations (Supabase)
│   ├── lib/            # Utilities
│   ├── pages/          # Application pages
│   └── main.tsx        # Entry point
├── public/             # Static files
└── supabase/          # Supabase configuration
```

## 🚀 Deployment

### Netlify / Vercel

1. Connect your GitHub repository
2. Configure environment variables
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Required Environment Variables

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributing

Contributions are welcome! Please read our [contributing guidelines](CONTRIBUTING.md) to get started.

## 📧 Contact

For any questions or feedback, please contact us at [contact@infinityweb.tn](mailto:contact@infinityweb.tn)

---

Developed with ❤️ by [Infinity Web](https://infinityweb.tn)

## 📝 How to Contribute

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
- GitHub: [@AkremBelkahla](https://github.com/AkremBelkahla)
