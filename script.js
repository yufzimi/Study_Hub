<script>
    // ZEE ACADEMY - OPTION 2: SPECIFIC PAGE REDIRECT ENGINE
    // Sources used: e-Kalvi, exampapers.lk, Sri Lanka Past Papers, SLGURU.LK

    const masterVault = [
        // --- SINHALA MEDIUM (Source: e-Kalvi & Sri Lanka Past Papers) ---
        { 
            title: "A/L ICT Past Papers (2012-2022)", 
            medium: "Sinhala", 
            level: "A/L", 
            source: "e-Kalvi", 
            url: "https://e-kalvi.com/ict-past-papers/" // Redirects to ICT collection page [1]
        },
        { 
            title: "A/L Biology Marking Schemes (2012-2022)", 
            medium: "Sinhala", 
            level: "A/L", 
            source: "e-Kalvi", 
            url: "https://e-kalvi.com/biology-marking-schemes-2012-2022/" // [1]
        },
        { 
            title: "A/L Chemistry Paper Pack (2010-2022)", 
            medium: "Sinhala", 
            level: "A/L", 
            source: "e-Kalvi", 
            url: "https://e-kalvi.com/chemistry-past-papers-2010-2022/" // [1]
        },
        { 
            title: "A/L Physics Past Papers & Marking", 
            medium: "Sinhala", 
            level: "A/L", 
            source: "e-Kalvi", 
            url: "https://e-kalvi.com/physics-past-papers/" // [1]
        },
        { 
            title: "A/L Accounting 2025 New Paper", 
            medium: "Sinhala", 
            level: "A/L", 
            source: "Sri Lanka Past Papers", 
            url: "https://pastpapers.lk/accounting-2025-sinhala-medium-past-paper/" // [5]
        },

        // --- TAMIL MEDIUM (Source: exampapers.lk & Sri Lanka Past Papers) ---
        { 
            title: "A/L Combined Mathematics 2025", 
            medium: "Tamil", 
            level: "A/L", 
            source: "exampapers.lk", 
            url: "https://exampapers.lk/2025-al-combined-mathematics-tamil-medium-past-paper/" // Exact location [3, 6]
        },
        { 
            title: "A/L Tamil 2025 Past Paper", 
            medium: "Tamil", 
            level: "A/L", 
            source: "exampapers.lk", 
            url: "https://exampapers.lk/2025-al-tamil-past-paper/" // [3, 6]
        },
        { 
            title: "A/L Physics 2025 Tamil Medium", 
            medium: "Tamil", 
            level: "A/L", 
            source: "Sri Lanka Past Papers", 
            url: "https://pastpapers.lk/physics-2025-tamil-medium-past-paper/" // [2]
        },

        // --- ENGLISH MEDIUM (Source: SLGURU.LK & exampapers.lk) ---
        { 
            title: "Grade 13 ICT Second Term 2020", 
            medium: "English", 
            level: "A/L", 
            source: "SLGURU.LK", 
            url: "https://slguru.lk/past-papers/ict-13-southern-province-2020/" // School/Province Paper [7, 8]
        },
        { 
            title: "A/L English Literature 2026 Mahinda Rajapaksha College", 
            medium: "English", 
            level: "A/L", 
            source: "SLGURU.LK", 
            url: "https://slguru.lk/past-papers/english-literature-12-mahinda-rajapaksha-college-2026/" // [8]
        }
    ];

    // Function to render items without collapse (Medium Identification)
    function renderAestheticVault(data) {
        const grid = document.getElementById('paperGrid');
        grid.innerHTML = data.map(item => `
            <div class="aesthetic-card p-8 flex flex-col justify-between group shadow-sm hover:shadow-xl transition-all">
                <div>
                    <div class="flex justify-between items-center mb-6">
                        <span class="text-[10px] font-bold text-indigo-400 bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-widest">${item.medium}</span>
                        <span class="text-xs font-semibold text-gray-300">Level: ${item.level}</span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 leading-snug group-hover:text-indigo-500 transition-colors">${item.title}</h3>
                    <p class="text-[10px] text-gray-400 mt-2 uppercase tracking-tighter">SOURCE: ${item.source}</p>
                </div>
                <button onclick="option2Redirect('${item.url}')" class="mt-8 w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-indigo-500 transition-all">
                    GO TO ${item.source.toUpperCase()} VAULT
                </button>
            </div>
        `).join('');
    }

    // Specific Page Redirect Logic (No 404)
    function option2Redirect(url) {
        // Direct-ah source website-oda exact landing page-ku redirect pannum
        window.open(url, '_blank');
    }

    // Filter Logic for Mediums
    function filterByMedium(medium) {
        const filtered = medium === 'All' ? masterVault : masterVault.filter(i => i.medium === medium);
        renderAestheticVault(filtered);
    }

    // Initial load
    renderAestheticVault(masterVault);
</script>
