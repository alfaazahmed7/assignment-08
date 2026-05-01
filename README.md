# 🧩 Tilix – Tile Discovery Web App

## 📌 Project Overview

**Tilix** is a modern tile discovery and showcase web application built with **Next.js**. It allows users to explore a curated collection of aesthetic tiles, view detailed information, search for specific designs, and manage their user profiles through a secure authentication system.

This project focuses on delivering a clean, responsive, and visually appealing UI while maintaining efficient performance using modern React and Next.js features.

---

## 🎯 Purpose

The main goal of this project is to:

* Provide a platform to explore different tile designs
* Practice full-stack development with authentication
* Implement modern UI libraries for a polished user experience
* Learn structured routing and data handling in Next.js App Router

---

## 🌐 Live URL

👉 https://your-live-link-here.vercel.app
*(Replace with your deployed Vercel link)*

---

## ✨ Key Features

### 🔐 Authentication System

* User Sign Up & Sign In
* Secure authentication using **Better Auth**
* MongoDB integration for user data storage

### 🏠 Homepage

* Eye-catching banner section
* Featured tiles showcase
* Smooth marquee for new arrivals

### 🔍 Tile Exploration

* Browse all available tiles
* View detailed tile information
* Dynamic routing for individual tile pages

### 🔎 Search Functionality

* Search tiles easily by keywords
* Instant filtering experience

### 👤 User Profile

* View user information
* Update profile details
* Protected routes for authenticated users

### ⚡ Performance & UX

* Loading states for better UX
* Responsive design (mobile-friendly)
* Clean and modern UI using multiple UI libraries

---

## 🛠️ Tech Stack

### 🚀 Framework & Core

* Next.js 16 (App Router)
* React 19

### 🎨 UI & Styling

* Tailwind CSS
* DaisyUI
* HeroUI
* Gravity UI

### 🔐 Authentication & Backend

* Better Auth
* MongoDB

### 📦 Additional Packages

* react-icons
* react-fast-marquee
* react-toastify

---

## 📂 Project Structure (Simplified)

```
src/
 ├── app/
 │   ├── (auth)/        # Signin & Signup routes
 │   ├── (main)/        # Main app pages (tiles, profile)
 │   ├── api/           # Authentication API
 │
 ├── components/
 │   ├── Navbar/
 │   ├── Footer/
 │   ├── homepage/
 │
 ├── lib/
 │   ├── auth.js
 │   ├── auth-client.js
 │
public/
 ├── data.json          # Tile data
```

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/tilix.git

# Navigate to project folder
cd tilix

# Install dependencies
npm install

# Run development server
npm run dev
```

---

## 📦 Build for Production

```bash
npm run build
npm start
```

---

## 🧠 Notes

* Ensure MongoDB connection is properly configured for authentication.
* Replace the live URL before submitting or sharing.
* Some UI components combine multiple libraries—keep styles consistent when extending.

---

## 📜 License

This project is for educational purposes and part of an assignment.

---

## 👨‍💻 Author

Developed by **Alfaaz Ahmed**
