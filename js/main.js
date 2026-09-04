// ============ i18n ============
const translations = {
    es: {
        "nav.about": "Qué hago",
        "nav.story": "Cómo llegué acá",
        "nav.projects": "Proyectos",
        "nav.experience": "Trayectoria",
        "nav.contact": "Contacto",

        "hero.badge": "Analista contable · Construyo las herramientas con las que trabajo",
        "hero.headline": 'Quince años entendiendo procesos. Ahora también <span class="gradient-text">los construyo</span>.',
        "hero.subtitle": "Soy analista contable en una multinacional de energía: cierres, activos fijos, IFRS, SAP. En algún momento dejé de esperar que alguien resolviera los procesos que me molestaban y empecé a construir las herramientas yo mismo. Hoy tengo software mío corriendo todos los días —una app en la barra de un café, un CRM que usa una martillera para trabajar, un sitio web que se alimenta de ese CRM— y estoy llevando la misma idea adentro de mi trabajo, con agentes que aprenden mis tareas de cierre.",
        "hero.note": "Nada de esto está terminado. Lo muestro igual: prefiero enseñar algo que anda y se sigue puliendo antes que esperar a que esté perfecto.",
        "hero.cta1": "Ver proyectos",
        "hero.cta2": "Contactar",

        "about.title": "Qué hago",
        "about.lead": "Casi todo mi trabajo entra en tres movimientos, y siempre en este orden.",
        "about.card1.title": "1 · Entiendo el proceso",
        "about.card1.text": "Quince años de cierres, conciliaciones, activos fijos y control de gestión en energía y salud. Sé leer un proceso desde adentro: dónde se pierde el tiempo, qué dato no cierra y por qué, y qué parte nadie quiere tocar. Automatizar sin esto es hacer más rápido algo que estaba mal.",
        "about.card2.title": "2 · Construyo la herramienta",
        "about.card2.text": "Excel y Power Query cuando alcanza; una app web cuando no. Escribo la especificación, dirijo el desarrollo con IA y decido la arquitectura: qué se guarda dónde, qué se expone y qué no, cómo se vuelve atrás si algo sale mal. El código lo escribe el modelo; las decisiones las tomo yo.",
        "about.card3.title": "3 · La pongo a andar y la sigo",
        "about.card3.text": "Una herramienta sirve cuando alguien la usa un martes cualquiera sin pensarla. Entrego, miro cómo se usa de verdad y vuelvo a tocarla. Cuatro versiones de la app de café salieron así, no de un plan cerrado.",

        "story.title": "Cómo llegué acá",
        "story.lead": "No hubo un salto. Hubo una serie de veces en que construir algo resultó más corto que explicar por qué no se podía.",
        "story.s1.step": "2018 · Edelap",
        "story.s1.title": "La primera automatización no fue mía",
        "story.s1.text": "Lideré el módulo de Activos Fijos en la migración a SAP y, con consultores de Accenture, implementamos el ajuste por inflación de bienes de uso dentro del sistema: el cálculo y la ejecución quedaron automatizados. Fue la primera vez que vi de cerca la diferencia entre hacer un proceso y hacer que el proceso se haga solo. Todavía no escribía una línea de código, pero ya sabía dónde quería estar parado.",
        "story.s2.step": "2023-2026 · AES",
        "story.s2.title": "El papel de trabajo que cambió la conversación",
        "story.s2.text": "Armé en Excel una herramienta para comprobar el RECPAM sobre bienes de uso. Bajó a la mitad el tiempo de verificación y a la mitad las consultas de auditoría. Lo interesante no fue el 50%: fue descubrir que el cuello de botella no era el volumen de trabajo sino la falta de una herramienta, y que esa herramienta la podía hacer yo. Después vinieron los flujos de Power Query, que convirtieron reportes que se armaban a mano en cosas que se actualizan solas.",
        "story.s3.step": "2026 · Proyectos propios",
        "story.s3.title": "De la planilla al producto",
        "story.s3.text": "Mi modelo de flujo de fondos personal ya era una planilla seria: proyección multianual, tres escenarios, cartera en dólares. Le puse encima un tablero web para poder mirarlo desde el celular sin abrir el Sheet. Ahí aprendí lo que después usé en todo lo demás: dejar el cálculo donde ya funciona y que la app sea solo una cara. Casi en paralelo hice Smart Finance, una PWA local-first que escanea tickets con la API de Gemini, para entender cómo se integra IA de verdad y no de demo.",
        "story.s3.cap": "Tablero de Flujo de Fondos, vista de demostración con datos de ejemplo.",
        "story.s4.step": "2026 · CoffeeHouse",
        "story.s4.title": "El proyecto que me enseñó a iterar",
        "story.s4.text": "Quería llevar registro de cómo calibraba el café y terminé con una PWA instalada en un teléfono montado en la barra. La primera versión estaba bien y era incómoda. La segunda arregló el timer, que se moría cuando la pantalla se suspendía. La tercera y la cuarta salieron de usarla todos los días. Ninguna de esas mejoras estaba en el plan original, porque el plan original no sabía cómo se usa una app con las manos mojadas.",
        "story.s4.cap": "La app en la barra, en uso diario.",
        "story.s5.step": "2026 · Primer cliente",
        "story.s5.title": "Agustina, y la diferencia entre un proyecto y un producto",
        "story.s5.text": "Una amiga martillera se largó por su cuenta y necesitaba dejar de trabajar entre planillas sueltas y WhatsApp. Empezamos por lo mínimo —contactos, propiedades, agenda— y fuimos agregando por iteraciones. Construir para otro cambia todo: hay que escribir manuales, dejar un camino de vuelta si una versión sale mal, elegir la arquitectura pensando en la cuenta de Google de ella y no en la comodidad mía. Del CRM salió después el sitio web, que publica solo las propiedades que ella tilda. Los dos siguen en desarrollo y los dos ya se usan.",
        "story.s5.cap": "CRM Lacalle, versión de demostración con datos inventados.",
        "story.s6.step": "Ahora · En el trabajo",
        "story.s6.title": "Un agente que aprenda mi cierre",
        "story.s6.text": "Estoy usando Copilot de forma continua sobre mis tareas reales de cierre y, mientras las hago, documentando los pasos y las reglas de cada una. La idea es construir un agente que las ejecute, o que al menos me las deje encaradas en unos minutos. Está en curso y todavía no tiene resultados que mostrar, pero es la dirección: el mismo movimiento de los proyectos de arriba, aplicado adentro del laburo.",

        "proj.title": "Proyectos",
        "proj.lead": "Cinco cosas que existen y se usan. Dos están en desarrollo activo: las muestro así, con lo que falta a la vista.",

        "proj.p1.tag": "Cliente real",
        "proj.p1.status": "En desarrollo · en uso",
        "proj.p1.title": "CRM Lacalle Servicios Inmobiliarios",
        "proj.p1.text": "Sistema de gestión completo para una martillera pública que se lanzó por su cuenta en Bolívar. Contactos, propiedades, propietarios, pipeline de operaciones, agenda con seguimientos, tablero de métricas, fotos en Drive, mails con firma de marca y redacción asistida por IA. Corre como web app de Apps Script con Google Sheets de base: sin cuentas nuevas para ella y con el historial de versiones de Drive haciendo de respaldo automático.",
        "proj.p1.f1": "Evalué y descarté Supabase/Postgres: menos piezas para quien lo va a usar sola",
        "proj.p1.f2": "Versionado por releases fechadas, con camino de vuelta si una prueba sale mal",
        "proj.p1.f3": "Cuatro suites de tests automatizados y una demo con datos inventados para mostrar",
        "proj.p1.f4": "Manuales separados: uno de instalación para quien toque el código, otro de uso para ella",
        "proj.p1.nextlabel": "Lo que sigue:",
        "proj.p1.next": "métricas de redes sociales, informes para propietarios y la posibilidad de venderlo a otras inmobiliarias. Es el proyecto con más recorrido por delante de todos los que tengo.",

        "proj.p2.tag": "Web pública",
        "proj.p2.status": "En desarrollo · publicada",
        "proj.p2.title": "Sitio web Lacalle, conectado al CRM",
        "proj.p2.text": "El sitio institucional se alimenta del mismo CRM. Agustina tilda \"publicar en la web\" en una propiedad, aprieta un botón del menú y el sitio se reconstruye solo. Un proyecto de Apps Script separado expone por JSON únicamente las propiedades publicables: el CRM entero y sus columnas sensibles nunca salen a internet. Astro genera HTML estático en cada build y Netlify lo sirve.",
        "proj.p2.f1": "Saqué el CDN de Tailwind: de ~300 KB de JavaScript bloqueante a 27 KB de CSS compilado",
        "proj.p2.f2": "Reemplacé la fuente de iconos por un sprite SVG de ~13 KB, sin pedidos de red",
        "proj.p2.f3": "El buscador, los filtros y el formulario de tasación eran decorativos: hoy funcionan",
        "proj.p2.f4": "Logo real vectorizado desde el PDF del estudio, servido con currentColor",
        "proj.p2.nextlabel": "Lo que sigue:",
        "proj.p2.next": "dominio propio, fichas individuales de cada propiedad y medición. Hoy vive en un subdominio de Netlify y todavía le falta.",
        "proj.p2.cta": "Ver el sitio",

        "proj.p3.tag": "Producto propio",
        "proj.p3.status": "En producción diaria",
        "proj.p3.title": "CoffeeHouse: bitácora de calibración de café",
        "proj.p3.text": "PWA de calibración de espresso que vive en un teléfono montado en la barra: registra molienda, dosis, rendimiento y tiempo por variedad y método. Construida sin escribir código a mano, dirigiendo al modelo con especificaciones escritas. Cuatro versiones iteradas por uso real; hoy la abro todos los días.",
        "proj.p3.f1": "Modo kiosk: pantalla completa, offline, wake lock y timer que sobrevive la suspensión",
        "proj.p3.f2": "Calibre guardado por combinación de variedad y método, con ratios calculados solos",
        "proj.p3.f3": "Estándares técnicos y recetario visual de doce preparaciones",
        "proj.p3.cta": "Ver el caso de estudio",

        "proj.p4.tag": "Modelo financiero",
        "proj.p4.status": "En uso",
        "proj.p4.title": "Flujo de Fondos: informe de gestión en vivo",
        "proj.p4.text": "Modelo de flujo de fondos en Google Sheets con proyección hasta 2029 y tres escenarios, más un tablero web de solo lectura servido desde Apps Script. La regla de diseño es una sola: el Sheet es la única fuente de verdad y el único motor de cálculo; el tablero solo lee y muestra. Si el modelo se reestructura, se actualiza un mapa de datos documentado y nada más.",
        "proj.p4.f1": "Escenarios pesimista / base / optimista, recalculados al cargar sin tocar el archivo",
        "proj.p4.f2": "Margen de cobertura contra umbral y estado de liquidez mes a mes",
        "proj.p4.f3": "Cobertura de objetivos y cartera en dólares",
        "proj.p4.cap": "Capturas de la vista de demostración, con datos de ejemplo.",

        "proj.p5.tag": "PWA con IA",
        "proj.p5.status": "Terminada",
        "proj.p5.title": "Smart Finance: gastos personales con IA",
        "proj.p5.text": "PWA local-first de control de gastos: todos los datos viven en el dispositivo, sin backend. Integra la API de Gemini para dos cosas concretas —escanear un ticket y extraer monto, categoría y descripción, y responder preguntas sobre el historial local— además de presupuestos, proyección con interés compuesto y gráficos.",
        "proj.p5.f1": "Escaneo de tickets por visión artificial",
        "proj.p5.f2": "Proyección con aumentos, inflación y reducción de gastos",
        "proj.p5.f3": "100% privada: los datos nunca salen del dispositivo",
        "proj.p5.cta": "Probar la demo",

        "exp.title": "Trayectoria",
        "exp.job1.date": "Abr 2026 - Presente",
        "exp.job1.role": "Analista Semisenior, Record-to-Report (R2R)",
        "exp.job1.text": "Cierre mensual integral para las entidades de AES Colombia. Conciliación de préstamos bancarios y anticipos de clientes de energía, registraciones en el mayor y reporting ad hoc, con soporte a controles internos y auditorías externas. En curso: uso continuo de Copilot sobre las tareas reales de cierre, documentando pasos y reglas para entrenar un agente que las ejecute.",
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

        "skills.title": "Herramientas",
        "skills.finance": "Contabilidad y finanzas",
        "skills.build": "Construcción",
        "skills.ai": "IA aplicada",
        "skills.other": "Formación",
        "skills.advanced": "(Avanzado)",
        "skills.accounting": "IFRS / USGAAP / R2R",
        "skills.pwa": "(offline, service workers)",
        "skills.testing": "Testing automatizado (Node)",
        "skills.vibecoding": "Desarrollo dirigido por especificación",
        "skills.apis": "APIs de Gemini y Claude",
        "skills.agents": "Diseño de agentes sobre procesos reales",
        "skills.degree": "Contador Público, UNLP (en curso, 83%)",
        "skills.english": "Inglés C2 (EF SET Certified)",
        "skills.data": "Data Analyst (Digital House)",

        "contact.title": "Conectemos",
        "contact.text": "Me interesan los lugares donde haya un proceso manual que nadie se animó a tocar, y los proyectos donde pueda construir la solución además de diagnosticarla. Si estás armando algo así —o si tenés una herramienta que sospechás que se puede automatizar— escribime.",

        "footer.text": "© 2026 Germán Silverio. Este sitio también está en desarrollo.",

        "meta.title": "Germán Silverio | Portfolio",
        "meta.description": "Germán Silverio — analista contable que construye las herramientas con las que trabaja. Automatización, IA aplicada y software de negocio en producción."
    },
    en: {
        "nav.about": "What I do",
        "nav.story": "How I got here",
        "nav.projects": "Projects",
        "nav.experience": "Experience",
        "nav.contact": "Contact",

        "hero.badge": "Accounting analyst · I build the tools I work with",
        "hero.headline": 'Fifteen years understanding processes. Now I <span class="gradient-text">build them too</span>.',
        "hero.subtitle": "I'm an accounting analyst at a multinational energy company: closings, fixed assets, IFRS, SAP. At some point I stopped waiting for someone else to fix the processes that bothered me and started building the tools myself. Today I have my own software running every day — an app on a coffee bar, a CRM a real-estate broker uses for her work, a website fed by that CRM — and I'm bringing the same idea inside my job, with agents that learn my month-end tasks.",
        "hero.note": "None of this is finished. I'm showing it anyway: I'd rather show something that works and keeps improving than wait until it's perfect.",
        "hero.cta1": "See projects",
        "hero.cta2": "Get in touch",

        "about.title": "What I do",
        "about.lead": "Almost all of my work fits into three moves, always in this order.",
        "about.card1.title": "1 · Understand the process",
        "about.card1.text": "Fifteen years of closings, reconciliations, fixed assets and management control in energy and healthcare. I can read a process from the inside: where the time goes, which number doesn't tie out and why, and which part nobody wants to touch. Automating without that just makes a broken thing faster.",
        "about.card2.title": "2 · Build the tool",
        "about.card2.text": "Excel and Power Query when that's enough; a web app when it isn't. I write the spec, direct the AI-assisted development and own the architecture: what gets stored where, what is exposed and what isn't, how to roll back when something breaks. The model writes the code; I make the decisions.",
        "about.card3.title": "3 · Ship it and stay with it",
        "about.card3.text": "A tool is worth something when someone uses it on an ordinary Tuesday without thinking about it. I ship, watch how it's actually used, and go back in. Four versions of the coffee app came out of that, not out of an upfront plan.",

        "story.title": "How I got here",
        "story.lead": "There was no leap. There was a series of moments when building something turned out to be shorter than explaining why it couldn't be done.",
        "story.s1.step": "2018 · Edelap",
        "story.s1.title": "The first automation wasn't mine",
        "story.s1.text": "I led the Fixed Assets module through the SAP migration and, together with Accenture consultants, we implemented inflation-adjusted fixed-asset accounting inside the system: calculation and execution became automatic. It was the first time I saw up close the difference between doing a process and making the process run itself. I still wasn't writing a line of code, but I already knew where I wanted to stand.",
        "story.s2.step": "2023-2026 · AES",
        "story.s2.title": "The working paper that changed the conversation",
        "story.s2.text": "I built an Excel tool to verify RECPAM (inflation adjustment) on PP&E. It halved verification time and halved audit queries. The interesting part wasn't the 50%: it was realizing the bottleneck wasn't workload but the absence of a tool — and that I could build that tool myself. Power Query flows came next, turning hand-assembled reports into things that refresh on their own.",
        "story.s3.step": "2026 · Personal projects",
        "story.s3.title": "From spreadsheet to product",
        "story.s3.text": "My personal cash-flow model was already a serious spreadsheet: multi-year projection, three scenarios, a USD portfolio. I put a web dashboard on top so I could check it from my phone without opening the Sheet. That taught me what I used everywhere afterwards: leave the calculation where it already works and let the app be just a face. Almost in parallel I built Smart Finance, a local-first PWA that scans receipts with the Gemini API, to learn how AI integrates for real and not for a demo.",
        "story.s3.cap": "Cash Flow dashboard, preview view with sample data.",
        "story.s4.step": "2026 · CoffeeHouse",
        "story.s4.title": "The project that taught me to iterate",
        "story.s4.text": "I wanted to keep track of how I dialed in my coffee and ended up with a PWA installed on a phone mounted on the bar. The first version was fine and awkward. The second fixed the timer, which died whenever the screen went to sleep. The third and fourth came out of using it every day. None of those improvements were in the original plan, because the original plan didn't know what it's like to use an app with wet hands.",
        "story.s4.cap": "The app on the bar, in daily use.",
        "story.s5.step": "2026 · First client",
        "story.s5.title": "Agustina, and the difference between a project and a product",
        "story.s5.text": "A friend who is a licensed real-estate broker went out on her own and needed to stop working between scattered spreadsheets and WhatsApp. We started with the minimum — contacts, properties, calendar — and added by iterations. Building for someone else changes everything: you write manuals, you leave a way back when a release goes wrong, you choose the architecture around her Google account rather than my convenience. The website came out of the CRM, publishing only the properties she ticks. Both are still in development and both are already in use.",
        "story.s5.cap": "CRM Lacalle, demo version with invented data.",
        "story.s6.step": "Now · At work",
        "story.s6.title": "An agent that learns my close",
        "story.s6.text": "I'm using Copilot continuously on my actual month-end tasks and, as I do them, documenting the steps and rules of each one. The goal is an agent that runs them, or at least leaves them started for me in a few minutes. It's in progress and has no results to show yet, but it's the direction: the same move as the projects above, applied inside the day job.",

        "proj.title": "Projects",
        "proj.lead": "Five things that exist and are in use. Two are under active development: I'm showing them that way, with what's missing in plain sight.",

        "proj.p1.tag": "Real client",
        "proj.p1.status": "In development · in use",
        "proj.p1.title": "CRM Lacalle Servicios Inmobiliarios",
        "proj.p1.text": "A full management system for a licensed real-estate broker who went independent in Bolívar. Contacts, properties, owners, deal pipeline, calendar with follow-ups, metrics dashboard, photos in Drive, branded emails and AI-assisted copywriting. It runs as an Apps Script web app with Google Sheets as the database: no new accounts for her, and Drive's version history acting as automatic backup.",
        "proj.p1.f1": "Evaluated and dropped Supabase/Postgres: fewer moving parts for someone working alone",
        "proj.p1.f2": "Dated release folders, with a way back when a test build goes wrong",
        "proj.p1.f3": "Four automated test suites and a demo build with invented data for showing it",
        "proj.p1.f4": "Two separate manuals: installation for whoever touches the code, usage for her",
        "proj.p1.nextlabel": "What's next:",
        "proj.p1.next": "social media metrics, owner reports, and possibly selling it to other agencies. It's the project with the most road ahead of anything I have.",

        "proj.p2.tag": "Public website",
        "proj.p2.status": "In development · live",
        "proj.p2.title": "Lacalle website, wired to the CRM",
        "proj.p2.text": "The public site is fed by the same CRM. Agustina ticks \"publish to the web\" on a property, hits a button in the menu and the site rebuilds itself. A separate Apps Script project exposes only publishable properties as JSON: the CRM itself and its sensitive columns never reach the internet. Astro generates static HTML on each build and Netlify serves it.",
        "proj.p2.f1": "Dropped the Tailwind CDN: from ~300 KB of render-blocking JS to 27 KB of compiled CSS",
        "proj.p2.f2": "Replaced the icon font with a ~13 KB inline SVG sprite, zero network requests",
        "proj.p2.f3": "Search, filters and the valuation form were decorative: today they work",
        "proj.p2.f4": "Real logo vectorized from the agency's PDF, served with currentColor",
        "proj.p2.nextlabel": "What's next:",
        "proj.p2.next": "its own domain, individual property pages and analytics. It lives on a Netlify subdomain today and still has a way to go.",
        "proj.p2.cta": "Visit the site",

        "proj.p3.tag": "Own product",
        "proj.p3.status": "In daily production",
        "proj.p3.title": "CoffeeHouse: espresso dialing journal",
        "proj.p3.text": "An espresso dialing PWA that lives on a phone mounted on the bar: it logs grind, dose, yield and time per variety and brew method. Built without hand-writing code, directing the model with written specs. Four versions iterated through real use; I open it every day.",
        "proj.p3.f1": "Kiosk mode: fullscreen, offline, wake lock and a timer that survives suspension",
        "proj.p3.f2": "Grind setting saved per variety/method combination, with ratios computed automatically",
        "proj.p3.f3": "Technical brewing standards and a visual recipe book of twelve drinks",
        "proj.p3.cta": "Read the case study",

        "proj.p4.tag": "Financial model",
        "proj.p4.status": "In use",
        "proj.p4.title": "Cash Flow: a live management report",
        "proj.p4.text": "A cash-flow model in Google Sheets projecting through 2029 across three scenarios, plus a read-only web dashboard served from Apps Script. One design rule: the Sheet is the single source of truth and the only calculation engine; the dashboard only reads and displays. If the model is restructured, you update one documented data map and nothing else.",
        "proj.p4.f1": "Pessimistic / base / optimistic scenarios, recalculated on load without altering the file",
        "proj.p4.f2": "Coverage margin against threshold and month-by-month liquidity status",
        "proj.p4.f3": "Savings-goal coverage and USD portfolio",
        "proj.p4.cap": "Screenshots of the preview view, with sample data.",

        "proj.p5.tag": "AI-powered PWA",
        "proj.p5.status": "Finished",
        "proj.p5.title": "Smart Finance: personal spending with AI",
        "proj.p5.text": "A local-first expense-tracking PWA: all data lives on the device, no backend. It uses the Gemini API for two concrete things — scanning a receipt to extract amount, category and description, and answering questions about the local history — plus budgets, compound-interest projections and charts.",
        "proj.p5.f1": "Receipt scanning with AI vision",
        "proj.p5.f2": "Projections with raises, inflation and expense reduction",
        "proj.p5.f3": "100% private: data never leaves the device",
        "proj.p5.cta": "Try the demo",

        "exp.title": "Experience",
        "exp.job1.date": "Apr 2026 - Present",
        "exp.job1.role": "Semisenior Analyst, Record-to-Report (R2R)",
        "exp.job1.text": "Integral month-end close for AES Colombia entities. Reconciliation of bank loan liabilities and energy-customer advances, general ledger booking and ad hoc reporting, supporting internal controls and external audits. In progress: continuous use of Copilot on real close tasks, documenting steps and rules to train an agent that can run them.",
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

        "skills.title": "Tools",
        "skills.finance": "Accounting & finance",
        "skills.build": "Building",
        "skills.ai": "Applied AI",
        "skills.other": "Education",
        "skills.advanced": "(Advanced)",
        "skills.accounting": "IFRS / USGAAP / R2R",
        "skills.pwa": "(offline, service workers)",
        "skills.testing": "Automated testing (Node)",
        "skills.vibecoding": "Spec-driven development",
        "skills.apis": "Gemini and Claude APIs",
        "skills.agents": "Agent design on real processes",
        "skills.degree": "Public Accountant, UNLP (in progress, 83%)",
        "skills.english": "English C2 (EF SET Certified)",
        "skills.data": "Data Analyst (Digital House)",

        "contact.title": "Let's connect",
        "contact.text": "I'm drawn to places with a manual process nobody has dared to touch, and to projects where I can build the solution as well as diagnose it. If you're putting something like that together — or you have a tool you suspect could be automated — write to me.",

        "footer.text": "© 2026 Germán Silverio. This site is in development too.",

        "meta.title": "Germán Silverio | Portfolio",
        "meta.description": "Germán Silverio — an accounting analyst who builds the tools he works with. Automation, applied AI and business software in production."
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

    document.querySelectorAll('.about-card, .project-card, .section-title, .timeline-item, .story-item').forEach(el => {
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

    // Story images also open in the lightbox, on their own
    document.querySelectorAll('.story-media img').forEach(img => {
        img.addEventListener('click', () => openLightbox([img], 0));
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
