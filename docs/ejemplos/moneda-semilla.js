// Generador didáctico con estado de 32 bits y semilla entera entre 0 y 2**32 - 1.
// No reproduce la implementación interna de Math.random().
function lanzarCinco(semilla) {
  let estado = semilla;

  return Array.from({ length: 5 }, () => {
    estado = (1664525 * estado + 1013904223) % 2 ** 32;
    return estado / 2 ** 32 < 0.5 ? 'Cara' : 'Sello';
  });
}

// Cada llamada reinicia el generador: cinco ejecuciones, la misma secuencia.
for (let ejecucion = 1; ejecucion <= 5; ejecucion++) {
  console.log(`Ejecución ${ejecucion}, semilla 42:`, lanzarCinco(42));
}

console.log('Otra semilla, 7:', lanzarCinco(7));
