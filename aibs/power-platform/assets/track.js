'use strict';

const search = document.querySelector('#exercise-search');
const mode = document.querySelector('#exercise-mode');
const cards = Array.from(document.querySelectorAll('[data-exercise]'));
if (search && mode) {
  const filter = () => {
    const query = search.value.trim().toLowerCase();
    let visible = 0;
    for (const card of cards) {
      card.hidden = !card.textContent.toLowerCase().includes(query)
        || (mode.value !== 'all' && !card.dataset.mode.split(' ').includes(mode.value));
      if (!card.hidden) visible++;
    }
    document.querySelector('#exercise-count').textContent = `${visible} of ${cards.length} exercises`;
    document.querySelector('#no-results').hidden = visible !== 0;
  };
  search.addEventListener('input', filter);
  mode.addEventListener('change', filter);
  filter();
}

for (const block of document.querySelectorAll('.prose pre')) {
  const standalone = block.textContent.startsWith('[BEGIN STANDALONE CONTEXT]');
  if (standalone) {
    const details = document.createElement('details');
    const summary = document.createElement('summary');
    summary.textContent = 'Read complete prompt: task and included source context';
    block.before(details);
    details.append(summary, block);
  }
  const row = document.createElement('div');
  row.className = 'copy-row';
  const button = document.createElement('button');
  button.className = 'btn';
  button.type = 'button';
  button.textContent = standalone ? 'Copy standalone prompt' : 'Copy prompt / code';
  const status = document.createElement('span');
  status.className = 'copy-status';
  status.setAttribute('role', 'status');
  button.addEventListener('click', async () => {
    try {
      if (!navigator.clipboard) throw new Error('Clipboard requires a supported secure browser context.');
      await navigator.clipboard.writeText(block.textContent);
      status.textContent = standalone
        ? 'Copied task and complete source context. Review before running.'
        : 'Copied. Review the prompt before running it.';
    } catch (error) {
      status.textContent = `Copy unavailable: ${error.message} Select the text and copy it manually.`;
    }
  });
  row.append(button, status);
  (standalone ? block.parentElement : block).after(row);
}

const slides = Array.from(document.querySelectorAll('.slide'));
if (slides.length) {
  const previous = document.querySelector('#previous');
  const next = document.querySelector('#next');
  const picker = document.querySelector('#slide-picker');
  const overview = document.querySelector('#overview');
  let index = 0;
  let showAll = false;
  slides.forEach((slide, position) => {
    const option = document.createElement('option');
    option.value = String(position);
    option.textContent = `${position + 1}. ${slide.dataset.title}`;
    picker.append(option);
  });
  const render = () => {
    slides.forEach((slide, position) => { slide.hidden = !showAll && position !== index; });
    document.querySelector('#slide-status').textContent = `${index + 1} / ${slides.length}`;
    document.querySelector('#progress-fill').style.width = `${(index + 1) / slides.length * 100}%`;
    previous.disabled = index === 0;
    next.disabled = index === slides.length - 1;
    picker.value = String(index);
    overview.setAttribute('aria-pressed', String(showAll));
    overview.textContent = showAll ? 'Single slide' : 'Show all slides';
    document.body.classList.toggle('all-slides', showAll);
  };
  const go = (position) => {
    index = Math.max(0, Math.min(slides.length - 1, position));
    history.replaceState(null, '', `#${slides[index].id}`);
    render();
    if (showAll) slides[index].scrollIntoView();
  };
  const fromHash = () => {
    const position = slides.findIndex(slide => `#${slide.id}` === location.hash);
    index = position < 0 ? 0 : position;
    render();
  };
  previous.addEventListener('click', () => go(index - 1));
  next.addEventListener('click', () => go(index + 1));
  picker.addEventListener('change', () => go(Number(picker.value)));
  overview.addEventListener('click', () => { showAll = !showAll; render(); });
  document.querySelector('#print-deck').addEventListener('click', () => window.print());
  document.addEventListener('keydown', event => {
    if (event.target.closest('input, select, textarea, button, a, [contenteditable]') || event.ctrlKey || event.altKey || event.metaKey) return;
    const destinations = { ArrowRight: index + 1, PageDown: index + 1, ArrowLeft: index - 1, PageUp: index - 1, Home: 0, End: slides.length - 1 };
    if (Object.hasOwn(destinations, event.key)) {
      event.preventDefault();
      go(destinations[event.key]);
    }
  });
  window.addEventListener('hashchange', fromHash);
  fromHash();
}
