// Interactive JavaScript for the Tesis HTML Presentation

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // 1. DATA DEFINITIONS FOR OPERATIONALIZATION TAB
    // ----------------------------------------------------
    const opData = {
        independiente: {
            title: "Gestión automatizada de riesgos de seguridad basada en ISO/IEC 27005",
            conceptual: "Proceso sistemático y automatizado para identificar, analizar, evaluar y tratar los riesgos que afectan la confidencialidad, integridad y disponibilidad de la información, conforme a la norma ISO/IEC 27005.",
            operational: "Se medirá a través del grado de aplicación automatizada de las etapas del proceso de gestión de riesgos en el instituto, mediante el uso de un sistema informático de registro, evaluación y monitoreo.",
            scale: "Escala ordinal (No implementado, Parcialmente implementado, Implementado)",
            dimensions: {
                contexto: {
                    name: "Establecimiento del contexto",
                    indicators: [
                        "Definición del alcance de la gestión automatizada de riesgos de seguridad de la información.",
                        "Establecimiento de criterios formales de probabilidad e impacto para la evaluación."
                    ]
                },
                identificacion: {
                    name: "Identificación de riesgos",
                    indicators: [
                        "Registro y documentación automatizada de activos críticos de información.",
                        "Registro y gestión automatizada de amenazas sobre activos de información.",
                        "Identificación y registro de vulnerabilidades asociadas a activos críticos.",
                        "Documentación y vinculación automatizada de eventos de riesgo."
                    ]
                },
                analisis: {
                    name: "Análisis de riesgos",
                    indicators: [
                        "Estimación de la probabilidad de ocurrencia de riesgos mediante criterios cuantitativos/semicuantitativos.",
                        "Evaluación del impacto sobre la confidencialidad, integridad y disponibilidad de la información."
                    ]
                },
                evaluacion: {
                    name: "Evaluación del riesgo",
                    indicators: [
                        "Priorización de riesgos mediante criterios definidos en la matriz del sistema.",
                        "Definición de riesgos aceptables y no aceptables según tolerancia institucional."
                    ]
                },
                tratamiento: {
                    name: "Tratamiento del riesgo",
                    indicators: [
                        "Definición de opciones de tratamiento (mitigar, transferir, aceptar, evitar) para riesgos no aceptables.",
                        "Selección de controles de seguridad de la información (ISO 27002) en función del riesgo identificado.",
                        "Evaluación del riesgo residual posterior a la aplicación de controles."
                    ]
                },
                monitoreo: {
                    name: "Monitoreo y revisión",
                    indicators: [
                        "Monitoreo periódico automatizado de riesgos identificados.",
                        "Revisión y actualización periódica del proceso de gestión automatizada de riesgos.",
                        "Seguimiento automatizado de tratamientos aplicados a riesgos identificados.",
                        "Generación de reportes de información para seguimiento y control por la dirección."
                    ]
                }
            }
        },
        dependiente: {
            title: "Continuidad Operativa",
            conceptual: "Gestión sostenida que identifica funciones críticas y desarrolla estrategias para continuar o minimizar efectos de interrupciones (NIST SP 800-34 / ISO 22301).",
            operational: "Se medirá mediante la evaluación de las dimensiones de la continuidad operativa antes (pretest) y después (postest) de la implementación de la gestión automatizada de riesgos.",
            scale: "Escala ordinal (Bajo, Medio, Alto)",
            dimensions: {
                disponibilidad: {
                    name: "Disponibilidad de servicios críticos",
                    indicators: [
                        "Disponibilidad de sistemas de información críticos (Académico, Tesorería, Admisión).",
                        "Accesibilidad de la información institucional para usuarios autorizados cuando sea requerida."
                    ]
                },
                respuesta: {
                    name: "Tiempo de respuesta ante incidentes",
                    indicators: [
                        "Detección oportuna de incidentes de seguridad digital.",
                        "Existencia y aplicación de procedimientos formales para la atención y contención de incidentes."
                    ]
                },
                recuperacion: {
                    name: "Capacidad de recuperación de procesos",
                    indicators: [
                        "Recuperación de sistemas críticos dentro de tiempos aceptables (RTO).",
                        "Restauración de información y datos mediante respaldos confiables (RPO)."
                    ]
                },
                resiliencia: {
                    name: "Resiliencia tecnológica",
                    indicators: [
                        "Existencia de mecanismos de redundancia tecnológica (hardware, conectividad, energía).",
                        "Protección de la infraestructura tecnológica frente a fallas y accesos no autorizados."
                    ]
                },
                preparacion: {
                    name: "Preparación organizacional para continuidad",
                    indicators: [
                        "Existencia de planes documentados de continuidad operativa y recuperación ante desastres.",
                        "Conocimiento de procedimientos y responsabilidades ante incidentes por parte del personal.",
                        "Seguimiento y registro continuo de eventos que afectan la continuidad operativa."
                    ]
                }
            }
        }
    };

    // ----------------------------------------------------
    // 2. INTERACTIVE CIRCLES (SLIDE 5 - METODOLOGÍA)
    // ----------------------------------------------------
    const circlesInfo = {
        enfoque: {
            title: "Enfoque Cuantitativo",
            subtitle: "Medición objetiva y análisis estadístico",
            icon: "fa-chart-column",
            text: "La investigación se realiza bajo un enfoque cuantitativo. Utiliza la recolección de datos y la medición numérica de los indicadores de continuidad operativa (pretest y postest) para probar hipótesis sobre relaciones de causa-efecto basadas en el análisis estadístico."
        },
        tipo: {
            title: "Tipo Aplicada",
            subtitle: "Resolución de problemas concretos",
            icon: "fa-screwdriver-wrench",
            text: "Es de tipo aplicada porque busca resolver un problema real e inmediato: la vulnerabilidad operativa y la falta de gestión formal de riesgos en el instituto. Aplica la norma internacional ISO/IEC 27005 a través del desarrollo de un sistema informático específico."
        },
        diseño: {
            title: "Diseño Preexperimental",
            subtitle: "Pretest - Postest con un solo grupo",
            icon: "fa-flask-vial",
            text: "El diseño es preexperimental transversal con la secuencia G -- O1 -- X -- O2. Se evalúa el estado inicial de la continuidad operativa (O1), se aplica el estímulo o intervención que es el sistema automatizado de riesgos (X), y se realiza una medición final (O2) para cuantificar la influencia."
        },
        alcance: {
            title: "Alcance Censal",
            subtitle: "Sin muestreo, cobertura total",
            icon: "fa-users-line",
            text: "El alcance es de tipo censal. La población bajo estudio está constituida por la totalidad de los procesos críticos (académicos, administrativos y tecnológicos) del instituto de Tarapoto soportados por sistemas IT. Al abarcar al 100% de la población, no aplica técnicas de muestreo."
        }
    };

    const nodes = document.querySelectorAll('.interactive-node');
    const detailsContainer = document.getElementById('methodology-details');

    function updateMethodologyDetails(key) {
        if (!circlesInfo[key]) return;
        const data = circlesInfo[key];
        
        detailsContainer.innerHTML = `
            <div class="details-content animated fadeIn">
                <h3><i class="fa-solid ${data.icon} text-primary"></i> ${data.title}</h3>
                <h5 class="text-secondary" style="font-size:0.85rem; margin-top:2px; margin-bottom:12px; font-weight:600; text-transform:uppercase;">${data.subtitle}</h5>
                <p>${data.text}</p>
            </div>
        `;
    }

    nodes.forEach(node => {
        // Handle Hover & Click
        const key = node.getAttribute('data-node');
        
        node.addEventListener('mouseenter', () => {
            nodes.forEach(n => n.classList.remove('active'));
            node.classList.add('active');
            updateMethodologyDetails(key);
        });

        node.addEventListener('click', () => {
            nodes.forEach(n => n.classList.remove('active'));
            node.classList.add('active');
            updateMethodologyDetails(key);
        });
    });


    // ----------------------------------------------------
    // 3. OPERATIONALIZATION TAB LOGIC (SLIDE 6-9)
    // ----------------------------------------------------
    const tabBtns = document.querySelectorAll('.op-tab');
    const viewIndep = document.getElementById('view-independiente');
    const viewDep = document.getElementById('view-dependiente');

    // Load Dimension Details in the panel
    function loadDimensionDetails(variableKey, dimKey) {
        const dimData = opData[variableKey].dimensions[dimKey];
        if (!dimData) return;

        // Select the active view container relative to variableKey
        const viewContainer = variableKey === 'independiente' ? viewIndep : viewDep;
        const detailsPanel = viewContainer.querySelector('.op-details-panel');
        
        const titleEl = detailsPanel.querySelector('h3');
        const indicatorsEl = detailsPanel.querySelector('.indicator-list');
        const scaleEl = detailsPanel.querySelector('.scale-badge span');

        titleEl.innerText = dimData.name;
        indicatorsEl.innerHTML = dimData.indicators.map(ind => `
            <div class="indicator-item">
                <i class="fa-solid fa-circle-check"></i>
                <span>${ind}</span>
            </div>
        `).join('');
        scaleEl.innerText = opData[variableKey].scale;

        // Sync active class on buttons
        const allButtons = document.querySelectorAll('.dimension-button');
        allButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-dim') === dimKey && btn.getAttribute('data-var') === variableKey) {
                btn.classList.add('active');
            }
        });
    }

    // Toggle Variables Tabs
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const targetVar = btn.getAttribute('data-tab');
            if (targetVar === 'independiente') {
                viewIndep.classList.add('active');
                viewDep.classList.remove('active');
                // Auto-load first dimension of Independent variable
                loadDimensionDetails('independiente', 'contexto');
            } else {
                viewDep.classList.add('active');
                viewIndep.classList.remove('active');
                // Auto-load first dimension of Dependent variable
                loadDimensionDetails('dependiente', 'disponibilidad');
            }
        });
    });

    // Attach click listeners to all dimension buttons
    document.querySelectorAll('.dimension-button').forEach(btn => {
        btn.addEventListener('click', () => {
            const varKey = btn.getAttribute('data-var');
            const dimKey = btn.getAttribute('data-dim');
            loadDimensionDetails(varKey, dimKey);
        });
    });

    // Initialize with first dimension
    loadDimensionDetails('independiente', 'contexto');


    // ----------------------------------------------------
    // 4. ACCORDION GRID LOGIC (SLIDE 3 - PROBLEMAS Y OBJETIVOS)
    // ----------------------------------------------------
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');
            
            // Close all
            document.querySelectorAll('.accordion-item').forEach(i => {
                i.classList.remove('active');
                i.querySelector('.accordion-content').style.maxHeight = '0px';
            });

            // Open selected if it wasn't active
            if (!isActive) {
                item.classList.add('active');
                const content = item.querySelector('.accordion-content');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });

    // Open first accordion item by default
    const firstAcc = document.querySelector('.accordion-item');
    if (firstAcc) {
        firstAcc.classList.add('active');
        const content = firstAcc.querySelector('.accordion-content');
        content.style.maxHeight = content.scrollHeight + 'px';
    }


    // ----------------------------------------------------
    // 5. BUDGET CHARTS ANIMATION (ON SLIDE CHANGE)
    // ----------------------------------------------------
    function animateBudgetCharts() {
        const fills = document.querySelectorAll('.chart-bar-fill');
        fills.forEach(fill => {
            const targetWidth = fill.getAttribute('data-width');
            fill.style.width = targetWidth;
        });
    }

    function resetBudgetCharts() {
        const fills = document.querySelectorAll('.chart-bar-fill');
        fills.forEach(fill => {
            fill.style.width = '0%';
        });
    }

    // ----------------------------------------------------
    // 6. INSTRUMENTOS MODAL LOGIC (SLIDE 10)
    // ----------------------------------------------------
    const btnVerInstrumentos = document.getElementById('btn-ver-instrumentos');
    const modalInstrumentos = document.getElementById('modal-instrumentos');
    const btnModalClose = document.getElementById('btn-modal-close');

    if (btnVerInstrumentos && modalInstrumentos) {
        btnVerInstrumentos.addEventListener('click', (e) => {
            e.stopPropagation();
            modalInstrumentos.classList.add('active');
        });
    }

    if (btnModalClose && modalInstrumentos) {
        btnModalClose.addEventListener('click', (e) => {
            e.stopPropagation();
            modalInstrumentos.classList.remove('active');
        });

        // Close on clicking outside content
        modalInstrumentos.addEventListener('click', (e) => {
            if (e.target === modalInstrumentos) {
                modalInstrumentos.classList.remove('active');
            }
        });
    }

    // Connect to Reveal.js Slide Change Events if present
    if (typeof Reveal !== 'undefined') {
        Reveal.on('slidechanged', event => {
            // Check if current slide is the Budget slide (contains .budget-layout)
            const isBudgetSlide = event.currentSlide.querySelector('.budget-layout');
            if (isBudgetSlide) {
                setTimeout(animateBudgetCharts, 300);
            } else {
                resetBudgetCharts();
            }

            // Sync slide index in footer
            const slideNav = document.querySelector('.footer-nav');
            if (slideNav) {
                const indices = Reveal.getIndices();
                const total = Reveal.getTotalSlides();
                slideNav.innerText = `Diapositiva ${indices.h + 1} de ${total}`;
            }
        });

        // Trigger on init
        Reveal.on('ready', event => {
            const slideNav = document.querySelector('.footer-nav');
            if (slideNav) {
                const total = Reveal.getTotalSlides();
                slideNav.innerText = `Diapositiva 1 de ${total}`;
            }
        });
    } else {
        // Fallback if running outside Reveal.js
        setTimeout(animateBudgetCharts, 1000);
    }
});
