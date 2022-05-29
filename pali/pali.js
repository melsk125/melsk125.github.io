import { PaliString } from './palilib.js';

function parseThai() {
  let paliText = document.getElementById('pali').value;
  let thaiPhrases = [];
  let phrases = paliText.split(' ');
  let errorText = '';
  for (const p of phrases) {
    if (!p) {
      continue;
    }
    let parsed = new PaliString(p);
    if (parsed.isValid) {
      const thaiPhrase = parsed.toThai();
      if (!thaiPhrase) {
        errorText = 'Error transcribing: ' + p;
        break;
      }
      thaiPhrases.push(thaiPhrase);
    } else {
      errorText = 'Error parsing: ' + p;
      break;
    }
  }
  if (errorText) {
    document.getElementById('thai').innerText = errorText;
  } else {
    document.getElementById('thai').innerText = 'Thai: ' + thaiPhrases.join(' ');
  }
}

function parseDevanagari() {
  let paliText = document.getElementById('pali').value;
  let devanagariPhrases = [];
  let phrases = paliText.split(' ');
  let errorText = '';
  for (const p of phrases) {
    if (!p) {
      continue;
    }
    let parsed = new PaliString(p);
    if (parsed.isValid) {
      const devanagariPhrase = parsed.toDevanagari();
      if (!devanagariPhrase) {
        errorText = 'Error transcribing: ' + p;
        break;
      }
      devanagariPhrases.push(devanagariPhrase);
    } else {
      errorText = 'Error parsing: ' + p;
      break;
    }
  }
  if (errorText) {
    document.getElementById('devanagari').innerText = errorText;
  } else {
    document.getElementById('devanagari').innerText =
        'Devanagari: ' + devanagariPhrases.join(' ');
  }
}

function parseBurmese() {
  let paliText = document.getElementById('pali').value;
  let burmesePhrases = [];
  let phrases = paliText.split(' ');
  let errorText = '';
  for (const p of phrases) {
    if (!p) {
      continue;
    }
    let parsed = new PaliString(p);
    if (parsed.isValid) {
      const burmesePhrase = parsed.toBurmese();
      if (!burmesePhrase) {
        errorText = 'Error transcribing: ' + p;
        break;
      }
      burmesePhrases.push(burmesePhrase);
    } else {
      errorText = 'Error parsing: ' + p;
      break;
    }
  }
  if (errorText) {
    document.getElementById('burmese').innerText = errorText;
  } else {
    document.getElementById('burmese').innerText =
        'Burmese: ' + burmesePhrases.join(' ');
  }
}

function splitAndParse() {
  parseThai();
  parseDevanagari();
  parseBurmese();
}

document.getElementById('transliterate').onclick = splitAndParse;
