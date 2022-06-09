const sentence = document.querySelector(".input-text");
const countBtn = document.querySelector(".count-btn");
const result = document.querySelector(".result");

const VowelTable = ["a", "i", "o", "u", "y", "e"];
let countVowel = 0;

function CountVowel() {
  const sentenceTable = sentence.value.toLowerCase().split("");
  sentenceTable.forEach((element) => {
    if (VowelTable.includes(element)) {
      countVowel++;
      result.innerHTML = `the word ${sentence.value} contains ${countVowel} vowels`;
    } else {
      result.innerHTML = `the word ${sentence.value} contains ${countVowel} vowels`;
    }
  });
  countVowel = 0;
}

function CountVowel2() {
  const sentenceValue = sentence.value.toLowerCase();
  for (let i = 0; i < sentenceValue.length; i++) {
    let letter = sentenceValue[i];
    if (letter.match(/([a,e,i,o,u])/)) {
      countVowel++;
      result.innerHTML = `the word ${sentence.value} contains ${countVowel} vowels`;
    } else {
      result.innerHTML = `the word ${sentence.value} contains ${countVowel} vowels`;
    }
  }
  countVowel = 0;
}

countBtn.addEventListener("click", CountVowel2);
