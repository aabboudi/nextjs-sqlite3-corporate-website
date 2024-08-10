import { sqliteTable, integer, text, blob } from "drizzle-orm/sqlite-core";

type Year = `${number}${number}${number}${number}`;
type Month = `0${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}` | `1${0 | 1 | 2}`;
type Day = `0${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}` | `${1 | 2}${number}` | "30" | "31";

type DateString = `${Year}-${Month}-${Day}`;

type StringArray = string[] & { __brand: 'string_array' };

export const Articles = sqliteTable("Articles", {
    id: integer("ID").primaryKey(),
    title: text("Title"),
    slug: text("URL Slug"),
    image: text("Image URL"),
    alt_text: text("Credits"),
    category: text("Category"),
    location: text("Location"),
    posted_on: text("Posted On").$type<DateString>(),
    content: text("Content").$type<StringArray>(),
});
