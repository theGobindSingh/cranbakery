/* eslint-disable no-console -- script */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

// .agents/<name> is the source of truth; .claude/<name> is a generated symlink
// so tools that only look under .claude/ (Claude Code) still find them.
const LINKS = ["skills", "agents"];

function link(name) {
  const source = path.join(root, ".agents", name);
  const linkPath = path.join(root, ".claude", name);

  console.log(`🔗 Linking .claude/${name} -> .agents/${name}...`);

  if (!fs.existsSync(source)) {
    fs.mkdirSync(source, { recursive: true });
    console.log(`   • created .agents/${name} (source of truth for ${name})`);
  }

  fs.mkdirSync(path.dirname(linkPath), { recursive: true });

  let linkExists = false;
  try {
    fs.lstatSync(linkPath);
    linkExists = true;
  } catch {
    linkExists = false;
  }

  if (linkExists) {
    const stat = fs.lstatSync(linkPath);

    if (stat.isSymbolicLink()) {
      let resolved;
      try {
        resolved = fs.realpathSync(linkPath);
      } catch {
        resolved = null;
      }

      if (resolved === fs.realpathSync(source)) {
        console.log(`✅ .claude/${name} already links to .agents/${name}`);
        return;
      }

      fs.unlinkSync(linkPath);
      console.log("   • removed stale symlink");
    } else {
      console.error(
        `❌ .claude/${name} exists as a real directory/file, not a symlink.\n` +
          `   Move any contents into .agents/${name}, then delete .claude/${name} and re-run \`pnpm install\`.`,
      );
      process.exit(1);
    }
  }

  const symlinkType = process.platform === "win32" ? "junction" : "dir";
  const target =
    process.platform === "win32"
      ? source
      : path.relative(path.dirname(linkPath), source);

  try {
    fs.symlinkSync(target, linkPath, symlinkType);
    console.log(`✅ .claude/${name} -> .agents/${name}`);
  } catch (err) {
    if (process.platform === "win32" && err.code === "EPERM") {
      console.error(
        "❌ Could not create symlink/junction on Windows. Enable Developer Mode or run this install as Administrator.",
      );
      process.exit(1);
    }
    throw err;
  }
}

for (const name of LINKS) link(name);
