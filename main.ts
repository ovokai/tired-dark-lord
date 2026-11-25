import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const monologue =
  "The candles, Griznak. The black ones. We have discussed this—the seventh gate does not open for beeswax. Yes, the hero is coming. He's always coming. I've killed four of him; the fifth is reportedly taller. Let him climb. The stairs are the real trial. When he reaches the hall, offer the good wine—not the poisoned, the good one, I'm not made of poison—then the usual: prophecy, gloating, the bit with the sword. Three hundred years of this. I have conquered everything except the filing. Wake me at the eclipse. No. Not that eclipse. The one with the gate.";

function writeEntry(): string {
  try {
    mkdirSync("/output", { recursive: true });
    const target = join("/output", "entry.txt");
    writeFileSync(target, monologue, "utf8");
    return target;
  } catch {
    const target = join(process.cwd(), "entry.txt");
    writeFileSync(target, monologue, "utf8");
    return target;
  }
}

const written = writeEntry();
console.log(`Wrote entry to ${written}`);
