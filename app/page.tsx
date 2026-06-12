import TransliteratorPanel from "./_components/TransliteratorPanel";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              Транслітерація
            </h1>
            <p className="mt-0.5 text-sm text-neutral-500 dark:text-neutral-400">
              Українська → Латиниця
            </p>
          </div>
          <span className="text-xs text-neutral-400 dark:text-neutral-600 whitespace-nowrap">
            За правилами Постанови КМУ № 55 від 27 січня 2010 р.
          </span>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-10">
        <TransliteratorPanel />
      </main>

    </div>
  );
}
