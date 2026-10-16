# Propuesta de nueva charla

Estado: recorrido implementado y actualizado con los dos diagramas de proceso solicitados. La presentación anterior y el PDF base se conservan como referencia.

Título definitivo, conservado de la presentación actual: **De desarrollador fullstack a programador cuántico: ¿qué cambia?**.

Duración propuesta: mantener los 25 minutos de exposición y 5 minutos de preguntas del guion actual. 19 diapositivas en total, incluido el separador «Veamos un ejemplo».

La portada queda visible antes de comenzar y no consume tiempo de exposición. Se omite la presentación personal y se comienza directamente con las aplicaciones. Se reserva tiempo explícito para despliegue y operación y para ejecutar la demostración de la semilla antes de introducir el módulo cuántico.

## Hilo conductor

Abrimos con aplicaciones que motivan explorar computación cuántica. Después construimos una aplicación clásica de cara o sello, el ejemplo que ya aparece en el material base. Explicamos los roles cuando necesitamos su trabajo: alguien construye la interfaz, alguien implementa el servicio, alguien conecta el recorrido completo y alguien publica y mantiene disponible la aplicación. Solo entonces introducimos los nombres frontend, backend y fullstack y las responsabilidades de despliegue y operación, que pueden asumir equipos de plataforma, DevOps o SRE según la organización.

Antes de agregar el módulo cuántico, ejecutamos una rutina JavaScript con una semilla explícita. Cada ejecución genera cinco lanzamientos. Al reiniciar con la misma semilla, la secuencia completa se repite. Esta observación permite explicar el generador pseudoaleatorio y plantear la medición cuántica como otra fuente de resultados. Seguimos una solicitud completa y mostramos qué cambia en implementación, pruebas y operación. Cerramos conectando ese ejemplo pequeño con aplicaciones más exigentes y con la coordinación de recursos clásicos y cuánticos.

Cara o sello es una propuesta para aprovechar el ejemplo existente y mantener baja la carga conceptual. Su propósito es explicar cómo construir e integrar software. No se presenta como una aplicación que necesite una QPU, como prueba de ventaja cuántica ni como generador certificado para usos de seguridad.

## Recorrido y reutilización

Los números de página corresponden a las páginas del archivo base.pdf. Los nombres entre comillas corresponden a diapositivas de la presentación actual en src/slides.js.

| # | Título propuesto | Tiempo | Qué presentar | Qué reutilizar |
| --- | --- | --- | --- | --- |
| 1 | De desarrollador fullstack a programador cuántico: ¿qué cambia? | 0:00–0:00 | Portada visible antes del inicio. Al comenzar, pasar directamente a las aplicaciones, sin presentación personal. | Título exacto y estilo de la portada actual. El nombre puede permanecer como crédito. |
| 2 | Algunas aplicaciones | 0:00–1:25 | Química: simular sistemas complejos para entender cómo cambian sus propiedades. Optimización: explorar métodos cuánticos para encontrar una ruta corta que visite varios puntos de un mapa. Indicar que son áreas en investigación y que la ventaja práctica frente a métodos clásicos aún debe demostrarse y reportarse. | Dos ilustraciones independientes, cada una junto a su texto. Fuentes educativas de IBM y Qiskit sobre simulación y optimización de rutas. |
| 3 | Veamos un ejemplo | 1:25–1:30 | Pausa breve para pasar de las aplicaciones a un ejemplo cotidiano. Mostrar solamente el título. | Estilo de los separadores existentes. |
| 4 | Nuestro ejemplo: cara o sello | 1:30–2:30 | Plantear el problema: ¿cómo simulamos el resultado de tirar una moneda al aire? El programa debe elegir cara o sello y queremos que ambas tengan la misma oportunidad. Mostrar una moneda que sube y gira al pulsar el botón. Durante 2,6 segundos esperamos la respuesta y después leemos Resultado: Cara o Resultado: Sello. Explicar que la animación representa el tiempo de procesamiento y respuesta del backend, simulado localmente. Podemos repetir. | Base, pp. 21, 23 y 27: ejemplo, necesidad del usuario y criterios de aceptación. Reescribir el requisito de latencia antes de incorporar ejecución remota. |
| 5 | La interfaz y el trabajo frontend | 2:30–3:45 | Usar la moneda animada para explicar clic, animación, resultado y mensajes de espera o error. El frontend comunica lo que ocurre y trabaja con la respuesta del backend. | Base, p. 28: diseño de interfaz. Material nuevo para conectar cada decisión con la pantalla de cara o sello. |
| 6 | El servicio y el trabajo backend | 3:45–5:00 | Mostrar que el backend comprueba la petición, calcula el resultado, entrega una respuesta o un error claro y mide cuánto tarda y cuántas peticiones fallan. Presentar responsabilidades complementarias al frontend. | Base, pp. 24–25: módulos y lógica clásica. Adaptar “Las APIs conectan el flujo de trabajo” a esta primera versión sencilla. |
| 7 | La integración y el trabajo fullstack | 5:00–6:00 | Conectar interfaz y servicio. Explicar stack como las tecnologías del proyecto con dos ejemplos: JavaScript en ambas partes (Node.js en el servicio) o JavaScript en la interfaz y Python en el servicio. | Ideas sobre interfaces y APIs de la presentación actual. Nueva explicación del rol mediante el ejemplo, sin requisitos de vacantes. |
| 8 | Despliegue y operación de nuestra aplicación | 6:00–7:15 | Explicar publicar y mantener funcionando la aplicación. Preguntar: ¿la gente puede usarla?, ¿algo dejó de funcionar?, ¿cómo la hacemos funcionar de nuevo? Introducir después los nombres plataforma, DevOps y SRE. | Base, pp. 22 y 30–33: ciclo, QA y despliegue. Recuperar operación y observabilidad del material actual, aplicadas a la moneda. |
| 9 | Proceso de desarrollo de un programador fullstack | 7:15–8:45 | Explicar concepción inicial y el ciclo por sprint mediante decisiones del ejemplo. Conservar las fases y el retorno al siguiente sprint. | Diagrama completo de base, p. 22, ya incorporado en la presentación anterior y revisado por la profesora. |
| 10 | La semilla determina la secuencia | 8:45–10:45 | Ejecutar lanzarCinco(42) cinco veces y mostrar la misma secuencia de cinco lanzamientos en cada ejecución. Cambiar la semilla y comparar. Explicar que cada llamada reinicia el estado del generador. La secuencia determinista del módulo motiva introducir una fuente basada en medición cuántica. | Base, p. 24: pseudoaleatoriedad y semilla. Nueva rutina ejecutable en docs/ejemplos/moneda-semilla.js. |
| 11 | La aplicación incorpora un módulo cuántico | 10:45–12:15 | Añadir una implementación alternativa para producir los resultados. Mostrar la nueva frontera entre el servicio clásico y el módulo cuántico. Explicar QPU como el procesador que ejecuta el circuito, y simulador como software clásico que permite estudiar su comportamiento. | Base, p. 35: incorporación del componente cuántico. Reutilizar el concepto de las APIs actuales, ahora aplicado a cara o sello. |
| 12 | La moneda cuántica | 12:15–14:30 | Un qubit inicial, una operación que prepara probabilidades ideales iguales y una medición que devuelve 0 o 1. Traducir 0/1 a cara/sello. Explicar primero con el circuito, con matemática opcional en notas. | Base, pp. 39–42: comportamiento teórico y simulación de un qubit. Conservar Ry(π/2) para continuidad y corregir el estado escrito en p. 40 a (\|0⟩ + \|1⟩)/√2. |
| 13 | El recorrido completo es híbrido | 14:30–16:15 | Seguir la misma solicitud: el servicio prepara el circuito, solicita ejecución, recibe datos clásicos, interpreta el resultado y responde a la interfaz. Explicar híbrido por la participación de recursos clásicos y cuánticos. Una llamada basta en esta moneda. Otros algoritmos repiten cálculos y ajustes clásicos. | “Las APIs conectan el flujo de trabajo” y la idea de base, p. 16. Simplificar a los componentes que necesita este ejemplo. |
| 14 | Implementación, pruebas, despliegue cuántico | 16:15–18:15 | Explicar el comportamiento teórico, simulación, ejecución real y despliegue. Mantener los retornos al modelo y el análisis transversal de resultados. Aplicar cada fase a la moneda. | Diagrama completo de base, p. 38, ya incorporado en la presentación anterior y revisado por la profesora. |
| 15 | Pruebas con simulador y hardware | 18:15–20:30 | Separar pruebas del servicio de validación del circuito. Primero probar el contrato con respuestas controladas, después el circuito en simulación y finalmente en QPU si hay acceso. Explicar shots como repeticiones y comparar frecuencias con la distribución esperada. | “Implementación, pruebas, despliegue cuántico”, “Qué cambia en el ciclo de desarrollo” y base, p. 38. La gráfica muestra simulación ideal local. Los resultados de hardware real requieren ejecución propia. |
| 16 | Los desafíos aparecen en el producto | 20:30–22:30 | Conectar cada desafío con una decisión: colas requieren estados de espera, fallos requieren seguimiento y reintentos controlados, costos requieren presupuestos, variación estadística requiere criterios de prueba, ruido requiere comparación y diagnóstico, cambios de dispositivo requieren registrar configuración. | Base, p. 53, y los temas de pp. 65–69. Reutilizar colas, costos y trazabilidad de las diapositivas actuales de APIs y ciclo. |
| 17 | Del ejemplo a una aplicación mayor | 22:30–23:30 | Retomar química u optimización del inicio. En un problema mayor cambia el módulo de cálculo y puede aparecer un bucle iterativo, pero siguen siendo necesarios la interfaz, los servicios y la validación. Mostrar la casa de cómputo como visión conceptual si ayuda a ubicar CPU, GPU y QPU. | “Datacenters del futuro” y parte de “La evolución hacia sistemas heterogéneos”. Condensar a una sola vista y distinguir necesidades del ejemplo de posibilidades de otros sistemas. |
| 18 | Mi investigación: análisis de resultados | 23:30–24:30 | Retomar el esquema cuántico y destacar el análisis de resultados. Presentar el foco de la investigación: evaluar el éxito de una ejecución a partir del problema, la teoría, simulación cuando sea posible y herramientas estadísticas. El histograma por sí solo no define el éxito. | Diagrama completo del proceso cuántico (base, p. 38), con énfasis visual en el análisis transversal; descripción de investigación proporcionada por el ponente. |
| 19 | Qué construimos y qué aprendimos | 24:30–25:00 | Recapitular la aplicación completa y las responsabilidades aprendidas. Invitar a construir una versión clásica, integrar simulación y evaluar hardware cuando tenga sentido. Contacto y preguntas. | Cierre actual y conclusión de base, p. 55. Adaptar la invitación de “Una ruta según el rol que quieres ocupar” al proyecto recorrido. |

## Demostración de la semilla y transición cuántica

Rutina preparada en `docs/ejemplos/moneda-semilla.js`. Se puede ejecutar con `node docs/ejemplos/moneda-semilla.js` o adaptar a la presentación cuando se escriban las nuevas diapositivas. No requiere dependencias ni acceso a servicios.

Secuencia de exposición:

1. Mostrar la semilla 42 y ejecutar cinco lanzamientos. Resultado: `Cara, Cara, Sello, Cara, Cara`.
2. Reiniciar con la misma semilla y repetir. Ejecutar la función cinco veces en total: las cinco filas muestran la misma secuencia.
3. Cambiar a la semilla 7 y mostrar la nueva secuencia del ejemplo.
4. Explicar: el generador conserva un estado que evoluciona con cada lanzamiento. La misma semilla, el mismo algoritmo y el mismo punto de inicio reproducen la secuencia. Los cinco lanzamientos de una fila no tienen que ser iguales entre sí.
5. Abrir el módulo cuántico con esta pregunta: «¿Cómo produciríamos el resultado mediante una medición cuántica?».

En la diapositiva: pseudocódigo estilo JavaScript a un lado y salida de ejecución al otro, semilla visible y un control para volver a ejecutar. siguiente() oculta la fórmula del estado. iterar(5 veces) repite los lanzamientos y esCaraOsello(numeroGenerado) resume la conversión en cara o sello. El JavaScript real se conserva y ejecuta la demo. Mostrar qué parte reinicia la semilla. El ejemplo reinicia una vez por secuencia de cinco lanzamientos, nunca antes de cada lanzamiento. Las constantes del generador pueden quedar en segundo plano: el punto de la demostración es el estado y la reproducibilidad.

Precisiones para las notas del ponente:

- Este módulo implementa un generador pseudoaleatorio didáctico. No representa todas las fuentes de aleatoriedad clásicas. La computación clásica también puede usar fuentes físicas de entropía.
- `Math.random()` es pseudoaleatorio, pero JavaScript no permite elegir ni reiniciar su semilla mediante esa API. Por eso la demostración usa una rutina propia con semilla explícita.
- Cambiar la semilla puede cambiar la secuencia. Dos semillas distintas pueden coincidir en una secuencia corta de cara/sello. La repetición mostrada ilustra el algoritmo determinista, no constituye por sí sola una prueba estadística.
- La explicación cuántica distingue preparar el mismo estado de predecir cada medición. Para el estado ideal equilibrado podemos predecir las probabilidades, sin fijar una secuencia individual de resultados.
- Una secuencia cuántica corta puede coincidir por azar con otra. Evitar prometer que cada ejecución tendrá una secuencia diferente.
- Un simulador clásico puede muestrear con un generador pseudoaleatorio y una semilla. La demostración del simulador valida el comportamiento esperado, sin convertirlo en una fuente física de aleatoriedad cuántica.
- La versión clásica sigue siendo suficiente para la aplicación didáctica. La transición introduce una alternativa de implementación y sus responsabilidades, sin afirmar que la QPU sea necesaria para lanzar una moneda.

## Material fuera del recorrido principal

- Quitar el bloque inicial “Ofertas y roles de hoy”, incluyendo perfiles, requisitos de tecnologías y mapa de especializaciones. Las vacantes quedan como material de referencia.
- Retirar del recorrido “Lo que se contrata hoy y mi visión del futuro” y la taxonomía de rutas profesionales. Su contenido no sostiene la nueva narrativa del ejemplo.
- Dejar “Integración HPC y cuántica: referencia de IBM” y los detalles de arquitectura como respaldo para preguntas. La moneda no necesita un clúster HPC.
- Dejar la esfera de Bloch, derivaciones y el modelo de dos qubits con entorno como respaldo. El ejemplo principal usa un solo qubit.
- No reutilizar los conteos de base, pp. 46–50, como resultados de la nueva moneda: corresponden a otro circuito. Tampoco atribuir una diferencia concreta a decoherencia sin evidencia del experimento.
- Conservar completos en el recorrido principal los diagramas del ciclo clásico (base, p. 22) y del proceso cuántico (base, p. 38). Mantener su estructura revisada por la profesora y explicar cada etapa con la moneda.
- Mantener el humor sobre asistentes de IA solo si cabe dentro de la explicación del trabajo, sin un bloque independiente.

## Criterios para escribir las nuevas diapositivas

1. Presentar primero la acción o el problema y después el nombre técnico necesario para describirlo.
2. Hacer crecer la misma aplicación. Reutilizar su interfaz y recorrido para que el público pueda identificar cada componente nuevo.
3. Diferenciar una medición individual de las repeticiones usadas para estudiar la distribución. Una muestra finita no tiene que contener exactamente la mitad de cada resultado.
4. Explicar el tiempo de respuesta como parte del producto. Una ejecución remota puede requerir seguimiento de trabajo y recuperación posterior del resultado.
5. Mostrar explícitamente cuándo usamos simulación y cuándo hardware real. No presentar datos ilustrativos como mediciones.
6. Explicar las responsabilidades sin listas de lenguajes o frameworks. Las decisiones de herramientas pueden quedar en notas.
7. Usar el ejemplo para mostrar responsabilidades que continúan y nuevas tareas de validación. Las aplicaciones del inicio aportan motivación y contexto.
8. Conservar el título exacto de la presentación. Omitir la introducción personal y dedicar el tiempo de exposición a las explicaciones.
9. Explicar quién despliega y opera la aplicación mediante tareas concretas. Los nombres de los equipos llegan después y no implican una separación universal de responsabilidades.
10. Colocar la demostración de la semilla inmediatamente antes del módulo cuántico. Diferenciar la repetición de una secuencia de la repetición de un mismo valor en todos los lanzamientos.

## Fuentes técnicas para la siguiente etapa

Consultadas el 15 de octubre de 2026. Respaldan los conceptos del outline, no resultados experimentales de esta aplicación.

- [IBM Quantum Learning: ejemplos y aplicaciones variacionales](https://quantum.cloud.ibm.com/learning/en/courses/variational-algorithm-design/examples-and-applications). Contexto de aplicaciones y comparación con métodos clásicos.
- [IBM Research: Quantum Optimization](https://research.ibm.com/projects/quantum-optimization). Optimización como área de investigación.
- [IBM Quantum Learning: fundamentos de mecánica cuántica](https://quantum.cloud.ibm.com/learning/en/courses/use-a-qc-today/quantum-mechanics-basics). Medición y probabilidades de un qubit.
- [Amazon Braket: Hybrid Jobs](https://docs.aws.amazon.com/braket/latest/developerguide/braket-jobs.html). Coordinación de recursos clásicos, simuladores y QPU.
- [MDN: Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random). Pseudoaleatoriedad y ausencia de control público sobre la semilla.
- [IBM: BasicSimulator](https://quantum.cloud.ibm.com/docs/en/api/qiskit/qiskit.providers.basic_provider.BasicSimulator). Ejemplo de simulador clásico con opción `seed_simulator` para el muestreo.

La siguiente etapa es escribir las nuevas diapositivas a partir de este recorrido. La estructura actual permanece intacta como referencia.
