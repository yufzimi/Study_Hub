// SMART REDIRECT ENGINE (Corrected for GitHub Pages)
const masterVault = [
    // Sinhala Medium - Source: e-Kalvi & Sri Lanka Past Papers [5, 6]
    { 
        title: "A/L ICT 2022 Past Paper", 
        medium: "Sinhala", 
        source: "e-Kalvi", 
        url: "https://e-kalvi.com/ict-2022-past-paper/" // Source [1]
    },
    { 
        title: "A/L Biology Marking (2012-2022)", 
        medium: "Sinhala", 
        source: "e-Kalvi", 
        url: "https://e-kalvi.com/biology-marking-schemes-2012-2022/" // Source [1]
    },
    { 
        title: "A/L Physics 2021", 
        medium: "Sinhala", 
        source: "Sri Lanka Past Papers", 
        url: "https://pastpapers.lk/physics-2021-sinhala-medium-past-paper/" // Source [6, 7]
    },

    // Tamil Medium - Source: exampapers.lk [3, 4]
    { 
        title: "A/L Combined Maths 2025", 
        medium: "Tamil", 
        source: "exampapers.lk", 
        url: "https://exampapers.lk/2025-al-combined-mathematics-tamil-medium-past-paper/" // Source [3]
    },
    { 
        title: "A/L Tamil 2025 Past Paper", 
        medium: "Tamil", 
        source: "exampapers.lk", 
        url: "https://exampapers.lk/2025-al-tamil-past-paper/" // Source [4]
    },

    // English Medium - Source: SLGURU.LK [8, 9]
    { 
        title: "Grade 13 ICT 2nd Term (SM)", 
        medium: "English", 
        source: "SLGURU.LK", 
        url: "https://slguru.lk/past-papers/ict-13-southern-province-2020/" // Source [8, 9]
    }
];

// Function to handle redirection without 404
function smartRedirect(url) {
    if (url && url.startsWith('http')) {
        // Direct-ah source website-oda exact location-ku redirect pannum
        window.open(url, '_blank');
    } else {
        alert("System Error: Direct link missing in vault!");
    }
}
