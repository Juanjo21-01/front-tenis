import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from '../assets/icons';
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from '../assets/images';

export const navLinks = [
  { href: '#Inicio', label: 'Inicio' },
  { href: '#Acerca', label: 'Acerca de' },
  { href: '#Productos', label: 'Productos' },
  { href: '#Contacto', label: 'Contáctanos' },
];

export const tenis = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const Estadisticas = [
  { value: '1k+', label: 'Marcas' },
  { value: '500+', label: 'Tiendas' },
  { value: '250k+', label: 'Clientes' },
];

export const Productos = [
  {
    imgURL: shoe4,
    name: 'Nike Air Jordan-01',
    price: '$200.20',
  },
  {
    imgURL: shoe5,
    name: 'Nike Air Jordan-10',
    price: '$210.20',
  },
  {
    imgURL: shoe6,
    name: 'Nike Air Jordan-100',
    price: '$220.20',
  },
  {
    imgURL: shoe7,
    name: 'Nike Air Jordan-001',
    price: '$230.20',
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: 'Envío gratis',
    subtext:
      'Disfrute de compras sin problemas con nuestro servicio de envío gratuito.',
  },
  {
    imgURL: shieldTick,
    label: 'Pago seguro',
    subtext:
      'Experimente transacciones sin preocupaciones con nuestras opciones de pago seguro.',
  },
  {
    imgURL: support,
    label: 'Me encanta ayudarte',
    subtext:
      'Nuestro equipo dedicado está aquí para ayudarlo en cada paso del camino.',
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: 'Morich Brown',
    rating: 4.5,
    feedback:
      'The attention to detail and the quality of the product exceeded my expectations. Highly recommended!',
  },
  {
    imgURL: customer2,
    customerName: 'Lota Mongeskar',
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: 'Productos',
    links: [
      { name: 'Air Force 1', link: '/' },
      { name: 'Air Max 1', link: '/' },
      { name: 'Air Jordan 1', link: '/' },
      { name: 'Air Force 2', link: '/' },
      { name: 'Nike Waffle Racer', link: '/' },
      { name: 'Nike Cortez', link: '/' },
    ],
  },
  {
    title: 'Help',
    links: [
      { name: 'Acerca', link: '/' },
      { name: 'FAQs', link: '/' },
      { name: 'How it works', link: '/' },
      { name: 'Privacy policy', link: '/' },
      { name: 'Payment policy', link: '/' },
    ],
  },
  {
    title: 'Get in touch',
    links: [
      { name: 'customer@nike.com', link: 'mailto:customer@nike.com' },
      { name: '+92554862354', link: 'tel:+92554862354' },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: 'facebook logo' },
  { src: twitter, alt: 'twitter logo' },
  { src: instagram, alt: 'instagram logo' },
];
