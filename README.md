##Admin Dashboard Assignment
Welcome to the Admin Dashboard Assignment! This project is a fully functional, responsive admin dashboard for managing a social media platform. It includes user management, content moderation, and analytics features.

Project Overview
This admin dashboard is designed to help administrators manage users, moderate content, and analyze user activity using a clean and interactive UI.

Features
👤 User Management
View and track user activity.
Identify active users and creators.
Monitor user referrals and engagement.
📝 Content Moderation
Moderate posts based on views, shares, and comments.
Access detailed insights into content performance.
📊 Analytics
View daily and monthly user activity through charts.
Analyze engagement metrics like views, likes, shares, and private messages.
📈 Data Visualization
Charts powered by Chart.js for intuitive data insights.
Tech Stack
Frontend
Framework: Next.js
Styling: Tailwind CSS
APIs
Data fetched from: Socialverse Admin Dashboard API
Data Visualization
Library: React Chart.js 2
State Management
Library: SWR for data fetching and caching
Project Setup


Folder Structure

web-assignment/
├── components/          # Reusable components like Navbar, Sidebar, etc.
├── pages/               # Main dashboard pages (users, moderation, analytics)
├── public/              # Static assets (images, icons)
├── styles/              # Global styles
└── package.json         # Project metadata and dependencies
Key Files
pages/index.js: Landing page for the admin dashboard.
pages/users.js: Displays user details fetched from the API.
pages/analytics.js: Analytics page for displaying charts and engagement data.
pages/moderation.js: Content moderation tools.
Key Libraries Used
Tailwind CSS: For responsive styling.
React Chart.js 2: For interactive charts.
SWR: For efficient data fetching and caching.
