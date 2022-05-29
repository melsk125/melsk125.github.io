const VOWELS = ['a', 'ā', 'i', 'ī', 'u', 'ū', 'e', 'o'];
const CONSONANTS = [
  'k', 'kh', 'g', 'gh', 'ṅ',
  'c', 'ch', 'j', 'jh', 'ñ',
  'ṭ', 'ṭh', 'ḍ', 'ḍh', 'ṇ',
  't', 'th', 'd', 'dh', 'n',
  'p', 'ph', 'b', 'bh', 'm',
  'y', 'r', 'l', 'ḷ', 'v',
  's', 'h'
];
const NIGAHITA = ['ṃ'];
const ALLOWED_CHARS = [
  'a', 'ā', 'i', 'ī', 'u', 'ū', 'e', 'o',
  'k', 'g', 'ṅ',
  'c', 'j', 'ñ',
  'ṭ', 'ḍ', 'ṇ',
  't', 'd', 'n',
  'p', 'b', 'm',
  'y', 'r', 'l', 'ḷ', 'v', 's', 'h', 'ṃ'
];

const TO_THAI = new Map([
  ['k', 'ก'], ['kh', 'ข'], ['g', 'ค'], ['gh', 'ฆ'], ['ṅ', 'ง'],
  ['c', 'จ'], ['ch', 'ฉ'], ['j', 'ช'], ['jh', 'ฌ'], ['ñ', 'ญ'],
  ['ṭ', 'ฏ'], ['ṭh', 'ฐ'], ['ḍ', 'ฑ'], ['ḍh', 'ฒ'], ['ṇ', 'ณ'],
  ['t', 'ต'], ['th', 'ถ'], ['d', 'ท'], ['dh', 'ธ'], ['n', 'น'],
  ['p', 'ป'], ['ph', 'ผ'], ['b', 'พ'], ['bh', 'ภ'], ['m', 'ม'],
  ['y', 'ย'], ['r', 'ร'], ['l', 'ล'], ['ḷ', 'ฬ'], ['v', 'ว'],
  ['s', 'ส'], ['h', 'ห'],
  ['a', ''], ['ā', 'า'], ['i', 'ิ'], ['ī', 'ี'], ['u', 'ุ'], ['ū', 'ู'],
  ['e', 'เ'], ['o', 'โ']
]);
const THAI_FRONT_VOWELS = [
  'e', 'o'
];
const THAI_NULL_CONSONANT = 'อ';
const THAI_PINTHU = 'ฺ';
const THAI_NIGAHITA = 'ํ';

const CONSONANT_TO_DEVANAGARI = new Map([
  ['k', 'क'], ['kh', 'ख'], ['g', 'ग'], ['gh', 'घ'], ['ṅ', 'ङ'],
  ['c', 'च'], ['ch', 'छ'], ['j', 'ज'], ['jh', 'झ'], ['ñ', 'ञ'],
  ['ṭ', 'ट'], ['ṭh', 'ठ'], ['ḍ', 'ड'], ['ḍh', 'ढ'], ['ṇ', 'ण'],
  ['t', 'त'], ['th', 'थ'], ['d', 'द'], ['dh', 'ध'], ['n', 'न'],
  ['p', 'प'], ['ph', 'फ'], ['b', 'ब'], ['bh', 'भ'], ['m', 'म'],
  ['y', 'य'], ['r', 'र'], ['l', 'ल'], ['ḷ', 'ळ'], ['v', 'व'],
  ['s', 'स'], ['h', 'ह']
]);

const COMBINED_VOWEL_DEVANAGARI = new Map([
  ['a', ''], ['ā', 'ा'], ['i', 'ि'], ['ī', 'ी'], ['u', 'ु'], ['ū', 'ू'],
  ['e', 'े'], ['o', 'ो']
]);

const LONE_VOWEL_DEVANAGARI = new Map([
  ['a', 'अ'], ['ā', 'आ'], ['i', 'इ'], ['ī', 'ई'], ['u', 'उ'], ['ū', 'ऊ'],
  ['e', 'ए'], ['o', 'ओ']
]);
const DEVANAGARI_VIRAMA = '्';
const DEVANAGARI_ANUSVARA = 'ं';

class PaliSyllable {
  constructor(consonantOne, consonantTwo, vowel, isNigahita) {
    this.consonantOne_ = consonantOne;
    this.consonantTwo_ = consonantTwo;
    this.vowel_ = vowel;
    this.isNigahita_ = isNigahita;
    // TODO: Validate
    this.isValid_ = true;
  }

  isValid() {
    return this.isValid_;
  }

  toString() {
    return 'PaliSyllable[' +
    [
      this.consonantOne_,
      this.consonantTwo_,
      this.vowel_,
      (self.nig ? '' : 'not ') + 'nigahita'
    ].join(',') + ']';
  }

  toThai() {
    let thai = '';
    let vowel = TO_THAI.get(this.vowel_);
    if (vowel === undefined) {
      console.error('TransliterationError: invalid vowel: ', this.vowel_);
      return '';
    }
    let isFront = THAI_FRONT_VOWELS.includes(this.vowel_);
    if (isFront && !this.consonantTwo_) {
      thai += vowel;
    }
    if (!this.consonantOne_) {
      thai += THAI_NULL_CONSONANT;
      if (thai.consonantTwo_) {
        console.error('TransliterationError: no consonantOne but has ' +
        'consonantTwo');
        return '';
      }
    } else {
      let consonantOne = TO_THAI.get(this.consonantOne_);
      if (!consonantOne) {
        console.error('TransliterationError: invalid consonantOne: ',
        this.consonantOne_);
        return '';
      }
      thai += consonantOne;
    }
    if (this.consonantTwo_) {
      thai += THAI_PINTHU;
      if (isFront) {
        thai += vowel;
      }
      let consonantTwo = TO_THAI.get(this.consonantTwo_);
      if (!consonantTwo) {
        console.error('TransliterationError: invalid consonantTwo: ',
        this.consonantTwo_);
        return '';
      }
      thai += consonantTwo;
    }
    if (!isFront) {
      thai += vowel;
    }
    if (this.isNigahita_) {
      thai += THAI_NIGAHITA;
    }
    return thai;
  }

  toDevanagari() {
    let devanagari = '';
    if (!this.consonantOne_) {
      if (this.consonantTwo_) {
        console.error('TransliterationError: no consonantOne but has ' +
        'consonantTwo');
        return '';
      }
      const vowel = LONE_VOWEL_DEVANAGARI.get(this.vowel_);
      if (!vowel) {
        console.error('TransliterationError: invalid vowel: ', this.vowel_);
        return '';
      }
      devanagari += vowel;
    } else {
      let consonantOne = CONSONANT_TO_DEVANAGARI.get(this.consonantOne_);
      if (!consonantOne) {
        console.error('TransliterationError: invalid consonantOne: ',
        this.consonantOne_);
        return '';
      }
      devanagari += consonantOne;
      if (this.consonantTwo_) {
        devanagari += DEVANAGARI_VIRAMA;
        let consonantTwo = CONSONANT_TO_DEVANAGARI.get(this.consonantTwo_);
        if (!consonantTwo) {
          console.error('TransliterationError: invalid consonantTwo: ',
          this.consonantTwo_);
          return '';
        }
        devanagari += consonantTwo;
      }
      const vowel = COMBINED_VOWEL_DEVANAGARI.get(this.vowel_);
      if (vowel === undefined) {
        console.error('TransliterationError: invalid vowel: ', this.vowel_);
        return '';
      }
      devanagari += vowel;
    }
    if (this.isNigahita_) {
      devanagari += DEVANAGARI_ANUSVARA;
    }
    return devanagari;
  }
}

export class PaliString {
  text = '';
  syllables = [];
  isValid = true;

  constructor(text) {
    this.text = text.toLowerCase();
    if (!this.Parse()) {
      this.isValid = false;
      this.text = '';
      this.syllables = [];
    }
  }

  ContainsOnlyAllowedChars() {
    return Array.from(this.text).every(c => ALLOWED_CHARS.includes(c));
  }

  Dump() {
    console.error('Dump string:', this.text);
    console.error('Dump syllables:', this.syllables);
  }

  Parse() {
    if (!this.ContainsOnlyAllowedChars()) {
      console.error('ParseError: Has unallowed character');
      this.Dump();
      return false;
    }

    let curr = 0;
    let consonantOne = '';
    let consonantTwo = '';
    while (curr < this.text.length) {
      let curr_c = this.text.charAt(curr);
      let next_c = (curr + 1 < this.text.length) ? this.text.charAt(curr + 1) : '';
      if (VOWELS.includes(curr_c)) {
        let nig = next_c && NIGAHITA.includes(next_c);
        let syl = new PaliSyllable(consonantOne, consonantTwo, curr_c, nig);
        if (!syl.isValid()) {
          this.Dump();
          return false;
        }
        this.syllables.push(syl);
        consonantOne = '';
        consonantTwo = '';
        curr += (nig ? 2 : 1);
        continue;
      }

      if (consonantTwo) {
        console.error('ParseError: Already have', consonantOne, consonantTwo,
        'reading', curr_c, 'at', curr);
        this.Dump();
        return false;
      }

      if (next_c && CONSONANTS.includes(curr_c + next_c)) {
        if (consonantOne) {
          consonantTwo = curr_c + next_c;
        } else {
          consonantOne = curr_c + next_c;
        }
        curr += 2;
        continue;
      } else if (CONSONANTS.includes(curr_c)) {
        if (consonantOne) {
          consonantTwo = curr_c;
        } else {
          consonantOne = curr_c;
        }
        curr += 1;
        continue;
      }

      console.error('ParseError:', curr_c, 'not a consonant');
      this.Dump();
      return false;
    }

    if (consonantOne || consonantTwo) {
      console.error('ParseError: end in consonant', consonantOne, consonantTwo);
      this.Dump();
      return false;
    }

    return true;
  }

  toThai() {
    if (!this.isValid) {
      console.error('TransliterationError: invalid text');
      return '';
    }
    let thai = '';
    this.syllables.forEach(syl => thai += syl.toThai());
    return thai;
  }

  toDevanagari() {
    if (!this.isValid) {
      console.error('TransliterationError: invalid text');
      return '';
    }
    let devanagari = '';
    this.syllables.forEach(syl => devanagari += syl.toDevanagari());
    return devanagari;
  }
}
