# Imagen del sistema híbrido

Archivo actual: public/assets/casa-computo-hibrido.png

Método: herramienta integrada image_gen, edición de la ilustración anterior como referencia de estilo. Ilustración conceptual, no fotografía documental.

La casa contiene los equipos. CPU ejecuta la aplicación inicial y la lógica de routing hacia GPU, el clúster HPC o QPU según el problema. Las conexiones muestran instrucciones y retorno de resultados.

Versión anterior conservada: public/assets/cluster-hibrido.png

## Referencia conceptual añadida

La diapositiva 7 relaciona la integración CPU/GPU/HPC/QPU con quantum-centric supercomputing de IBM. Se enlazan el artículo de noviembre de 2024 y la arquitectura de referencia de marzo de 2026, documentados en FUENTES.md. La ilustración de la casa conserva su autoría como material generado para esta charla; no es una imagen oficial de IBM. La diapositiva se titula Datacenters del futuro y la casa se identifica como esquema conceptual. A continuación se incluye el diagrama proporcionado por el ponente: public/assets/ibm-hpc-slurm-qiskit.png, correspondiente a hpc6 del artículo de noviembre de 2024. La imagen original se conserva sin recorte ni traducción. Ambas diapositivas enlazan el roadmap oficial https://www.ibm.com/roadmaps/quantum/. HPC puede contener CPU/GPU y la QPU puede ser local o remota; la disposición de la casa es una simplificación explicativa.

## Prompt final

```text
Use case: precise-object-edit
Asset type: revised wide 16:9 Spanish presentation illustration.
Input image: the existing hybrid-system diagram is a reference for colors and technical visual style ONLY. Completely replace its layout and topology as described below.
Primary request: show ONE HOUSE containing ALL the computing equipment, with clearly visible connections. The CPU runs the initial application and its routing logic, then directs each workload to GPU, an HPC cluster, or QPU depending on the problem. The CPU is the starting point and coordinating hub, not an equal downstream target.
Scene: clean isometric cutaway house with a recognizable pitched roof outline, side walls and an open front so every interior rack is clearly visible. The house is a visual metaphor for a computing facility. White background. No furniture, no people, no domestic objects. Equipment all sits INSIDE the same house.
Composition: broad horizontal scene, large legible text, uncluttered. At left outside the house one compact input label "Problema + datos" connects into a prominent CPU server rack INSIDE the house on the left. This rack is labeled "CPU", with the nearby text "Aplicación + routing". From this CPU rack, THREE distinct colored cables with arrowheads branch visibly to THREE spatially separate computing destinations in the rest of the house: a GPU server rack labeled "GPU"; a small group of interconnected server racks labeled "HPC / clúster"; and a quantum control system with an illustrative gold quantum apparatus and adjacent control rack labeled "QPU". Make all three branch paths easy to follow from CPU to their destinations, with no hidden endpoints, no crossings through text or devices. These are alternative or complementary destinations, NOT a sequential GPU-HPC-QPU chain. Each connection also has a subtle return direction for results back to CPU. A central small routing caption says "Según el problema". A clean output connection from the CPU returns outside the house to one label "Resultados".
Text verbatim only: "Problema + datos", "CPU", "Aplicación + routing", "Según el problema", "GPU", "HPC / clúster", "QPU", "Resultados". Large crisp Spanish typography, no paragraph text and no headline.
Scientific accuracy: show HPC as a GROUP OF SERVER RACKS, never as a processor chip. GPU is a rack with accelerator servers. QPU is an illustrative physical quantum system with control hardware, not a GPU card. This is a conceptual architecture and not a photograph of a real facility. CPU software orchestrates the APIs and routing. Connections carry classical instructions, parameters and measurement results.
Style invariants from reference: white background, dark navy labels, restrained indigo, teal and amber connection colors, polished realistic simplified 3D technical equipment. House lightly outlined so it does not overwhelm the hardware. Do not reuse the reference's top horizontal API banner or its HPC bracket. The new HOUSE must be unmistakable and CPU hub routing to all three destinations must be unambiguous. No logos or watermarks.
```
