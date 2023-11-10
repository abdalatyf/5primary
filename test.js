let btnStart = document.querySelector(".btn-start")
// let data1 = ['act', 'aid', 'hurt', 'way', 'close', 'flu', 'crop', 'gap', 'warn', 'fire', 'task', 'topic', 'beg', 'gift', 'pay', 'mind', 'bring', 'host', 'adult', 'care', 'merit', 'smart', 'actor', 'talent', 'upset', 'awful', 'law', 'liar', 'loss', 'healthy', 'respond', 'Perform', 'injured', 'illness', 'emergency', 'service', 'action', 'react', 'infection', 'infectious', 'pain', 'severe', 'technique', 'resilience', 'area', 'cough', 'stay', 'injure', 'brilliant', 'Sound', 'Fantastic', 'bleed', 'reply', 'immediately', 'surface', 'chest', 'press', 'breathe', 'instruction', 'collaboration', 'quantity', 'celebration', 'celebrity', 'occasion', 'serve', 'tradition', 'delicious', 'customer', 'native', 'tasty', 'snacks', 'grill', 'extract', 'pumpkin', 'pie', 'festival', 'rare', 'rесipe', 'inheritance', 'deceive', 'exist', 'questionnaire', 'respect', 'rude', 'agriculture', 'Innovation', 'livestock', 'production', 'Sustainable', 'variety', 'source', 'huge', 'Anintion', 'population', 'separate', 'invest', 'continent', 'Efficiently', 'evidence', 'conclude', 'Factual', 'vehicle', 'create', 'united', 'nation', 'result', 'space', 'solution', 'involve', 'laboratory', 'difference', 'organization', 'chemical', 'remove', 'insect', 'Behave', 'destroy', 'decade', 'weed', 'essay', 'disguise', 'abbreviation', 'laugh', 'laughter', 'argue', 'frown', 'confused', 'mansion', 'suitable', 'linguist', 'innovator', 'basic', 'request', 'encourage', 'demerit', 'pretend', 'reward', 'debate', 'research', 'avoid', 'experience', 'knowledge', 'reliable', 'consult', 'resource', 'locate', 'journalist', 'publish', 'influence', 'Fake', 'Spread', 'excuse', 'banner', 'sponsor', 'target', 'view', 'comment', 'specific', 'social', 'register', 'represent', 'foggy', 'mean', 'pile', 'sigh', 'nephew', 'christmas', 'character', 'invite', 'logical', 'plenty', 'mistake', 'treat', 'shout', 'assistant', 'Ignore', 'determination', 'encouragement', 'independent', 'struggle', 'maid', 'airport', 'experience', 'support', 'drought', 'stressful', 'confident', 'difference', 'volunteer', 'temporary', 'expansion', 'transport', 'system', 'connect', 'consider', 'current', 'issue', 'satisfactory', 'precise', 'schedule', 'discussion', 'debate', 'suburb', 'tunnel', 'biodiversity', 'native', 'inhabitant', 'preserve', 'scholarship', 'species', 'monitor', 'community', 'amount', 'souvenir', 'benefit', 'valuable', 'waste', 'recycling', 'inhabit', 'expedition', 'digital', 'generation', 'editor', 'interview', 'photographer', 'broadcast', 'investigator', 'foreign', 'source', 'channel', 'correspondent', 'headline', 'journalist', 'scene', 'achieve', 'select', 'professional', 'remarkable', 'judge', 'sense', 'animation', 'tragedy', 'horrify', 'musician', 'brilliant', 'constant', 'imagine', 'incredible', 'unkind', 'hilarious', 'cheerful', 'demonstrate', 'survive', 'scenery', 'documentary', 'critic', 'neighbourhood', 'accessory', 'achievable', 'crawl', 'entrepreneur', 'motivation', 'measurable', 'objective', 'outfit', 'profit', 'relevant', 'resign', 'stretcher', 'treason', 'trick', 'magnificent', 'competition', 'device', 'donate', 'expand', 'global', 'gate', 'grant', 'deeds', 'chaste', 'pious', 'chance', 'observe', 'namely', 'abstention', 'faithful', 'abstain', 'vitalize', 'displeases', 'meeting', 'compulsory', 'spiritually', 'resurrection', 'intention', 'century', 'recitation', 'hopeful', 'reveal', 'adhere', 'mediate', 'neonatal', 'altogether', 'luminous', 'revelation', 'brotherhood', 'sympathize', 'pilgrimage', 'manifest', 'member', 'witness', 'humility', 'sacrifice', 'overcrowded', 'earnest', 'disbelief', 'belief', 'contradictory', 'confirm', 'assert', 'distinction', 'truth', 'consequent', 'preach', 'accordingly', 'wisdom', 'fanaticism', 'tolerance', 'justice', 'freedom', 'objective', 'circle', 'equality', 'moderation', 'followers', 'fraternity', 'dignity', 'unique', 'guidance', 'vocation', 'persuasion', 'evidence', 'contents', 'conviction', 'traditional', 'embrace'];
let cont = document.getElementsByClassName("container")[0]
let data1 =[
  "plant",
  "drink",
  "lemon",
  "milk",
  "river",
  "seed",
  "glad",
  "cage",
  "scraf",
  "mango",
  "rice",
  "ice",
  "canal",
  "crab",
  "move",
  "harvest",
  "giant",
  "energy",
  "fence",
  "monkey",
  "healthy",
  "unheathy",
  "collect",
  "sell",
  "legume",
  "row",
  "sweater",
  "necklace",
  "spotted",
  "producer",
  "consumer",
  "castle",
  "karate",
  "sailing",
  "tennis",
  "pitch",
  "pool",
  "racket",
  "rain",
  "flood",
  "forest",
  "desert",
  "fortile",
  "erosion",
  "sculpture",
  "maple",
  "dentist",
  "planist",
  "journalist",
  "scientist",
  "receptionist",
  "scribe",
  "coast",
  "buzzing",
  "jackal",
  "souvenir",
  "shade",
  "leather",
  "silver",
  "wood",
  "resource",
  "fossil",
  "fuel",
  "renew",
  "economic",
  "environment",
  "pollution",
  "surprise",
  "community"
]
btnStart.addEventListener("click", (e) => {
  document.querySelectorAll(".word-box").forEach((el)=>el.remove())
  let from = document.querySelector(".from input").value
  let to = document.querySelector(".to input").value
  let nw = document.querySelector(".now input").value
  let fromarray= data1.slice(+from-1,+to+1)
  for (let i = 0; i < nw; i++) {
    let iow = Math.floor(Math.random() * fromarray.length)
    console.log(iow)
    console.log(fromarray[iow])
    let word = fromarray[iow]
    fromarray.splice(iow,1)
    let wordBox = document.createElement("div")
    let inputdiv = document.createElement("div")
    let wordinput = document.createElement("input")
    let ico = document.createElement("div")
    let ic = document.createElement("i")
    wordBox.className = "word-box"
    inputdiv.dataset.word = word
    inputdiv.className="input"
    inputdiv.appendChild(wordinput)
    wordinput.type = "text"
    wordinput.dataset.word = word
    ico.className = "icon"
    ico.dataset.word = word
    ic.className = "fa-solid fa-volume-high"
    ico.appendChild(ic)
    wordBox.appendChild(inputdiv)
    wordBox.appendChild(ico)
    cont.appendChild(wordBox)
  }

  
  let iconsbox = document.querySelectorAll(".container .word-box .icon");
  let icons = document.querySelectorAll(".container .word-box .icon i");
  iconsbox.forEach((icon) => {
    icon.addEventListener("click", (e) => {
      function getVoices() {
        let voices = speechSynthesis.getVoices();
        if (!voices.length) {
          // some time the voice will not be initialized so we can call speak with empty string
          // this will initialize the voices 
          let utterance = new SpeechSynthesisUtterance("");
          speechSynthesis.speak(utterance);
          voices = speechSynthesis.getVoices();
        }
        return voices;
      }
        
        
      function speak(text, voice, rate, pitch, volume) {
        // create a SpeechSynthesisUtterance to configure the how text to be spoken 
        let speakData = new SpeechSynthesisUtterance();
        speakData.volume = volume; // From 0 to 1
        speakData.rate = rate; // From 0.1 to 10
        speakData.pitch = pitch; // From 0 to 2
        speakData.text = text;
        speakData.lang = 'en';
        speakData.voice = voice;
        
        // pass the SpeechSynthesisUtterance to speechSynthesis.speak to start speaking 
        speechSynthesis.speak(speakData);
        
      }
        
      if ('speechSynthesis' in window) {
        
        let voices = getVoices();
        let rate = .8, pitch = .5, volume = 5;
        let text = e.target.dataset.word;
        
        speak(text, voices[0], rate, pitch, volume);
      }
    });
    icons.forEach((icon) => {
      icon
    })
  })
  let inputs = document.querySelectorAll(".container .word-box .input input")
  console.log(inputs)
  inputs.forEach((input) => {
    input.addEventListener("focus", (e) => {
      console.log(input)
      function getVoices() {
        let voices = speechSynthesis.getVoices();
        if (!voices.length) {
          // some time the voice will not be initialized so we can call speak with empty string
          // this will initialize the voices 
          let utterance = new SpeechSynthesisUtterance("");
          speechSynthesis.speak(utterance);
          voices = speechSynthesis.getVoices();
        }
        return voices;
      }
        
        
      function speak(text, voice, rate, pitch, volume) {
        // create a SpeechSynthesisUtterance to configure the how text to be spoken 
        let speakData = new SpeechSynthesisUtterance();
        speakData.volume = volume; // From 0 to 1
        speakData.rate = rate; // From 0.1 to 10
        speakData.pitch = pitch; // From 0 to 2
        speakData.text = text;
        speakData.lang = 'en';
        speakData.voice = voice;
        
        // pass the SpeechSynthesisUtterance to speechSynthesis.speak to start speaking 
        speechSynthesis.speak(speakData);
        
      }
        
      if ('speechSynthesis' in window) {
        
        let voices = getVoices();
        let rate = .8, pitch = .5, volume = 5;
        let text = e.target.dataset.word;
        
        speak(text, voices[0], rate, pitch, volume);
      }
    })
  })

})

let btnEnd = document.querySelector(".btn-end")

btnEnd.addEventListener("click", (e)=>{
  let inputs = document.querySelectorAll(".word-box input")
  let max=inputs.length
  let result=0
  inputs.forEach((input,i) => {
    console.log((input.value).toLowerCase())
    console.log((input.dataset.word).toLowerCase())
    console.log(i + "#".repeat(10))
    if ((input.value).toLowerCase() === (input.dataset.word).toLowerCase()) {
      result++
      input.parentElement.classList.add("true")
    } else {
      input.parentElement.classList.add("false")
    }
  })
})