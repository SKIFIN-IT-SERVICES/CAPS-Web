import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

// Manually defining the data to avoid import issues with ES modules in standalone script
const servicesData = [
    {
        id: "health-claims-management",
        processImages: [
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070",
        ]
    },
    {
        id: "dental-claims-processing",
        processImages: [
            "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2070", // Dental tools
            "https://images.unsplash.com/photo-1598256989494-b77da1726a40?auto=format&fit=crop&q=80&w=2070", // Teeth model
            "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=2070", // Clinic
        ]
    },
    {
        id: "property-casualty-insurance",
        processImages: [
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070",
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070",
            "https://images.unsplash.com/photo-1556742102-803310506825?auto=format&fit=crop&q=80&w=2070",
        ]
    },
    {
        id: "member-management",
        processImages: [
            "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2070",
            "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=2069",
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070",
        ]
    },
    {
        id: "provider-management",
        processImages: [
            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070",
            "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2070",
            "https://images.unsplash.com/photo-1510915361405-ef2dbf44d809?auto=format&fit=crop&q=80&w=2070",
        ]
    },
    {
        id: "fsa-administration",
        processImages: [
            "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=2070",
            "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2070",
            "https://images.unsplash.com/photo-1579621970588-a35d3364cc6a?auto=format&fit=crop&q=80&w=2070",
        ]
    },
    {
        id: "data-conversions",
        processImages: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
            "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=2076",
            "https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=2070",
        ]
    },
    {
        id: "consulting-restructuring",
        processImages: [
            "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070",
            "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=2070",
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070",
        ]
    },
    {
        id: "it-support-co-management",
        processImages: [
            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070",
            "https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80&w=2070", // Updated Server Room
            "https://images.unsplash.com/photo-1510915361405-ef2dbf44d809?auto=format&fit=crop&q=80&w=2070",
        ]
    },
    {
        id: "claims-adjudication-services",
        processImages: [
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070",
            "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2070",
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070", // Updated Office/Paperwork
        ]
    },
    {
        id: "claims-management-system-reseller",
        processImages: [
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2070",
        ]
    },
    {
        id: "modern-legacy-web-wrapper",
        processImages: [
            "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=2070",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
            "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=2070",
        ]
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
if (!fs.existsSync(processDir)) {
    fs.mkdirSync(processDir, { recursive: true });
}

const main = async () => {
    console.log('Starting image download...');

    for (const service of servicesData) {
        if (!service.processImages) continue;

        console.log(`Processing service: ${service.id}`);

        for (let i = 0; i < service.processImages.length; i++) {
            const url = service.processImages[i];
            const filename = `${service.id}-step-${i + 1}.jpg`;
            const filepath = path.join(processDir, filename);

            try {
                if (url.startsWith('http')) {
                    await downloadImage(url, filepath);
                    console.log(`✅ Downloaded: ${filename}`);
                } else {
                    console.log(`⚠️  Skipping non-http URL: ${url}`);
                }
            } catch (err) {
                console.error(`❌ Error downloading ${filename}:`, err.message);
            }
        }
    }
    console.log('Download complete!');
};

main();
