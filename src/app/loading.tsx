const Loading = () => {
  return (
    <main className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-[#CCFF00]" />

        <p className="mt-4 text-sm text-gray-400">
          Loading workouts...
        </p>
      </div>
    </main>
  );
};

export default Loading;