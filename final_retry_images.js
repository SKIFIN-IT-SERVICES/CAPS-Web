import fs from 'fs';
import path from 'path';
import https from 'https';

const retries = [
    {
        filename: "dental-claims-processing-step-2.jpg",
        // Using a reliable tech/analytics image
        url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=2076"
    },
    {
        filename: "fsa-administration-step-3.jpg",
        // Using a reliable payment/transaction image
        url: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=2070"
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
    console.log('Starting final retry...');
    for (const item of retries) {
        const filepath = path.join(processDir, item.filename);
        try {
            await downloadImage(item.url, filepath);
            console.log(`✅ Fixed: ${item.filename}`);
        } catch (err) {
            console.error(`❌ Failed: ${item.filename}:`, err.message);
        }
    }
};

main();
