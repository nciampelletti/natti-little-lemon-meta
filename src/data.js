import image1 from './images/greek salad.jpg'
import image2 from './images/bruchetta.jpeg'
import image3 from './images/lemon dessert.jpg'

import avatar_john from './images/john.jpeg'
import avatar_mary from './images/mary.jpeg'
import avatar_lanny from './images/lanny.jpeg'
import avatar_ivan from './images/ivan.jpeg'

export const pageLinks = [
  { id: 1, href: '/', text: 'Home' },
  { id: 2, href: '#about', text: 'About' },
  { id: 3, href: require('../src/menu.pdf'), text: 'Menu' },
  { id: 4, href: '/reservations', text: 'Reservations' },
  { id: 5, href: '/order', text: 'Order Online' },
  { id: 6, href: '/login', text: 'Login' },
]

export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
]

export const reviews = [
  {
    id: 1,
    image: avatar_john,
    name: 'John',
    stars: 4,
    reviewText: 'Delicious pizza and salad.',
  },
  {
    id: 2,
    image: avatar_mary,
    name: 'Mary',
    stars: 5,
    reviewText: 'Will come back another time.',
  },
  {
    id: 3,
    image: avatar_lanny,
    name: 'Lanny',
    stars: 4,
    reviewText: 'Lovely experience and great food.',
  },
  {
    id: 4,
    image: avatar_ivan,
    name: 'Ivan',
    stars: 3,
    reviewText: 'I wish there were bigger portions.',
  },
]

export const specials = [
  {
    id: 1,
    price: 12.99,
    title: 'Greek salad',
    image: image1,
    text: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic.',
  },
  {
    id: 2,
    price: 5.99,
    title: 'Bruchetta',
    image: image2,
    text: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
  },
  {
    id: 3,
    price: 5.0,
    title: 'Lemon Dessert',
    image: image3,
    text: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
  },
]
