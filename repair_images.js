import fs from 'fs';
import path from 'path';
import https from 'https';

const repairs = [
    {
        filename: "dental-claims-processing-step-2.jpg",
        url: "https://images.unsplash.com/photo-1606811842783-5f78005fae3e?auto=format&fit=crop&q=80&w=2070"
    },
    {
        filename: "fsa-administration-step-3.jpg",
        url: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2070"
    },
    {
        filename: "it-support-co-management-step-2.jpg",
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070"
    },
    {
        filename: "it-support-co-management-step-3.jpg",
        url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2070"
    },
    {
        filename: "property-casualty-insurance-step-3.jpg",
        url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070"
    },
    {
        filename: "provider-management-step-3.jpg",
        url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070"
    }
];

const downloadImage = (url, filepath) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filepath);
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download ${url}: Status Code ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filepath, () => { });
            reject(err);
        });
    });
};

const processDir = path.join(process.cwd(), 'public', 'images', 'process');

const main = async () => {
    console.log('Starting repairs...');

    for (const repair of repairs) {
        const filepath = path.join(processDir, repair.filename);
        console.log(`Repairing: ${repair.filename}`);
        try {
            await downloadImage(repair.url, filepath);
            console.log(`✅ Fixed: ${repair.filename}`);
        } catch (err) {
            console.error(`❌ Failed to fix ${repair.filename}:`, err.message);
        }
    }
    console.log('Repairs complete!');
};

main();
