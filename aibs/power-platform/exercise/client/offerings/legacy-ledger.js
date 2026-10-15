'use strict';

const storageKey = 'zava-pp-2-legacy-ledger';
const result = document.querySelector('#result');
let records;
try {
  records = JSON.parse(localStorage.getItem(storageKey) || '[]');
  if (!Array.isArray(records) || records.some(row =>
    !row || typeof row.jobId !== 'string' || typeof row.customer !== 'string'
    || !Number.isInteger(row.quantity) || row.quantity < 1)) {
    throw new Error('Stored ledger has an invalid structure.');
  }
} catch (error) {
  records = undefined;
  result.textContent = `Ledger unavailable: ${error.message} Preserve storage and ask the facilitator.`;
  document.querySelectorAll('button').forEach(button => { button.disabled = true; });
}

function render() {
  document.querySelector('#rows').replaceChildren(...records.map(record => {
    const row = document.createElement('tr');
    for (const value of [record.jobId, record.customer, record.quantity]) {
      const cell = document.createElement('td');
      cell.textContent = String(value);
      row.append(cell);
    }
    return row;
  }));
}

function persist(next, message) {
  try {
    localStorage.setItem(storageKey, JSON.stringify(next));
    records = next;
    render();
    result.textContent = message;
  } catch (error) {
    result.textContent = `Save failed: ${error.message} No completion is recorded.`;
  }
}

document.querySelector('#find').addEventListener('click', () => {
  const id = document.querySelector('#search').value.trim();
  const record = records.find(row => row.jobId === id);
  result.textContent = record
    ? `Found ${record.jobId}: ${record.customer}, quantity ${record.quantity}.`
    : `Not found: ${id || '(empty ID)'}.`;
});
document.querySelector('#entry').addEventListener('submit', event => {
  event.preventDefault();
  const jobId = document.querySelector('#job').value.trim();
  const customer = document.querySelector('#customer').value.trim();
  const quantity = Number(document.querySelector('#quantity').value);
  if (!/^JOB-\d{2}$/.test(jobId) || !customer || !Number.isInteger(quantity) || quantity < 1) {
    result.textContent = 'Invalid input: job ID, customer and positive integer quantity are required.';
    return;
  }
  if (records.some(row => row.jobId === jobId)) {
    result.textContent = `Duplicate blocked: ${jobId}. Reconcile the existing record.`;
    return;
  }
  persist([...records, { jobId, customer, quantity }], `Saved ${jobId}.`);
});
document.querySelector('#remove').addEventListener('click', () => {
  const id = document.querySelector('#remove-id').value.trim();
  if (!records.some(row => row.jobId === id)) {
    result.textContent = `Nothing removed: ${id || '(empty ID)'} was not found.`;
    return;
  }
  persist(records.filter(row => row.jobId !== id), `Removed exact test row ${id}.`);
});
if (records) render();
