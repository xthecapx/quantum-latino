# Diagramas de proceso para Revelab

Los dos procesos usan HTML y CSS editables. La presentación continúa consumiendo `revelab` desde npm. Esta extensión local queda preparada para una futura incorporación al paquete; no se ha publicado ni modificado el repositorio hermano.

## Archivos

- `src/components/process-diagram.css`: estilos aislados y conectores CSS.
- `src/components/process-diagram.js`: funciones que generan el HTML de los dos procesos.
- `src/slides.js`: contenido y ubicación de las diapositivas.

## Uso

```js
import 'revelab/dist/revelab.css';
import './components/process-diagram.css';
import { fullstackProcess, quantumProcess } from './components/process-diagram.js';

const classicHTML = fullstackProcess();
const quantumHTML = quantumProcess();
```

El HTML se puede editar directamente o extraer de las funciones. No se necesitan SVG, canvas, imágenes, mediciones del DOM ni dependencias adicionales.

## Primitivas

| Clase | Función |
|---|---|
| `.process-diagram` | Contenedor y variables del componente |
| `.pd-node.df-box` | Etapa del proceso, basada en la caja nativa de Revelab |
| `.pd-group` | Agrupación de fases |
| `.pd-connector` | Conector horizontal con punta de flecha CSS |
| `.pd-connector--down` | Dirección vertical |
| `.pd-connector--left` | Dirección hacia la izquierda |
| `.pd-connector--both` | Conexión bidireccional |
| `.pd-connector--dashed` | Conexión transversal discontinua |
| `.pd-fullstack` | Concepción inicial y ciclo por sprint |
| `.pd-quantum` | Teoría, simulación, ejecución, despliegue y análisis transversal |

Los fondos utilizan las utilidades originales `.bg-input`, `.bg-cool` y `.bg-purple`. Los colores, bordes y radios dependen de las variables `--rlab-*` del paquete, sin imponer una paleta nueva.

## Ajustes

```css
.process-diagram {
  --pd-line-color: var(--rlab-color-muted);
  --pd-line-width: 2px;
  --pd-node-padding: 14px;
  --pd-node-font-size: 24px;
  --pd-detail-font-size: 21px;
  --pd-label-font-size: 24px;
}
```

## Relación con el material base

- Proceso fullstack: `base.pdf`, página 22. Se mantienen las dos etapas de concepción y las cinco etapas del ciclo, incluido el retorno al siguiente sprint.
- Proceso cuántico: `base.pdf`, página 38. Se conserva la teoría central con conexiones bidireccionales a simulación, ejecución y despliegue, y el análisis de resultados transversal.

Las etiquetas tienen una alternativa textual completa en `aria-label`. Las flechas decorativas quedan fuera del árbol accesible.

## Incorporación futura al paquete

El CSS puede incorporarse como un nuevo componente de Revelab, incluirse en su agregador de estilos y documentarse con ejemplos equivalentes. Las funciones de JavaScript son auxiliares de esta charla; el componente funciona con HTML estático. La publicación y la actualización de la dependencia quedan para el trabajo futuro que decida el autor.
