export default function handler(req, res) {
    const products = [
        {
          "id": 1,
          "name": "Laptop",
          "category": "electronics",
          "price": 899,
          "image": "/images/dell.jpeg",
          "description": "A powerful laptop with great performance."
        },
        {
          "id": 2,
          "name": "Dell",
          "category": "electronics",
          "price": 899,
          "image": "/images/product1.jpg",
          "description": "A powerful laptop with great performance."
        },
        {
          "id": 2,
          "name": "Smartphone",
          "category": "electronics",
          "price": 699,
          "image": "/images/product2.jpg",
          "description": "A sleek smartphone with excellent camera quality."
        },
        {
          "id": 3,
          "name": "Jacket",
          "category": "clothing",
          "price": 120,
          "image": "/images/productt.jpg",
          "description": "A warm and stylish winter jacket."
        },
        {
          "id": 4,
          "name": "Sofa",
          "category": "furniture",
          "price": 350,
          "image": "/images/product6.jpg",
          "description": "A comfortable and modern sofa for your living room."
        },
        {
          "id": 5,
          "name": "Bookshelf",
          "category": "furniture",
          "price": 150,
          "image": "/images/product9.webp",
          "description": "A stylish bookshelf for organizing your books."
        },
        {
          "id": 6,
          "name": "Novel",
          "category": "books",
          "price": 20,
          "image": "/images/product8.jpeg",
          "description": "A gripping novel that you can't put down."
        },
        {
          "id": 7,
          "name": "T-shirt",
          "category": "clothing",
          "price": 25,
          "image": "/images/product5.jpg",
          "description": "A comfortable t-shirt for everyday wear."
        }
      ]
  
    res.status(200).json(products);
  }
  