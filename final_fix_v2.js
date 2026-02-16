import fs from 'fs';
import path from 'path';
import https from 'https';

const fixes = [
    {
        filename: "dental-claims-processing-step-1.jpg",
        // Trying a very standard dental image
        url: "https://images.unsplash.com/photo-1588776814546-1ffcf101e938?auto=format&fit=crop&q=80&w=2070"
    },
    {
        filename: "fsa-administration-step-3.jpg",
        // Standard money/finance image
        url: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&q=80&w=2070"
    }
];

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

const processDir = path.join(process.cwd(), 'public', 'images', 'process');

const main = async () => {
    console.log('Starting final fix v2...');
    for (const item of fixes) {
        const filepath = path.join(processDir, item.filename);
        try {
            await downloadImage(item.url, filepath);
            console.log(`✅ Refreshed: ${item.filename}`);
        } catch (err) {
            console.error(`❌ Failed ${item.filename}:`, err.message);
        }
    }
};

main();
