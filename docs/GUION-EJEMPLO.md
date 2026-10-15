# Guion de la nueva charla

**De desarrollador fullstack a programador cuántico: ¿qué cambia?**

25 minutos de exposición y 5 de preguntas. 18 pantallas: portada sin tiempo de exposición, un separador, 15 de contenido y cierre. Los diagramas del ciclo clásico (base, p. 22) y del proceso cuántico (base, p. 38) se conservan completos.

Frontend: interacción, animaciones y comunicación del estado. Backend: procesar y responder de forma confiable, tratar errores y medir tiempo y fallos. Fullstack: ambas partes con las tecnologías del proyecto, por ejemplo JavaScript o JavaScript + Python. Despliegue y operación se explican como publicar y mantener funcionando la aplicación.

La versión anterior permanece en `docs/GUION.md` y `src/slides.js`. Las notas también están disponibles con la tecla S.

## Recorrido

| Pantalla | Título | Tiempo |
| --- | --- | --- |
| 1 | De desarrollador fullstack a programador cuántico: ¿qué cambia? | 0:00–0:00 |
| 2 | Algunas aplicaciones | 0:00–1:25 |
| 3 | Veamos un ejemplo | 1:25–1:30 |
| 4 | Nuestro ejemplo: cara o sello | 1:30–2:30 |
| 5 | La interfaz y el trabajo frontend | 2:30–3:45 |
| 6 | El servicio y el trabajo backend | 3:45–5:00 |
| 7 | La integración y el trabajo fullstack | 5:00–6:00 |
| 8 | Despliegue y operación de nuestra aplicación | 6:00–7:15 |
| 9 | Proceso de desarrollo de un programador fullstack | 7:15–8:45 |
| 10 | La semilla determina la secuencia | 8:45–10:45 |
| 11 | La aplicación incorpora un módulo cuántico | 10:45–12:15 |
| 12 | La moneda cuántica | 12:15–14:30 |
| 13 | El recorrido completo es híbrido | 14:30–16:15 |
| 14 | Implementación, pruebas, despliegue cuántico | 16:15–18:15 |
| 15 | Pruebas con simulador y hardware | 18:15–20:30 |
| 16 | Los desafíos aparecen en el producto | 20:30–22:30 |
| 17 | Del ejemplo a una aplicación mayor | 22:30–24:00 |
| 18 | Qué construimos y qué aprendimos | 24:00–25:00 |

## 1. De desarrollador fullstack a programador cuántico: ¿qué cambia?

0:00–0:00. Portada visible antes de empezar. Conservar el título exacto. Sin presentación personal: comenzar directamente con las aplicaciones. La exposición dura 25 minutos y las preguntas tienen 5 minutos adicionales.

## 2. Algunas aplicaciones

0:00–1:25. Motivar con problemas cotidianos antes de mencionar puestos o tecnologías. En química y materiales, simular sistemas complejos para entender cómo cambian sus propiedades cuando cambia su estructura o las condiciones que modelamos. Las ilustraciones son conceptuales, no modelos moleculares validados ni resultados de un experimento. En optimización, explorar métodos cuánticos para buscar la ruta más corta que permita visitar varios puntos de un mapa. Se trata de planificar un recorrido con varias visitas, no de afirmar que encontrar un camino entre dos puntos necesite una QPU. Existen métodos clásicos para estos problemas. Presentar ambas áreas como investigación: estos ejemplos ilustrativos no aportan una ventaja cuántica práctica comprobada y reportada. Para establecerla hacen falta resultados reproducibles y una comparación adecuada con métodos clásicos. No extender esta limitación a todos los experimentos cuánticos ni afirmar ausencia de resultados publicados en cualquier problema. Ambas aplicaciones necesitan software que prepare entradas, coordine el cálculo y explique los resultados. Pasar al separador Veamos un ejemplo. Las dos imágenes se crearon por separado con ImageGen para esta charla.

Fuente: [Algoritmos variacionales](https://learning.quantum.ibm.com/course/variational-algorithm-design/examples-and-applications). Ejemplos educativos de química y algoritmos variacionales. No demuestra ventaja industrial general.

Fuente: [Qiskit · Optimización de rutas](https://qiskit-community.github.io/qiskit-optimization/tutorials/06_examples_max_cut_and_tsp.html). Ejemplo educativo del problema del viajante: buscar un recorrido corto que visite varias ciudades. La formulación y su resolución con métodos cuánticos no constituyen una demostración de ventaja práctica frente a métodos clásicos.

## 3. Veamos un ejemplo

1:25–1:30. Mostrar el título como transición entre las aplicaciones y el ejemplo. Pasar a una situación que todos conocemos: lanzar una moneda. No introducir términos técnicos en este separador.

## 4. Nuestro ejemplo: cara o sello

1:30–2:30. Plantear el problema con palabras simples: ¿cómo simulamos el resultado de tirar una moneda al aire? Nos interesa el resultado, cara o sello, sin modelar toda la física de una moneda real. Queremos que ambos tengan la misma oportunidad de salir. Pulsar Lanzar moneda: la moneda sube y gira durante 2,6 segundos, el botón queda bloqueado y se muestra Esperando el resultado. Aprovechar este intervalo para explicar que representa el tiempo que tarda el backend en procesar la petición y devolver la respuesta. La demora es una simulación didáctica local, sin una llamada de red real ni una garantía de latencia. Al caer aparece Resultado: Cara o Resultado: Sello. Aunque dos tiradas coincidan, la animación deja claro que hubo un lanzamiento nuevo. Se puede repetir. Si avanzamos de diapositiva durante la espera, se cancela la tirada pendiente. El control Animar permite desactivar el movimiento sin quitar la espera. Está activado para la demostración solicitada, incluso si el navegador tiene movimiento reducido. Después explicaremos quién construye cada parte y cómo el programa elige el resultado. Referencia: base.pdf, páginas 21, 23 y 27.

## 5. La interfaz y el trabajo frontend

2:30–3:45. Base.pdf, página 28: diseño de interfaz. Usar el botón de esta diapositiva para volver a mostrar la moneda en el aire. El frontend responde al clic, anima la moneda mientras espera y muestra cara o sello cuando llega el resultado. También explica si hay demora o algo falla. El resultado necesita texto además de color o imagen y el botón debe poder usarse con teclado. El frontend muestra el estado de la petición; el backend procesa la solicitud y se responsabiliza de producir y entregar una respuesta correcta o un error claro. Son responsabilidades complementarias. El número de tareas en pantalla no representa cuánto trabajo hace cada rol. La demostración sigue siendo local y la espera representa la respuesta del servicio.

## 6. El servicio y el trabajo backend

3:45–5:00. Base.pdf, páginas 24 y 25. El backend no solo elige cara o sello. Comprueba la solicitud, ejecuta la lógica y debe entregar la respuesta en el formato acordado. Si algo falla, devuelve un error claro que la interfaz pueda explicar. Diseñar el servicio para responder de forma confiable, con límites de espera y tratamiento de fallos; no prometer que nunca se caerá ni que la red siempre entregará una respuesta. Las métricas ayudan a comprobarlo: medir cuánto tarda una respuesta, cuántas peticiones llegan y cuántas terminan en error. No inventar valores de estas métricas para la demo. Mostrar la diferencia de responsabilidades: el frontend anima y comunica el estado, mientras el backend procesa, responde y permite investigar problemas. API significa el acuerdo para comunicarse. El contrato de la diapositiva es conceptual y no llama a un servicio real. Abriremos el generador pseudoaleatorio en la demostración de la semilla.

## 7. La integración y el trabajo fullstack

5:00–6:00. Seguir una sola interacción de principio a fin. Quien trabaja fullstack puede implementar la interfaz y el servicio y comprobar que funcionan juntos. Un stack es el conjunto de tecnologías que usa el proyecto. Mostrar dos ejemplos sencillos: JavaScript en la interfaz y también en el servicio, por ejemplo con Node.js, o JavaScript en la interfaz y Python en el servicio. Son ejemplos de combinaciones, no requisitos universales ni una medición de su popularidad. Verificar que ambas partes interpretan igual la respuesta y los errores. Fullstack trabaja con las tecnologías de su proyecto; no implica dominar todos los lenguajes ni todas las especialidades de infraestructura e investigación cuántica.

## 8. Despliegue y operación de nuestra aplicación

6:00–7:15. Base.pdf, páginas 22 y 30–33. Explicar con palabras comunes: que funcione en mi computador no basta. Debemos probar el programa y publicarlo para que otros puedan usarlo. Después alguien debe revisar si la gente puede entrar, darse cuenta de que algo dejó de funcionar y ayudar a ponerlo en marcha otra vez. También hay que guardar de forma segura las claves de acceso y hacer que publicar cambios sea repetible. Despliegue significa llevar la aplicación al lugar donde otros la usarán; operación es mantenerla funcionando. Después de las tareas, mencionar que distintos equipos llaman a estas responsabilidades plataforma, DevOps o SRE. Los nombres y la división del trabajo cambian entre organizaciones. Este trabajo se conecta con frontend y backend y continúa después de publicar.

## 9. Proceso de desarrollo de un programador fullstack

7:15–8:45. Recuperar el diagrama de base.pdf, página 22, conservando la estructura ya revisada por la profesora. Distinguir la fase inicial de concepción del ciclo que se repite en cada sprint. Aplicarlo a la moneda: en el análisis inicial definimos qué quiere la persona, en el diseño de alto nivel separamos interfaz y servicio, en cada sprint detallamos una historia, diseñamos, implementamos front y back, probamos y desplegamos. El retorno muestra que aprendemos del uso y comenzamos otra iteración. Conectar el despliegue con las responsabilidades de plataforma y operación recién presentadas. Dejar que el diagrama organice la explicación, sin agregar una lista paralela. Este ciclo se mantiene cuando incorporamos el módulo cuántico.

## 10. La semilla determina la secuencia

8:45–10:45. Ejecutar una vez con semilla 42 y leer la secuencia: Cara, Cara, Sello, Cara, Cara. Ejecutar de nuevo y comparar. El control Ejecutar 5 veces completa las cinco filas si hace falta avanzar rápido. El generador actualiza su estado en cada lanzamiento, pero lanzarCinco vuelve a crearlo con la semilla recibida. Con el mismo algoritmo, estado inicial y orden de operaciones, se repite la secuencia completa. No son cinco valores necesariamente iguales dentro de una fila. Cambiar la semilla a 7: Cara, Sello, Sello, Sello, Cara. No prometer que todas las semillas producen secuencias cortas distintas. No explicar las constantes: el mecanismo relevante es el estado. Math.random también es pseudoaleatorio pero su API no permite establecer o reiniciar la semilla, por eso usamos una rutina propia. La aleatoriedad clásica también puede usar fuentes físicas de entropía. Este ejemplo no demuestra una necesidad de QPU. Transición: ¿cómo produciríamos el resultado mediante una medición cuántica?

Fuente: [JavaScript · Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random). Math.random genera números pseudoaleatorios. Su API no permite seleccionar ni reiniciar la semilla. La demo de la charla usa un generador propio con semilla explícita, no la implementación interna de Math.random.

## 11. La aplicación incorpora un módulo cuántico

10:45–12:15. Base.pdf, página 35. Volver a la arquitectura conocida y agregar un módulo de cálculo alternativo. La interfaz y el servicio siguen existiendo. La aplicación completa sigue funcionando con software clásico. QPU significa unidad de procesamiento cuántico: ejecuta operaciones sobre qubits. Un simulador estudia ese comportamiento en un computador clásico. El esquema muestra dos implementaciones candidatas del módulo, no una cadena que necesita ejecutar ambas para cada moneda. El acceso al proveedor y el manejo de trabajos pertenecen al servicio clásico. No se requiere agregar un selector técnico de proveedor a la interfaz del usuario final.

## 12. La moneda cuántica

12:15–14:30. Retomar base.pdf, páginas 39–42. Un qubit comienza en el estado cero. La rotación Ry(pi/2) prepara amplitudes iguales para cero y uno. Medir produce un solo resultado clásico, que interpretamos como cara o sello. No leer una superposición como una lista accesible de dos resultados. El estado correcto es (|0⟩ + |1⟩)/sqrt(2), corrigiendo el |11⟩ que aparecía en la página 40 del material base. La probabilidad ideal de cada resultado es un medio. El mismo circuito prepara las mismas probabilidades, no una secuencia prefijada de mediciones. Cinco lanzamientos pueden coincidir por azar con otra ejecución. No prometer resultados diferentes en cada ejecución ni equilibrio exacto en una muestra finita. La medición requiere preparar de nuevo el estado para cada repetición. Los dispositivos reales pueden introducir sesgo y errores.

Fuente: [IBM · Medición de un qubit](https://quantum.cloud.ibm.com/learning/en/courses/use-a-qc-today/quantum-mechanics-basics). Preparación de estados y medición de un qubit. El estado ideal con amplitudes iguales produce cero o uno con probabilidades iguales, sin imponer conteos exactos en muestras finitas.

## 13. El recorrido completo es híbrido

14:30–16:15. Seguir la misma solicitud. El frontend llama al backend. El backend prepara o configura un circuito, pide su ejecución al proveedor y recibe datos clásicos. Convierte el bit en el resultado del producto y actualiza la interfaz. Las conexiones entre esos componentes no transportan un qubit del servidor al navegador. La moneda necesita una ejecución por resultado, sin optimizador variacional. Otros algoritmos sí alternan mediciones y ajustes clásicos. Una llamada HTTP no garantiza una respuesta inmediata: el servicio puede recibir un identificador de trabajo y consultar su estado. El contrato y las colas se explican conceptualmente. Braket documenta la coordinación de recursos clásicos con simuladores y QPU, sin imponer que la moneda utilice ese producto.

Fuente: [Trabajos híbridos](https://docs.aws.amazon.com/braket/latest/developerguide/braket-jobs.html). Trabajos híbridos con recursos clásicos y tareas cuánticas. Simuladores, QPU, script o contenedor y seguimiento de resultados.

## 14. Implementación, pruebas, despliegue cuántico

16:15–18:15. Recuperar el diagrama de base.pdf, página 38, conservando la estructura ya revisada por la profesora. El comportamiento teórico está en el centro y se contrasta en ambas direcciones con simulación, ejecución en hardware real y despliegue. Aplicarlo a la moneda: definir el estado y las probabilidades esperadas, simular el circuito, ejecutarlo en una QPU y analizar las mediciones. La simulación ocurre en hardware clásico. La ejecución real requiere adaptar el circuito al dispositivo y conocer sus condiciones; los equipos de hardware y control se encargan de su calibración. El despliegue integra estas ejecuciones en el flujo de la aplicación. El análisis de resultados es transversal: considerar variación estadística, ruido y errores, y volver a teoría o implementación cuando la evidencia lo requiera. No presentar las etapas como una ejecución única. Mantener el diagrama completo, sin sustituirlo por la gráfica de conteos que sigue. El ciclo clásico de la aplicación continúa alrededor de este trabajo especializado.

## 15. Pruebas con simulador y hardware

18:15–20:30. Separar contratos clásicos de la validación cuántica. Con respuestas controladas comprobamos que el frontend muestra cara cuando el backend dice cara. La gráfica sí corresponde a una simulación ideal local ejecutada por el código de la charla: Ry(pi/2)|0>, cálculo de amplitudes y muestreo con semilla 42, 1.000 repeticiones. Conteos: cero 487, uno 513. Esta simulación mínima es software clásico y su muestreo usa el generador pseudoaleatorio de antes, sin ruido de hardware. No son resultados de una QPU ni una ejecución de Qiskit. IBM BasicSimulator también documenta una semilla para generación de muestras. En hardware real necesitamos acceso, registrar circuito, dispositivo, configuración y fecha, y contrastar distribución y errores con las expectativas. El análisis es transversal, como en base.pdf, página 38. No exigir 500/500 ni atribuir automáticamente diferencias a decoherencia: la variación estadística también existe en el caso ideal. Los datos de dos qubits de las páginas 46–50 no se reutilizan para esta moneda.

Fuente: [IBM · Simulación y semilla](https://quantum.cloud.ibm.com/docs/en/api/qiskit/qiskit.providers.basic_provider.BasicSimulator). BasicSimulator documenta seed_simulator para la generación de muestras. La gráfica de esta charla usa un simulador mínimo local en JavaScript de Ry(theta)|0>, sin ruido, y no una ejecución de Qiskit ni una medición de hardware real.

## 16. Los desafíos aparecen en el producto

20:30–22:30. Recuperar base.pdf, página 53 y los temas de 65–69. Explicar los desafíos como decisiones del mismo producto. Si hay cola, la UI debe mostrar pendiente, no quedarse congelada. Si una consulta de estado falla, no debemos lanzar ciegamente otro trabajo de pago. Guardar el identificador del proveedor y distinguir fallo de consulta de fallo de ejecución. Registrar circuito, parámetros y dispositivo para investigar. La evaluación estadística necesita tolerancias justificadas y suficientes repeticiones, no conteos idénticos. El ruido físico exige estudiar el dispositivo y los errores. El presupuesto limita repeticiones y frecuencia de pruebas. Conectar confiabilidad y observabilidad con quienes despliegan y operan la aplicación. La especialización se suma al trabajo de frontend y backend.

Fuente: [Trabajos híbridos](https://docs.aws.amazon.com/braket/latest/developerguide/braket-jobs.html). Trabajos híbridos con recursos clásicos y tareas cuánticas. Simuladores, QPU, script o contenedor y seguimiento de resultados.

## 17. Del ejemplo a una aplicación mayor

22:30–24:00. Retomar los problemas del inicio. El ejemplo hizo visible la integración, pero no prueba ventaja cuántica. Una aplicación científica puede preparar un modelo, ejecutar un circuito, interpretar mediciones y ajustar parámetros clásicos muchas veces. La interfaz, APIs, validación y operación siguen siendo necesarias. La casa ya utilizada en la presentación original es una ilustración conceptual creada para la charla, no una instalación real ni un diagrama de IBM. CPU, GPU y QPU pueden coordinarse según la necesidad. HPC es un entorno de cómputo distribuido que puede contener nodos CPU y GPU, no un tipo de procesador. La QPU puede ser remota. La moneda no necesita HPC ni todos los aceleradores. La arquitectura de referencia de IBM contextualiza esa dirección de integración. Los detalles de Slurm, middleware y los mapas de especialización permanecen en la versión anterior para preguntas.

Fuente: [IBM · Arquitectura QCSC (2026)](https://research.ibm.com/blog/quantum-centric-supercomputing-system-reference-architecture). Arquitectura de referencia publicada el 12 de marzo de 2026. Integra QPU junto con CPU/GPU en HPC mediante aplicaciones, middleware, orquestación e interfaces. Es un marco evolutivo; no valida todos los detalles de la ilustración conceptual de la charla.

Fuente: [Algoritmos variacionales](https://learning.quantum.ibm.com/course/variational-algorithm-design/examples-and-applications). Ejemplos educativos de química y algoritmos variacionales. No demuestra ventaja industrial general.

Fuente: [Optimización cuántica](https://research.ibm.com/projects/quantum-optimization). Investigación en optimización cuántica y búsqueda de ventaja práctica.

## 18. Qué construimos y qué aprendimos

24:00–25:00. Cerrar el recorrido. Ya sabemos qué significa frontend, backend y fullstack porque vimos el trabajo. Vimos quién publica y mantiene el servicio. La semilla mostró el comportamiento determinista de un generador pseudoaleatorio. El módulo cuántico añadió circuitos, medición y validación estadística dentro de una aplicación híbrida. Proponer construir la versión clásica, integrar simulación y evaluar hardware cuando el objetivo y acceso lo justifiquen. No exigir que una persona haga todas las especialidades. El ciclo de requisitos, diseño, implementación, pruebas, despliegue y aprendizaje continúa. Abrir los cinco minutos de preguntas.

Mensajes visibles: «El ciclo de software se mantiene» y «La computación cuántica se construye con software clásico».
