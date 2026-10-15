export function lanzarCinco(semilla) {
  let estado = semilla;
  return Array.from({ length: 5 }, () => {
    estado = (1664525 * estado + 1013904223)
      % 2 ** 32;
    return estado / 2 ** 32 < 0.5
      ? 'Cara' : 'Sello';
  });
}
