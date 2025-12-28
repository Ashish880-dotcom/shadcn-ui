"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { IUser } from "./api/v1/users/route";

export default function AccordionDemo() {
  const [users, setUsers] = useState<IUser[]>([]);
  const handleFetchUsers = async () => {
    try {
      const response = await axios.get("/api/v1/users");
      console.log(response);
      setUsers(response.data.users);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    handleFetchUsers();
  }, []);
  return (
    <>
      {users.map((user) => {
        return <div>{user.username}</div>;
      })}
    </>
  );
}
