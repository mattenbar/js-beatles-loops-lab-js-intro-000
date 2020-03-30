// add solution here
function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (let num = 0 ; num < musicians.length ; num++){
    array.push(`${musicians[num]} plays ${instruments[num]}`)
  }
  return array
}
function johnLennonFacts(facts){
  let i = 0
  var array = []
  while (i < facts.length){
    array[i] = `${facts[i]}!!!`
    i++
  } return array
}

function iLoveTheBeatles(int){
  var array = []
  var i = 0
  while(i < int+1){
    array.push("I love the Beatles!")
    i++
  }
  return array
}
