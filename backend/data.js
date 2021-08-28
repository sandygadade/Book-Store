import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Sandip',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'Vishal',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
    products: [
        {
            name: 'Imperative Programming',
            category: 'Degree Books',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'vipul',
            rating: 4.5,
            numReviews: 10,
            description: 'F.Y.B.Sc (IT) Imperative Programming Textbook Mumbai University',
        },
        {
            name: 'Communication Skills',
            category: 'Degree Books',
            image: '/images/CSkill.jpg',
            price: 150,
            countInStock: 20,
            brand: 'vipul',
            rating: 3.8,
            numReviews: 16,
            description: 'F.Y.B.Sc (IT) Communication Skills Textbook Mumbai University',
        },
        {        
            name: 'Data Structure',
            category: 'Degree Books',
            image: '/images/DataStructue.jpg',
            price: 200,
            countInStock: 0,
            brand: 'vipul',
            rating: 4.6,
            numReviews: 20,
            description: 'S.Y.B.Sc (IT) Data Structure Textbook Mumbai University',
        },
        {       
            name: 'Digital Electronics',
            category: 'Degree Books',
            image: '/images/DigElectronic.jpg',
            price: 180,
            countInStock: 5,
            brand: 'vipul',
            rating: 4.0,
            numReviews: 14,
            description: 'F.Y.B.Sc (IT) Digital Electronics Textbook Mumbai University',
        },
        {
            name: 'Discrite Mathematics',
            category: 'Degree Books',
            image: '/images/DiscMath.jpg',
            price: 130,
            countInStock: 11,
            brand: 'vipul',
            rating: 3.2,
            numReviews: 10,
            description: 'F.Y.B.Sc (IT) Discrite Mathematics Textbook Mumbai University',
        },
        {  
            name: 'Object Oriented Programming Language',
            category: 'Degree Books',
            image: '/images/OOPs.jpg',
            price: 170,
            countInStock: 3,
            brand: 'vipul',
            rating: 4.5,
            numReviews: 15,
            description: 'F.Y.B.Sc (IT) Object Oriented Programming Language Textbook Mumbai University',
        },
    ],
}
export default data;