import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const patches = ["braces-3.0.3", "node-forge-1.4.0", "nuxt-devtools-3.4.2"].map(
  (name) =>
    JSON.parse(readFileSync(resolve(root, "patches", `${name}.json`), "utf8")),
);
const hash = (content) => createHash("sha256").update(content).digest("hex");

function securityPatches({ apply = false } = {}) {
  for (const patch of patches) {
    const directory = resolve(root, "node_modules", patch.name);
    const installed = JSON.parse(
      readFileSync(resolve(directory, "package.json"), "utf8"),
    );
    if (installed.version !== patch.version) {
      throw new Error(
        `Review security patch for ${patch.name}@${installed.version}`,
      );
    }
    for (const file of patch.files) {
      const target = resolve(directory, file.path);
      let content = readFileSync(target, "utf8");
      if (hash(content) === file.patchedHash) continue;
      if (!apply || hash(content) !== file.originalHash) {
        throw new Error(
          `Missing or unexpected security patch: ${patch.name}/${file.path}`,
        );
      }
      for (const replacement of file.replacements) {
        if (content.split(replacement.before).length !== 2) {
          throw new Error(`Ambiguous security patch: ${target}`);
        }
        content = content.replace(replacement.before, replacement.after);
      }
      if (hash(content) !== file.patchedHash)
        throw new Error(`Invalid patch: ${target}`);
      writeFileSync(target, content);
    }
  }
}

const checkOnly = process.argv.includes("--check");
securityPatches({ apply: !checkOnly });
console.log(
  checkOnly
    ? "Verified version-scoped dependency patches."
    : "Applied version-scoped dependency patches.",
);
