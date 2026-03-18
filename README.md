AD311 – React Applications with Different Frameworks
This repository contains my completed project for the AD311 assignment “Building React Applications with Different Frameworks.”  
The goal of this assignment is to build the same basic application using four different React-based frameworks, demonstrating understanding of routing, components, and project structure across multiple environments.

📁 Repository Structure
Code
ad311-react-frameworks/
│
├── nextjs-app/      → Next.js (App Router)
├── remix-app/       → Remix
├── gatsby-app/      → Gatsby
└── expo-app/        → Expo (React Native)
Each folder contains its own standalone project, including source code, routes, and framework‑specific configuration.

🚀 Framework Requirements Completed
1. Next.js
Built using the App Router (app/ directory)

Pages included:

/ (Home)

/about

/users

/users/[id] (dynamic route)

Fully functional navigation and dynamic rendering

2. Remix
Uses loaders and routes in the app/routes/ directory

Pages included:

/

/about

/users

/users/:id

Demonstrates Remix routing and data loading

3. Gatsby
Gatsby 5 project with:

Home page

About page

Users page

Dynamic user page using gatsby-node.js or file-based routing

Gatsby development server tested and running

4. Expo (React Native)
Built using Expo Router

Screens included:

Home

About

Navigation between screens using Expo Router

Runs in web mode via npm start → press w

▶️ Video Demonstrations
Each framework includes a short walkthrough video showing:

Project running locally

Required routes/screens

Code structure

Videos are submitted separately per assignment instructions.

📦 How to Run Each Project
Next.js
Code
cd nextjs-app
npm install
npm run dev
Remix
Code
cd remix-app
npm install
npm run dev
Gatsby
Code
cd gatsby-app
npm install
npm run develop
Expo
Code
cd expo-app
npm install
npm start
✍️ Reflection
This project demonstrates how different React frameworks approach routing, rendering, and project structure. Building the same application four times provided a deeper understanding of the strengths and tradeoffs of each framework.
