(function (window) {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var i=0; i<names.length; i++) {
    var name_lower = names[i].toLowerCase;
    var firstLetter = names[i].charAt(0);
    if (firstLetter == 'j' || firstLetter == 'J') {
      byeSpeaker.speak(names[i]);
    }
    else {
      helloSpeaker.speak(names[i]);
    }
  }
})(window);