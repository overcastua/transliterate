const RULES: {
  ua: string;
  lat: string;
  position?: string;
  examples: { ua: string; lat: string }[];
}[] = [
  {
    ua: "Аа",
    lat: "Aa",
    examples: [
      { ua: "Алушта", lat: "Alushta" },
      { ua: "Андрій", lat: "Andrii" },
    ],
  },
  {
    ua: "Бб",
    lat: "Bb",
    examples: [
      { ua: "Борщагівка", lat: "Borshchahivka" },
      { ua: "Борисенко", lat: "Borysenko" },
    ],
  },
  {
    ua: "Вв",
    lat: "Vv",
    examples: [
      { ua: "Вінниця", lat: "Vinnytsia" },
      { ua: "Володимир", lat: "Volodymyr" },
    ],
  },
  {
    ua: "Гг",
    lat: "Hh",
    examples: [
      { ua: "Гадяч", lat: "Hadiach" },
      { ua: "Богдан", lat: "Bohdan" },
      { ua: "Згурський", lat: "Zghurskyi" },
    ],
  },
  {
    ua: "Ґґ",
    lat: "Gg",
    examples: [
      { ua: "Ґалаґан", lat: "Galagan" },
      { ua: "Ґорґани", lat: "Gorgany" },
    ],
  },
  {
    ua: "Дд",
    lat: "Dd",
    examples: [
      { ua: "Донецьк", lat: "Donetsk" },
      { ua: "Дмитро", lat: "Dmytro" },
    ],
  },
  {
    ua: "Ее",
    lat: "Ee",
    examples: [
      { ua: "Рівне", lat: "Rivne" },
      { ua: "Олег", lat: "Oleh" },
      { ua: "Есмань", lat: "Esman" },
    ],
  },
  {
    ua: "Єє",
    lat: "Ye / ie",
    position: "Ye — на початку слова; ie — в інших позиціях",
    examples: [
      { ua: "Єнакієве", lat: "Yenakiieve" },
      { ua: "Гаєвич", lat: "Haievych" },
      { ua: "Короп'є", lat: "Koropie" },
    ],
  },
  {
    ua: "Жж",
    lat: "Zh zh",
    examples: [
      { ua: "Житомир", lat: "Zhytomyr" },
      { ua: "Жанна", lat: "Zhanna" },
      { ua: "Жежелів", lat: "Zhezheliv" },
    ],
  },
  {
    ua: "Зз",
    lat: "Zz",
    examples: [
      { ua: "Закарпаття", lat: "Zakarpattia" },
      { ua: "Казимирчук", lat: "Kazymyrchuk" },
    ],
  },
  {
    ua: "Ии",
    lat: "Yy",
    examples: [
      { ua: "Медвин", lat: "Medvyn" },
      { ua: "Михайленко", lat: "Mykhailenko" },
    ],
  },
  {
    ua: "Іі",
    lat: "Ii",
    examples: [
      { ua: "Іванків", lat: "Ivankiv" },
      { ua: "Іващенко", lat: "Ivashchenko" },
    ],
  },
  {
    ua: "Її",
    lat: "Yi / i",
    position: "Yi — на початку слова; i — в інших позиціях",
    examples: [
      { ua: "Їжакевич", lat: "Yizhakevych" },
      { ua: "Кадиївка", lat: "Kadyivka" },
      { ua: "Мар'їне", lat: "Marine" },
    ],
  },
  {
    ua: "Йй",
    lat: "Y / i",
    position: "Y — на початку слова; i — в інших позиціях",
    examples: [
      { ua: "Йосипівка", lat: "Yosypivka" },
      { ua: "Стрий", lat: "Stryi" },
      { ua: "Олексій", lat: "Oleksii" },
    ],
  },
  {
    ua: "Кк",
    lat: "Kk",
    examples: [
      { ua: "Київ", lat: "Kyiv" },
      { ua: "Коваленко", lat: "Kovalenko" },
    ],
  },
  {
    ua: "Лл",
    lat: "Ll",
    examples: [
      { ua: "Лебедин", lat: "Lebedyn" },
      { ua: "Леонід", lat: "Leonid" },
    ],
  },
  {
    ua: "Мм",
    lat: "Mm",
    examples: [
      { ua: "Миколаїв", lat: "Mykolaiv" },
      { ua: "Маринич", lat: "Marynych" },
    ],
  },
  {
    ua: "Нн",
    lat: "Nn",
    examples: [
      { ua: "Ніжин", lat: "Nizhyn" },
      { ua: "Наталія", lat: "Nataliia" },
    ],
  },
  {
    ua: "Оо",
    lat: "Oo",
    examples: [
      { ua: "Одеса", lat: "Odesa" },
      { ua: "Онищенко", lat: "Onyshchenko" },
    ],
  },
  {
    ua: "Пп",
    lat: "Pp",
    examples: [
      { ua: "Полтава", lat: "Poltava" },
      { ua: "Петро", lat: "Petro" },
    ],
  },
  {
    ua: "Рр",
    lat: "Rr",
    examples: [
      { ua: "Решетилівка", lat: "Reshetylivka" },
      { ua: "Рибчинський", lat: "Rybchynskyi" },
    ],
  },
  {
    ua: "Сс",
    lat: "Ss",
    examples: [
      { ua: "Суми", lat: "Sumy" },
      { ua: "Соломія", lat: "Solomiia" },
    ],
  },
  {
    ua: "Тт",
    lat: "Tt",
    examples: [
      { ua: "Тернопіль", lat: "Ternopil" },
      { ua: "Троць", lat: "Trots" },
    ],
  },
  {
    ua: "Уу",
    lat: "Uu",
    examples: [
      { ua: "Ужгород", lat: "Uzhhorod" },
      { ua: "Уляна", lat: "Uliana" },
    ],
  },
  {
    ua: "Фф",
    lat: "Ff",
    examples: [
      { ua: "Фастів", lat: "Fastiv" },
      { ua: "Філіпчук", lat: "Filipchuk" },
    ],
  },
  {
    ua: "Хх",
    lat: "Kh kh",
    examples: [
      { ua: "Харків", lat: "Kharkiv" },
      { ua: "Христина", lat: "Khrystyna" },
    ],
  },
  {
    ua: "Цц",
    lat: "Ts ts",
    examples: [
      { ua: "Біла Церква", lat: "Bila Tserkva" },
      { ua: "Стеценко", lat: "Stetsenko" },
    ],
  },
  {
    ua: "Чч",
    lat: "Ch ch",
    examples: [
      { ua: "Чернівці", lat: "Chernivtsi" },
      { ua: "Шевченко", lat: "Shevchenko" },
    ],
  },
  {
    ua: "Шш",
    lat: "Sh sh",
    examples: [
      { ua: "Шостка", lat: "Shostka" },
      { ua: "Кишеньки", lat: "Kyshenky" },
    ],
  },
  {
    ua: "Щщ",
    lat: "Shch shch",
    examples: [
      { ua: "Щербухи", lat: "Shcherbukhy" },
      { ua: "Гоща", lat: "Hoshcha" },
      { ua: "Гаращенко", lat: "Harashchenko" },
    ],
  },
  {
    ua: "Юю",
    lat: "Yu / iu",
    position: "Yu — на початку слова; iu — в інших позиціях",
    examples: [
      { ua: "Юрій", lat: "Yurii" },
      { ua: "Корюківка", lat: "Koriukivka" },
    ],
  },
  {
    ua: "Яя",
    lat: "Ya / ia",
    position: "Ya — на початку слова; ia — в інших позиціях",
    examples: [
      { ua: "Яготин", lat: "Yahotyn" },
      { ua: "Костянтин", lat: "Kostiantyn" },
      { ua: "Знам'янка", lat: "Znamianka" },
    ],
  },
];

export default function RulesTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse border border-neutral-300 dark:border-neutral-700">
        <thead>
          <tr className="bg-neutral-100 dark:bg-neutral-800">
            <th className="border border-neutral-300 dark:border-neutral-700 px-4 py-2.5 text-left font-semibold text-neutral-700 dark:text-neutral-300 whitespace-nowrap">
              Укр.
            </th>
            <th className="border border-neutral-300 dark:border-neutral-700 px-4 py-2.5 text-left font-semibold text-neutral-700 dark:text-neutral-300 whitespace-nowrap">
              Латиниця
            </th>
            <th className="border border-neutral-300 dark:border-neutral-700 px-4 py-2.5 text-left font-semibold text-neutral-700 dark:text-neutral-300 hidden md:table-cell">
              Позиція
            </th>
            <th className="border border-neutral-300 dark:border-neutral-700 px-4 py-2.5 text-left font-semibold text-neutral-700 dark:text-neutral-300">
              Приклади (укр. → лат.)
            </th>
          </tr>
        </thead>
        <tbody>
          {RULES.map((row, idx) => (
            <tr
              key={row.ua}
              className={
                idx % 2 === 0
                  ? "bg-white dark:bg-neutral-900"
                  : "bg-neutral-50 dark:bg-neutral-900/50"
              }
            >
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2.5 font-mono text-base text-neutral-900 dark:text-neutral-100 whitespace-nowrap">
                {row.ua}
              </td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2.5 font-mono text-base text-neutral-900 dark:text-neutral-100 whitespace-nowrap">
                {row.lat}
              </td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2.5 text-neutral-500 dark:text-neutral-400 text-xs hidden md:table-cell">
                {row.position ?? "—"}
              </td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2.5">
                <ul className="space-y-0.5">
                  {row.examples.map((ex) => (
                    <li
                      key={ex.ua}
                      className="text-neutral-700 dark:text-neutral-300"
                    >
                      <span className="font-medium">{ex.ua}</span>
                      <span className="text-neutral-400 dark:text-neutral-600 mx-1">
                        →
                      </span>
                      <span className="font-mono text-neutral-600 dark:text-neutral-400">
                        {ex.lat}
                      </span>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
