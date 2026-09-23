import React from "react";
import { Inter } from "next/font/google";
import { IBook } from "@/types/bookstype";
import Image from "next/image";

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
        {books.map((book: IBook) => {
          return (
            <div
              key={book.id}
              className="overflow-hidden rounded-xl border border-[#292D35] bg-[#15171C]"
            >
              {/* Image */}
              <div className="h-55 w-full overflow-hidden">
                <Image
                  src={book.image}
                  alt={book.name}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-5">
                {/* Muscle Groups */}
                <div className="mb-3 flex flex-wrap gap-2">
                  {book.muscleGroups.map((muscle) => (
                    <span
                      key={muscle}
                      className="rounded-full bg-[#C2F800] px-2.5 py-1 text-[10px] font-bold uppercase text-black"
                    >
                      {muscle}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-oswald text-xl font-bold uppercase text-white">
                  {book.name}
                </h3>

                {/* Equipment */}
                <p
                  className={`${inter.className} mt-2 line-clamp-2 text-sm text-[#9CA3AF]`}
                >
                  {book.equipment}
                </p>

                {/* Divider */}
                <div className="my-4 h-px bg-[#292D35]" />

                {/* Workout Info */}
                <div
                  className={`${inter.className} flex gap-5 text-xs text-[#9CA3AF]`}
                >
                  <p>⏱ {book.duration} min</p>
                  <p>♦ {book.caloriesBurned} kcal</p>
                  <p>★ {book.rating}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Books;
