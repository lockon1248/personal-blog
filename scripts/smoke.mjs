import { readFile, access } from "node:fs/promises";
import { constants } from "node:fs";

const requiredFiles = [
  "dist/index.html",
  "dist/journal/index.html",
  "dist/journal/hokkaido-ten-day-trip/index.html",
  "dist/photography/index.html",
];

for (const file of requiredFiles) {
  await access(file, constants.F_OK);
}

const assertions = [
  {
    file: "dist/index.html",
    includes: ['href="/photography"', 'href="/journal"'],
  },
  {
    file: "dist/photography/index.html",
    includes: [
      '<link rel="canonical" href="https://personal-blog-beige-mu.vercel.app/photography"',
      "Photography Archive",
    ],
  },
  {
    file: "dist/journal/hokkaido-ten-day-trip/index.html",
    includes: [
      "日本巡禮：北海道十日遊",
      "application/ld+json",
      'href="/journal"',
    ],
  },
];

for (const assertion of assertions) {
  const html = await readFile(assertion.file, "utf8");
  for (const expected of assertion.includes) {
    if (!html.includes(expected)) {
      throw new Error(`Missing "${expected}" in ${assertion.file}`);
    }
  }
}

console.log("Smoke checks passed.");
