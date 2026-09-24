import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";
import { IBook } from "@/types/bookstype";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface IBookCard {
  book: IBook;
}

const BookCard = ({ book }: IBookCard) => {
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
        <div className={`${inter.className} flex gap-5 text-xs text-[#9CA3AF]`}>
          <p>⏱ {book.duration} min</p>
          <p>♦ {book.caloriesBurned} kcal</p>
          <p>★ {book.rating}</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
