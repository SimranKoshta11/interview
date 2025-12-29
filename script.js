// ================= Theme Toggle =================
// Removed - light theme no longer used
// ================= End Theme Toggle =================

// Comprehensive list of companies with their data (keeps tag == csv/filename)
const companies = [
    { name: 'Accenture', initial: 'A', color: '#A100FF', tag: 'accenture' },
    { name: 'Airtel', initial: 'A', color: '#E60000', tag: 'airtel' },
    { name: 'Amazon', initial: 'A', color: '#FF9900', tag: 'amazon' },
    { name: 'AMD', initial: 'A', color: '#ED1C24', tag: 'amd' },
    { name: 'American Express', initial: 'A', color: '#006FCF', tag: 'american-express' },
    { name: 'Anthropic', initial: 'A', color: '#6C63FF', tag: 'anthropic' },
    { name: 'Apple', initial: 'A', color: '#555555', tag: 'apple' },
    { name: 'Atlassian', initial: 'A', color: '#0052CC', tag: 'atlassian' },
    { name: 'Blinkit', initial: 'B', color: '#FF6B6B', tag: 'blinkit' },
    { name: 'Bloomberg', initial: 'B', color: '#5C5C5C', tag: 'bloomberg' },
    { name: 'Cars24', initial: 'C', color: '#2B8A3E', tag: 'cars24' },
    { name: 'Cashfree', initial: 'C', color: '#1C7C54', tag: 'cashfree' },
    { name: 'Cisco', initial: 'C', color: '#049FD9', tag: 'cisco' },
    { name: 'Coinbase', initial: 'C', color: '#0052FF', tag: 'coinbase' },
    { name: 'CoinDCX', initial: 'C', color: '#0A6EFF', tag: 'coindcx' },
    { name: 'Coursera', initial: 'C', color: '#2A73CC', tag: 'coursera' },
    { name: 'DE Shaw', initial: 'D', color: '#3A7CA5', tag: 'de-shaw' },
    { name: 'Dell', initial: 'D', color: '#007DB8', tag: 'dell' },
    { name: 'Deloitte', initial: 'D', color: '#86BC25', tag: 'deloitte' },
    { name: 'Deutsche Bank', initial: 'D', color: '#003A6B', tag: 'deutsche-bank' },
    { name: 'Dream11', initial: 'D', color: '#FF5A00', tag: 'dream11' },
    { name: 'Dropbox', initial: 'D', color: '#0061FF', tag: 'dropbox' },
    { name: 'Dunzo', initial: 'D', color: '#FFCC00', tag: 'dunzo' },
    { name: 'Duolingo', initial: 'D', color: '#6CC644', tag: 'duolingo' },
    { name: 'eBay', initial: 'E', color: '#E53238', tag: 'ebay' },
    { name: 'Flipkart', initial: 'F', color: '#0B6EBD', tag: 'flipkart' },
    { name: 'GitHub', initial: 'G', color: '#181717', tag: 'github' },
    { name: 'Goldman Sachs', initial: 'G', color: '#5086C1', tag: 'goldman-sachs' },
    { name: 'Google', initial: 'G', color: '#4285F4', tag: 'google' },
    { name: 'Grammarly', initial: 'G', color: '#15C23C', tag: 'grammarly' },
    { name: 'Groww', initial: 'G', color: '#00C853', tag: 'groww' },
    { name: 'Guidewire', initial: 'G', color: '#4A90E2', tag: 'guidewire' },
    { name: 'HCL', initial: 'H', color: '#0065A5', tag: 'hcl' },
    { name: 'Honeywell', initial: 'H', color: '#C8002A', tag: 'honeywell' },
    { name: 'HP', initial: 'H', color: '#0096D6', tag: 'hp' },
    { name: 'HSBC', initial: 'H', color: '#DB0011', tag: 'hsbc' },
    { name: 'Huawei', initial: 'H', color: '#FF0000', tag: 'huawei' },
    { name: 'IBM', initial: 'I', color: '#0530AD', tag: 'ibm' },
    { name: 'Indeed', initial: 'I', color: '#2164F3', tag: 'indeed' },
    { name: 'Infosys', initial: 'I', color: '#1A73E8', tag: 'infosys' },
    { name: 'Intel', initial: 'I', color: '#0071C5', tag: 'intel' },
    { name: 'Jio', initial: 'J', color: '#FF2D55', tag: 'jio' },
    { name: 'JP Morgan', initial: 'J', color: '#117ACA', tag: 'jpmorgan' },
    { name: 'LinkedIn', initial: 'L', color: '#0077B5', tag: 'linkedin' },
    { name: 'Lucid', initial: 'L', color: '#00A3B4', tag: 'lucid' },
    { name: 'MakeMyTrip', initial: 'M', color: '#FF6A00', tag: 'makemytrip' },
    { name: 'MathWorks', initial: 'M', color: '#A31F34', tag: 'mathworks' },
    { name: 'Meesho', initial: 'M', color: '#E6007E', tag: 'meesho' },
    { name: 'Meta', initial: 'M', color: '#0668E1', tag: 'meta' },
    { name: 'Microsoft', initial: 'M', color: '#00A4EF', tag: 'microsoft' },
    { name: 'MongoDB', initial: 'M', color: '#00ED64', tag: 'mongodb' },
    { name: 'Morgan Stanley', initial: 'M', color: '#00AEEF', tag: 'morgan-stanley' },
    { name: 'Myntra', initial: 'M', color: '#FF4081', tag: 'myntra' },
    { name: 'Netflix', initial: 'N', color: '#E50914', tag: 'netflix' },
    { name: 'Nike', initial: 'N', color: '#111111', tag: 'nike' },
    { name: 'Nokia', initial: 'N', color: '#124191', tag: 'nokia' },
    { name: 'Nykaa', initial: 'N', color: '#FF5594', tag: 'nykaa' },
    { name: 'Oppo', initial: 'O', color: '#22C55E', tag: 'oppo' },
    { name: 'Oracle', initial: 'O', color: '#F80000', tag: 'oracle' },
    { name: 'Paytm', initial: 'P', color: '#2A66F1', tag: 'paytm' },
    { name: 'Persistent Systems', initial: 'P', color: '#0A6EFF', tag: 'persistent-systems' },
    { name: 'PhonePe', initial: 'P', color: '#673AB7', tag: 'phonepe' },
    { name: 'Pinterest', initial: 'P', color: '#E60023', tag: 'pinterest' },
    { name: 'PwC', initial: 'P', color: '#FF7A00', tag: 'pwc' },
    { name: 'Qualcomm', initial: 'Q', color: '#3253DC', tag: 'qualcomm' },
    { name: 'Quora', initial: 'Q', color: '#B92B27', tag: 'quora' },
    { name: 'Reddit', initial: 'R', color: '#FF4500', tag: 'reddit' },
    { name: 'Rubrik', initial: 'R', color: '#FF5A5F', tag: 'rubrik' },
    { name: 'Salesforce', initial: 'S', color: '#00A1E0', tag: 'salesforce' },
    { name: 'Samsung', initial: 'S', color: '#1428A0', tag: 'samsung' },
    { name: 'SAP', initial: 'S', color: '#0FAAFF', tag: 'sap' },
    { name: 'Siemens', initial: 'S', color: '#1E9E8E', tag: 'siemens' },
    { name: 'Sigmoid', initial: 'S', color: '#6B8E23', tag: 'sigmoid' },
    { name: 'Snapchat', initial: 'S', color: '#FFFC00', tag: 'snapchat' },
    { name: 'Snapdeal', initial: 'S', color: '#FF6A00', tag: 'snapdeal' },
    { name: 'Sony', initial: 'S', color: '#000000', tag: 'sony' },
    { name: 'Spotify', initial: 'S', color: '#1DB954', tag: 'spotify' },
    { name: 'Sprinklr', initial: 'S', color: '#FF4D00', tag: 'sprinklr' },
    { name: 'Squarepoint Capital', initial: 'S', color: '#2E7D32', tag: 'squarepoint-capital' },
    { name: 'Stripe', initial: 'S', color: '#635BFF', tag: 'stripe' },
    { name: 'Swiggy', initial: 'S', color: '#FF6F00', tag: 'swiggy' },
    { name: 'Tech Mahindra', initial: 'T', color: '#E6007E', tag: 'tech-mahindra' },
    { name: 'Tesla', initial: 'T', color: '#CC0000', tag: 'tesla' },
    { name: 'Texas Instruments', initial: 'T', color: '#FF6A00', tag: 'texas-instruments' },
    { name: 'TikTok', initial: 'T', color: '#000000', tag: 'tiktok' },
    { name: 'Twitter', initial: 'T', color: '#1DA1F2', tag: 'twitter' },
    { name: 'Uber', initial: 'U', color: '#000000', tag: 'uber' },
    { name: 'Urban Company', initial: 'U', color: '#FF5A00', tag: 'urban-company' },
    { name: 'Visa', initial: 'V', color: '#1A1F71', tag: 'visa' },
    { name: 'Walmart Labs', initial: 'W', color: '#0071CE', tag: 'walmart-labs' },
    { name: 'Wells Fargo', initial: 'W', color: '#CC0000', tag: 'wells-fargo' },
    { name: 'Wipro', initial: 'W', color: '#1B5E20', tag: 'wipro' },
    { name: 'Yahoo', initial: 'Y', color: '#410093', tag: 'yahoo' },
    { name: 'Zepto', initial: 'Z', color: '#FF4F00', tag: 'zepto' },
    { name: 'Zomato', initial: 'Z', color: '#FF3A3A', tag: 'zomato' },
    { name: 'Zscaler', initial: 'Z', color: '#4A90E2', tag: 'zscaler' }
];



// Stores parsed CSV questions for companies (tag -> array)
const parsedQuestions = {};

// Pagination and UI state
let currentPage = 1;
let pageSize = 10;
let filteredCompanyList = [];
// Questions page state
let currentQuestionList = [];
let currentQuestionCompany = '';
let currentQuestionDifficulty = 'all';
let currentQuestionSort = 'default';

// Helper to fetch and parse a CSV file for a given company tag
async function fetchCompanyCSV(tag) {
    try {
        const res = await fetch(`csv/${tag}.csv`);
        if (!res.ok) return null;
        const text = await res.text();
        const lines = text.split(/\r?\n/).filter(Boolean);
        if (lines.length < 2) return [];
        const header = lines[0].split(',').map(h => h.trim());
        const urlIdx = header.findIndex(h => /url/i.test(h));
        const titleIdx = header.findIndex(h => /title/i.test(h));
        const diffIdx = header.findIndex(h => /difficulty/i.test(h));

        const rows = lines.slice(1).map(line => {
            // simple CSV split that handles common cases (no quoted commas expected)
            const cols = line.split(',');
            return {
                title: (cols[titleIdx] || cols[2] || '').trim(),
                link: (cols[urlIdx] || cols[1] || '').trim(),
                difficulty: ((cols[diffIdx] || '').trim() || 'medium').toLowerCase()
            };
        }).filter(r => r.title && r.link);

        return rows;
    } catch (err) {
        return null;
    }
}

// Preload CSV data for all companies (tries tag.csv for each company)
async function preloadCompanyData() {
    const promises = companies.map(c => fetchCompanyCSV(c.tag).then(data => ({ tag: c.tag, data })));
    const results = await Promise.all(promises);

    results.forEach(result => {
        if (Array.isArray(result.data)) {
            parsedQuestions[result.tag] = result.data;
        }
    });

    // Build initial filtered list (augment companies with counts)
    filteredCompanyList = companies.map(c => ({
        ...c,
        count: (parsedQuestions[c.tag] || questionsData[c.tag] || []).length
    }));

    renderCompanies();
}

// Render companies for current page with pagination & sorting applied
function renderCompanies() {
    const companyGrid = document.getElementById('company-grid');
    if (!companyGrid) return;

    // Apply search filter
    const searchInput = document.getElementById('company-search');
    const searchTerm = searchInput ? searchInput.value.trim().toLowerCase() : '';

    let list = filteredCompanyList.filter(c => c.name.toLowerCase().includes(searchTerm));

    // Apply sort
    const sortSelect = document.getElementById('sort-select');
    const sortVal = sortSelect ? sortSelect.value : 'name-asc';

    if (sortVal === 'name-asc') list.sort((a, b) => a.name.localeCompare(b.name));
    else if (sortVal === 'name-desc') list.sort((a, b) => b.name.localeCompare(a.name));
    else if (sortVal === 'count-asc') list.sort((a, b) => a.count - b.count);
    else if (sortVal === 'count-desc') list.sort((a, b) => b.count - a.count);

    // Pagination
    const total = list.length;
    const totalPages = Math.max(1, Math.ceil(total / pageSize));
    if (currentPage > totalPages) currentPage = totalPages;
    const start = (currentPage - 1) * pageSize;
    const pageItems = list.slice(start, start + pageSize);

    // Clear and render
    companyGrid.innerHTML = '';
    pageItems.forEach((company, index) => {
        const companyCard = document.createElement('div');
        companyCard.className = 'company-card';
        companyCard.setAttribute('data-company', company.tag);
        companyCard.style.animationDelay = `${index * 0.05}s`;
        
        companyCard.innerHTML = `
            <div class="company-card-image">
                <img class="company-logo-img" src="logos/${company.tag}.png" alt="${company.name} logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'" />
                <div class="company-initial">${company.initial}</div>
            </div>
            <div class="company-card-info">
                <div class="company-card-header">
                    <h3 class="company-name">${company.name}</h3>
                </div>
                <div class="company-card-footer">
                    <div class="company-count">${company.count} questions</div>
                </div>
            </div>
        `;

        companyCard.addEventListener('click', () => showQuestions(company.name, company.tag, company.initial));
        companyGrid.appendChild(companyCard);
    });

    // Update pagination UI
    const pageIndicator = document.getElementById('page-indicator');
    if (pageIndicator) pageIndicator.textContent = `${currentPage} / ${totalPages}`;
}

// Function to show questions for a company
function showQuestions(companyName, companyTag, companyInitial) {
    const questionsPage = document.getElementById('questions-page');
    const homePage = document.getElementById('home-page');
    const companyNameHeader = document.getElementById('company-name-header');
    const questionsList = document.getElementById('questions-list');
    const companyLogoLarge = document.querySelector('.company-logo-large');
    
    if (!questionsPage || !homePage) {
        console.error('Page elements not found');
        return;
    }
    
    // Switch pages
    homePage.classList.remove('active');
    questionsPage.classList.add('active');
    
    // Update company name and logo
    if (companyNameHeader) {
        companyNameHeader.textContent = companyName;
    }
    
    if (companyLogoLarge) {
        // Try to show company logo image, fallback to initial
        companyLogoLarge.innerHTML = `
            <img src="logos/${companyTag}.png" alt="${companyName} logo" class="company-logo-large-img" onerror="this.style.display='none'; this.parentElement.querySelector('.company-logo-large-fallback').style.display='flex'" />
            <div class="company-logo-large-fallback">${companyInitial}</div>
        `;
    }
    
    // Get questions from parsed CSV first, then fallback to built-in sample data
    const questions = parsedQuestions[companyTag] || questionsData[companyTag] || questionsData['default'];
    currentQuestionList = questions.slice();
    currentQuestionCompany = companyTag;
    currentQuestionDifficulty = 'all';
    currentQuestionSort = 'default';
    // Render using filters/sort
    renderQuestions();
    
    // Clear and populate questions list
    if (questionsList) {
        questionsList.innerHTML = '';
        
        questions.forEach((question, index) => {
            const questionItem = document.createElement('div');
            questionItem.className = 'question-item';
            questionItem.style.animationDelay = `${index * 0.1}s`;
            
            questionItem.innerHTML = `
                <div class="question-info">
                    <h3 class="question-title">${question.title}</h3>
                    <div class="question-meta">
                        <span class="difficulty-badge difficulty-${question.difficulty}">
                            ${question.difficulty.toUpperCase()}
                        </span>
                    </div>
                </div>
                <a href="${question.link}" target="_blank" rel="noopener noreferrer" class="question-link">
                    Solve on LeetCode →
                </a>
            `;
            
            questionsList.appendChild(questionItem);
        });
    }
    
    // Scroll to top smoothly
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Render questions list with filters and sorting
function renderQuestions() {
    const questionsList = document.getElementById('questions-list');
    if (!questionsList) return;

    let list = currentQuestionList.slice();

    // Apply difficulty filter
    if (currentQuestionDifficulty && currentQuestionDifficulty !== 'all') {
        list = list.filter(q => (q.difficulty || 'medium').toLowerCase() === currentQuestionDifficulty);
    }

    // Apply sort
    if (currentQuestionSort === 'title-asc') list.sort((a, b) => a.title.localeCompare(b.title));
    else if (currentQuestionSort === 'title-desc') list.sort((a, b) => b.title.localeCompare(a.title));
    else if (currentQuestionSort === 'diff-asc') list.sort((a, b) => diffRank(a.difficulty) - diffRank(b.difficulty));
    else if (currentQuestionSort === 'diff-desc') list.sort((a, b) => diffRank(b.difficulty) - diffRank(a.difficulty));

    questionsList.innerHTML = '';
    list.forEach((question, idx) => {
        const item = document.createElement('div');
        item.className = 'question-item compact';
        item.style.animationDelay = `${idx * 0.03}s`;

        const diffClass = (question.difficulty||'medium').toLowerCase();
        item.innerHTML = `
            <div class="question-left">
                <div class="question-title">${question.title}</div>
                <div class="question-meta">
                    <span class="difficulty-badge difficulty-${diffClass}">${(question.difficulty||'').toUpperCase()}</span>
                </div>
            </div>
            <div class="question-right">
                <a href="${question.link}" target="_blank" rel="noopener noreferrer" class="question-link small">Solve on LeetCode <span class="link-arrow">→</span></a>
            </div>
        `;
        item.setAttribute('data-difficulty', diffClass);

        questionsList.appendChild(item);
    });
}

function diffRank(d) {
    const map = { 'easy': 1, 'medium': 2, 'hard': 3 };
    return map[(d||'medium').toLowerCase()] || 2;
}

// Function to go back to home page
function goBackHome() {
    const questionsPage = document.getElementById('questions-page');
    const homePage = document.getElementById('home-page');
    
    if (questionsPage && homePage) {
        questionsPage.classList.remove('active');
        homePage.classList.add('active');
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// Navigation functionality
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // If it's an anchor link (starts with #)
            if (href && href.startsWith('#')) {
                e.preventDefault();
                
                // If we're on questions page, go back to home first
                const questionsPage = document.getElementById('questions-page');
                const homePage = document.getElementById('home-page');
                
                if (questionsPage && questionsPage.classList.contains('active')) {
                    questionsPage.classList.remove('active');
                    homePage.classList.add('active');
                }
                
                // Then scroll to the section
                setTimeout(() => {
                    const targetId = href.substring(1);
                    const targetSection = document.getElementById(targetId);
                    
                    if (targetSection) {
                        targetSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }, 100);
            }
        });
    });
}

// Mobile menu toggle
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        });
    }
}

// Search functionality (optional - for future enhancement)
function initSearch() {
    const searchInput = document.getElementById('company-search');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const companyCards = document.querySelectorAll('.company-card');
            
            companyCards.forEach(card => {
                const companyName = card.querySelector('.company-name').textContent.toLowerCase();
                
                if (companyName.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
}

// Smooth scroll for CTA buttons
function initCTAButtons() {
    const exploreBtn = document.querySelector('.btn-primary');
    
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            const companiesSection = document.getElementById('companies');
            if (companiesSection) {
                companiesSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}

// Add animation on scroll (optional enhancement)
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe sections
    const sections = document.querySelectorAll('.features-section, .companies-section, .stats-section');
    sections.forEach(section => observer.observe(section));
}

// ==================== STATS COUNTER ANIMATION ====================
// THIS IS THE NEW FUNCTION TO FIX THE ZERO STATS PROBLEM
function initStatsCounter() {
    const statsNumbers = document.querySelectorAll('.stats-number');
    
    const animateCounter = (element) => {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            
            if (current < target) {
                element.textContent = Math.floor(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target.toLocaleString();
            }
        };
        
        updateCounter();
    };
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                animateCounter(entry.target);
            }
        });
    }, observerOptions);
    
    statsNumbers.forEach(stat => observer.observe(stat));
}
// ==================== END OF STATS COUNTER ====================

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing CodePrep website...');
    
    // Preload CSV data and render companies
    preloadCompanyData();
    
    // Initialize navigation
    initNavigation();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize CTA buttons
    initCTAButtons();
    
    // Initialize search (wires to company search input)
    initSearch();

    // Wire up controls: sort, page-size, pagination
    const sortSelect = document.getElementById('sort-select');
    const pageSizeSelect = document.getElementById('page-size');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const searchInput = document.getElementById('company-search');

    if (sortSelect) sortSelect.addEventListener('change', () => { currentPage = 1; renderCompanies(); });
    if (pageSizeSelect) pageSizeSelect.addEventListener('change', (e) => { pageSize = parseInt(e.target.value, 10) || 8; currentPage = 1; renderCompanies(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { if (currentPage > 1) { currentPage -= 1; renderCompanies(); } });
    if (nextBtn) nextBtn.addEventListener('click', () => { currentPage += 1; renderCompanies(); });
    if (searchInput) searchInput.addEventListener('input', () => { currentPage = 1; renderCompanies(); });
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // *** ADD THIS LINE - Initialize stats counter ***
    initStatsCounter();
    
    // Back button functionality
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.addEventListener('click', goBackHome);
    }

    // Questions toolbar: difficulty filters and sort
    const diffBtns = document.querySelectorAll('.diff-btn');
    const questionSort = document.getElementById('question-sort');

    if (diffBtns && diffBtns.length) {
        diffBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                diffBtns.forEach(b => b.classList.remove('active'));
                e.currentTarget.classList.add('active');
                currentQuestionDifficulty = e.currentTarget.getAttribute('data-diff') || 'all';
                renderQuestions();
            });
        });
    }

    if (questionSort) {
        questionSort.addEventListener('change', (e) => {
            currentQuestionSort = e.target.value || 'default';
            renderQuestions();
        });
    }
    
    console.log('CodePrep website initialized successfully!');
});

// Handle browser back/forward buttons
window.addEventListener('popstate', () => {
    const questionsPage = document.getElementById('questions-page');
    const homePage = document.getElementById('home-page');
    
    if (questionsPage && questionsPage.classList.contains('active')) {
        goBackHome();
    }
});

// Prevent default form submissions (if any forms are added)
document.addEventListener('submit', (e) => {
    e.preventDefault();
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Press Escape to go back to home
    if (e.key === 'Escape') {
        const questionsPage = document.getElementById('questions-page');
        if (questionsPage && questionsPage.classList.contains('active')) {
            goBackHome();
        }
    }
});

// Export functions for potential external use
window.CodePrep = {
    preloadCompanyData,
    renderCompanies,
    showQuestions,
    goBackHome,
    companies,
    questionsData,
    parsedQuestions
};