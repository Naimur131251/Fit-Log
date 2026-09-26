import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";
import { IBook } from "@/types/bookstype";
import Link from "next/link";
import { FaRegClock, FaRegStar } from "react-icons/fa";
import { AiFillFire } from "react-icons/ai";

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
    <Link href={`/book-details/${book.id}`} className="block h-full min-w-0">
      <div className="h-full overflow-hidden rounded-xl border border-[#292D35] bg-[#15171C] transition duration-300 hover:border-[#C2F800]">
        {/* Image */}
        <div className="h-48 w-full overflow-hidden sm:h-52 lg:h-55">
          <Image
            src={book.image}
            alt={book.name}
            width={600}
            height={400}
            className="h-full w-full object-cover transition duration-300 hover:scale-105"
          />
        </div>

        {/* Card Content */}
        <div className="p-4 sm:p-5">
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
          <h3 className="font-oswald text-lg font-bold uppercase text-white sm:text-xl">
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
            className={`${inter.className} flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#9CA3AF]`}
          >
            <p className="flex items-center gap-1">
              <FaRegClock />
              {book.duration} min
            </p>

            <p className="flex items-center gap-1">
              <AiFillFire className="rotate-y shrink-0" />
              {book.caloriesBurned} kcal
            </p>

            <p className="flex items-center gap-1">
              <FaRegStar />
              {book.rating}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
