import { NextResponse } from "next/server";
export interface IUser {
  userId: string;
  username: string;
  age: number;
  email: string;
  image: string;
  address: string;
}

const users: IUser[] = [
  {
    userId: "u001",
    username: "Aarav Sharma",
    age: 24,
    email: "aarav.sharma@gmail.com",
    image: "https://i.pravatar.cc/150?img=1",
    address: "Kathmandu, Nepal",
  },
  {
    userId: "u002",
    username: "Sita Thapa",
    age: 22,
    email: "sita.thapa@gmail.com",
    image: "https://i.pravatar.cc/150?img=2",
    address: "Pokhara, Nepal",
  },
  {
    userId: "u003",
    username: "Ramesh Karki",
    age: 28,
    email: "ramesh.karki@gmail.com",
    image: "https://i.pravatar.cc/150?img=3",
    address: "Lalitpur, Nepal",
  },
  {
    userId: "u004",
    username: "Anita Gurung",
    age: 25,
    email: "anita.gurung@gmail.com",
    image: "https://i.pravatar.cc/150?img=4",
    address: "Chitwan, Nepal",
  },
  {
    userId: "u005",
    username: "Bikash Adhikari",
    age: 30,
    email: "bikash.adhikari@gmail.com",
    image: "https://i.pravatar.cc/150?img=5",
    address: "Butwal, Nepal",
  },

  {
    userId: "u006",
    username: "Nisha Shrestha",
    age: 23,
    email: "nisha.shrestha@gmail.com",
    image: "https://i.pravatar.cc/150?img=6",
    address: "Bhaktapur, Nepal",
  },
  {
    userId: "u007",
    username: "Kiran Poudel",
    age: 27,
    email: "kiran.poudel@gmail.com",
    image: "https://i.pravatar.cc/150?img=7",
    address: "Bharatpur, Nepal",
  },
  {
    userId: "u008",
    username: "Pratik Joshi",
    age: 26,
    email: "pratik.joshi@gmail.com",
    image: "https://i.pravatar.cc/150?img=8",
    address: "Dharan, Nepal",
  },
  {
    userId: "u009",
    username: "Sunita Rai",
    age: 24,
    email: "sunita.rai@gmail.com",
    image: "https://i.pravatar.cc/150?img=9",
    address: "Itahari, Nepal",
  },
  {
    userId: "u010",
    username: "Rohit Basnet",
    age: 29,
    email: "rohit.basnet@gmail.com",
    image: "https://i.pravatar.cc/150?img=10",
    address: "Hetauda, Nepal",
  },

  {
    userId: "u011",
    username: "Manisha KC",
    age: 21,
    email: "manisha.kc@gmail.com",
    image: "https://i.pravatar.cc/150?img=11",
    address: "Dang, Nepal",
  },
  {
    userId: "u012",
    username: "Suman Bista",
    age: 32,
    email: "suman.bista@gmail.com",
    image: "https://i.pravatar.cc/150?img=12",
    address: "Dhangadhi, Nepal",
  },
  {
    userId: "u013",
    username: "Alisha Pandey",
    age: 23,
    email: "alisha.pandey@gmail.com",
    image: "https://i.pravatar.cc/150?img=13",
    address: "Biratnagar, Nepal",
  },
  {
    userId: "u014",
    username: "Nabin Khadka",
    age: 35,
    email: "nabin.khadka@gmail.com",
    image: "https://i.pravatar.cc/150?img=14",
    address: "Janakpur, Nepal",
  },
  {
    userId: "u015",
    username: "Puja Mishra",
    age: 27,
    email: "puja.mishra@gmail.com",
    image: "https://i.pravatar.cc/150?img=15",
    address: "Birgunj, Nepal",
  },

  {
    userId: "u016",
    username: "Sagar Tamang",
    age: 26,
    email: "sagar.tamang@gmail.com",
    image: "https://i.pravatar.cc/150?img=16",
    address: "Nuwakot, Nepal",
  },
  {
    userId: "u017",
    username: "Kritika Lama",
    age: 22,
    email: "kritika.lama@gmail.com",
    image: "https://i.pravatar.cc/150?img=17",
    address: "Sindhupalchok, Nepal",
  },
  {
    userId: "u018",
    username: "Dipesh Shahi",
    age: 31,
    email: "dipesh.shahi@gmail.com",
    image: "https://i.pravatar.cc/150?img=18",
    address: "Surkhet, Nepal",
  },
  {
    userId: "u019",
    username: "Aakash Yadav",
    age: 28,
    email: "aakash.yadav@gmail.com",
    image: "https://i.pravatar.cc/150?img=19",
    address: "Lahan, Nepal",
  },
  {
    userId: "u020",
    username: "Sneha Acharya",
    age: 24,
    email: "sneha.acharya@gmail.com",
    image: "https://i.pravatar.cc/150?img=20",
    address: "Tansen, Nepal",
  },
];

export async function GET() {
  try {
    const filteredUsers = users.filter((user) => user.age > 22);
    return NextResponse.json(
      {
        message: "Users Fetched Succefully",
        success: true,
        users: filteredUsers,
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
