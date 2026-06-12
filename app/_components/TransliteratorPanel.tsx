"use client";

import { useState, useCallback } from "react";
import { transliterate } from "@/lib/transliterate";

export default function TransliteratorPanel() {
  const [input, setInput] = useState("");
  const output = transliterate(input);

  const handleCopy = useCallback(() => {
    if (!output) return;
    navigator.clipboard.writeText(output);
  }, [output]);

  const handleClear = useCallback(() => {
    setInput("");
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-neutral-300 dark:border-neutral-700">
      {/* Input */}
      <div className="flex flex-col border-r-0 md:border-r border-b md:border-b-0 border-neutral-300 dark:border-neutral-700">
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800">
          <span className="text-sm font-semibold tracking-widest uppercase text-neutral-500 dark:text-neutral-400">
            Українська
          </span>
          <button
            onClick={handleClear}
            disabled={!input}
            className="text-sm text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
            aria-label="Очистити"
          >
            Очистити
          </button>
        </div>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Введіть текст українською…"
          spellCheck={false}
          className="flex-1 min-h-96 w-full resize-none p-6 text-xl leading-relaxed bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-900 dark:focus:ring-neutral-400"
          aria-label="Введіть текст для транслітерації"
        />
        <div className="px-6 py-3 border-t border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800/50">
          <span className="text-sm text-neutral-400 tabular-nums">
            {[...input].length} симв.
          </span>
        </div>
      </div>

      {/* Output */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800">
          <span className="text-sm font-semibold tracking-widest uppercase text-neutral-500 dark:text-neutral-400">
            Латиниця
          </span>
          <button
            onClick={handleCopy}
            disabled={!output}
            className="text-sm text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
            aria-label="Скопіювати результат"
          >
            Копіювати
          </button>
        </div>
        <div
          className="flex-1 min-h-96 p-6 text-xl leading-relaxed bg-neutral-50 dark:bg-neutral-900/50 text-neutral-900 dark:text-neutral-100 whitespace-pre-wrap break-words select-all"
          aria-label="Результат транслітерації"
          aria-live="polite"
        >
          {output || (
            <span className="text-neutral-400 dark:text-neutral-600 select-none">
              Тут з'явиться результат…
            </span>
          )}
        </div>
        <div className="px-6 py-3 border-t border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800/50">
          <span className="text-sm text-neutral-400 tabular-nums">
            {[...output].length} симв.
          </span>
        </div>
      </div>
    </div>
  );
}
