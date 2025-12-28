import { NextResponse } from "next/server";

export interface IProduct {
  productId: string;
  name: string;
  price: number;
  category: string;
  image: string;
  stock: number;
  description: string;
}

const products: IProduct[] = [
  {
    productId: "p005",
    name: "Bluetooth Speaker",
    price: 2800,
    category: "Electronics",
    image: "https://picsum.photos/200?5",
    stock: 18,
    description: "Portable Bluetooth speaker with deep bass sound",
  },
  {
    productId: "p006",
    name: "Laptop Backpack",
    price: 2200,
    category: "Accessories",
    image: "https://picsum.photos/200?6",
    stock: 25,
    description: "Water-resistant backpack suitable for 15-inch laptops",
  },
  {
    productId: "p007",
    name: "Mechanical Keyboard",
    price: 5400,
    category: "Electronics",
    image: "https://picsum.photos/200?7",
    stock: 10,
    description: "RGB mechanical keyboard with tactile switches",
  },
  {
    productId: "p008",
    name: "Men's Casual Jacket",
    price: 4600,
    category: "Fashion",
    image: "https://picsum.photos/200?8",
    stock: 14,
    description: "Stylish casual jacket suitable for winter wear",
  },
  {
    productId: "p009",
    name: "Wireless Charger",
    price: 1500,
    category: "Electronics",
    image: "https://picsum.photos/200?9",
    stock: 30,
    description: "Fast wireless charger compatible with most smartphones",
  },
  {
    productId: "p010",
    name: "Sunglasses",
    price: 1900,
    category: "Fashion",
    image: "https://picsum.photos/200?10",
    stock: 22,
    description: "UV protected sunglasses with modern frame design",
  },
  {
    productId: "p011",
    name: "Office Chair",
    price: 12500,
    category: "Furniture",
    image: "https://picsum.photos/200?11",
    stock: 6,
    description: "Ergonomic office chair with lumbar support",
  },
  {
    productId: "p012",
    name: "Electric Kettle",
    price: 2600,
    category: "Home Appliances",
    image: "https://picsum.photos/200?12",
    stock: 16,
    description: "1.5-liter electric kettle with auto shut-off feature",
  },
  {
    productId: "p013",
    name: "Fitness Band",
    price: 3100,
    category: "Electronics",
    image: "https://picsum.photos/200?13",
    stock: 19,
    description: "Fitness band with heart rate and sleep monitoring",
  },
  {
    productId: "p014",
    name: "Desk Lamp",
    price: 1700,
    category: "Home Decor",
    image: "https://picsum.photos/200?14",
    stock: 28,
    description: "LED desk lamp with adjustable brightness levels",
  },
  {
    productId: "p015",
    name: "Leather Wallet",
    price: 2100,
    category: "Accessories",
    image: "https://picsum.photos/200?15",
    stock: 24,
    description: "Genuine leather wallet with multiple card slots",
  },
  {
    productId: "p016",
    name: "Yoga Mat",
    price: 1600,
    category: "Fitness",
    image: "https://picsum.photos/200?16",
    stock: 35,
    description: "Non-slip yoga mat ideal for home workouts",
  },
  {
    productId: "p017",
    name: "Coffee Maker",
    price: 8900,
    category: "Home Appliances",
    image: "https://picsum.photos/200?17",
    stock: 7,
    description: "Automatic coffee maker with multiple brew options",
  },
  {
    productId: "p018",
    name: "Bookshelf",
    price: 7400,
    category: "Furniture",
    image: "https://picsum.photos/200?18",
    stock: 9,
    description: "Wooden bookshelf with modern minimal design",
  },
  {
    productId: "p019",
    name: "Noise Cancelling Earbuds",
    price: 5200,
    category: "Electronics",
    image: "https://picsum.photos/200?19",
    stock: 13,
    description: "Compact earbuds with active noise cancellation",
  },
];

export async function GET() {
  try {
    return NextResponse.json(
      {
        message: "Products fetched successfully",
        success: true,
        products,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal Server Error",
        success: false,
      },
      { status: 500 }
    );
  }
}
