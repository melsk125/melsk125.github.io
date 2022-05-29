import { PaliString, SCRIPT_THAI, SCRIPT_DEVANAGARI, SCRIPT_BURMESE } from './palilib.js';

function transliterate(text, script, el) {
  const outPhrases = [];
  const phrases = text.split(' ');
  const errorText = '';
  for (const p of phrases) {
    if (!p) {
      continue;
    }
    let parsed = new PaliString(p);
    if (!parsed.isValid) {
      errorText = 'Error parsing: ' + p;
      break;
    }
    const outPhrase = parsed.to(script);
    if (!outPhrase) {
      errorText = 'Error transcribing: ' + p;
      break;
    }
    outPhrases.push(outPhrase);
  }
  if (errorText) {
    el.innerText = errorText;
  } else {
    el.innerText = script + ': ' + outPhrases.join(' ');
  }
}

function splitAndParse() {
  const text = document.getElementById('pali').value;
  transliterate(text, SCRIPT_THAI, document.getElementById('thai'));
  transliterate(text, SCRIPT_DEVANAGARI, document.getElementById('devanagari'));
  transliterate(text, SCRIPT_BURMESE, document.getElementById('burmese'));
}

document.getElementById('transliterate').onclick = splitAndParse;
