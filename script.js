<script>
    // ZEE ACADEMY - SMART SOURCE ENGINE
    // Data strictly mapped from your provided sources

    const masterVault = [
        // SINHALA MEDIUM - Source: e-Kalvi & Sri Lanka Past Papers
        { title: "A/L ICT Past Paper", medium: "Sinhala", level: "A/L", year: "2022", source: "e-Kalvi", url: "https://e-kalvi.com/ict-past-papers/" },
        { title: "A/L Biology Marking Scheme", medium: "Sinhala", level: "A/L", year: "2012-2022", source: "e-Kalvi", url: "https://e-kalvi.com/biology-marking-schemes-2012-2022/" },
        { title: "A/L Chemistry Paper Pack", medium: "Sinhala", level: "A/L", year: "2010-2022", source: "e-Kalvi", url: "https://e-kalvi.com/chemistry-past-papers-2010-2022/" },
        { title: "A/L Physics 2021", medium: "Sinhala", level: "A/L", year: "2021", source: "Sri Lanka Past Papers", url: "https://pastpapers.lk/physics-2021-sinhala-medium.pdf" },
        { title: "A/L Accounting 2006-2022", medium: "Sinhala", level: "A/L", year: "2022", source: "e-Kalvi", url: "https://e-kalvi.com/accounting-past-papers-2006-2022/" },
        { title: "A/L History of Europe", medium: "Sinhala", level: "A/L", year: "2025", source: "Sri Lanka Past Papers", url: "https://pastpapers.lk/history-of-europe-past-papers/" },

        // TAMIL MEDIUM - Source: exampapers.lk & Sri Lanka Past Papers
        { title: "A/L Combined Maths Tamil", medium: "Tamil", level: "A/L", year: "2025", source: "exampapers.lk", url: "https://exampapers.lk/2025-al-combined-mathematics-tamil-medium-past-paper/" },
        { title: "A/L Tamil Past Paper", medium: "Tamil", level: "A/L", year: "2025", source: "exampapers.lk", url: "https://exampapers.lk/2025-al-tamil-past-paper/" },
        { title: "A/L Physics 2025", medium: "Tamil", level: "A/L", year: "2025", source: "Sri Lanka Past Papers", url: "https://pastpapers.lk/physics-2025-tamil-medium/" },

        // ENGLISH MEDIUM - Source: SLGURU.LK & exampapers.lk
        { title: "Grade 13 ICT 2nd Term (SM)", medium: "English", level: "A/L", year: "2020", source: "SLGURU.LK", url: "https://slguru.lk/past-papers/ict-13-southern-province-2020/" },
        { title: "Grade 11 ICT (EM) - Royal Institute", medium: "English", level: "O/L", year: "2023", source: "SLGURU.LK", url: "https://slguru.lk/past-papers/ict-11-royal-institute-2023/" },
        { title: "A/L English Past Papers", medium: "English", level: "A/L", year: "General", source: "e-Kalvi", url: "https://e-kalvi.com/al-english-past-papers/" }
    ];

    // Current filter state to prevent "collapse"
    let currentMedium = "All";

    function renderAestheticVault(data) {
        const grid = document.getElementById('paperGrid');
        grid.innerHTML = data.map(item => `
            <div class="aesthetic-card p-8 flex flex-col justify-between group">
                <div>
                    <div class="flex justify-between items-center mb-6">
                        <span class="text-[10px] font-bold text-indigo-400 bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-widest">${item.medium}</span>
                        <span class="text-xs font-semibold text-gray-300">${item.year}</span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 leading-snug group-hover:text-indigo-500 transition-colors">${item.title}</h3>
                    <p class="text-[10px] text-gray-400 mt-2 uppercase tracking-tighter">SOURCE: ${item.source}</p>
                </div>
                <!-- SMART REDIRECT BUTTON -->
                <button onclick="smartRedirect('${item.url}')" class="mt-8 w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-indigo-500 transition-all shadow-xl shadow-gray-200">
                    OPEN ON ${item.source.toUpperCase()}
                </button>
            </div>
        `).join('');
    }

    // Direct Redirection Logic
    function smartRedirect(url) {
        // Direct-ah source website-oda exact location-ku open aagum
        window.open(url, '_blank');
    }

    // Filter by Medium (Identifies Sinhala, Tamil, English separately)
    function filterByMedium(medium) {
        currentMedium = medium;
        if(medium === 'All') {
            renderAestheticVault(masterVault);
        } else {
            const filtered = masterVault.filter(item => item.medium === medium);
            renderAestheticVault(filtered);
        }
        
        // Update UI buttons active state
        document.querySelectorAll('.medium-btn').forEach(btn => {
            btn.classList.remove('bg-indigo-500', 'text-white');
            btn.classList.add('bg-white', 'text-gray-600');
            if(btn.innerText.includes(medium)) {
                btn.classList.add('bg-indigo-500', 'text-white');
                btn.classList.remove('bg-white', 'text-gray-600');
            }
        });
    }

    // Initial Load
    renderAestheticVault(masterVault);
</script>