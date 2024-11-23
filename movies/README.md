React Movie Labs
Project Overview
React Movie Labs is a movie information platform built with React and Firebase. Users can browse the latest and most popular movies, with features for filtering, sorting, favoriting, and third-party login.

Features
Movie Browsing
View popular movies, upcoming movies, and trending movies of the day.
Paginated movie lists for seamless data navigation.
Filtering and Sorting
Filter by genre (e.g., Action, Comedy).
Filter by rating (e.g., 8+ rating).
Sort by popularity (Most Popular / Least Popular).
Firebase Third-Party Login
Google Login support.
Displays username and profile picture after login.
Favorite Movies
Logged-in users can add movies to their favorites list.
Tech Stack
Frontend Framework: React + React Query + Material-UI
Backend Service: Firebase (Authentication)
Data Source: TMDB API
Project Structure
(Provide a visual structure or explanation of the directory hierarchy here.)

Installation and Setup
1. Environment Preparation
Ensure the following tools are installed:

Node.js (v14 or higher recommended)
npm or yarn as the package manager
2. Clone Repository

git clone <repository-url>  
cd react-movie-labs  
3. Install Dependencies

npm install  
4. Configure Environment Variables
Create a .env file in the root directory and add the following content:


REACT_APP_TMDB_KEY=<Your TMDB API Key>  
REACT_APP_FIREBASE_API_KEY=<Your Firebase API Key>  
REACT_APP_FIREBASE_AUTH_DOMAIN=<Your Firebase Auth Domain>  
REACT_APP_FIREBASE_PROJECT_ID=<Your Firebase Project ID>  
REACT_APP_FIREBASE_STORAGE_BUCKET=<Your Firebase Storage Bucket>  
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<Your Firebase Messaging Sender ID>  
REACT_APP_FIREBASE_APP_ID=<Your Firebase App ID>  
5. Start Development Server

npm start  
Usage Instructions
Homepage
Browse popular movies and switch between pages for more content.
Filtering and Sorting
Use the left-side filter panel to select genres or ratings.
Select sorting options (Most Popular / Least Popular) on the right.
Login
Click the login button in the top-right corner to log in with Google.
Upon successful login, the username and profile picture will be displayed.
Favorites
Click the favorite button on a movie card to add it to your favorites list (available after login).
Favorites Page
View all favorited movies on the Favorites page.
Contact
For any questions or suggestions, feel free to contact the developer:
Email: 20109109@mail.wit.ie

