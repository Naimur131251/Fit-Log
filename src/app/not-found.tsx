import Link from "next/link";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-[#0C0D10] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-[#CCFF00]">
          FITLOG
        </p>

        <h1 className="text-7xl font-black tracking-tight text-white sm:text-9xl">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-bold uppercase text-white">
          Page Not Found
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-400">
          Looks like this workout route does not exist. Let us get you back to
          the workout library.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center rounded-full bg-[#CCFF00] px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-[#b8e600]"
        >
          ← Back to Workouts
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
