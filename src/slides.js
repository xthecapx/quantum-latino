import { fullstackProcess, quantumProcess } from './components/process-diagram.js';

const assetUrl = filename => `${import.meta.env.BASE_URL}assets/${filename}`;

const talkSlides = [
  {
    id:'portada', title:'De desarrollador fullstack a programador cuántico: ¿qué cambia?', seconds:20,
    kind:'title-slide cover', sources:['event'],
    html:`<p class="event-name">Quantum Latino 2026</p><h1>De desarrollador fullstack<br>a programador cuántico:</h1>
      <p class="cover-subtitle">¿Qué cambia?</p>
      <div class="speaker"><strong>Cristian Marquez</strong><span>Desarrollador de software · Investigador en computación cuántica</span></div>`,
    notes:'0:00–0:30. Mi punto de partida es el desarrollo de software y mi investigación en computación cuántica. La pregunta es qué roles podemos ocupar hoy y qué software necesitaremos para coordinar recursos clásicos y cuánticos. No presentar una transición automática ni una promesa de empleo.'
  },
  {
    id:'perfil-fullstack', title:'Qué se pide hoy a un desarrollador fullstack', seconds:120, sources:['epam','fullstackAI'],
    html:`<div class="job-heading"><p class="job-title">Producto, APIs e IA</p><p class="context-note">Requisitos presentes en las JD enlazadas</p></div>
      <div class="split"><div><h3>Lo que construyes</h3><ul><li>APIs y servicios de datos</li><li>Interfaces web y experiencias de usuario</li><li>Aplicaciones desplegadas y observables</li></ul></div>
      <div><h3>Lo que debes demostrar</h3><ul><li>Dominio del stack y diseño de sistemas</li><li>Pruebas y calidad del código</li><li>IA aplicada y desarrollo asistido con criterio</li></ul></div></div>
      <p class="takeaway">Competencia imprescindible: usar IA y validar sus resultados.</p>`,
    notes:'Abrir con los requisitos del trabajo de software. Esta diapositiva sintetiza dos JD; no presenta una vacante única ni condiciones universales de contratación. La JD adicional incluye comprensión de IA y experiencia práctica en soluciones con IA entre los requisitos. El uso crítico de asistentes y la verificación del código generado se presentan como una competencia imprescindible según el criterio del ponente. Pregunta breve: ¿qué tareas ya haces con IA y cómo compruebas el resultado? Si nadie responde, continuar con pruebas y revisión.'
  },
  {
    id:'software-sector-cuantico', title:'Software clásico dentro del sector cuántico', seconds:120, sources:['ionqFullstack','ionqOrchestration'],
    html:`<div class="split job-comparison"><div><h3>Fullstack de aplicaciones</h3><ul><li>APIs e interfaces de aplicaciones</li><li>Visualización de resultados</li><li>Experiencia en producto y software científico</li><li>Herramientas y agentes de IA para desarrollo</li></ul></div>
      <div><h3>Orquestación de sistemas</h3><ul><li>Rust, PostgreSQL y APIs</li><li>Colas y observabilidad</li><li>Experiencia cuántica previa no requerida en esta JD</li></ul></div></div>
      <p class="takeaway">La responsabilidad del puesto importa tanto como el sector.</p>`,
    notes:'Conectar con la experiencia de alguien que construye una API para una compañía cuántica. El trabajo puede seguir siendo ingeniería clásica. La JD de aplicaciones pide experiencia científica, cuántica o de consultoría técnica y familiaridad con herramientas de IA para desarrollo. La JD de orquestación indica que no exige experiencia previa con sistemas cuánticos. Las referencias son ejemplos de perfiles: revisar condiciones y elegibilidad en los anuncios originales.'
  },
  {
    id:'especializacion-cuantica', title:'Compilación e investigación cuántica', seconds:120, sources:['compiler','research'],
    html:`<div class="split job-comparison"><div><h3>Ingeniería de compiladores</h3><ul><li>Python y C++</li><li>LLVM/MLIR y lenguajes de dominio</li><li>Validación en hardware cuántico</li></ul><p class="role-result">Entrega: un compilador que funciona</p></div>
      <div><h3>Investigación en QEC</h3><ul><li>Doctorado y trayectoria en QEC</li><li>Códigos y decodificadores</li><li>Investigación y publicaciones</li></ul><p class="role-result">Entrega: resultados científicos y métodos</p></div></div>
      <p class="takeaway">La especialización depende del problema y del resultado esperado.</p>`,
    notes:'Comparar qué resultado espera cada rol. Compilación concentra conocimientos de sistemas y lenguajes. QEC significa corrección de errores cuánticos y requiere especialización científica. La JD de investigación pide doctorado y publicaciones. No extrapolar esa exigencia a todo empleo de software cuántico. La IA ayuda a desarrollar y explorar, pero cada perfil debe validar sus resultados con criterios técnicos o científicos.'
  },
  {
    id:'mapa-de-roles', title:'Los roles se distribuyen por capas', seconds:60, sources:['ionqFullstack','ionqOrchestration','compiler','research'],
    html:`<div class="route-rows roles-rows">
      <div class="route-row"><h3>Producto y APIs</h3><div><p>Exponer capacidades a usuarios</p><p class="role-knowledge">Backend, UX y contratos</p></div></div>
      <div class="route-row fragment fade-up" data-fragment-index="0"><h3>Orquestación</h3><div><p>Asignar recursos y seguir trabajos</p><p class="role-knowledge">Sistemas distribuidos y operación</p></div></div>
      <div class="route-row fragment fade-up" data-fragment-index="1"><h3>Compilación</h3><div><p>Adaptar programas al dispositivo</p><p class="role-knowledge">Compiladores y restricciones físicas</p></div></div>
      <div class="route-row fragment fade-up" data-fragment-index="2"><h3>Algoritmos e<br>investigación</h3><div><p>Diseñar y evaluar métodos</p><p class="role-knowledge">Matemáticas y computación cuántica</p></div></div>
      </div><p class="takeaway fragment fade-up" data-fragment-index="3">Un equipo conecta estas capas. Una persona puede especializarse en una de ellas.</p>`,
    notes:'Un minuto, con avances breves. Entrada: producto y APIs. Primer avance: orquestación. Segundo avance: compilación. Tercer avance: algoritmos e investigación. Cada fila muestra la responsabilidad y, debajo en texto secundario, el conocimiento que pesa. La marca lateral señala la capa que se explica y las anteriores permanecen visibles. Último avance: mostrar la conclusión sobre equipo y especialización. Este mapa es una síntesis de las ofertas, no una taxonomía oficial ni una escala de prestigio. Las fronteras se solapan. Un backend puede requerir alfabetización cuántica sin diseñar algoritmos. Un investigador también escribe software. El rol se distingue por el problema que resuelve y por cómo valida su trabajo.'
  },
  {
    id:'problemas', title:'Problemas para explorar con cómputo híbrido', seconds:120, sources:['chemistry','optimization','cudaq'],
    html:`<div class="problem-cards">
      <div class="card card-teal-soft problem-card"><div class="card-header"><span class="problem-icon" aria-hidden="true">🧪</span><h3>Química y materiales</h3></div><div class="card-body card-body-left"><div><h4>Trabajo clásico</h4><p>Preparar modelos y optimizar parámetros</p></div><div><h4>Subrutina cuántica candidata</h4><p>Estimar energías con circuitos</p></div></div></div>
      <div class="card card-amber-soft problem-card"><div class="card-header"><span class="problem-icon" aria-hidden="true">🧩</span><h3>Optimización combinatoria</h3></div><div class="card-body card-body-left"><div><h4>Trabajo clásico</h4><p>Formular restricciones y evaluar soluciones</p></div><div><h4>Subrutina cuántica candidata</h4><p>Explorar métodos como QAOA</p></div></div></div>
      <div class="card card-accent-soft problem-card"><div class="card-header"><span class="problem-icon" aria-hidden="true">⚛️</span><h3>Evaluación de circuitos</h3></div><div class="card-body card-body-left"><div><h4>Trabajo clásico</h4><p>Simular en CPU/GPU y analizar datos</p></div><div><h4>Subrutina cuántica candidata</h4><p>Medir comportamiento en QPU</p></div></div></div>
      </div><p class="takeaway">La utilidad depende del problema, los recursos y la calidad del resultado.</p>
      <p class="context-note">Casos de exploración y evaluación. La ventaja frente al mejor método clásico debe demostrarse.</p>`,
    notes:'Tres tarjetas, una por problema. En cada tarjeta, recorrer primero el trabajo clásico y después la subrutina cuántica candidata. Ejemplos sin prometer superioridad industrial actual. Una rutina variacional combina mediciones cuánticas y optimización clásica. Formular un problema de optimización es distinto de demostrar ventaja con QAOA. Evaluar circuitos permite comparar simulación y ejecución real. Hace falta preparar entradas, ejecutar trabajos y analizar salidas. La selección del acelerador debe tener evidencia y una comparación clásica.'
  },
  {
    id:'evolucion', title:'La evolución hacia sistemas heterogéneos', seconds:120, sources:['cudaq','hpc','specializedHardware'],
    html:`<figure class="evolution-chart" aria-label="Eje conceptual de complejidad del problema y necesidades de cómputo: CPU de propósito general, sistemas clásicos especializados y sistemas híbridos con QPU">
      <div class="evolution">
        <div class="df-box bg-input"><span class="step-number">01 · Propósito general</span><h3>CPU</h3><p>Aplicación, control<br>y lógica del negocio</p><p class="architecture-detail">Cómputo de propósito general</p></div>
        <div class="df-box bg-cool"><span class="step-number">02 · Clásica especializada</span><h3>CPU + aceleradores</h3><p><strong>GPU:</strong> cálculo paralelo<br><strong>HPC:</strong> clúster distribuido<br><strong>FPGA / ASIC:</strong> sensores<br>y procesamiento dedicado</p></div>
        <div class="df-box bg-purple"><span class="step-number">03 · Híbrida cuántica</span><h3>Base clásica + QPU</h3><p><strong>CPU + GPU + HPC</strong><br><strong>FPGA / ASIC</strong><br>+ subrutinas cuánticas<br>según el problema</p></div>
      </div>
      <div class="evolution-axis" aria-hidden="true"><span>Propósito general</span><span>Paralelismo y especialización</span><span>Coordinación de recursos</span></div>
      <figcaption>Complejidad del problema y necesidades de cómputo → <small>Eje conceptual</small></figcaption>
      </figure>
      <p class="takeaway">El software coordina los recursos según el problema.</p>`,
    notes:'9:30–11:30. Resumir la parte clásica del PDF en esta diapositiva. Leer el eje como una evolución conceptual de necesidades de cómputo y coordinación, no como una escala de complejidad computacional ni una garantía de mayor rendimiento. La aplicación comienza en CPU. En 02 se incorporan GPU para cálculo paralelo, clústeres HPC para trabajos distribuidos y FPGA o ASIC para procesamiento especializado, por ejemplo cerca de sensores. En 03 esta base clásica puede coordinarse con QPU para subrutinas seleccionadas. No todos los sistemas necesitan todos estos componentes y las etapas no reemplazan las anteriores. HPC no es un tipo de procesador: sus nodos pueden usar CPU y aceleradores. El artículo enlazado de hardware especializado muestra FPGA embebida en ASIC para procesar datos de sensores. Las otras fuentes documentan programación híbrida y una demostración HPC existente. Elegir recursos requiere evaluar datos, latencia, costos y calidad del resultado; incorporar QPU no garantiza ventaja. La visión siguiente muestra cómo coordinar estos destinos desde la aplicación.'
  },
  {
    id:'vision', title:'Datacenters del futuro', seconds:60, kind:'architecture-slide', sources:['ibmQCSCArchitecture','ibmRoadmap'],
    html:`<figure class="cluster-figure"><img src="${assetUrl('casa-computo-hibrido.png')}" alt="Una casa abierta contiene todos los equipos. La CPU ejecuta la aplicación inicial y su lógica de routing. Conexiones visibles parten de CPU hacia un rack GPU, un grupo de racks HPC y una QPU según el problema, y devuelven resultados a la aplicación." /><figcaption>Esquema conceptual de coordinación CPU/GPU/HPC/QPU<span class="vision-reference">Esta dirección también forma parte de la visión de IBM: <em>quantum-centric supercomputing</em>.</span></figcaption></figure>`,
    notes:'14:30–16:30. Presentar esta casa como un esquema conceptual de un datacenter heterogéneo. Dentro están los servidores y racks conectados. El punto de entrada es CPU: recibe los datos y ejecuta la aplicación inicial y la lógica de routing. El software decide qué trabajo conserva en CPU y qué parte envía mediante APIs a GPU, al clúster HPC o a QPU según el problema. Las conexiones muestran envío y retorno de resultados. HPC representa un entorno de ejecución distribuida con nodos CPU/GPU; no es otro tipo de procesador. En una implementación real, GPU y CPU pueden formar parte del mismo clúster HPC, y la QPU puede estar en el mismo centro o conectarse remotamente. El routing representa decisiones del software, no selección automática por el hardware. La casa es una metáfora de organización, no una instalación real. Relacionar esta visión con quantum-centric supercomputing de IBM: su artículo de noviembre de 2024 presenta CPU, GPU y QPU dentro de un modelo heterogéneo, con gestión de trabajos e integración HPC. La arquitectura de referencia publicada en marzo de 2026 incluye aplicaciones, middleware, orquestación, APIs e infraestructura clásica y cuántica. La ilustración de la casa fue creada para esta charla; no es una imagen ni una reproducción de una arquitectura de IBM. La coincidencia es la dirección de integración, no cada detalle del routing mostrado. Enlazar el roadmap solicitado como referencia de objetivos de IBM, sujetos a cambios; no implica que todo el datacenter ilustrado exista como producto. Pregunta breve: ¿qué debe saber la aplicación para elegir el recurso? Si nadie responde: el problema, los datos, las capacidades y los costos.'
  },
  {
    id:'arquitectura-ibm', title:'Integración HPC y cuántica: referencia de IBM', seconds:60, kind:'architecture-slide ibm-reference-slide', sources:['ibmQCSC','ibmRoadmap'],
    html:`<figure class="cluster-figure"><img src="${assetUrl('ibm-hpc-slurm-qiskit.png')}" alt="Diagrama de IBM: Slurm gestiona colas de trabajos clásicos y circuitos. Un middleware maneja primitivas de Qiskit. Nodos clásicos con CPU y nodos cuánticos virtuales con recursos vQPU acceden mediante la DA API a controladores de una computadora cuántica; los resultados se almacenan en S3." /><figcaption>Slurm + middleware + APIs: coordinación de trabajos clásicos y cuánticos<span class="vision-reference">Imagen: IBM · artículo sobre <em>quantum-centric supercomputing</em></span></figcaption></figure>`,
    notes:'Mostrar la imagen proporcionada por el ponente, correspondiente al diagrama hpc6 del artículo de IBM de noviembre de 2024. Seguir el recorrido: entrada por login node, colas clásicas y de circuitos administradas por Slurm, middleware para primitivas Qiskit, nodos clásicos y nodos cuánticos virtuales, acceso por DA API a controladores y al hardware cuántico, y almacenamiento de resultados. vQPU representa un recurso lógico de acceso a hardware cuántico; no es una QPU simulada ni una nueva clase de procesador físico. Este diagrama ilustra un ejemplo de integración con colas separadas, no toda la arquitectura de referencia de 2026 ni el plano de un edificio. GPU no aparece en este diagrama concreto. Conectar con el trabajo de desarrollo: servicios, colas, APIs y manejo de resultados. El roadmap enlazado permite consultar los objetivos de IBM, que pueden cambiar.'
  },
  {
    id:'apis', title:'Las APIs conectan el flujo de trabajo', seconds:120, sources:['braket'],
    html:`<div class="api-flow diagram-flow" aria-label="La aplicación y la lógica de routing corren en CPU y delegan trabajos mediante APIs hacia GPU, HPC o QPU"><div class="df-box bg-input"><strong>Aplicación en CPU</strong><small>Problema y datos</small></div><span class="connector" aria-hidden="true"></span><div class="df-box bg-cool"><strong>API</strong><small>Validación y permisos</small></div><span class="connector" aria-hidden="true"></span><div class="df-box bg-purple"><strong>Routing en CPU</strong><small>Recursos y dependencias</small></div><span class="connector" aria-hidden="true"></span><div class="df-box bg-warm"><strong>GPU / HPC / QPU</strong><small>Trabajo y resultados</small></div></div>
      <div class="split api-details"><div><h3>Un contrato de trabajo</h3><pre class="code-box"><code>POST /trabajos
{ problema, datos, presupuesto }

202 Accepted
{ id, estado: "en_cola" }</code></pre></div><div><h3>Durante la ejecución</h3><ul><li>Preparar datos y compilar circuitos</li><li>Enviar tareas y consultar su estado</li><li>Registrar resultados, costos y errores</li></ul></div></div>
      <p class="context-note">Contrato conceptual propio. Las APIs reales de cada proveedor tienen otros formatos.</p>`,
    notes:'16:30–18:30. La aplicación inicial y la lógica de routing se ejecutan en CPU. Según el problema, el software llama APIs para delegar tareas a GPU, a un clúster HPC o a QPU; también puede resolver el trabajo en CPU. Estos destinos son alternativas o partes de un flujo, no una cadena obligatoria. El contrato mostrado es conceptual y no reproduce la API de un proveedor. El backend maneja estados, fallos, costos y resultados. CPU puede ajustar parámetros y solicitar nuevas mediciones. La documentación enlazada ilustra coordinación existente. Las conexiones llevan información clásica: instrucciones, parámetros y resultados.'
  },
  {
    id:'proceso-fullstack', title:'Proceso de desarrollo de un programador fullstack', seconds:120,
    kind:'process-slide', sources:['baseFullstack'],
    html:`${fullstackProcess()}<p class="takeaway">La aplicación conserva su ciclo de diseño, implementación, pruebas y despliegue.</p>`,
    notes:'Recuperar el proceso de base.pdf, página 22. Diferenciar la concepción inicial del producto —análisis inicial y diseño de alto nivel— del ciclo que se repite en cada sprint. Seguir las conexiones: análisis de sprint, diseño detallado, implementación front y back, pruebas y QA y despliegue continuo. El retorno indica que aprendemos del despliegue y comenzamos otro sprint. La IA puede asistir en estas etapas, manteniendo revisión, pruebas y responsabilidad sobre las decisiones. Esta estructura continúa existiendo aunque la aplicación delegue una parte del cálculo a QPU.'
  },
  {
    id:'proceso-cuantico', title:'Implementación, pruebas, despliegue cuántico', seconds:120,
    kind:'process-slide', sources:['baseQuantum'],
    html:`<p class="context-note">Supuesto: contamos con acceso a hardware cuántico</p>${quantumProcess()}`,
    notes:'Recuperar las relaciones de base.pdf, página 38. El comportamiento teórico está en el centro: define módulos y lógica cuántica. Se contrasta con simuladores clásicos y ejecución en hardware real, con retorno para ajustar el modelo y la implementación. El despliegue incorpora ejecución y pruebas en QPU. El análisis de resultados es transversal: evaluar ruido, decoherencia y errores, y contrastar con la expectativa teórica. Presentar las etapas como un proceso iterativo y no como una ejecución única. El diagrama conserva la conexión bidireccional de teoría con simulación, ejecución y despliegue.'
  },
  {
    id:'ciclo-desarrollo', title:'Qué cambia en el ciclo de desarrollo', seconds:120, sources:['baseFullstack','baseQuantum','braket','compiler'],
    html:`<div class="lifecycle-comparison">
      <div class="lifecycle-fullstack"><h3><a href="#/proceso-fullstack">Proceso fullstack</a></h3>
        <div class="recall-stage"><span class="recall-number">01</span><strong>Diseño de alto nivel<br>y diseño detallado</strong></div>
        <div class="recall-stage"><span class="recall-number">02</span><strong><span class="robot-icon fragment" data-fragment-index="0" role="img" aria-label="Robot">🤖</span> Implementación<br><small>Front, back y SRE</small></strong></div>
        <div class="recall-stage"><span class="recall-number">03</span><strong>Pruebas y QA</strong></div>
        <div class="recall-stage"><span class="recall-number">04</span><strong>Despliegue continuo</strong></div>
      </div>
      <div class="lifecycle-quantum fragment fade-left" data-fragment-index="1"><h3><a href="#/proceso-cuantico">Componente cuántico</a></h3>
        <div class="recall-stage"><span class="recall-arrow" aria-hidden="true">→</span><div><strong><span class="robot-icon fragment" data-fragment-index="3" role="img" aria-label="¿Robot?">🤖?</span> Comportamiento teórico</strong><small>Definir la subrutina cuántica</small></div></div>
        <div class="recall-stage"><span class="recall-arrow" aria-hidden="true">→</span><div><strong><span class="robot-icon fragment" data-fragment-index="2" role="img" aria-label="Robot">🤖</span> Circuitos + backend</strong><small>Construir circuitos e integrarlos</small></div></div>
        <div class="recall-stage"><span class="recall-arrow" aria-hidden="true">→</span><div><strong>Simulación ↔ ejecución</strong><small>Contrastar teoría y mediciones</small></div></div>
        <div class="recall-stage"><span class="recall-arrow" aria-hidden="true">→</span><div><strong>Despliegue en QPU</strong><small>Gestionar colas, costos y trazabilidad</small></div></div>
      </div>
      </div>
      <div class="lifecycle-callouts"><p class="lifecycle-joke lifecycle-summary fragment current-visible" data-fragment-index="0"><strong>Ahora el código lo escriben los robots…</strong><span>Tranquilos: seguimos teniendo trabajo.</span></p>
      <p class="lifecycle-joke lifecycle-summary fragment current-visible" data-fragment-index="4"><strong>Ahora el código lo escriben los robots…</strong><span>Tranquilos: seguimos teniendo trabajo.</span></p>
      <p class="takeaway lifecycle-summary fragment fade-up" data-fragment-index="5"><strong>El ciclo fullstack se mantiene.</strong></p></div>`,
    notes:'Mantener los dos minutos, con avances breves y controlados. Entrada: fullstack centrado. Primer avance: robot en implementación fullstack y el chiste «Ahora el código lo escriben los robots… Tranquilos: seguimos teniendo trabajo». Segundo avance: desaparece el chiste, fullstack se desplaza a la izquierda y aparece el contenido cuántico sin robots. Explicar primero todas sus etapas. Tercer avance: aparece solo el robot en Circuitos + backend. Cuarto avance: aparece el robot con interrogación en Comportamiento teórico. Quinto avance: repetir exactamente el chiste de fullstack como callback. Sexto avance: desaparece el chiste y cerrar únicamente con «El ciclo fullstack se mantiene». Los robots anteriores permanecen visibles y el retroceso recupera cada estado. El humor exagera el papel de los asistentes de IA, no predice el empleo: seguimos diseñando, revisando, probando y operando software. Los encabezados permiten volver a los diagramas anteriores durante preguntas. Diseño de alto nivel y diseño detallado se conectan con definir el comportamiento teórico; implementación front y back, junto con SRE para confiabilidad y operación, incorpora circuitos e integración; pruebas y QA se amplían con simulación y ejecución; despliegue continuo incorpora la operación de trabajos en QPU. El análisis de decoherencia y errores continúa siendo transversal. Validar ruido, variación estadística y referencia clásica. No exigir conteos idénticos si la salida es estadística. Costos y colas afectan las pruebas de hardware. APIs, observabilidad y responsabilidad sobre los resultados siguen siendo parte del trabajo.'
  },
  {
    id:'hoy-y-futuro', title:'Lo que se contrata hoy y mi visión del futuro', seconds:120, sources:['ionqOrchestration','ionqHybrid','research','ibmQCSCArchitecture'],
    html:`<div class="future-scene"><div class="future-main fragment fade-out" data-fragment-index="2"><div class="future-comparison"><div class="future-today"><p class="column-label">Ofertas observadas hoy</p><h3>Equipos especializados</h3><ul class="future-points"><li>Producto, APIs y herramientas</li><li>Control, compilación e investigación</li><li>Orquestación híbrida en puestos senior</li></ul></div><div class="future-vision fragment fade-left" data-fragment-index="0"><p class="column-label">Mi visión de evolución</p><h3>Software que coordina<br>el sistema</h3><ul class="future-points"><li>Elegir recursos según el problema</li><li>Gestionar datos y dependencias</li><li>Corrección de errores</li><li>Calibración del hardware</li><li>Evaluar calidad, tiempo y costo total</li></ul></div></div>
      <p class="takeaway future-summary fragment fade-up" data-fragment-index="1"><strong>La orquestación híbrida ya aparece en ofertas.</strong><span>Su adopción más amplia sigue abierta.</span></p></div>
      <div class="future-peace fragment fade-up" data-fragment-index="2"><div class="peace-emojis"><span class="peace-humans" role="img" aria-label="Una desarrolladora y un desarrollador"><span>👩‍💻</span><span>👨‍💻</span></span><span class="peace-handshake fragment fade-left" data-fragment-index="3" role="img" aria-label="Apretón de manos">🤝</span><span class="peace-robot fragment fade-left" data-fragment-index="3" role="img" aria-label="Robot">🤖</span></div><p class="peace-message fragment fade-up" data-fragment-index="4"><strong>Hagamos las paces con los robots.</strong><span>Llegaron para quedarse.</span></p></div></div>`,
    notes:'Mantener dos minutos, con avances breves. Entrada: las ofertas observadas hoy aparecen centradas; explicar las responsabilidades de equipos especializados. Primer avance: esas ofertas se desplazan a la izquierda y aparece la visión de evolución a la derecha. Comparar ambas columnas; sus elementos describen dos perspectivas, no correspondencias exactas entre puestos. Segundo avance: mostrar la conclusión sobre orquestación y distinguir evidencia actual de proyección. Tercer avance: la comparación desaparece y aparecen una desarrolladora y un desarrollador centrados, con la mujer primero. Cuarto avance: ambos se desplazan a la izquierda y aparecen juntos el apretón de manos y el robot a su derecha. Quinto avance: aparecen juntas las dos líneas «Hagamos las paces con los robots. Llegaron para quedarse». Cada elemento permanece visible al mostrar el siguiente; al retroceder se ocultan en orden inverso. Es un cierre humorístico que retoma la diapositiva del ciclo de desarrollo e invita a trabajar con asistentes de IA conservando criterio y responsabilidad. Una JD de orquestación senior conecta ejecución híbrida e infraestructura HPC. Mi proyección es ampliar el alcance de esta integración. Hará falta software para decidir qué ejecutar, dónde y cómo evaluar resultados, e integrar corrección de errores y calibración del hardware. Estas funciones se reparten entre orquestación, runtime y control: un planificador general no ejecuta por sí solo todos los bucles de control en tiempo real. La arquitectura de referencia de IBM describe decodificación de corrección de errores, calibración de qubits y monitoreo del dispositivo; estas funciones ya existen en sistemas y experimentos actuales, con madurez y alcance distintos. La proyección es una integración más amplia del conjunto, no presentar corrección y calibración como capacidades exclusivamente futuras. No prometer fechas ni crecimiento de empleo sin datos. Infraestructura e investigación siguen siendo necesarias.'
  },
  {
    id:'ruta', title:'Una ruta según el rol que quieres ocupar', seconds:60, sources:['ionqOrchestration','compiler','research','cudaq'],
    html:`<div class="route-rows">
        <div class="route-row route-product"><h3>Producto<br>y plataforma</h3><p>Profundizar en APIs, sistemas distribuidos y observabilidad.</p></div>
        <div class="route-row route-software fragment fade-up" data-fragment-index="0"><h3>Software<br>cuántico</h3><p>Aprender circuitos, compilación, simulación y evaluación estadística.</p></div>
        <div class="route-row route-research fragment fade-up" data-fragment-index="1"><h3>Investigación</h3><p>Desarrollar especialización científica y una pregunta investigable.</p></div>
      </div>
      <p class="takeaway route-summary fragment fade-up" data-fragment-index="2">Demuestra tu Seniority y crea proyectos que combinen software clásico y cuántico.</p>
      <p class="audience-question route-question fragment fade-up" data-fragment-index="3">¿En qué parte de este sistema te gustaría trabajar?</p>`,
    notes:'Un minuto, con avances breves. Entrada: producto y plataforma. Primer avance: software cuántico. Segundo avance: investigación. La marca de énfasis acompaña la ruta que se está explicando y las anteriores siguen disponibles para comparar. Son opciones según intereses y responsabilidades, no una escalera de progreso ni requisitos universales. Tercer avance: proponer un proyecto que combine software clásico y cuántico para demostrar las habilidades del rol elegido. Un portafolio puede mostrar API, simulador, seguimiento de trabajos y comparación reproducible. Agregar QPU si el objetivo y acceso lo justifican. Investigación exige profundizar en métodos y evidencia científica. Último avance: presentar la pregunta al público y dar unos segundos; continuar si el formato híbrido no facilita respuestas.'
  },
  {
    id:'cierre', title:'Preguntas', seconds:20, kind:'title-slide closing', sources:[],
    html:`<p class="event-name">Gracias</p><h2>La computación cuántica<br>se construye<br>con software clásico.</h2><p class="closing-question">Sigamos aprendiendo. Sigamos construyendo.</p><p class="contact">Cristian Marquez<br><a href="mailto:c.marquezb@uniandes.edu.co">c.marquezb@uniandes.edu.co</a></p>`,
    notes:'24:30–25:00. Cerrar con «La computación cuántica se construye con software clásico» y la invitación «Sigamos aprendiendo. Sigamos construyendo». Abrir hasta cinco minutos de preguntas. Sobre vacantes, recordar que ubicación y disponibilidad cambian. El contacto proviene del PDF base. Remitir a los anuncios originales para requisitos y condiciones de contratación.'
  }
];

const sectionBreaks = {
  'perfil-fullstack': {
    id: 'seccion-trabajo', title: 'Ofertas y roles de hoy', seconds: 5,
    kind: 'title-slide divider section-divider', sources: [],
    html: '<h2>Ofertas y roles<br>de hoy</h2>',
    notes: 'Mostrar el título y avanzar al primer perfil laboral.'
  },
  problemas: {
    id: 'seccion-sistema', title: 'Software para un sistema híbrido', seconds: 5,
    kind: 'title-slide divider section-divider', sources: [],
    html: '<h2>Software para<br>un sistema híbrido</h2>',
    notes: 'Pasar de los puestos y las personas a los problemas y los recursos que el software conecta.'
  },
  'proceso-fullstack': {
    id: 'seccion-desarrollo', title: 'El proceso de desarrollo', seconds: 5,
    kind: 'title-slide divider section-divider', sources: [],
    html: '<h2>El proceso<br>de desarrollo</h2>',
    notes: 'Hacer una pausa breve tras los diagramas de infraestructura y APIs. Abrir un bloque de tres diapositivas: proceso fullstack, proceso cuántico y comparación de ambos. Pasar de cómo se conectan los recursos a cómo construimos y validamos el software que los utiliza.'
  },
  'hoy-y-futuro': {
    id: 'seccion-futuro', title: 'El futuro y nuestro rol', seconds: 5,
    kind: 'title-slide divider section-divider', sources: [],
    html: '<h2>El futuro<br>y nuestro rol</h2>',
    notes: 'Mostrar el título y continuar con la comparación entre lo que se contrata hoy y la visión del ponente.'
  }
};

const formatTime = seconds => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
let elapsed = 0;
export const slides = talkSlides.flatMap(slide =>
  sectionBreaks[slide.id] ? [sectionBreaks[slide.id], slide] : [slide]
).map(slide => {
  const start = elapsed;
  elapsed += slide.seconds;
  const notes = slide.notes.replace(/^\d+:\d{2}–\d+:\d{2}\.\s*/, '');
  return { ...slide, notes: `${formatTime(start)}–${formatTime(elapsed)}. ${notes}` };
});
