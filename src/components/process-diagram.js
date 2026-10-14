const node = (title, detail = '', classes = '') =>
  `<div class="df-box pd-node ${classes}"><strong>${title}</strong>${detail ? `<small>${detail}</small>` : ''}</div>`;

const connector = (classes = '') =>
  `<span class="pd-connector ${classes}" aria-hidden="true"></span>`;

export function fullstackProcess() {
  return `<div class="process-diagram pd-fullstack" role="img" aria-label="Fase inicial: análisis inicial y diseño de alto nivel. Después, ciclo iterativo de análisis de sprint, diseño detallado, implementación front y back, pruebas y QA, y despliegue continuo, con retorno al siguiente sprint.">
    <div class="pd-group pd-initial">
      <p class="pd-group-label">Fase inicial de concepción</p>
      <div class="pd-initial-flow">
        ${node('Análisis inicial', '', 'bg-input')}
        ${connector('pd-connector--down')}
        ${node('Diseño de alto nivel', '', 'bg-input')}
      </div>
    </div>
    ${connector('pd-phase-link')}
    <div class="pd-group pd-iteration">
      <p class="pd-group-label">Ciclo de desarrollo clásico</p>
      <div class="pd-cycle">
        ${node('Análisis de sprint', '', 'bg-cool pd-cycle-analysis')}
        ${connector('pd-cycle-a')}
        ${node('Diseño detallado', '', 'bg-cool pd-cycle-design')}
        ${connector('pd-cycle-b')}
        ${node('Implementación', 'Front y back', 'bg-cool pd-cycle-build')}
        ${connector('pd-connector--down pd-cycle-down')}
        ${node('Despliegue continuo', '', 'bg-cool pd-cycle-deploy')}
        ${connector('pd-connector--left pd-cycle-d')}
        ${node('Pruebas y QA', '', 'bg-cool pd-cycle-test')}
        ${connector('pd-connector--left pd-cycle-c')}
        <span class="pd-elbow pd-cycle-turn" aria-hidden="true"></span>
        <span class="pd-cycle-return" aria-hidden="true"></span>
      </div>
      <p class="pd-loop-label">Cada despliegue alimenta el siguiente sprint</p>
    </div>
  </div>`;
}

export function quantumProcess() {
  return `<div class="process-diagram pd-quantum" role="img" aria-label="El comportamiento teórico se conecta en ambas direcciones con simulación, ejecución en hardware real y despliegue. El análisis de resultados evalúa decoherencia y errores de forma transversal.">
    ${node('4. Despliegue', 'Ejecución y pruebas en QPU', 'bg-purple pd-q-deploy')}
    ${connector('pd-connector--down pd-connector--both pd-q-deploy-link')}
    ${node('2. Simulación', 'Modelado en simuladores clásicos', 'bg-input pd-q-simulate')}
    ${connector('pd-connector--both pd-q-simulate-link')}
    ${node('1. Comportamiento teórico', 'Definir módulos y lógica cuántica', 'bg-cool pd-q-theory')}
    ${connector('pd-connector--both pd-q-execute-link')}
    ${node('3. Ejecución', 'Calibrar y ejecutar en hardware real', 'bg-input pd-q-execute')}
    ${connector('pd-connector--down pd-connector--dashed pd-q-analysis-sim')}
    ${connector('pd-connector--down pd-connector--dashed pd-q-analysis-theory')}
    ${connector('pd-connector--down pd-connector--dashed pd-q-analysis-exec')}
    ${node('Análisis de resultados · transversal', 'Evaluar decoherencia y errores en todas las etapas', 'pd-q-analysis')}
  </div>`;
}
