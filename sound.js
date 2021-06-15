
let classifier;
const options = { probabilityThreshold: 0.7 };
let label;
let confidence;

function preload() {  
  classifier = ml5.soundClassifier('SpeechCommands18w', options);
}

function setup() {
  noCanvas();  
  label = createDiv('Label: ...');
  confidence = createDiv('Confidence: ...'); 
  classifier.classify(gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
  }
  console.log(results);
  label.html(`Label: ${results[0].label}`);
  confidence.html(`Confidence: ${nf(results[0].confidence, 0, 2)}`);
}
