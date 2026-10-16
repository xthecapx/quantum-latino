# Quantum Latino 2026

**De desarrollador fullstack a programador cuántico: ¿qué cambia?**

Presentación en español con Reveal.js y el paquete público Revelab. La nueva versión explica el desarrollo de una aplicación de cara o sello: interfaz, backend, integración fullstack, despliegue y operación, semilla pseudoaleatoria, módulo cuántico y desafíos de un sistema híbrido.

## Ejecutar y elegir versión

```bash
npm install
npm run dev
```

Abrir la dirección local que muestra Vite:

- **Nueva presentación:** `/`.
- **Versión anterior completa:** `/?version=referencia`.
- **Demo de la semilla:** `/#/semilla`.
- **Imprimir la nueva versión:** `/?print-pdf`.
- **Imprimir la anterior:** `/?version=referencia&print-pdf`.

La nueva versión tiene 19 pantallas: portada sin tiempo de exposición, un separador, 16 de contenido y cierre. Son 25 minutos de charla y 5 adicionales de preguntas. Se comienza con aplicaciones; la investigación personal se presenta antes del cierre, retomando el esquema cuántico y destacando el análisis de resultados. El separador «Veamos un ejemplo» introduce el problema de simular una moneda con palabras simples.

La anterior conserva sus 20 pantallas, orden, notas, avances y contenido. `src/slides.js` permanece intacto. También se conservan `base.pdf`, `jd.pdf`, el guion y las fuentes anteriores. Su README original está en `docs/REFERENCIA-README.md`.

## Presentar

- Flechas o espacio: avanzar, incluyendo los elementos progresivos.
- Esc: vista general.
- S: notas del ponente y cronómetro. Permitir ventanas emergentes.
- F: pantalla completa.
- B: ocultar la presentación momentáneamente.

El título, la tipografía serif y los colores de Revelab se mantienen. Las nuevas diapositivas usan diagramas HTML/CSS editables, una interfaz de moneda y poco texto. La explicación detallada y las fuentes están en las notas. Los diagramas completos del ciclo clásico (base, p. 22) y del proceso cuántico (base, p. 38) forman parte de la nueva charla, conservando su estructura.

## Demostración de la semilla

En la diapositiva “La semilla determina la secuencia”:

1. Dejar la semilla en 42 y pulsar **Ejecutar**.
2. Repetir hasta completar cinco ejecuciones, o usar **Ejecutar 5 veces**.
3. Las cinco filas muestran `Cara, Cara, Sello, Cara, Cara`.
4. Cambiar la semilla a 7 y ejecutar: `Cara, Sello, Sello, Sello, Cara`.

Cada ejecución reinicia el generador una vez y produce cinco lanzamientos. El estado evoluciona dentro de la secuencia. No se reinicia antes de cada lanzamiento. La rutina es didáctica y no reproduce la implementación de `Math.random()`.

La diapositiva muestra pseudocódigo estilo JavaScript: iniciar(semilla), iterar(5 veces) y esCaraOsello(numeroGenerado). siguiente() oculta el cálculo del generador. Las fórmulas quedan en la implementación JavaScript, que sigue ejecutando la demo sin cambios. La impresión incluye cinco secuencias sin requerir interacción previa.

Los botones de las diapositivas del ejemplo y de frontend funcionan localmente: la moneda sube y gira durante 2,6 segundos mientras aparece «Esperando el resultado». Al caer se lee «Resultado: Cara» o «Resultado: Sello». La demora representa la espera del backend y no hace una llamada de red real. No se permiten lanzamientos simultáneos y una tirada pendiente se cancela al salir de la diapositiva. El control «Animar» permite apagar el movimiento sin quitar la espera. La demo lo activa inicialmente para mostrar el lanzamiento solicitado. Los diagramas de APIs y despliegue explican una arquitectura conceptual, sin invocar servicios externos.

## Simulación cuántica

La gráfica de pruebas usa un simulador mínimo local de un qubit en JavaScript: calcula las probabilidades de `Ry(π/2)|0⟩` y realiza 1.000 muestras con semilla 42. Es simulación ideal sin ruido, no una ejecución de Qiskit ni resultados de una QPU. El hardware real aparece como una etapa que requiere ejecución y comparación propias.

## Editar

- `src/slides-example.js`: contenido, diagramas, notas, tiempos y simulación de la nueva charla.
- `src/story.css`: estilos de la nueva versión, aislados de la anterior.
- `src/components/seeded-coin.js`: rutina JavaScript que ejecuta la demo. La diapositiva muestra su explicación en pseudocódigo.
- `src/components/coin.js`: interacción y generador con estado persistente.
- `src/slides.js`: presentación anterior conservada.
- `src/styles.css` y `src/components/process-diagram.*`: estilos y procesos anteriores conservados.
- `src/sources.js`: fuentes compartidas y nuevas referencias técnicas.
- `docs/NUEVO-OUTLINE.md`: recorrido aprobado y mapa de reutilización.
- `docs/GUION-EJEMPLO.md`: guion de la nueva versión.
- `docs/GUION.md`, `docs/FUENTES.md`: documentación anterior conservada.
- `docs/IMAGEN-APLICACIONES.md`: procedencia y prompt de la nueva ilustración.

## Compilar y publicar

```bash
npm run build
npm run preview
```

`dist/` contiene las dos versiones. El parámetro `version=referencia` también funciona en la compilación estática. Todas las demos e imágenes funcionan sin servicios cuánticos ni conexión externa.

El workflow existente de GitHub Pages construye y publica `dist/` al hacer push a `main` o al ejecutarlo manualmente. Para probar la ruta del repositorio:

```bash
npm run build -- --base /quantum-latino/
npm run preview -- --base /quantum-latino/
```

Abrir `/quantum-latino/` para la nueva versión o `/quantum-latino/?version=referencia` para la anterior. Este cambio no inicia una publicación ni hace push al repositorio.
