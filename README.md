Food - del App
Server is live at (open all these file and start using it) :-
backend live : https://food-del-backend-boq4.onrender.com
front end : https://food-del-frontend-aohq.onrender.com
admin panel : https://food-del-admin-noyf.onrender.com

• Comprehensive Functionality: The app features a frontend, backend, and admin panel. Users can order food items, add them to the cart, update the cart, remove items, and proceed to payment. The payment gateway is integrated using Stripe.

• Admin Panel Features: The admin panel allows the addition and listing of different items, and includes an orders page where the order status can be changed (e.g., food processing, out for delivery, delivered), which is reflected on the frontend.

• Project Focus: The project utilizes Node.js for backend API, React for frontend, Context API for state management, and MongoDB as the database. It also includes an authentication middleware using tokens, CSS for styling, HTML, and Express.js.

• Tech Stack: Node.js, React, Context API, MongoDB, Stripe, CSS, HTML, Express.js for a full-featured, scalable, and efficient web application.

FOLDER - STRUCTURE
Frontend Structure

admin/
backend/
frontend/
    ├── node_modules/
    ├── public/
    ├── src/
        ├── assets/
        ├── components/
            ├── AppDownload/
            ├── ExploreMenu/
            ├── FoodDisplay/
            ├── FoodItem/
            ├── Footer/
            ├── Header/
            ├── LoginPopup/
            ├── Navbar/
        ├── context/
            └── StoreContext.jsx
        ├── pages/
            ├── Cart/
            ├── Home/
            ├── MyOrders/
            ├── PlaceOrder/
            └── Verify/
        ├── App.jsx
        ├── index.css
        ├── main.jsx
    ├── .eslintrc.cjs
    ├── .gitignore
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── vite.config.js

    
Backend Structure
backend/
    ├── config/
        └── db.js
    ├── controllers/
        ├── cartController.js
        ├── foodController.js
        ├── orderController.js
        └── userController.js
    ├── middleware/
        └── auth.js
    ├── models/
        ├── foodModel.js
        ├── orderModel.js
        └── userModel.js
    ├── routes/
        ├── cartRoute.js
        ├── foodRoute.js
        ├── orderRoute.js
        └── userRoute.js
    ├── node_modules/
    ├── uploads/
    └── .env

    Admin Structure
    admin/
    ├── public/
    ├── src/
        ├── assets/
        ├── components/
            ├── Navbar/
                ├── Navbar.css
                └── Navbar.jsx
            └── Sidebar/
                ├── Sidebar.css
                └── Sidebar.jsx
        ├── pages/
            ├── Add/
                ├── Add.css
                └── Add.jsx
            ├── List/
                ├── List.css
                └── List.jsx
            └── Orders/
                ├── Orders.css
                └── Orders.jsx
        ├── App.jsx
        ├── index.css
        └── main.jsx
    
