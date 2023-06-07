// Etape 3
function askBirthYear(idBirthYear, idBirthMonth) {
    var idBirthYear = prompt("Quel est votre année de naissance?")
    var idBirthMonth = prompt("Quel est votre mois de naissance?")
    var idAge
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"]

    if (idBirthMonth <= months[5]) {
        idAge = 2022 - idBirthYear
        return idAge
    } else {
        idAge = 2023 - idBirthYear
        return idAge
    }
    var textAge = "Vous avez " + idAge + " ans"
    return textAge
}

function askName(idName) {
    var idName = prompt("Quel est votre nom?")
    var textName = "👋 Bonjour " + idName
    return textName
}

// Etape 1 
document.body.innerHTML += '<h2> ' + askName() + ' </h2>'


// Etape 2
document.body.innerHTML += '<h3> ' + askBirthYear() + ' </h3>'

