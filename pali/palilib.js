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

const CONSONANT_TO_BURMESE = new Map([
  ['k', 'က'], ['kh', 'ခ'], ['g', 'ဂ'], ['gh', 'ဃ'], ['ṅ', 'င'],
  ['c', 'စ'], ['ch', 'ဆ'], ['j', 'ဇ'], ['jh', 'ဈ'], ['ñ', 'ည'],
  ['ṭ', 'ဋ'], ['ṭh', 'ဌ'], ['ḍ', 'ဍ'], ['ḍh', 'ဎ'], ['ṇ', 'ဏ'],
  ['t', 'တ'], ['th', 'ထ'], ['d', 'ဒ'], ['dh', 'ဓ'], ['n', 'န'],
  ['p', 'ပ'], ['ph', 'ဖ'], ['b', 'ဗ'], ['bh', 'ဘ'], ['m', 'မ'],
  ['y', 'ယ'], ['r', 'ရ'], ['l', 'လ'], ['ḷ', 'ဠ'], ['v', 'ဝ'],
  ['s', 'သ'], ['h', 'ဟ']
]);
const CONSONANTS_TALL_AA = ['ခ','ဂ','င','ဒ','ပ','ဝ'];
const TALL_AA = 'ါ';
const NEED_SPECIAL_NASALIZED_NG_COMBINER = ['က','ခ','ဂ','ဃ'];
const SPECIAL_NASALIZED_NG_COMBINER = '်';
const COMBINED_VOWEL_BURMESE = new Map([
  ['a', ''], ['ā', 'ာ'], ['i', 'ိ'], ['ī', 'ီ'], ['u', 'ု'], ['ū', 'ူ'],
  ['e', 'ေ'], ['o', 'ော']
]);
const NEED_COMBINED_V_SYMBOL = ['a', 'ā', 'e'];
const COMBINED_V_SYMBOL = 'ွ';
const LONE_VOWEL_BURMESE = new Map([
  ['a', 'အ'], ['ā', 'အာ'], ['i', 'ဣ'], ['ī', 'ဤ'], ['u', 'ဥ'], ['ū', 'ဦ'],
  ['e', 'ဧ'], ['o', 'ဩ']
]);
const BURMESE_CONSONANT_COMBINER = '္';  
const BURMESE_ANUSVARA = 'ံ';

const CONSONANT_TO_SINHALA = new Map([
  ['k', 'ක'], ['kh', 'ඛ'], ['g', 'ග'], ['gh', 'ඝ'], ['ṅ', 'ඞ'],
  ['c', 'ච'], ['ch', 'ඡ'], ['j', 'ජ'], ['jh', 'ඣ'], ['ñ', 'ඤ'],
  ['ṭ', 'ට'], ['ṭh', 'ඨ'], ['ḍ', 'ඩ'], ['ḍh', 'ඪ'], ['ṇ', 'ණ'],
  ['t', 'ත'], ['th', 'ථ'], ['d', 'ද'], ['dh', 'ධ'], ['n', 'න'],
  ['p', 'ප'], ['ph', 'ඵ'], ['b', 'බ'], ['bh', 'භ'], ['m', 'ම'],
  ['y', 'ය'], ['r', 'ර'], ['l', 'ල'], ['ḷ', 'ළ'], ['v', 'ව'],
  ['s', 'ස'], ['h', 'හ']
]);
const COMBINED_VOWEL_SINHALA = new Map([
  ['a', ''], ['ā', 'ැ'], ['i', 'ි'], ['ī', 'ී'], ['u', 'ු'], ['ū', 'ූ'],
  ['e', 'ෙ'], ['o', 'ො']
]);
const LONE_VOWEL_SINHALA = new Map([
  ['a', 'අ'], ['ā', 'ආ'], ['i', 'ඉ'], ['ī', 'ඊ'], ['u', 'උ'], ['ū', 'ඌ'],
  ['e', 'එ'], ['o', 'ඔ']
]);
const SINHALA_CONSONANT_COMBINER = '\u0dca\u200d';
const SINHALA_NIGAHITA = 'ං';

export const SCRIPT_THAI = 'THAI';
export const SCRIPT_BURMESE = 'BURMESE';
export const SCRIPT_DEVANAGARI = 'DEVANAGARI';
export const SCRIPT_SINHALA = 'SINHALA';

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
    let dest = '';
    let vowel = TO_THAI.get(this.vowel_);
    if (vowel === undefined) {
      console.error('TransliterationError: invalid vowel: ', this.vowel_);
      return '';
    }
    let isFront = THAI_FRONT_VOWELS.includes(this.vowel_);
    if (isFront && !this.consonantTwo_) {
      dest += vowel;
    }
    if (!this.consonantOne_) {
      dest += THAI_NULL_CONSONANT;
      if (this.consonantTwo_) {
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
      dest += consonantOne;
    }
    if (this.consonantTwo_) {
      dest += THAI_PINTHU;
      if (isFront) {
        dest += vowel;
      }
      let consonantTwo = TO_THAI.get(this.consonantTwo_);
      if (!consonantTwo) {
        console.error('TransliterationError: invalid consonantTwo: ',
        this.consonantTwo_);
        return '';
      }
      dest += consonantTwo;
    }
    if (!isFront) {
      dest += vowel;
    }
    if (this.isNigahita_) {
      dest += THAI_NIGAHITA;
    }
    return dest;
  }

  toDevanagari() {
    let dest = '';
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
      dest += vowel;
    } else {
      let consonantOne = CONSONANT_TO_DEVANAGARI.get(this.consonantOne_);
      if (!consonantOne) {
        console.error('TransliterationError: invalid consonantOne: ',
        this.consonantOne_);
        return '';
      }
      dest += consonantOne;
      if (this.consonantTwo_) {
        dest += DEVANAGARI_VIRAMA;
        let consonantTwo = CONSONANT_TO_DEVANAGARI.get(this.consonantTwo_);
        if (!consonantTwo) {
          console.error('TransliterationError: invalid consonantTwo: ',
          this.consonantTwo_);
          return '';
        }
        dest += consonantTwo;
      }
      const vowel = COMBINED_VOWEL_DEVANAGARI.get(this.vowel_);
      if (vowel === undefined) {
        console.error('TransliterationError: invalid vowel: ', this.vowel_);
        return '';
      }
      dest += vowel;
    }
    if (this.isNigahita_) {
      dest += DEVANAGARI_ANUSVARA;
    }
    return dest;
  }

  toBurmese() {
    let dest = '';
    if (!this.consonantOne_) {
      if (this.consonantTwo_) {
        console.error('TransliterationError: no consonantOne but has ' +
        'consonantTwo');
        return '';
      }
      const vowel = LONE_VOWEL_BURMESE.get(this.vowel_);
      if (!vowel) {
        console.error('TransliterationError: invalid vowel: ', this.vowel_);
        return '';
      }
      dest += vowel;
    } else {
      let consonantOne = CONSONANT_TO_BURMESE.get(this.consonantOne_);
      let mainConsonant = consonantOne;
      if (!consonantOne) {
        console.error('TransliterationError: invalid consonantOne: ',
        this.consonantOne_);
        return '';
      }
      dest += consonantOne;
      if (this.consonantTwo_) {
        let consonantTwo = CONSONANT_TO_BURMESE.get(this.consonantTwo_);
        if (!consonantTwo) {
          console.error('TransliterationError: invalid consonantTwo: ',
          this.consonantTwo_);
          return '';
        }
        mainConsonant = consonantTwo;
        // Special case for v
        let combinedV = false;
        if (this.consonantTwo_ == 'v' &&
            NEED_COMBINED_V_SYMBOL.includes(this.vowel_)) {
          consonantTwo = COMBINED_V_SYMBOL;
          mainConsonant = consonantOne;
          combinedV = true;
        }
        // Special case for nasalised ṅ.
        if (this.consonantOne_ == 'ṅ' &&
            NEED_SPECIAL_NASALIZED_NG_COMBINER.includes(consonantTwo)) {
          dest += SPECIAL_NASALIZED_NG_COMBINER;
        }
        dest += (combinedV ? '' : BURMESE_CONSONANT_COMBINER);
        dest += consonantTwo;
      }
      let vowel = COMBINED_VOWEL_BURMESE.get(this.vowel_);
      if (vowel === undefined) {
        console.error('TransliterationError: invalid vowel: ', this.vowel_);
        return '';
      }
      // Special case for tall ā
      if (this.vowel_ == 'ā' && CONSONANTS_TALL_AA.includes(mainConsonant)) {
        vowel = TALL_AA;
      }
      dest += vowel;
    }
    if (this.isNigahita_) {
      dest += BURMESE_ANUSVARA;
    }
    return dest;
  }

  toSinhala() {
    let dest = '';
    if (!this.consonantOne_) {
      if (this.consonantTwo_) {
        console.error('TransliterationError: no consonantOne but has ' +
        'consonantTwo');
        return '';
      }
      const vowel = LONE_VOWEL_SINHALA.get(this.vowel_);
      if (!vowel) {
        console.error('TransliterationError: invalid vowel: ', this.vowel_);
        return '';
      }
      dest += vowel;
    } else {
      let consonantOne = CONSONANT_TO_SINHALA.get(this.consonantOne_);
      if (!consonantOne) {
        console.error('TransliterationError: invalid consonantOne: ',
        this.consonantOne_);
        return '';
      }
      dest += consonantOne;
      if (this.consonantTwo_) {
        dest += SINHALA_CONSONANT_COMBINER;
        let consonantTwo = CONSONANT_TO_SINHALA.get(this.consonantTwo_);
        if (!consonantTwo) {
          console.error('TransliterationError: invalid consonantTwo: ',
          this.consonantTwo_);
          return '';
        }
        dest += consonantTwo;
      }
      const vowel = COMBINED_VOWEL_SINHALA.get(this.vowel_);
      if (vowel === undefined) {
        console.error('TransliterationError: invalid vowel: ', this.vowel_);
        return '';
      }
      dest += vowel;
    }
    if (this.isNigahita_) {
      dest += SINHALA_NIGAHITA;
    }
    return dest;
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
    let dest = '';
    this.syllables.forEach(syl => dest += syl.toThai());
    return dest;
  }

  toDevanagari() {
    if (!this.isValid) {
      console.error('TransliterationError: invalid text');
      return '';
    }
    let dest = '';
    this.syllables.forEach(syl => dest += syl.toDevanagari());
    return dest;
  }

  toBurmese() {
    if (!this.isValid) {
      console.error('TransliterationError: invalid text');
      return '';
    }
    let dest = '';
    this.syllables.forEach(syl => dest += syl.toBurmese());
    return dest;
  }

  toSinhala() {
    if (!this.isValid) {
      console.error('TransliterationError: invalid text');
      return '';
    }
    let dest = '';
    this.syllables.forEach(syl => dest += syl.toSinhala());
    return dest;
  }

  to(script) {
    switch (script) {
      case SCRIPT_THAI:
        return this.toThai();
      case SCRIPT_DEVANAGARI:
        return this.toDevanagari();
      case SCRIPT_BURMESE:
        return this.toBurmese();
      case SCRIPT_SINHALA:
        return this.toSinhala();
      default:
        return '';
    }
  }
}
