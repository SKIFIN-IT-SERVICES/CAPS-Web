import fs from 'fs';
import path from 'path';
import https from 'https';

const url = "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2070";
const filename = "dental-claims-processing-step-1.jpg";
const processDir = path.join(process.cwd(), 'public', 'images', 'process');
const filepath = path.join(processDir, filename);

const downloadImage = (url, filepath) => {
    return new Promise((resolve, reject) => {
        const request = https.get(url, (response) => {
            if (response.statusCode === 302 || response.statusCode === 301) {
                downloadImage(response.headers.location, filepath).then(resolve).catch(reject);
                return;
            }
            if (response.statusCode !== 200) {
                reject(new Error(`Status ${response.statusCode}`));
                return;
            }
            const file = fs.createWriteStream(filepath);
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        });
        request.on('error', (err) => {
            fs.unlink(filepath, () => { });
            reject(err);
        });
    });
};

const main = async () => {
    console.log(`Fixing ${filename}...`);
    try {
        await downloadImage(url, filepath);
        console.log(`✅ Fixed: ${filename}`);
    } catch (err) {
        console.error(`❌ Failed: ${filename}`, err.message);
    }
};

main();
