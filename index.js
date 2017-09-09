function theBeatlesPlay(musician, instrument){
  var band = new Array()
  for (var i = 0; i < musician.length; i++){
    var musicianAndInstrument = musician[i] + ' plays ' + instrument[i]
    band.push(musicianAndInstrument)
  }
  return band
}

function johnLennonFacts(arrayOfFacts){
  var copyFacts = new Array()
  i = 0
  while (i < arrayOfFacts.length){
    var newString = arrayOfFacts[i] + '!!!'
    copyFacts.push(newString)
  }
  return copyFacts
}

function iLoveTheBeatles(num){
  var iHeartBeatles = []
  do{
    iHeartBeatles.push("I love the Beatles!")
    num++
  }while(num < 15)
}