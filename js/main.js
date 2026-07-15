// ============ i18n ============
const translations = {
    es: {
        "nav.about": "Sobre Mí",
        "nav.experience": "Experiencia",
        "nav.projects": "Proyectos",
        "nav.contact": "Contacto",

        "hero.badge": "Analista Contable y Financiero · R2R · Activos Fijos",
        "hero.headline": 'De los estados contables a la <span class="gradient-text">automatización inteligente</span>',
        "hero.subtitle": "15 años en finanzas, hoy en la intersección entre <strong>contabilidad, datos e&nbsp;IA</strong>. Cierres contables, activos fijos y reporting bajo IFRS/USGAAP en multinacionales de energía. Me interesan los problemas donde un proceso manual necesita ser repensado — y el <strong>desarrollo asistido por&nbsp;IA</strong> me permite construir soluciones que antes estaban fuera del alcance de un perfil contable.",
        "hero.cta1": "Ver Proyectos",
        "hero.cta2": "Contactar",

        "about.title": "Perfil Profesional",
        "about.card1.title": "Contabilidad & Finanzas",
        "about.card1.text": "Cierres mensuales integrales, activos fijos, conciliaciones y planeamiento (OPEX/CAPEX) en multinacionales de energía. SAP avanzado y reporting bajo IFRS, USGAAP y GAAP local.",
        "about.card2.title": "Automatización",
        "about.card2.text": "Construí una herramienta en Excel para verificar el RECPAM sobre activos fijos que redujo un 50% los tiempos y las consultas de auditoría. Power Query para convertir reportes manuales en flujos que se actualizan solos.",
        "about.card3.title": "Datos & IA",
        "about.card3.text": "Desarrollo tableros y aplicaciones con Google Apps Script y APIs de IA (Gemini), con arquitecturas \"local-first\" que priorizan la privacidad de los datos.",

        "exp.title": "Trayectoria",
        "exp.job1.date": "Abr 2026 - Presente",
        "exp.job1.role": "Analista Semisenior, Record-to-Report (R2R)",
        "exp.job1.text": "Cierre mensual integral para las entidades de AES Colombia. Conciliación de préstamos bancarios y anticipos de clientes de energía, registraciones en el mayor y reporting ad hoc, con soporte a controles internos y auditorías externas.",
        "exp.job2.date": "Sep 2023 - Mar 2026",
        "exp.job2.role": "Analista de Activos Fijos",
        "exp.job2.text": "Desarrollé una herramienta en Excel para verificar el RECPAM sobre bienes de uso que redujo un 50% los tiempos y las consultas de auditoría. Notas de activos fijos bajo GAAP local, IFRS y USGAAP; cierres, análisis de variaciones e integridad de datos en el módulo SAP FA.",
        "exp.job3.date": "Oct 2021 - Sep 2023",
        "exp.job3.role": "Analista de Planeamiento y Control",
        "exp.job3.text": "Reporting de OPEX, análisis de desvíos y preparación del presupuesto de gastos. Seguimiento de obras de capital y créditos gubernamentales, con soporte a provisiones mensuales y auditorías externas.",
        "exp.job4.date": "Abr 2017 - Oct 2021",
        "exp.job4.role": "Analista Contable",
        "exp.job4.text": "Lideré el módulo de Activos Fijos en la migración a SAP, incluida la migración completa de datos. Co-lideré junto a consultores de Accenture la implementación 2018 del ajuste por inflación de bienes de uso en SAP, automatizando su cálculo y ejecución. Estados contables IFRS y reporting gerencial.",
        "exp.job5.date": "Jul 2011 - Mar 2017",
        "exp.job5.role": "Analista Contable",
        "exp.job5.text": "Conciliación diaria de cobranzas de ~200 obras sociales, con un promedio de 20 conciliaciones de alto volumen por día. Registraciones, facturación y rotación por tesorería: emisión de cheques, pagos e inversiones diarias.",

        "proj.title": "Proyectos Destacados",
        "proj.p1.tag": "PWA con IA",
        "proj.p1.title": "Smart Finance: Gestión con IA",
        "proj.p1.text": "Una Progressive Web App (PWA) \"local-first\" para el control de gastos personales. Integra la API de Google Gemini para escanear tickets automáticamente y ofrecer asesoramiento financiero personalizado, sin servidores intermedios.",
        "proj.p1.f1": "Escaneo de tickets con visión artificial (IA)",
        "proj.p1.f2": "Asesor financiero inteligente (chatbot)",
        "proj.p1.f3": "100% privada: los datos nunca salen del dispositivo",
        "proj.p1.cta": "Ver Demo Interactiva",
        "proj.p1.made": "Hecho con Gemini AI",
        "proj.p2.tag": "Automatización",
        "proj.p2.title": "Flujo de Fondos: Tablero Automatizado",
        "proj.p2.text": "Sistema de gestión de flujo de fondos personal construido sobre Google Sheets, con un modelo de proyección multianual y una web app de solo lectura (HtmlService) servida desde Apps Script. El tablero se recalcula solo: sin carga manual ni mantenimiento.",
        "proj.p2.f1": "Escenarios Optimista / Base / Pesimista con recálculo automático",
        "proj.p2.f2": "Estado de liquidez mes a mes y margen de cobertura proyectado",
        "proj.p2.f3": "Simulador de cartera en USD (bonos, CEDEARs, money market)",
        "proj.p2.made": "Hecho con Claude Fable 5",

        "proj.p3.tag": "Producto & Ejecución",
        "proj.p3.title": "CoffeeHouse: Bitácora de Calibración de Café",
        "proj.p3.text": "Una PWA de calibración de espresso que vive en un teléfono montado en la barra: registra molienda, dosis, rendimiento y tiempo por variedad y método. Construida sin escribir una línea de código, dirigiendo al modelo Claude Fable 5 de Anthropic con especificaciones escritas: cuatro versiones iteradas por uso real, hoy en producción diaria.",
        "proj.p3.f1": "PWA modo kiosk: offline, wake lock y timer que sobrevive la suspensión",
        "proj.p3.f2": "Registro por variedad y método: molienda, dosis, ratio y perfil de cata",
        "proj.p3.f3": "Cuatro versiones evolucionadas con feedback de uso real, no por plan cerrado",
        "proj.p3.made": "Hecho con Claude Fable 5",
        "proj.p3.cta": "Ver Caso de Estudio",

        "skills.title": "Habilidades y Herramientas",
        "skills.tech": "Tecnología",
        "skills.advanced": "(Avanzado)",
        "skills.vibecoding": "Desarrollo asistido por IA (vibe coding)",
        "skills.ai": "APIs de IA",
        "skills.other": "Formación & Otros",
        "skills.degree": "Contador Público, UNLP (en curso, 83%)",
        "skills.english": "Inglés C2 (EF SET Certified)",
        "skills.accounting": "IFRS / USGAAP / R2R",
        "skills.data": "Análisis de Datos",

        "contact.title": "Conectemos",
        "contact.text": "Estoy buscando nuevos desafíos donde pueda aportar mi visión analítica y tecnológica.",

        "footer.text": "© 2026 Germán Silverio. Creado con IA y pasión.",

        "meta.title": "Germán Silverio | Portfolio",
        "meta.description": "Portfolio de Germán Silverio - Analista Contable especializado en automatización, datos e IA"
    },
    en: {
        "nav.about": "About",
        "nav.experience": "Experience",
        "nav.projects": "Projects",
        "nav.contact": "Contact",

        "hero.badge": "Financial & Accounting Analyst · R2R · Fixed Assets",
        "hero.headline": 'From financial statements to <span class="gradient-text">intelligent automation</span>',
        "hero.subtitle": "15 years in finance, now working at the intersection of <strong>accounting, data and&nbsp;AI</strong>. Month-end closings, fixed assets and IFRS/USGAAP reporting at multinational energy companies. I'm drawn to problems where a manual process needs to be rethought — and <strong>AI-assisted development</strong> lets me build solutions that used to be out of reach for an accounting profile.",
        "hero.cta1": "View Projects",
        "hero.cta2": "Get in Touch",

        "about.title": "Professional Profile",
        "about.card1.title": "Accounting & Finance",
        "about.card1.text": "Full month-end closings, fixed assets, reconciliations and planning (OPEX/CAPEX) at multinational energy companies. Advanced SAP and reporting under IFRS, USGAAP and local GAAP.",
        "about.card2.title": "Automation",
        "about.card2.text": "I built an Excel tool to verify inflation adjustment (RECPAM) on fixed assets, cutting verification time and audit queries by 50%. Power Query to turn manual reports into self-updating workflows.",
        "about.card3.title": "Data & AI",
        "about.card3.text": "I build dashboards and applications with Google Apps Script and AI APIs (Gemini), using \"local-first\" architectures that put data privacy first.",

        "exp.title": "Experience",
        "exp.job1.date": "Apr 2026 - Present",
        "exp.job1.role": "Semisenior Analyst, Record-to-Report (R2R)",
        "exp.job1.text": "Integral month-end close for AES Colombia entities. Reconciliation of bank loan liabilities and energy-customer advances, general ledger booking and ad hoc reporting, supporting internal controls and external audits.",
        "exp.job2.date": "Sep 2023 - Mar 2026",
        "exp.job2.role": "Fixed Assets Analyst",
        "exp.job2.text": "Built an Excel-based verification tool for RECPAM (inflation adjustment) on PP&E, cutting verification time and audit queries by 50%. Fixed-asset footnotes under local GAAP, IFRS and USGAAP; closings, variance analysis and data integrity in the SAP FA module.",
        "exp.job3.date": "Oct 2021 - Sep 2023",
        "exp.job3.role": "Planning and Control Analyst",
        "exp.job3.text": "OPEX reporting, variance analysis and expense budget preparation. Tracked capital projects and government credits, supporting monthly provisions and external audits.",
        "exp.job4.date": "Apr 2017 - Oct 2021",
        "exp.job4.role": "Accounting Analyst",
        "exp.job4.text": "Led the Fixed Assets module for the company's SAP migration, including full data migration. Co-led, with Accenture consultants, the 2018 SAP implementation of inflation-adjusted fixed-asset accounting, automating its calculation and execution. IFRS financial statements and management reporting.",
        "exp.job5.date": "Jul 2011 - Mar 2017",
        "exp.job5.role": "Accounting Analyst",
        "exp.job5.text": "Daily reconciliation of collections from ~200 health-insurance providers, averaging 20 high-volume reconciliations per day. Bookkeeping, invoicing and a treasury rotation: issuing checks, processing payments and executing daily investments.",

        "proj.title": "Featured Projects",
        "proj.p1.tag": "AI-Powered PWA",
        "proj.p1.title": "Smart Finance: AI-Driven Tracking",
        "proj.p1.text": "A \"local-first\" Progressive Web App (PWA) for personal expense tracking. It integrates the Google Gemini API to scan receipts automatically and provide personalized financial advice, with no backend servers.",
        "proj.p1.f1": "Receipt scanning with AI vision",
        "proj.p1.f2": "Smart financial advisor (chatbot)",
        "proj.p1.f3": "100% private: data never leaves your device",
        "proj.p1.cta": "Try the Live Demo",
        "proj.p1.made": "Built with Gemini AI",
        "proj.p2.tag": "Automation",
        "proj.p2.title": "Cash Flow: Automated Dashboard",
        "proj.p2.text": "A personal cash-flow management system built on Google Sheets, with a multi-year projection model and a read-only web app (HtmlService) served from Apps Script. The dashboard recalculates itself: no manual work or maintenance.",
        "proj.p2.f1": "Optimistic / Base / Pessimistic scenarios with automatic recalculation",
        "proj.p2.f2": "Month-by-month liquidity status and projected coverage margin",
        "proj.p2.f3": "USD portfolio simulator (bonds, CEDEARs, money market)",
        "proj.p2.made": "Built with Claude Fable 5",

        "proj.p3.tag": "Product & Execution",
        "proj.p3.title": "CoffeeHouse: Espresso Dialing Journal",
        "proj.p3.text": "An espresso dialing PWA that lives on a phone mounted on the coffee bar: it logs grind, dose, yield and time per coffee variety and brew method. Built without writing a single line of code, directing Anthropic's Claude Fable 5 model with written specs: four versions iterated through real-world use, now in daily production.",
        "proj.p3.f1": "Kiosk-mode PWA: offline, wake lock and a suspension-proof timer",
        "proj.p3.f2": "Logs per variety and method: grind, dose, ratio and tasting profile",
        "proj.p3.f3": "Four versions evolved through real-use feedback, not a fixed upfront plan",
        "proj.p3.made": "Built with Claude Fable 5",
        "proj.p3.cta": "Read the Case Study",

        "skills.title": "Skills & Tools",
        "skills.tech": "Technology",
        "skills.advanced": "(Advanced)",
        "skills.vibecoding": "AI-assisted development (vibe coding)",
        "skills.ai": "AI APIs",
        "skills.other": "Education & Other",
        "skills.degree": "Public Accountant, UNLP (in progress, 83%)",
        "skills.english": "English C2 (EF SET Certified)",
        "skills.accounting": "IFRS / USGAAP / R2R",
        "skills.data": "Data Analysis",

        "contact.title": "Let's Connect",
        "contact.text": "I'm looking for new challenges where I can bring my analytical and technological mindset.",

        "footer.text": "© 2026 Germán Silverio. Built with AI and passion.",

        "meta.title": "Germán Silverio | Portfolio",
        "meta.description": "Germán Silverio's portfolio - Accounting Analyst specialized in automation, data and AI"
    }
};

function setLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            el.innerHTML = dict[key];
        }
    });

    document.documentElement.lang = lang;
    document.title = dict["meta.title"];
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', dict["meta.description"]);

    document.getElementById('lang-es').classList.toggle('active', lang === 'es');
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');

    try {
        localStorage.setItem('portfolio_lang', lang);
    } catch (e) { /* storage unavailable */ }
}

// ============ Main ============
document.addEventListener('DOMContentLoaded', () => {
    // Language: saved preference > browser language > Spanish
    let lang = 'es';
    try {
        lang = localStorage.getItem('portfolio_lang')
            || (navigator.language && navigator.language.startsWith('en') ? 'en' : 'es');
    } catch (e) { /* storage unavailable */ }
    setLanguage(lang);

    document.getElementById('lang-es').addEventListener('click', () => setLanguage('es'));
    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Reveal animations on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.about-card, .project-card, .section-title, .timeline-item').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Gallery: thumbnail click swaps the main image of its own project
    document.querySelectorAll('.project-gallery').forEach(gallery => {
        const mainImg = document.getElementById(gallery.dataset.target);
        if (!mainImg) return;
        const thumbs = gallery.querySelectorAll('img');
        thumbs.forEach(img => {
            img.addEventListener('click', (e) => {
                e.stopPropagation();
                mainImg.src = img.src;
                mainImg.alt = img.alt;
                thumbs.forEach(t => t.classList.remove('active'));
                img.classList.add('active');
            });
        });
    });

    // Lightbox with prev/next navigation
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-lightbox');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    let lbImages = [];
    let lbIndex = 0;

    const updateLightbox = () => {
        const img = lbImages[lbIndex];
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
    };

    const openLightbox = (images, index) => {
        lbImages = images;
        lbIndex = index;
        updateLightbox();
        lightbox.style.display = 'block';
    };

    const navLightbox = (delta) => {
        if (lbImages.length < 2) return;
        lbIndex = (lbIndex + delta + lbImages.length) % lbImages.length;
        updateLightbox();
    };

    document.querySelectorAll('.project-image img').forEach(img => {
        img.addEventListener('click', () => {
            const card = img.closest('.project-card');
            const thumbs = card ? Array.from(card.querySelectorAll('.project-gallery img')) : [];
            const images = thumbs.length ? thumbs : [img];
            let index = images.findIndex(t => t.src === img.src);
            if (index < 0) index = 0;
            openLightbox(images, index);
        });
    });

    const closeLightbox = () => { lightbox.style.display = 'none'; };
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); navLightbox(-1); });
    if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); navLightbox(1); });
    window.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display !== 'block') return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navLightbox(-1);
        if (e.key === 'ArrowRight') navLightbox(1);
    });
});
