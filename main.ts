// Entry for "One-Line Roast: The Gadget You Use Every Day" (make.fun).
// Roasts the phone battery: nine honest hours, then a cliff edge timed
// exactly to the search for the charger. The percentage is a promise the
// phone only keeps while you are not looking at it.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My phone's battery goes from 100% to 20% in nine hours, then from 20% to dead in the time it takes me to find the charger.";

// The gate takes a single line of 1-200 characters; refuse anything else.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-200`);
}
if (ENTRY.trim() !== ENTRY || /\n/.test(ENTRY)) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
