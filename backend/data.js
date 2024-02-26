import bcrypt from 'bcryptjs';

const data = {

    users:[
        {
        name: 'Chanu',
        email: 'admin@example.com',
        password: bcrypt.hashSync('1234'),
        isAdmin: true,
        },
        {
        name: 'Shashika',
        email: 'user@example.com',
        password: bcrypt.hashSync('1234'),
        isAdmin: false,
        },
    
    ],
    products: [
        {
        // _id: '1',
        name: 'Carrot',
        slug: 'Carrot',
        category: 'Shirts',
        image: '/images/carrot.jpg',
        price: 120,
        countInStock: 0,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'High Quality Shirt'
    },

    {
       // _id: '2',
        name: 'Kiwi',
        slug: 'Kiwi',
        category: 'Shirts',
        image: '/images/kiwi.jpg',
        price: 120,
        countInStock: 10,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'High Quality Shirt'
    },

    {
        //_id: '3',
        name: 'Apple',
        slug: 'Apple',
        category: 'Shirts',
        image: '/images/apple.jpg',
        price: 120,
        countInStock: 10,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'High Quality Shirt'
    },

    {
       // _id: '4',
        name: 'Banana',
        slug: 'Banana',
        category: 'Shirts',
        image: '/images/banana.jpg',
        price: 120,
        countInStock: 10,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'High Quality Shirt'
    },
],
};

export default data;