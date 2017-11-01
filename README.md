# jquery-konamicode
A jQuery plugin to make Easter eggs easy to implement. Just include the code above where you want to use it. 

Simple example:
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
