import React from "react";
import { Inter } from "next/font/google";
import { IBook } from "@/types/bookstype";
// import Image from "next/image";
import BookCard from "../shared/BookCard";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const getBooks = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const Books = async () => {
  const books = await getBooks();

  return (
    <div className="container mx-auto">
      <div className="my-7">
        <h2 className="text-[30px] font-bold uppercase">The Library</h2>

        <p className={`${inter.className} text-[14px] text-[#9CA3AF]`}>
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* 3 Column Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {books.map((book: IBook, ind: number) => {
          return <BookCard key={ind} book={book} />;
        })}
      </div>
    </div>
  );
};

export default Books;
