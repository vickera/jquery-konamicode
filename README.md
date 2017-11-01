# jquery-konamicode
A jQuery plugin to make Easter eggs easy to implement.

Standard code: `up up down down left right left right B A enter`
Standard example:
```
$('body').konamiCode(function(){  
  alert('Thats all there is to it!')
})
```

To use a custom code, pass an array of keycodes before the callback function:
```
$('body').konamiCode([67,79,79,76,13], function(){  
  alert('Cool!')
})
```
