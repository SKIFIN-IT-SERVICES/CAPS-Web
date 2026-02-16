import fs from 'fs';
import path from 'path';
import https from 'https';

const fixes = [
    // Dental - completely refreshing all 3 to ensure they work
    {
        filename: "dental-claims-processing-step-1.jpg",
        url: "https://images.unsplash.com/photo-1579684385183-1b60fe37b42d?auto=format&fit=crop&q=80&w=2070" // Clean medical/dental bg
    },
    {
        filename: "dental-claims-processing-step-2.jpg",
        url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070" // Paperwork/Analysis
    },
    {
        filename: "dental-claims-processing-step-3.jpg",
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070" // Data/Charts
    },
    // FSA - fixing the empty file
    {
        filename: "fsa-administration-step-3.jpg",
        url: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=2070" // Payment/Card
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
    console.log('Starting critical fix...');
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
