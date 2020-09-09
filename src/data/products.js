import img1 from '../assets/img/fashion/carousel-1.png';
import img2 from '../assets/img/fashion/carousel-2.png';
import product1 from '../assets/img/fashion/img-1.jpg';
import product2 from '../assets/img/fashion/img-2.png';
import product3 from '../assets/img/fashion/img-3.png';
import product4 from '../assets/img/fashion/dress-1.jpg';
import color1 from '../assets/img/fashion/color1.jpeg';
import color2 from '../assets/img/fashion/color2.jpeg';
import color3 from '../assets/img/fashion/color3.jpeg'
import color4 from '../assets/img/fashion/color4.jpeg'


export const categories= [
      {
        id: 1,
        name: "Ladies Dresses",
      },
      {
        id: 2,
        name: "Men's Wear",
      },
      {
        id: 3,
        name: "Teens Outfits",
      },
      {
        id: 4,
        name: "Men's Shoes",
      },
      {
        id: 5,
        name: "Ladies Heels",
      },
      {
        id: 6,
        name: "Baby Clothes",
      },
      {
        id: 7,
        name: "Electorics Gadgets",
      },
      {
        id: 8,
        name: "Accessories"
      }
]
     


export const carousel = [
  {
    id: 1,
    description: 'Latest Mele Slim Suits Clothes',
    oldPrice: '450.00',
    newPrice: '320.00',
    link: "/single/1",
    img: product1
  },
  {
    id: 2,
    description: 'Latest Ladies Clothes',
    oldPrice: '150.00',
    newPrice: '99.00',
    link: "/single/2",
    img: product2
  },
  {
    id: 3,
    description: "2020 Men's slim suits",
    oldPrice: '250.00',
    newPrice: '190.00',
    link: "/single/2",
    img: product1
  }

]


export const adverts = [
  {
    id:1,
    img: img1
  },
  {
    id:2,
    img: img2
  },
  {
    id:3,
    img:img1
  },
  {
    id:4,
    img:img2
  },
  {
    id: 5,
    img:img1
  },
  {
    id: 5,
    img: img2
  }

]


export const products= [
  {
    id: 1,
    title: 'Latest 2020 quality Skirts',
    description: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
    price: "250",
    oldprize: "310",
    moq: 10,
    category_id: 1,
    colors: [
      {
        id: 1,
        color: "red",
        img: color1
      },
      {
        id: 2,
        color: "green",
        img: color2
      },
      {
        id: 3,
        color: "yellow",
        img: color3
      },
      {
        id: 4,
        color: "blue",
        img: color4
      }
    ],
    images: [
      { 
        original:product1,
        thumbnail:product1
      },
      { 
        original:product2,
        thumbnail:product2
      },
      { 
        original:product3,
        thumbnail:product3
      },
      { 
        original:product4,
        thumbnail:product4
      },
     ],
    sizes: ["small", "medium", "large", "extra large", "xx large"],
    likes: 20,
    comments: [
       {
         id: 1,
         date: "23/06/2020",
         name: "First Name",
         comment: "Comment Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus",

       }
    ]

  },
  {
    id: 2,
    title: 'Latest 2020 quality Skirts',
    description: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
    price: "250",
    oldprize: "310",
    moq: 5,
    colors: [
      {
        id: 1,
        color: "red",
        img: color1
      },
      {
        id: 2,
        color: "green",
        img: color2
      },
      {
        id: 3,
        color: "yellow",
        img: color3
      },
      {
        id: 4,
        color: "blue",
        img: color4
      }
    ],
    images: [
      { 
        original:product2,
        thumbnail:product2
      },
      { 
        original:product1,
        thumbnail:product1
      },
     
      { 
        original:product3,
        thumbnail:product3
      },
      { 
        original:product4,
        thumbnail:product4
      },
     ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    likes: 20,
    comments: [
       {
         id: 1,
         date: "2020-08-16T21:53:15+08:00",
         name: "First Name",
         comment: "Comment Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus",

       }
    ]

  },
  {
    id: 3,
    title: 'Latest 2020 quality Skirts',
    description: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
    price: "250",
    oldprize: "310",
    moq: 50,
    colors: [
      {
        id: 1,
        color: "red",
        img: color1
      },
      {
        id: 2,
        color: "green",
        img: color2
      },
      {
        id: 3,
        color: "yellow",
        img: color3
      },
      {
        id: 4,
        color: "blue",
        img: color4
      }
    ],
    images: [
      
      { 
        original:product2,
        thumbnail:product2
      },
      { 
        original:product3,
        thumbnail:product3
      },
      { 
        original:product4,
        thumbnail:product4
      },
      { 
        original:product1,
        thumbnail:product1
      },
     ],
    sizes: ["small", "medium", "large", "extra large", "xx large"],
    likes: 20,
    comments: [
       {
         id: 1,
         date: "23/06/2020",
         name: "First Name",
         comment: "Comment Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus",

       }
    ]

  },
  {
    id: 4,
    title: 'Latest 2020 quality Skirts',
    description: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
    price: "250",
    oldprize: "310",
    moq: 15,
    colors: [
      {
        id: 1,
        color: "red",
        img: color1
      },
      {
        id: 2,
        color: "green",
        img: color2
      },
      {
        id: 3,
        color: "yellow",
        img: color3
      },
      {
        id: 4,
        color: "blue",
        img: color4
      }
    ],
    images: [
      { 
        original:product4,
        thumbnail:product4
      },
      { 
        original:product1,
        thumbnail:product1
      },
      { 
        original:product2,
        thumbnail:product2
      },
      { 
        original:product3,
        thumbnail:product3
      },
      
     ],
    sizes: ["small", "medium", "large", "extra large", "xx large"],
    likes: 20,
    comments: [
       {
         id: 1,
         date: "2020-08-16T21:53:15+08:00",
         name: "First Name",
         comment: "Comment Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus",

       }
    ]

  },
  {
    id: 5,
    title: 'Latest 2020 quality Skirts',
    description: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
    price: "250",
    oldprize: "310",
    moq: 25,
    colors: [
      {
        id: 1,
        color: "red",
        img: color1
      },
      {
        id: 2,
        color: "green",
        img: color2
      },
      {
        id: 3,
        color: "yellow",
        img: color3
      },
      {
        id: 4,
        color: "blue",
        img: color4
      }
    ],
    images: [
      
      { 
        original:product3,
        thumbnail:product3
      },
      { 
        original:product1,
        thumbnail:product1
      },
      { 
        original:product2,
        thumbnail:product2
      },
      
      { 
        original:product4,
        thumbnail:product4
      },
     ],
    sizes: ["small", "medium", "large", "extra large", "xx large"],
    likes: 20,
    comments: [
       {
         id: 1,
         date: "23/06/2020",
         name: "First Name",
         comment: "Comment Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus",

       }
    ]

  },
  {
    id: 6,
    title: 'Latest 2020 quality Skirts',
    description: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
    price: "250",
    oldprize: "310",
    moq: 35,
    colors: [
      {
        id: 1,
        color: "red",
        img: color1
      },
      {
        id: 2,
        color: "green",
        img: color2
      },
      {
        id: 3,
        color: "yellow",
        img: color3
      },
      {
        id: 4,
        color: "blue",
        img: color4
      }
    ],
    images: [
      { 
        original:product2,
        thumbnail:product2
      },
      { 
        original:product3,
        thumbnail:product3
      },
      { 
        original:product1,
        thumbnail:product1
      },
      
      { 
        original:product4,
        thumbnail:product4
      },
     ],
    sizes: ["small", "medium", "large", "extra large", "xx large"],
    likes: 20,
    comments: [
       {
         id: 1,
         date: "23/06/2020",
         name: "First Name",
         comment: "Comment Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus",

       }
    ]

  },
  {
    id: 7,
    title: 'Latest 2020 quality Skirts',
    description: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
    price: "250",
    oldprize: "310",
    moq: 10,
    colors: [
      {
        id: 1,
        color: "red",
        img: color1
      },
      {
        id: 2,
        color: "green",
        img: color2
      },
      {
        id: 3,
        color: "yellow",
        img: color3
      },
      {
        id: 4,
        color: "blue",
        img: color4
      }
    ],
    images: [
      { 
        original:product1,
        thumbnail:product1
      },
      { 
        original:product2,
        thumbnail:product2
      },
      { 
        original:product3,
        thumbnail:product3
      },
      { 
        original:product4,
        thumbnail:product4
      },
     ],
    sizes: ["small", "medium", "large", "extra large", "xx large"],
    likes: 20,
    comments: [
       {
         id: 1,
         date: "23/06/2020",
         name: "First Name",
         comment: "Comment Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus",

       }
    ]

  },
  {
    id: 8,
    title: 'Latest 2020 quality Skirts',
    description: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
    price: "250",
    oldprize: "310",
    moq: 5,
    colors: [
      {
        id: 1,
        color: "red",
        img: color1
      },
      {
        id: 2,
        color: "green",
        img: color2
      },
      {
        id: 3,
        color: "yellow",
        img: color3
      },
      {
        id: 4,
        color: "blue",
        img: color4
      }
    ],
    images: [
      { 
        original:product3,
        thumbnail:product3
      },
      { 
        original:product4,
        thumbnail:product4
      },
      { 
        original:product1,
        thumbnail:product1
      },
      { 
        original:product2,
        thumbnail:product2
      },
      
     ],
    sizes: ["small", "medium", "large", "extra large", "xx large"],
    likes: 20,
    comments: [
       {
         id: 1,
         date: "23/06/2020",
         name: "First Name",
         comment: "Comment Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus",

       }
    ]

  },
 
 
  
]
    
