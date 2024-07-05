//1st Coffee shop
// User
const user = {
  username: String,
  email: String,
  password: String,
  card: [
    {
      holderName: String,
      number: Number,
    },
  ],
  myOrders: [
    {
      name: String,
      size: Number,
      quantity: Number,
      ingredients: Number,
      deliveryStatus: String,
    },
  ],
  favCoffee: ["", ""],
};
// Coffee
const coffee = {
  name: String,
  category: Number,
  Image: String,
  price: Number,
  description: String,
  sale: {
    sale: Number,
    description: String,
  },
};
//sale
const saledCoffee = [
  {
    name: String,
    price: Number,
    description: String,
    sale: {
      sale: Number,
      description: String,
    },
  },
];
// ===> Web   order
const order = {
  userIDorEmail: String,
  Coffee: [
    {
      name: String,
      size: Number,
      quantity: Number,
      ingredients: Number,
    },
  ],
};

//2nd travel app

//User
const User = {
  name: String,
  email: String,
  password: String,
  profilePhoto: String,
  Gender: String,
  points: Number,
  language: String,
  paymentMethod: [
    {
      method: String,
    },
  ],
  couponAndVoucher: [
    {
      name: String,
      coupon: String,
      description: String,
    },
  ],
};
//travel
const travel = {
  name: String,
  location: String,
  image: String,
  price: String,
  isSale: Number,
  desciption: String,
  date: [
    {
      year: String,
      month: String,
      day: String,
    },
  ],
  info: {
    DateInfo: {
      info1: String,
      //2.......
    },
    meetingInfo: String,
    facilitiesInfo: String,
  },
  facilities: {
    item1: String,
    item2: String,
    item3: String,
    item4: String,
    //...
  },
};
//==>Web order
const Order = [
  {
    name: String,
    quantity: Number,
    price: Number,
  },
];

const orders = [
  {
    travelId: String,
    UserId: String,
    count: String,
    date: String,
  },
];

// article
const article = [
  {
    name: String,
    date: String,
    Image: String,
  },
];
