"use client";

import Link from "next/link";

const Button = () => {
  return (
    <Link href="/mailto:superur@gmail.com">
      <a className="px-6 py-3 bg-gray-300 text-gray-900 rounded-full font-bold text-xl">
        Contact
      </a>
    </Link>
  );
};
