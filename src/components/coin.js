import { lanzarCinco } from './seeded-coin.js';

export { lanzarCinco };

// Generador congruencial didáctico. La semilla se conserva entre lanzamientos.
// No representa el algoritmo interno de Math.random().
export function crearGenerador(semilla) {
  if (!Number.isInteger(semilla) || semilla < 0 || semilla >= 2 ** 32) {
    throw new RangeError('La semilla debe ser un entero entre 0 y 4294967295.');
  }
  let estado = semilla;
  return () => {
    estado = (1664525 * estado + 1013904223) % 2 ** 32;
    return estado / 2 ** 32;
  };
}

export function coinMarkup(value = 'Cara', extraClass = '') {
  return `<span class="coin ${value === 'Cara' ? 'coin-heads' : 'coin-tails'} ${extraClass}" aria-label="${value}"><span>${value === 'Cara' ? 'C' : 'S'}</span></span>`;
}

const RESPONSE_DELAY_MS = 2600;
const flyingCoin = () => `<span class="coin-flight" aria-hidden="true"><span class="coin-rotor">${coinMarkup('Cara', 'coin-face-front')}${coinMarkup('Sello', 'coin-face-back')}</span></span>`;

function resultRow(label, seed, values) {
  const row = document.createElement('div');
  row.className = 'seed-row';
  const title = document.createElement('span');
  title.className = 'seed-row-label';
  title.textContent = label;
  const sequence = document.createElement('div');
  sequence.className = 'coin-sequence';
  sequence.setAttribute('aria-label', values.join(', '));
  sequence.innerHTML = values.map(value => coinMarkup(value, 'coin-small')).join('');
  row.append(title, sequence);
  row.dataset.seedValue = seed;
  return row;
}

export function initCoinDemos(root, deck) {
  // Una moneda clásica con estado persistente, independiente de la demo de reinicio.
  root.querySelectorAll('[data-coin-app]').forEach(app => {
    const next = crearGenerador(42);
    const button = app.querySelector('[data-toss]');
    const result = app.querySelector('[data-coin-result]');
    const caption = app.querySelector('[data-coin-caption]');
    const motionToggle = app.querySelector('[data-motion-toggle]');
    motionToggle.addEventListener('change', () => {
      app.dataset.motion = motionToggle.checked ? 'on' : 'off';
    });
    motionToggle.addEventListener('keydown', event => event.stopPropagation());
    let pending;
    function ready() {
      app.classList.remove('is-tossing');
      result.setAttribute('aria-busy', 'false');
      app.dataset.state = 'ready';
      button.disabled = false;
      button.textContent = 'Lanzar moneda';
    }
    button.addEventListener('click', () => {
      if (pending) return;
      app.classList.add('is-tossing');
      result.setAttribute('aria-busy', 'true');
      app.dataset.state = 'pending';
      button.disabled = true;
      button.textContent = 'Moneda en el aire…';
      caption.textContent = 'Esperando el resultado…';
      result.innerHTML = flyingCoin();
      // Espera didáctica local: representa una petición al backend, sin red real.
      pending = setTimeout(() => {
        pending = undefined;
        const value = next() < 0.5 ? 'Cara' : 'Sello';
        ready();
        app.dataset.state = 'complete';
        result.innerHTML = coinMarkup(value, 'coin-landed');
        caption.textContent = `Resultado: ${value}`;
      }, RESPONSE_DELAY_MS);
    });
    button.addEventListener('keydown', event => {
      if (event.key === ' ' || event.key === 'Enter') event.stopPropagation();
    });
    deck.on('slidechanged', event => {
      if (!pending || event.currentSlide.contains(app)) return;
      clearTimeout(pending);
      pending = undefined;
      ready();
      result.innerHTML = coinMarkup('Cara');
      caption.textContent = 'Pulsa el botón para lanzar';
    });
  });

  const demo = root.querySelector('[data-seed-demo]');
  if (!demo) return;
  const seedInput = demo.querySelector('[data-seed]');
  const output = demo.querySelector('[data-seed-output]');
  const feedback = demo.querySelector('[data-seed-feedback]');
  let runs = 0;
  function reset() {
    output.replaceChildren();
    runs = 0;
    feedback.textContent = 'Cada ejecución reinicia el generador con esta semilla.';
  }
  demo.querySelector('[data-seed-clear]').addEventListener('click', reset);
  seedInput.addEventListener('change', reset);
  demo.querySelector('[data-seed-run]').addEventListener('click', () => {
    const seed = Number(seedInput.value);
    if (seedInput.value.trim() === '' || !Number.isInteger(seed) || seed < 0 || seed >= 2 ** 32) {
      feedback.textContent = 'Usa una semilla entera entre 0 y 4294967295.';
      return;
    }
    if (runs >= 5) reset();
    runs += 1;
    output.append(resultRow(`Ejecución ${runs}`, seed, lanzarCinco(seed)));
    feedback.textContent = runs === 5 ? 'Misma semilla. Mismo algoritmo. Misma secuencia.' : `Semilla ${seed}: ${runs} de 5 ejecuciones.`;
  });
  demo.querySelector('[data-seed-compare]').addEventListener('click', () => {
    reset();
    seedInput.value = '42';
    for (let n = 1; n <= 5; n++) output.append(resultRow(`Ejecución ${n}`, 42, lanzarCinco(42)));
    runs = 5;
    feedback.textContent = 'Misma semilla. Mismo algoritmo. Misma secuencia.';
  });

  // Las flechas dentro del campo cambian la semilla, sin navegar la presentación.
  seedInput.addEventListener('keydown', event => event.stopPropagation());
  deck.on('slidechanged', event => {
    if (event.currentSlide.contains(demo)) reset();
  });
}
