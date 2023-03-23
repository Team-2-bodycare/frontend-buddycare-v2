import Avatar1 from '../../assets/img/avatar1.png';
import Avatar2 from '../../assets/img/avatar2.png';
import Avatar3 from '../../assets/img/avatar3.jpg';
import Avatar4 from '../../assets/img/avatar4.jpg';

export interface Testimonial {
  
  name: string;
  text: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'João Silva',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus metus et arcu interdum, in commodo nulla malesuada. Integer quis augue eget velit fermentum blandit. Aenean mollis faucibus efficitur. ',
    avatar: `${Avatar1}`,
  },
  {
    name: 'Maria Oliveira',
    text: 'Suspendisse eget ex sapien. Vivamus semper nunc non metus venenatis, ac rhoncus enim pulvinar. Sed ac interdum nisl. Sed vitae ullamcorper eros. Integer suscipit aliquet lacinia. ',
    avatar: `${Avatar3}`,
  },
  {
    name: 'Pedro Souza',
    text: 'Vestibulum sed malesuada eros, vitae interdum arcu. Ut vel est at ipsum vulputate hendrerit. Sed eget nisi condimentum, consectetur metus ut, fermentum velit. Aliquam eu nisl est. Nam at fringilla nisl. ',
    avatar: `${Avatar2}`,
  },
  {
    name: 'Francis Assis',
    text: 'Vestibulum sed malesuada eros, vitae interdum arcu. Ut vel est at ipsum vulputate hendrerit. Sed eget nisi condimentum, consectetur metus ut, fermentum velit. Aliquam eu nisl est. Nam at fringilla nisl. ',
    avatar: `${Avatar4}`,
  },
  {
    name: 'Francis Assis4',
    text: 'Vestibulum sed malesuada eros, vitae interdum arcu. Ut vel est at ipsum vulputate hendrerit. Sed eget nisi condimentum, consectetur metus ut, fermentum velit. Aliquam eu nisl est. Nam at fringilla nisl. ',
    avatar: `${Avatar4}`,
  },
  {
    name: 'Francis Assis3',
    text: 'Vestibulum sed malesuada eros, vitae interdum arcu. Ut vel est at ipsum vulputate hendrerit. Sed eget nisi condimentum, consectetur metus ut, fermentum velit. Aliquam eu nisl est. Nam at fringilla nisl. ',
    avatar: `${Avatar4}`,
  },
  {
    name: 'Francis Assis2',
    text: 'Vestibulum sed malesuada eros, vitae interdum arcu. Ut vel est at ipsum vulputate hendrerit. Sed eget nisi condimentum, consectetur metus ut, fermentum velit. Aliquam eu nisl est. Nam at fringilla nisl. ',
    avatar: `${Avatar4}`,
  },
  {
    name: 'Francis Assis1',
    text: 'Vestibulum sed malesuada eros, vitae interdum arcu. Ut vel est at ipsum vulputate hendrerit. Sed eget nisi condimentum, consectetur metus ut, fermentum velit. Aliquam eu nisl est. Nam at fringilla nisl. ',
    avatar: `${Avatar4}`,
  },
];
