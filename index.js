function theBeatlesPlay(musician, instrument){
  var band = new Array()
  for (var i = 0; i < musician.length; i++){
    var musicianAndInstrument = musician[i] + ' plays ' + instrument[i]
    band.push(musicianAndInstrument)
  }
  return band
}
