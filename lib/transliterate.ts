/**
 * Ukrainian to Latin transliteration
 * Based on the official Ukrainian transliteration rules
 * (Resolution of the Cabinet of Ministers of Ukraine No. 55, 2010)
 *
 * Rules:
 * - Є, Ї, Й, Ю, Я → Ye/Yo/Yi/Yu/Ya at word start, ie/i/i/iu/ia elsewhere
 * - зг → zgh (to distinguish from ж → zh)
 * - Soft sign (ь) and apostrophe (') are not transliterated
 */

// Map for characters in non-initial positions
const MAP: Record<string, string> = {
  а: "a",
  б: "b",
  в: "v",
  г: "h",
  ґ: "g",
  д: "d",
  е: "e",
  є: "ie",
  ж: "zh",
  з: "z",
  и: "y",
  і: "i",
  ї: "i",
  й: "i",
  к: "k",
  л: "l",
  м: "m",
  н: "n",
  о: "o",
  п: "p",
  р: "r",
  с: "s",
  т: "t",
  у: "u",
  ф: "f",
  х: "kh",
  ц: "ts",
  ч: "ch",
  ш: "sh",
  щ: "shch",
  ю: "iu",
  я: "ia",
};

// Map for characters at word-initial positions
const MAP_INITIAL: Record<string, string> = {
  ...MAP,
  є: "ye",
  ї: "yi",
  й: "y",
  ю: "yu",
  я: "ya",
};

const UPPERCASE_MAP: Record<string, string> = {};
const UPPERCASE_MAP_INITIAL: Record<string, string> = {};

for (const [lc, lat] of Object.entries(MAP)) {
  UPPERCASE_MAP[lc.toUpperCase()] = capitalize(lat);
}
for (const [lc, lat] of Object.entries(MAP_INITIAL)) {
  UPPERCASE_MAP_INITIAL[lc.toUpperCase()] = capitalize(lat);
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/** Returns true if character is a Ukrainian letter */
function isUkrainianLetter(ch: string): boolean {
  return /[а-яіїєґьА-ЯІЇЄҐЬ'ʼ]/u.test(ch);
}

/** Returns true if character is a word separator (space, hyphen, etc.) */
function isWordBoundary(ch: string): boolean {
  return /[\s\-—–.,;:!?()[\]{}"«»\/\\]/.test(ch);
}

export function transliterate(text: string): string {
  if (!text) return "";

  const chars = [...text]; // handle multi-byte chars safely
  const result: string[] = [];
  let i = 0;

  while (i < chars.length) {
    const ch = chars[i];
    const lc = ch.toLowerCase();

    // skip soft sign and apostrophe
    if (lc === "ь" || ch === "'" || ch === "ʼ" || ch === "\u2019") {
      i++;
      continue;
    }

    // Handle зг / ЗГ / Зг → zgh
    if (lc === "з" && i + 1 < chars.length && chars[i + 1].toLowerCase() === "г") {
      const isUpper = ch === ch.toUpperCase() && ch !== ch.toLowerCase();
      const nextUpper =
        chars[i + 1] === chars[i + 1].toUpperCase() &&
        chars[i + 1] !== chars[i + 1].toLowerCase();

      // Determine word-initial for з
      const atStart = isAtWordStart(chars, i);

      if (isUpper && nextUpper) {
        result.push(atStart ? "ZGH" : "ZGH");
      } else if (isUpper) {
        result.push(atStart ? "Zgh" : "Zgh");
      } else {
        result.push(atStart ? "zgh" : "zgh");
      }
      i += 2;
      continue;
    }

    const atStart = isAtWordStart(chars, i);
    const isUpper = ch === ch.toUpperCase() && ch !== ch.toLowerCase();
    const lcMap = atStart ? MAP_INITIAL : MAP;
    const ucMap = atStart ? UPPERCASE_MAP_INITIAL : UPPERCASE_MAP;

    if (isUpper && ucMap[ch]) {
      // Check if the entire word is uppercase → emit uppercase lat
      result.push(ucMap[ch]);
      i++;
      continue;
    }

    if (!isUpper && lcMap[lc]) {
      result.push(lcMap[lc]);
      i++;
      continue;
    }

    // passthrough for non-Ukrainian characters
    result.push(ch);
    i++;
  }

  return result.join("");
}

function isAtWordStart(chars: string[], i: number): boolean {
  if (i === 0) return true;
  const prev = chars[i - 1];
  return isWordBoundary(prev) || !isUkrainianLetter(prev);
}
