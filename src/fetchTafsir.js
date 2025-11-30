// scripts/fetchTafsir.js
import fetch from "node-fetch";
import fs from "fs/promises";
import path from "path";

const base = "https://cdn.jsdelivr.net/gh/spa5k/tafsir_api@main/tafsir/ar-tafseer-al-jalalayn";

async function fetchOne(surah, ayah) {
    const url = `${base}/${surah}/${ayah}.json`;
    try {
        const res = await fetch(url);
        if (!res.ok) return null;
        const data = await res.json();
        return data.text;
    } catch {
        return null;
    }
}

async function run() {
    for (let surah = 1; surah <= 114; surah++) {
        const dir = path.resolve("public/tafsir/jalalayn", `${surah}`);
        await fs.mkdir(dir, { recursive: true });
        console.log(`📝 سورة ${surah}:`);
        for (let ayah = 1; ayah <= 300; ayah++) {
            const text = await fetchOne(surah, ayah);
            if (!text) break;
            await fs.writeFile(
                path.join(dir, `${ayah}.json`),
                JSON.stringify({ text }, null, 2)
            );
            console.log(`  ✔️ آية ${ayah}`);
        }
    }
    console.log("✅ تم التحميل بنجاح.");
}

run();