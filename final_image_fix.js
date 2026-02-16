import fs from 'fs';
import path from 'path';
import https from 'https';

const corrections = [
    {
        filename: "dental-claims-processing-step-2.jpg",
        url: "https://images.unsplash.com/photo-1598256989494-b77da1726a40?auto=format&fit=crop&q=80&w=2070"
    },
    {
        filename: "fsa-administration-step-3.jpg",
        url: "https://images.unsplash.com/photo-1626247348981-d41f71a9a838?auto=format&fit=crop&q=80&w=2070"
    },
    {
        filename: "it-support-co-management-step-2.jpg",
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070"
    },
    {
        filename: "it-support-co-management-step-3.jpg",
        url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2070"
    },
    {
        filename: "property-casualty-insurance-step-3.jpg",
        url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2070"
    },
    {
        filename: "provider-management-step-3.jpg",
        url: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=2070"
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
    console.log('Starting final fix...');
    for (const item of corrections) {
        const filepath = path.join(processDir, item.filename);
        try {
            await downloadImage(item.url, filepath);
            console.log(`✅ Fixed: ${item.filename}`);
        } catch (err) {
            console.error(`❌ Parse error ${item.filename}:`, err.message);
        }
    }
};

main();
