import React from "react";
import Link from "next/link";

const page = () => {
  const links = [
    { href: "/accordion", label: "1. accordion" },
    { href: "/alert-dialog", label: "2. alert-dialog" },
    { href: "/avatar", label: "3. avatar" },
    { href: "/alert", label: "4. alert"},
    { heref "/aspect-ratio", label:"5. aspect-ratio"},
  ];
  return (
    <div className="flex flex-col gap-4">
      {links.map((item) => {
        return <Link href={item.href}>{item.label}</Link>;
      })}
    </div>
  );
};

export default page;
