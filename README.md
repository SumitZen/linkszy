# 🔗 Linkszy — Premium Link-in-Bio Tool

Linkszy is a state-of-the-art, beautifully designed link-in-bio tool for creators, designers, and developers. Built with modern web styling, premium Liquid Glass aesthetics, and robust animations.

---

## ✨ Features

- **Liquid Glass Aesthetics:** Fully customizable design system with glassmorphic cards, gradients, and custom themes.
- **Bento & Link Blocks:** Add social links, embedded music tracks, photo galleries, and products directly on your profile.
- **Robust Analytics:** Track profile views and click stats in real-time.
- **Instant Customization:** Live preview as you edit your theme, custom layout, background artwork, font family, and profile colors.
- **Developer Friendly:** Completely typed in TypeScript, built with Vite, React 19, and Tailwind CSS.
- **Appwrite Backend:** Secure backend integrations for profiles, database, and storage buckets.

---

## 🛠️ Tech Stack

- **Frontend:** React 19, Vite, TypeScript, React Router Dom 7
- **Styling:** Vanilla CSS, Tailwind CSS
- **Animations:** GSAP (GreenSock Animation Platform)
- **Backend:** Appwrite (Auth, Database, Storage)
- **Smooth Scrolling:** Lenis Scroll
- **Image Handling:** React Easy Crop

---

## 🚀 Getting Started

### 1. Clone & Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file at the root of the project and add your Appwrite configuration:

```env
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=linkszy_db
VITE_APPWRITE_PROFILE_COLLECTION_ID=profiles
VITE_APPWRITE_STORAGE_BUCKET_ID=backgrounds
```

*Note: If no environment variables are provided, the application will automatically fall back to LocalStorage simulation mode for testing.*

### 3. Run Development Server

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

---

## 📁 Project Structure

- `src/components/`: Reusable components (e.g., Navbar, Footer, InfiniteTrack, BrutalistHero).
- `src/context/`: Context providers handling auth state (`AuthContext.tsx`).
- `src/lib/`: Config, themes, utility constants, and Appwrite client setup.
- `src/pages/`: Page containers (e.g., Dashboard, LandingPage, PublicProfile, PricingPage).
- `src/utils/`: General utilities and animations setup.
- `public/`: Public assets including logo and sitemaps.

---

## 📝 License

Distributed under the MIT License.
