function theBeatlesPlay(musician, instrument){
  var band = new Array()
  for (var i = 0; i < musician.length; i++){
    var musicianAndInstrument = musician[i] + ' plays ' + instrument[i]
    band.push(musicianAndInstrument)
  }
  return band
}

function johnLennonFacts(arrayOfFacts){
  var copyFacts = new Arra()
  i = 0
  while (i < arrayOfFacts.length){
    var newString = arrayOfFacts[i] + '!!!'
    copyFacts.push(newString)
  }
  return copyFacts
}