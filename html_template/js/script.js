// Etape 1
var idName = prompt("Quel est votre nom?")
var text = "👋 Bonjour " + idName

document.body.innerHTML += '<h2> ' + text + ' </h2>'

// Etape 2
var idAge = prompt("Quel est votre âge?")
var text = "Vous avez " + idAge + " ans"

document.body.innerHTML += '<h3> ' + text + ' </h3>'