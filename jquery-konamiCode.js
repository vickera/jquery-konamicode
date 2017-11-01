$.fn.konamiCode = function(first, second){
  var callback = second ? second : first
  var code = second ? first : [38,38,40,40,37,39,37,39,66,65,13]
  var currentPosition = 0

  this.get(0).addEventListener('keydown', function(e) {
    var targetKey = code[currentPosition]
    
    if(e.keyCode == targetKey){
      currentPosition++
  
      if(currentPosition == code.length){
        callback.call(this)
        currentPosition = 0
      }
    } else {
      currentPosition = 0
    }
  })
  
  return this
}
