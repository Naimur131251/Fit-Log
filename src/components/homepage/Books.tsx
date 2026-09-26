import React from "react";
import { Inter } from "next/font/google";
import { IBook } from "@/types/bookstype";
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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="my-7">
        <h2 className="text-2xl font-bold uppercase sm:text-3xl">
          The Library
        </h2>

        <p className={`${inter.className} mt-2 text-sm text-[#9CA3AF]`}>
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {books.map((book: IBook) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
