
 

   
    
    let inputBox = document.getElementById('textareaBox')
    let wordsCount = document.getElementById('words-count')
    let sentenceCount = document.getElementById('sentences-count')
    let characterCounts = document.getElementById('characters-count')
    let paragraphsCount = document.getElementById('paragraphs-count')


    inputBox.addEventListener('input',(e)=>{
        let inputValue = inputBox.value;


// Characters Count
    let countLetters = inputValue.replace('/\s+\g',"").trim().length
if (countLetters >= 10000) {
    characterCounts.style.fontSize = "1rem"
}
    characterCounts.textContent = countLetters

    // WordsCount Count
  let countWords = inputValue.trim().split(' ').length;
  
  if (countWords >= 10000) {
    wordsCount.style.fontSize = "1rem"
}
 if (!inputBox.value.trim().length) {
        countWords = 0
    }
  wordsCount.innerText = countWords

// Sentences Count
  let countSentences = inputValue.trim().split('.').filter(item => { return item }).length
  if (countSentences >= 10000) {
    sentenceCount.style.fontSize = "1rem"
}
  sentenceCount.innerText =countSentences;


//   Paragraphs Count
  let countParagraphs =
inputValue.trim().split("\n\n").length

  if (countParagraphs >= 10000) {
    paragraphsCount.style.fontSize = "1rem"
}
paragraphsCount.innerText = countParagraphs

    })


