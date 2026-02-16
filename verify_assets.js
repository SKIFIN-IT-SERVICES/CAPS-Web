import fs from 'fs';
import path from 'path';

const services = [
    "health-claims-management",
    "dental-claims-processing",
    "property-casualty-insurance",
    "member-management",
    "provider-management",
    "fsa-administration",
    "data-conversions",
    "consulting-restructuring",
    "it-support-co-management",
    "claims-adjudication-services",
    "claims-management-system-reseller",
    "modern-legacy-web-wrapper"
];

const processDir = path.join(process.cwd(), 'public', 'images', 'process');

console.log(`Checking directory: ${processDir}`);

let missingCount = 0;
let emptyCount = 0;

if (!fs.existsSync(processDir)) {
    console.error("❌ Directory does not exist!");
    process.exit(1);
}

services.forEach(service => {
    for (let i = 1; i <= 3; i++) {
        const filename = `${service}-step-${i}.jpg`;
        const filepath = path.join(processDir, filename);

        if (!fs.existsSync(filepath)) {
            console.error(`❌ MISSING: ${filename}`);
            missingCount++;
        } else {
            const stats = fs.statSync(filepath);
            if (stats.size === 0) {
                console.error(`❌ EMPTY (0 bytes): ${filename}`);
                emptyCount++;
            } else {
                // console.log(`✅ OK: ${filename} (${stats.size} bytes)`);
            }
        }
    }
});

console.log(`\nScan complete.`);
console.log(`Missing: ${missingCount}`);
console.log(`Empty: ${emptyCount}`);

if (missingCount > 0 || emptyCount > 0) {
    process.exit(1);
} else {
    console.log("✅ All 36 images are present and valid.");
}
