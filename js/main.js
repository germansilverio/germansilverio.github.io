// ============ i18n ============
const translations = {
    es: {
        "nav.work": "Proyectos",
        "nav.how": "Cómo trabajo",
        "nav.cv": "Trayectoria",
        "nav.cta": "Hablemos",

        "hero.eyebrow": "Analista contable · La Plata, Argentina",
        "hero.lead": "Construyo las herramientas con las que trabajo. Quince años de cierres, activos fijos y SAP en multinacionales de energía — y software propio que corre todos los días.",
        "hero.cta1": "Ver proyectos",
        "hero.cta2": 'Escribime <span aria-hidden="true">→</span>',

        "stat.1": "años en finanzas",
        "stat.2": "productos propios en uso",
        "stat.3": "días: CRM + web, de cero a producción",
        "stat.4": "tiempo de verificación y consultas de auditoría",

        "work.eyebrow": "01 — Proyectos",
        "work.title": "Cosas que existen y se usan",

        "p1.state": "En desarrollo · en uso",
        "p1.kind": "Cliente real",
        "p1.title": "CRM Lacalle Servicios Inmobiliarios",
        "p1.sub": "Sistema de gestión completo para una martillera que se lanzó por su cuenta. Del cero a producción, con el sitio web, en menos de diez días.",
        "p1.b1": "Contactos, propiedades, pipeline, agenda, métricas, fotos y mails con firma",
        "p1.b2": "Redacción de avisos asistida por IA (Gemini)",
        "p1.b3": "Descarté Postgres: cero cuentas nuevas para ella, respaldo por historial de Drive",
        "p1.b4": "4 suites de tests, releases fechadas con vuelta atrás, dos manuales",
        "p1.win": "Dejó las planillas sueltas. El tiempo que gastaba en administrar se le fue a clientes, contenido y marca — y todo eso vuelve al CRM como insumo.",

        "p2.state": "En desarrollo · publicada",
        "p2.title": "Sitio web conectado al CRM",
        "p2.sub": "Ella tilda \"publicar\", aprieta un botón y el sitio se reconstruye solo.",
        "p2.b1": "Un Apps Script aparte expone por JSON solo lo publicable: el CRM nunca sale a internet",
        "p2.b2": "Saqué el CDN de Tailwind: 300 KB de JS bloqueante → 27 KB de CSS",
        "p2.b3": "Iconos por sprite SVG de 13 KB, sin pedidos de red",
        "p2.b4": "Buscador, filtros y formulario de tasación: eran decorativos, hoy funcionan",
        "p2.cta": "Ver el sitio",

        "p3.state": "En producción diaria",
        "p3.title": "CoffeeHouse",
        "p3.sub": "Bitácora de calibración de espresso en un teléfono montado en la barra. El proyecto que me enseñó a iterar: cuatro versiones salidas del uso, no del plan.",
        "p3.b1": "Modo kiosk: offline, wake lock, timer que sobrevive la suspensión",
        "p3.b2": "Calibre guardado por variedad y método, ratios automáticos",
        "p3.b3": "Recetario de doce preparaciones y estándares técnicos",
        "p3.cta": "Caso de estudio",

        "p4.state": "En uso",
        "p4.title": "Flujo de Fondos",
        "p4.sub": "Modelo de proyección a 2029 con tres escenarios, más un tablero web de solo lectura.",
        "p4.b1": "El Sheet es la única fuente de verdad; el tablero solo lee",
        "p4.b2": "Escenarios recalculados al cargar, sin tocar el archivo",
        "p4.b3": "Margen de cobertura contra umbral y cartera en dólares",
        "p4.cap": "Capturas de la vista de demostración, con datos de ejemplo.",

        "p5.state": "Terminada",
        "p5.title": "Smart Finance",
        "p5.sub": "PWA de gastos local-first: los datos nunca salen del dispositivo.",
        "p5.b1": "Escaneo de tickets por visión artificial (Gemini)",
        "p5.b2": "Asesor conversacional sobre el historial local",
        "p5.b3": "Presupuestos y proyección con interés compuesto",
        "p5.cta": "Probar la demo",

        "p6.state": "En curso",
        "p6.title": "Agente de cierres contables",
        "p6.sub": "Dentro de mi trabajo: uso Copilot sobre las tareas reales de cierre y documento los pasos y las reglas mientras las hago, para construir un agente que las ejecute.",
        "p6.b1": "Sin resultados todavía: es la dirección, no un logro",

        "how.eyebrow": "02 — Cómo trabajo",
        "how.title": "Entender, construir, sostener",
        "how.s1.t": "Entiendo el proceso",
        "how.s1.p": "Quince años adentro de cierres y control de gestión. Sé dónde se pierde el tiempo y qué dato no cierra. Automatizar sin eso es acelerar un error.",
        "how.s2.t": "Construyo la herramienta",
        "how.s2.p": "Escribo la especificación, dirijo el desarrollo con IA y decido la arquitectura. El código lo escribe el modelo; las decisiones las tomo yo.",
        "how.s3.t": "La sostengo",
        "how.s3.p": "Entrego, miro cómo se usa de verdad y vuelvo a tocarla. Tests, versionado y manuales para que no dependa de mí.",

        "cv.eyebrow": "03 — Trayectoria",
        "cv.title": "Quince años en finanzas corporativas",
        "cv.r1": "Cierre mensual integral de las entidades de AES Colombia.",
        "cv.r2": "Papel de trabajo para verificar el RECPAM sobre bienes de uso: −50% en tiempo y en consultas de auditoría. Notas bajo IFRS, USGAAP y GAAP local.",
        "cv.r3": "OPEX, desvíos y presupuesto de gastos; obras de capital y créditos con el Estado.",
        "cv.r4": "Lideré Activos Fijos en la migración a SAP. Con Accenture, automatizamos el ajuste por inflación de bienes de uso dentro del sistema.",
        "cv.r5": "Veinte conciliaciones de alto volumen por día sobre las cobranzas de ~200 obras sociales.",

        "tools.1": "Finanzas",
        "tools.2": "Construcción",
        "tools.3": "IA",
        "tools.4": "Formación",
        "tools.test": "Testing (Node)",
        "tools.spec": "Desarrollo por especificación",
        "tools.agents": "Diseño de agentes",
        "tools.degree": "Contador Público, UNLP (83%)",
        "tools.en": "Inglés C2 · EF SET",

        "cta.title": "¿Tenés un proceso manual que nadie se animó a tocar?",
        "cta.sub": "Eso es exactamente lo que me gusta hacer. Escribime y lo miramos.",

        "foot.note": "Este sitio también está en desarrollo.",

        "meta.title": "Germán Silverio | Portfolio",
        "meta.description": "Analista contable que construye las herramientas con las que trabaja. Automatización, IA aplicada y software de negocio en producción."
    },

    en: {
        "nav.work": "Work",
        "nav.how": "How I work",
        "nav.cv": "Experience",
        "nav.cta": "Get in touch",

        "hero.eyebrow": "Accounting analyst · La Plata, Argentina",
        "hero.lead": "I build the tools I work with. Fifteen years of month-end closings, fixed assets and SAP at multinational energy companies — plus my own software running every day.",
        "hero.cta1": "See the work",
        "hero.cta2": 'Write to me <span aria-hidden="true">→</span>',

        "stat.1": "years in finance",
        "stat.2": "own products in use",
        "stat.3": "days: CRM + website, zero to production",
        "stat.4": "verification time and audit queries",

        "work.eyebrow": "01 — Work",
        "work.title": "Things that exist and get used",

        "p1.state": "In development · in use",
        "p1.kind": "Real client",
        "p1.title": "CRM Lacalle Servicios Inmobiliarios",
        "p1.sub": "A complete management system for a real-estate broker who went independent. Zero to production, website included, in under ten days.",
        "p1.b1": "Contacts, properties, pipeline, calendar, metrics, photos and branded email",
        "p1.b2": "AI-assisted listing copy (Gemini)",
        "p1.b3": "Dropped Postgres: no new accounts for her, backup via Drive version history",
        "p1.b4": "4 test suites, dated releases with a way back, two manuals",
        "p1.win": "She left the scattered spreadsheets behind. The time she spent on admin went to clients, content and brand — and all of it feeds back into the CRM.",

        "p2.state": "In development · live",
        "p2.title": "Website wired to the CRM",
        "p2.sub": "She ticks \"publish\", hits a button and the site rebuilds itself.",
        "p2.b1": "A separate Apps Script exposes only publishable records as JSON: the CRM never reaches the internet",
        "p2.b2": "Dropped the Tailwind CDN: 300 KB of blocking JS → 27 KB of CSS",
        "p2.b3": "Icons as a 13 KB SVG sprite, zero network requests",
        "p2.b4": "Search, filters and the valuation form were decorative — now they work",
        "p2.cta": "Visit the site",

        "p3.state": "In daily production",
        "p3.title": "CoffeeHouse",
        "p3.sub": "An espresso dialing journal on a phone mounted at the bar. The project that taught me to iterate: four versions that came out of use, not the plan.",
        "p3.b1": "Kiosk mode: offline, wake lock, a timer that survives suspension",
        "p3.b2": "Grind setting stored per variety and method, ratios computed automatically",
        "p3.b3": "Twelve-drink recipe book and technical brewing standards",
        "p3.cta": "Case study",

        "p4.state": "In use",
        "p4.title": "Cash Flow",
        "p4.sub": "A projection model through 2029 with three scenarios, plus a read-only web dashboard.",
        "p4.b1": "The spreadsheet is the single source of truth; the dashboard only reads",
        "p4.b2": "Scenarios recalculated on load, without touching the file",
        "p4.b3": "Coverage margin against threshold and a USD portfolio",
        "p4.cap": "Screenshots of the preview view, with sample data.",

        "p5.state": "Finished",
        "p5.title": "Smart Finance",
        "p5.sub": "A local-first expense PWA: data never leaves the device.",
        "p5.b1": "Receipt scanning with AI vision (Gemini)",
        "p5.b2": "Conversational advisor over the local history",
        "p5.b3": "Budgets and compound-interest projections",
        "p5.cta": "Try the demo",

        "p6.state": "In progress",
        "p6.title": "Month-end close agent",
        "p6.sub": "Inside my job: I use Copilot on real close tasks and document the steps and rules as I go, to build an agent that can run them.",
        "p6.b1": "No results yet — this is the direction, not an achievement",

        "how.eyebrow": "02 — How I work",
        "how.title": "Understand, build, maintain",
        "how.s1.t": "Understand the process",
        "how.s1.p": "Fifteen years inside closings and management control. I know where the time goes and which number doesn't tie out. Automating without that just speeds up an error.",
        "how.s2.t": "Build the tool",
        "how.s2.p": "I write the spec, direct the AI-assisted development and own the architecture. The model writes the code; I make the decisions.",
        "how.s3.t": "Keep it running",
        "how.s3.p": "I ship, watch how it's actually used and go back in. Tests, versioning and manuals so it doesn't depend on me.",

        "cv.eyebrow": "03 — Experience",
        "cv.title": "Fifteen years in corporate finance",
        "cv.r1": "Full month-end close for the AES Colombia entities.",
        "cv.r2": "Working paper to verify inflation adjustment on PP&E: −50% in time and in audit queries. Notes under IFRS, US GAAP and local GAAP.",
        "cv.r3": "OPEX, variances and expense budgeting; capital projects and government credits.",
        "cv.r4": "Led Fixed Assets through the SAP migration. With Accenture, we automated inflation-adjusted fixed-asset accounting inside the system.",
        "cv.r5": "Twenty high-volume reconciliations a day across collections from ~200 health-insurance providers.",

        "tools.1": "Finance",
        "tools.2": "Building",
        "tools.3": "AI",
        "tools.4": "Education",
        "tools.test": "Testing (Node)",
        "tools.spec": "Spec-driven development",
        "tools.agents": "Agent design",
        "tools.degree": "Public Accountant, UNLP (83%)",
        "tools.en": "English C2 · EF SET",

        "cta.title": "Got a manual process nobody has dared to touch?",
        "cta.sub": "That's exactly what I like doing. Write to me and let's look at it.",

        "foot.note": "This site is in development too.",

        "meta.title": "Germán Silverio | Portfolio",
        "meta.description": "An accounting analyst who builds the tools he works with. Automation, applied AI and business software in production."
    }
};

function setLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const v = dict[el.getAttribute('data-i18n')];
        if (v !== undefined) el.innerHTML = v;
    });
    document.documentElement.lang = lang;
    document.title = dict['meta.title'];
    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', dict['meta.description']);
    document.getElementById('lang-es').classList.toggle('on', lang === 'es');
    document.getElementById('lang-en').classList.toggle('on', lang === 'en');
    try { localStorage.setItem('portfolio_lang', lang); } catch (e) { }
}

document.addEventListener('DOMContentLoaded', () => {

    let lang = 'es';
    try {
        lang = localStorage.getItem('portfolio_lang')
            || (navigator.language && navigator.language.startsWith('en') ? 'en' : 'es');
    } catch (e) { }
    setLanguage(lang);
    document.getElementById('lang-es').addEventListener('click', () => setLanguage('es'));
    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));

    // Entrada suave: se parte del estado visible y solo se oculta si hay
    // IntersectionObserver, para que la página nunca quede en blanco.
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if ('IntersectionObserver' in window && !reduce) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) { e.target.classList.remove('pending'); io.unobserve(e.target); }
            });
        }, { threshold: .08, rootMargin: '0px 0px -40px 0px' });
        document.querySelectorAll('.card, .step, .roles li, .sec-head').forEach((el, i) => {
            if (i > 1) { el.classList.add('rise', 'pending'); io.observe(el); }
        });
    }

    // Miniaturas: cambian la imagen principal de su propia tarjeta
    document.querySelectorAll('.thumbs').forEach(g => {
        const main = document.getElementById(g.dataset.target);
        if (!main) return;
        g.querySelectorAll('img').forEach(t => {
            t.addEventListener('click', () => {
                main.src = t.src;
                main.alt = t.alt;
                g.querySelectorAll('img').forEach(o => o.classList.remove('on'));
                t.classList.add('on');
                // En pantallas chicas la imagen principal queda fuera de vista al
                // tocar una miniatura: abrimos el visor grande directamente.
                if (window.matchMedia('(max-width: 760px)').matches) {
                    const imgs = [...g.querySelectorAll('img')];
                    open(imgs, Math.max(0, imgs.indexOf(t)));
                }
            });
        });
    });

    // Lightbox
    const lb = document.getElementById('lb');
    const lbImg = document.getElementById('lb-img');
    let set = [], idx = 0;

    const paint = () => { lbImg.src = set[idx].src; lbImg.alt = set[idx].alt; };
    const open = (imgs, i) => { set = imgs; idx = i; paint(); lb.hidden = false; };
    const close = () => { lb.hidden = true; };
    const step = d => { if (set.length > 1) { idx = (idx + d + set.length) % set.length; paint(); } };

    document.querySelectorAll('.shot img').forEach(img => {
        img.addEventListener('click', () => {
            const card = img.closest('.card');
            const thumbs = card ? [...card.querySelectorAll('.thumbs img')] : [];
            const imgs = thumbs.length ? thumbs : [img];
            let i = imgs.findIndex(t => t.src === img.src);
            open(imgs, i < 0 ? 0 : i);
        });
    });

    lb.querySelector('.lb-x').addEventListener('click', close);
    lb.querySelector('.lb-p').addEventListener('click', e => { e.stopPropagation(); step(-1); });
    lb.querySelector('.lb-n').addEventListener('click', e => { e.stopPropagation(); step(1); });
    lb.addEventListener('click', e => { if (e.target === lb) close(); });
    document.addEventListener('keydown', e => {
        if (lb.hidden) return;
        if (e.key === 'Escape') close();
        if (e.key === 'ArrowLeft') step(-1);
        if (e.key === 'ArrowRight') step(1);
    });
});
