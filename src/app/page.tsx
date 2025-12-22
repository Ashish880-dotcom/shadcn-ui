import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Link href="/accordion">accordion</Link>
      <br />
      <Link href="/alert-dialog">alert-dialog</Link>
      <br />
      <Link href="/avatar">avatar</Link>
    </div>
  );
};

export default page;
