import { IBook } from "@/types/bookstype";
import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";
import AddToPlanButton from "@/components/shared/AddToPlanButton";
import SaveForLaterButton from "@/components/shared/SaveForLaterButton";
import { notFound } from "next/navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface IBookDetailsPage {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const BookDetailsPage = async ({ params }: IBookDetailsPage) => {
  const { id } = await params;
  const booksData = await getBooks();

  const book = booksData.find(
    (book: IBook) => String(book.id) === String(id),
  ) as IBook;

  if (!book) {
    notFound();
  }

  return (
    <div className="container mx-auto mt-24 px-4 sm:mt-28 sm:px-6 lg:mt-32 lg:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8 lg:gap-12">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={book.image}
            alt={book.name}
            width={588}
            height={735}
            className="h-auto max-h-125 w-full rounded-2xl object-cover md:max-h-162.5"
          />
        </div>

        {/* Details */}
        <div className="w-full min-w-0 md:w-1/2">
          <h2 className="mb-3 text-2xl font-bold uppercase sm:text-3xl lg:text-4xl">
            {book.name}
          </h2>

          <p
            className={`${inter.className} mb-5 text-sm leading-relaxed text-[#9CA3AF] sm:text-base`}
          >
            {book.description}
          </p>

          {/* Muscle Groups */}
          <div className="mb-7 flex flex-wrap gap-2">
            {book.muscleGroups.map((muscle, ind) => (
              <span
                key={ind}
                className={`${inter.className} rounded-full bg-[#CCFF00] px-3.5 py-1 text-xs font-semibold text-[#0F1115]`}
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Workout Information */}
          <div className="mb-8 overflow-x-auto rounded-2xl border border-[#232834] bg-[#151922]">
            <table className={`${inter.className} w-full text-sm`}>
              <tbody>
                {[
                  ["EQUIPMENT", book.equipment],
                  ["DIFFICULTY", book.difficulty],
                  ["SETS", book.sets],
                  ["REPS", book.reps],
                  ["DURATION", `${book.duration} min`],
                  ["CALORIES", `${book.caloriesBurned} kcal`],
                  ["RATING", book.rating],
                ].map(([label, value], index, arr) => (
                  <tr
                    key={label}
                    className={
                      index !== arr.length - 1 ? "border-b border-gray-800" : ""
                    }
                  >
                    <th className="px-4 py-3.5 text-left text-xs font-bold tracking-wide text-[#9CA3AF] sm:px-5">
                      {label}
                    </th>

                    <td className="wrap-break-word px-4 py-3.5 text-right text-[#E5E7EB] sm:px-5">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Instructions */}
          <div className="mb-8 sm:mb-9">
            <h2
              className={`${inter.className} text-sm font-extrabold uppercase tracking-widest sm:text-base`}
            >
              Instructions
            </h2>

            <ol className={`${inter.className} mt-3 space-y-3`}>
              {book.instructions.map((instruction, index) => (
                <li key={index} className="flex gap-2 text-sm leading-relaxed">
                  <span className="shrink-0 text-[#9CA3AF]">{index + 1}.</span>

                  <span className="text-[#D1D5DB]">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Buttons */}
          <div
            className={`${inter.className} flex flex-col gap-3 text-sm font-semibold sm:flex-row sm:gap-4`}
          >
            <AddToPlanButton key={book.id} book={book} />
            <SaveForLaterButton book={book} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
