interface SeedCategory {
  name: string;
}

interface SeedItem {
  name: string;
  category?: string;
  image?: string;
  note?: string;
}

export const categories: SeedCategory[] = [
  {
    name: 'Fruits and Vegetables',
  },
  {
    name: 'Meat',
  },
  {
    name: 'Snacks',
  },
  {
    name: 'Pets',
  },
];

export const items: SeedItem[] = [
  {
    name: 'Apple',
    image: 'apple.jpg',
    category: 'Fruits and Vegetables',
    note: 'Buy organic apples',
  },
  {
    name: 'Banana',
    image: 'banana.jpg',
    category: 'Fruits and Vegetables',
  },
  {
    name: 'Orange',
    image: 'orange.jpg',
    category: 'Fruits and Vegetables',
  },
  {
    name: 'Strawberry',
    image: 'strawberry.jpg',
    category: 'Fruits and Vegetables',
  },
  {
    name: 'Blueberry',
    image: 'blueberry.jpg',
    category: 'Fruits and Vegetables',
  },
  {
    name: 'Raspberry',
    image: 'raspberry.jpg',
    category: 'Fruits and Vegetables',
  },
  {
    name: 'Pet Food',
    image: 'pet-food.jpg',
    category: 'Pets',
    note: 'Buy organic pet food',
  },
  {
    name: 'Pet Treats',
    image: 'pet-treats.jpg',
    category: 'Pets',
  },
  {
    name: 'Pet Toys',
    image: 'pet-toys.jpg',
    category: 'Pets',
  },
  {
    name: 'Chicken',
    image: 'chicken.jpg',
    category: 'Meat',
    note: 'Buy organic chicken',
  },
  {
    name: 'Beef',
    image: 'beef.jpg',
    category: 'Meat',
  },
  {
    name: 'Pork',
    image: 'pork.jpg',
    category: 'Meat',
  },
  {
    name: 'Fish',
    image: 'fish.jpg',
    category: 'Meat',
  },
  {
    name: 'Doritos',
    image: 'doritos.jpg',
    category: 'Snacks',
    note: 'Buy organic Doritos',
  },
  {
    name: 'Lays',
    image: 'lays.jpg',
    category: 'Snacks',
  },
  {
    name: 'Pringles',
    image: 'pringles.jpg',
    category: 'Snacks',
  },
];

export const initialData = {
  categories,
  items,
};
