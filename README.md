# Movies Website Project
## Introduction
Welcome to the Movies Website Project! This application allows users to browse, manage, and organize their favorite movies. Users can create accounts, log in, add movies to their personal cart, and perform CRUD (Create, Read, Update, Delete) operations on their movie list. The project leverages modern web development technologies including HTML, CSS, JavaScript, and Bootstrap for the frontend, and Express, MongoDB, and REST APIs for the backend. Additionally, JWT (JSON Web Tokens) are used for secure user authentication.

##Features
 *User Authentication: Secure user registration and login using JWT.
CRUD Operations: Full CRUD functionality for managing movies in the user’s cart.
Responsive Design: Clean and responsive UI using Bootstrap.
RESTful API: Backend API built with Express and MongoDB.
Multiple Users: Support for multiple users with isolated carts.
Technologies Used
Frontend:
HTML
CSS
JavaScript
Bootstrap
Backend:
Express.js
MongoDB
Authentication:
JWT (JSON Web Token)
Installation
Prerequisites
Node.js and npm installed
MongoDB installed and running
Steps
Clone the Repository:

bash
Copy code
git clone https://github.com/yourusername/movies-website.git
cd movies-website
Install Dependencies:

bash
Copy code
npm install
Set Up Environment Variables:
Create a .env file in the root directory and add the following:

env
Copy code
PORT=3000
MONGODB_URI=mongodb://localhost:27017/movies
JWT_SECRET=your_jwt_secret
Run the Server:

bash
Copy code
npm start
Access the Application:
Open your browser and go to http://localhost:3000

Usage
Register
Navigate to the registration page and create a new account.
Login
Log in using your registered credentials to access your personalized cart.
Add Movies
Search for movies and add them to your cart.
View and Manage Cart
View the movies in your cart, and perform CRUD operations like updating movie details or removing movies from the cart.
API Endpoints
User Endpoints
Register: POST /api/register
Login: POST /api/login
Movie Endpoints
Get All Movies: GET /api/movies
Get Movie by ID: GET /api/movies/:id
Add Movie: POST /api/movies
Update Movie: PUT /api/movies/:id
Delete Movie: DELETE /api/movies/:id
Cart Endpoints
Get User Cart: GET /api/cart/:userId
Add Movie to Cart: POST /api/cart/:userId
Remove Movie from Cart: DELETE /api/cart/:userId/:movieId
Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

License
This project is licensed under the MIT License.

Contact
For any inquiries or feedback, please contact us at [your-email@example.com].

Thank you for using the Movies Website Project! We hope you enjoy managing your movie collection.
