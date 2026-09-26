import { IBook } from "@/types/bookstype";
import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";
import AddToPlanButton from "@/components/shared/AddToPlanButton";
import SaveForLaterButton from "@/components/shared/SaveForLaterButton";

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

  console.log(book, "book");

  return (
    <div className="container mx-auto my-12 flex justify-between gap-22 mt-32">
      <Image
        src={book.image}
        alt={book.name}
        width={588}
        height={735}
        className="rounded-2xl h-full object-cover"
      />
      <div className="">
        <h2 className="text-4xl font-bold mb-3 uppercase">{book.name}</h2>
        <p className={`${inter.className} text-[16px] text-[#9CA3AF] mb-5`}>
          {book.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-7">
          {book.muscleGroups.map((muscle, ind) => (
            <span
              key={ind}
              className={`${inter.className} text-xs text-[#0F1115] font-semibold bg-[#CCFF00] rounded-full px-3.5 py-1`}
            >
              {muscle}
            </span>
          ))}
        </div>

        <div className="rounded-2xl border border-[#232834] bg-[#151922] mb-8">
          <table className={`${inter.className} w-full text-sm`}>
            <tbody>
              <tr className="border-b border-gray-800">
                <th className="px-5 py-3.5 text-left text-xs font-bold tracking-wide text-[#9CA3AF]">
                  EQUIPMENT
                </th>
                <td className="px-5 py-3.5 text-right text-[#E5E7EB]">
                  {book.equipment}
                </td>
              </tr>

              <tr className="border-b border-gray-800">
                <th className="px-5 py-3.5 text-left text-xs font-bold tracking-wide text-[#9CA3AF]">
                  DIFFICULTY
                </th>
                <td className="px-5 py-3.5 text-right text-[#E5E7EB]">
                  {book.difficulty}
                </td>
              </tr>

              <tr className="border-b border-gray-800">
                <th className="px-6 py-3.5 text-left text-xs font-bold tracking-wide text-[#9CA3AF]">
                  SETS
                </th>
                <td className="px-6 py-3.5 text-right text-[#E5E7EB]">
                  {book.sets}
                </td>
              </tr>

              <tr className="border-b border-gray-800">
                <th className="px-6 py-3.5 text-left text-xs font-bold tracking-wide text-[#9CA3AF]">
                  REPS
                </th>
                <td className="px-6 py-3.5 text-right text-[#E5E7EB]">
                  {book.reps}
                </td>
              </tr>

              <tr className="border-b border-gray-800">
                <th className="px-6 py-3.5 text-left text-xs font-bold tracking-wide text-[#9CA3AF]">
                  DURATION
                </th>
                <td className="px-6 py-3.5 text-right text-[#E5E7EB]">
                  {book.duration} min
                </td>
              </tr>

              <tr className="border-b border-gray-800">
                <th className="px-6 py-3.5 text-left text-xs font-bold tracking-wide text-[#9CA3AF]">
                  CALORIES
                </th>
                <td className="px-6 py-3.5 text-right text-[#E5E7EB]">
                  {book.caloriesBurned} kcal
                </td>
              </tr>

              <tr>
                <th className="px-6 py-3.5 text-left text-xs font-bold text-[#9CA3AF]">
                  RATING
                </th>
                <td className="px-6 py-3.5 text-right text-[#E5E7EB]">
                  {book.rating}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mb-9">
          <h2
            className={`${inter.className} text-[16px] font-extrabold uppercase tracking-widest`}
          >
            Instructions
          </h2>

          <ol className={`${inter.className} mt-3 space-y-2`}>
            {book.instructions.map((instruction, index) => (
              <li key={index} className="flex gap-2 text-sm leading-relaxed">
                <span className="text-[#9CA3AF]">{index + 1}.</span>

                <span className="text-[#D1D5DB]">{instruction}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className={`${inter.className} text-sm font-semibold flex gap-4`}>
          <AddToPlanButton key={book.id} book={book} />
          <SaveForLaterButton book={book} />
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
