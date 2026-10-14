import Reveal from 'reveal.js';
import RevealNotes from 'reveal.js/plugin/notes';
import 'reveal.js/reset.css';
import 'reveal.js/reveal.css';
import 'reveal.js/theme/serif.css';
import 'revelab/dist/revelab.css';
import './styles.css';
import './components/process-diagram.css';
import { slides } from './slides.js';
import { sourceLinks, sourceReviewLabel, sources } from './sources.js';

function renderReferences(slide) {
  if (!slide.sources.length || slide.kind?.includes('title-slide')) return '';
  const links = sourceLinks(slide.sources);
  const internal = slide.sources.filter(id => !sources[id].url)
    .map(id => `<!-- Referencia interna: ${sources[id].label} -->`).join('\n');
  return `${links ? `<footer class="sources">${links}</footer>` : ''}
    ${internal}
    <!-- Consulta: ${sourceReviewLabel(slide.sources)} -->`;
}

document.querySelector('#slides').innerHTML = slides.map(slide => `
  <section id="${slide.id}" class="${slide.kind || ''}" data-timing="${slide.seconds}">
    ${slide.kind?.includes('title-slide') ? '' : `<h2>${slide.title}</h2>`}
    <div class="slide-content">${slide.html}</div>
    ${renderReferences(slide)}
    <aside class="notes"><p>${slide.notes}</p>${slide.sources.filter(id => sources[id].url).map(id => `<p>Fuente: <a href="${sources[id].url}">${sources[id].label}</a>. ${sources[id].detail}</p>`).join('')}</aside>
  </section>
`).join('');

const contentSlides = slides.filter(slide => !slide.kind?.includes('title-slide'));
const deck = new Reveal({
  width:1280, height:720, margin:0.025, hash:true, history:true,
  center:false, transition:'fade', backgroundTransition:'none',
  controls:true, controlsTutorial:false, progress:true,
  slideNumber: slide => {
    const index = contentSlides.findIndex(item => item.id === slide?.id);
    return [index < 0 ? '' : `${index + 1} / ${contentSlides.length}`];
  },
  showSlideNumber:'all', totalTime:slides.reduce((total, slide) => total + slide.seconds, 0),
  defaultTiming:120, pdfSeparateFragments:false, pdfMaxPagesPerSlide:1,
  plugins:[RevealNotes]
});
await deck.initialize();
window.deck = deck;
