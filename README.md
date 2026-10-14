# Quantum Latino 2026

Presentación en español: **De programador fullstack a programador cuántico**.
Usa Reveal.js y el paquete público **revelab** desde npm, sin copiar el código del proyecto hermano revelap.

## Ejecutar

```bash
npm install
npm run dev
```

Abrir la dirección local que muestra Vite. Para generar una versión estática:

```bash
npm run build
npm run preview
```

Publicar el contenido de dist/ en la raíz de un servidor estático. No hace falta conectarse a servicios cuánticos: toda la charla funciona localmente después de instalar las dependencias.

## Presentar

- Flechas o espacio: avanzar.
- Esc: vista general.
- S: notas del ponente y cronómetro. Permitir ventanas emergentes.
- F: pantalla completa.
- B: ocultar la presentación momentáneamente.
- Agregar ?print-pdf a la URL: vista para imprimir desde el navegador, sin diapositivas adicionales por fragmentos.

14 diapositivas de contenido: diez de 2 minutos y cuatro de 1 minuto. Las dos vistas del datacenter comparten un bloque de 2 minutos. Más portada de 20 segundos, cuatro separadores de 5 segundos y cierre de 20 segundos: **25 minutos**. Son 20 diapositivas en total; las de título se pasan rápidamente. Reservar **5 minutos para preguntas**. Los tiempos están en data-timing y en las notas.

## Editar

- src/slides.js: texto, orden, notas y tiempo por diapositiva.
- src/sources.js: enlaces y alcance de la evidencia.
- src/styles.css: ajustes de tamaño y distribución; colores y tipografías heredados de serif y revelab.
- public/assets/ibm-hpc-slurm-qiskit.png: diagrama de IBM proporcionado por el ponente, con artículo y roadmap enlazados.
- public/assets/casa-computo-hibrido.png: casa con racks y routing desde CPU hacia GPU, HPC o QPU.
- docs/GUION.md: recorrido y tiempos acumulados.
- docs/FUENTES.md: fuentes primarias y límites de la búsqueda.
- docs/IMAGEN.md: prompt de la imagen generada.
- src/components/process-diagram.css: componente de diagramas CSS con variables de Revelab.
- src/components/process-diagram.js: HTML editable de los procesos clásico y cuántico.
- docs/DIAGRAMAS.md: uso y preparación para una futura incorporación a Revelab.

Se conserva la estructura HTML de Reveal.js y se usan componentes de revelab como title-slide, divider, slide-content, table-research, diagram-flow y code-box. Se usa serif con el tema predeterminado de revelab, como en su ejemplo de componentes: fondo blanco, tipografía original y colores nativos. El CSS local ajusta únicamente la distribución y el tamaño del contenido.

## Actualizar revelab

```bash
npm update revelab
npm run build
```

Para una futura versión menor que no entre en el rango del package.json, instalarla explícitamente, por ejemplo npm install revelab@latest. Los componentes reutilizables se pueden desarrollar y publicar en revelap; este proyecto los consume desde npm. El archivo .npmrc fija el registro público y package-lock.json conserva las versiones instaladas.

## Antes del evento

Volver a comprobar las vacantes y actualizar su fecha de consulta en src/sources.js. Los enlaces visibles se actualizan desde esos datos. Las fechas de consulta y las referencias internas al PDF base se conservan como comentarios HTML y no se proyectan. Las ofertas son una muestra consultada el 13 y 14 de octubre de 2026, sin estimaciones del mercado ni garantía de elegibilidad geográfica. Los enlaces conservan los anuncios originales; los perfiles de las diapositivas se presentan sin nombres de empresas ni países.
