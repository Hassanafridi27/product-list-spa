# Product List SPA

This is a simple e-commerce product list application built with React and Tailwind CSS. It fetches product data (including image, name, description, price, and rating) from a `db.json` file, applies category and price range filters, and displays the products in a grid layout with some styling. The app also supports a basic product rating system using star icons.

## Features

- **Product Listing**: Displays a list of products fetched from a `db.json` file.
- **Filters**: Filter products by category and price range.
- **Responsive Design**: The app is designed with responsiveness in mind using Tailwind CSS.
- **Add to Cart Button**: Includes a placeholder "Add to Cart" button for future functionality.

## Demo

![Product List](https://via.placeholder.com/800x400.png)

You can check out a live demo of the project here: [Product List Demo](#)

## Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (preferably version 16 or higher)
- **npm** (comes with Node.js)


## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/product-list-spa.git
   cd product-list-spa

2. **Install dependencies:**

   If you're using `npm`:

   ```bash
   npm install

3. **Start the Development Server:**

To run the app in development mode, use one of the following commands:

- If you are using **npm**:

  ```bash
  npm start

4. **Run the App:**

Once the development server is running, the application will be available at:

[http://localhost:3000](http://localhost:3000)

You can open this URL in your web browser to view the product list application in action.

## Configuration

The product data is mocked in a `db.json` file and includes the following fields for each product:

- **id**: A unique identifier for the product.
- **name**: The name of the product.
- **category**: The product category (e.g., electronics, clothing, furniture).
- **price**: The price of the product.
- **image**: The path to the product image (e.g., `/assets/images/product1.jpg`).
- **description**: A short description of the product.



**Tailwind CSS Setup:**

This project uses **Tailwind CSS** for styling. Tailwind classes are used throughout the project for responsiveness and custom styling.

### Installing Tailwind CSS

If you are setting up Tailwind CSS in your own project, you can follow these steps:

 ## Install Tailwind CSS via npm

   ```bash
   npm install -D tailwindcss postcss autoprefixer


**Jest Setup:**

This project uses Jest as a testing framework for unit and integration testing. Jest is commonly used with React for testing components and functionality.

Installing Jest:
To set up Jest in your project, follow these steps:

Install Jest and Babel for Jest:

Run the following command to install Jest along with Babel dependencies:



## Acknowledgments

- **React** - For the frontend framework.
- **Tailwind CSS** - For utility-first CSS styling.
- **React Icons** - For the star rating icons.
- **JSON Server** - For mocking the backend API (if applicable).

