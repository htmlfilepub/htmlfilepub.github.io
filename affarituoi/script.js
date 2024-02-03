var packs_values = [0, 1, 5, 10, 20, 50, 75, 100, 200, 500, 5000, 10000, 15000, 20000, 30000, 50000, 75000, 100000, 200000, 300000]
var nChoose = 0;

var country = ['Abruzzo',
'Basilicata',
'Calabria',
'Campania',
'Emilia_Romagna',
'Friuli_Venezia_Giulia',
'Lazio',
'Liguria',
'Lombardia',
'Marche',
'Molise',
'Piemonte',
'Puglia',
'Sardegna',
'Sicilia',
'Toscana',
'Trentino_Alto_Adige',
'Umbria',
'Valle_Aosta',
'Veneto']

var country_values = {
    'Abruzzo': null,
    'Basilicata': null,
    'Calabria': null,
    'Campania': null,
    'Emilia_Romagna': null,
    'Friuli_Venezia_Giulia': null,
    'Lazio': null,
    'Liguria': null,
    'Lombardia': null,
    'Marche': null,
    'Molise': null,
    'Piemonte': null,
    'Puglia': null,
    'Sardegna': null,
    'Sicilia': null,
    'Toscana': null,
    'Trentino_Alto_Adige': null,
    'Umbria': null,
    'Valle_Aosta': null,
    'Veneto': null,
}
var user_choose;
function Abruzzo() {
    if (nChoose == 0) {
    user_choose = "Abruzzo";
    scelta()
    } else {}

}

function Basilicata() {
    if (nChoose == 0) {
        user_choose = "Basilicata";
        scelta()
        } else {}
}

function Calabria() {
    if (nChoose == 0) {
        user_choose = "Calabria";
        scelta()
        } else {}
}

function Campania() {
    if (nChoose == 0) {
        user_choose = "Campania";
        scelta()
        } else {}
}

function Emilia_Romagna() {
    if (nChoose == 0) {
        user_choose = "Emilia_Romagna";
        scelta()
        } else {}
}

function Friuli_Venezia_Giulia() {
    if (nChoose == 0) {
        user_choose = "Friuli_Venezia_Giulia";
        scelta()
        } else {}
}

function Lazio() {
    if (nChoose == 0) {
        user_choose = "Lazio";
        scelta()
        } else {}
}

function Liguria() {
    if (nChoose == 0) {
        user_choose = "Liguria";
        scelta()
        } else {}
}

function Lombardia() {
    if (nChoose == 0) {
        user_choose = "Lombardia";
        scelta()
        } else {}
}

function Marche() {
    if (nChoose == 0) {
        user_choose = "Marche";
        scelta()
        } else {}
}

function Molise() {
    if (nChoose == 0) {
        user_choose = "Molise";
        scelta()
        } else {}
}

function Piemonte() {
    if (nChoose == 0) {
        user_choose = "Piemonte";
        scelta()
        } else {}
}

function Puglia() {
    if (nChoose == 0) {
        user_choose = "Puglia";
        scelta()
        } else {}
}


function Sardegna() {
    if (nChoose == 0) {
        user_choose = "Sardegna";
        scelta()
        } else {}
}

function Sicilia() {
    if (nChoose == 0) {
        user_choose = "Sicilia";
        scelta()
        } else {}
}

function Toscana() {
    if (nChoose == 0) {
        user_choose = "Toscana";
        scelta()
        } else {}
}

function Trentino_Alto_Adige() {
    if (nChoose == 0) {
        user_choose = "Trentino_Alto_Adige";
        scelta()
        } else {}
}

function Umbria() {
    if (nChoose == 0) {
        user_choose = "Umbria";
        scelta()
        } else {}
}

function Valle_Aosta() {
    if (nChoose == 0) {
        user_choose = "Valle_Aosta";
        scelta()
        } else {}
}

function Veneto() {
    if (nChoose == 0) {
        user_choose = "Veneto";
        scelta()
        } else {}
}

scelta = () => {

    user_choose;
    document.getElementById('title_confirm').style.display ="block";
    document.getElementById('confirm').style.display ="block";
    document.getElementById('title').innerHTML = "Hai scelto " + user_choose;
}

pack_shuffle_values = () => {

    nChoose = 1
    document.getElementById('title_confirm').style.display ="none";
    document.getElementById('confirm').style.display ="none";
    for (let i = packs_values.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [packs_values[i], packs_values[j]] = [packs_values[j], packs_values[i]];
      }

      var regioni = Object.keys(country_values);
      regioni.forEach((regione, indice) => {
        country_values[regione] = packs_values[indice];
      });

      var regioneContents = document.querySelectorAll('.regione');
      regioneContents.forEach(function(element) {
          element.style.display = 'none';
      })
      var regioneNew = document.querySelectorAll('.regione_2');
      regioneNew.forEach(function(elemento) {
        elemento.style.display = 'block';
      })
      switch (user_choose) {
        case "Abruzzo": 
            document.getElementById('Abruzzo').style.backgroundColor = 'blue';
            document.getElementById('Abruzzo').style.color = 'white';
            document.getElementById('Abruzzo_c').style.display = 'none';

            start_game()
            break;

            case "Basilicata": 
            document.getElementById('Basilicata').style.backgroundColor = 'blue';
            document.getElementById('Basilicata').style.color = 'white';
            document.getElementById('Basilicata_c').style.display = 'none';

            start_game()
            break;

            case "Calabria": 
            document.getElementById('Calabria').style.backgroundColor = 'blue';
            document.getElementById('Calabria').style.color = 'white';
            document.getElementById('Calabria_c').style.display = 'none';
            start_game()

            break;

            case "Campania": 
            document.getElementById('Campania').style.backgroundColor = 'blue';
            document.getElementById('Campania').style.color = 'white';
            document.getElementById('Campania_c').style.display = 'none';
            start_game()

            break;

            case "Emilia Romagna": 
            document.getElementById('Emilia_Romagna').style.backgroundColor = 'blue';
            document.getElementById('Emilia_Romagna').style.color = 'white';
            document.getElementById('Emilia_Romagna_c').style.display = 'none';
            start_game()

            break;

            case "Friuli Venezia Giulia": 
            document.getElementById('Friuli_Venezia_Giulia').style.backgroundColor = 'blue';
            document.getElementById('Friuli_Venezia_Giulia').style.color = 'white';
            document.getElementById('Friuli_Venezia_Giulia_c').style.display = 'none';
            start_game()

            break;

            case "Lazio": 
            document.getElementById('Lazio').style.backgroundColor = 'blue';
            document.getElementById('Lazio').style.color = 'white';
            document.getElementById('Lazio_c').style.display = 'none';
            start_game()

            break;

            case "Liguria": 
            document.getElementById('Liguria').style.backgroundColor = 'blue';
            document.getElementById('Liguria').style.color = 'white';
            document.getElementById('Liguria_c').style.display = 'none';
            start_game()

            break;

            case "Lombardia": 
            document.getElementById('Lombardia').style.backgroundColor = 'blue';
            document.getElementById('Lombardia').style.color = 'white';
            document.getElementById('Lombardia_c').style.display = 'none';
            start_game()

            break;

            case "Marche": 
            document.getElementById('Marche').style.backgroundColor = 'blue';
            document.getElementById('Marche').style.color = 'white';
            document.getElementById('Marche_c').style.display = 'none';
            start_game()

            break;

            case "Molise": 
            document.getElementById('Molise').style.backgroundColor = 'blue';
            document.getElementById('Molise').style.color = 'white';
            document.getElementById('Molise_c').style.display = 'none';
            start_game()

            break;

            case "Piemonte": 
            document.getElementById('Piemonte').style.backgroundColor = 'blue';
            document.getElementById('Piemonte').style.color = 'white';
            document.getElementById('Piemonte_c').style.display = 'none';
            start_game()

            break;

            case "Puglia": 
            document.getElementById('Puglia').style.backgroundColor = 'blue';
            document.getElementById('Puglia').style.color = 'white';
            document.getElementById('Puglia_c').style.display = 'none';
            start_game()

            break;

            case "Sardegna": 
            document.getElementById('Sardegna').style.backgroundColor = 'blue';
            document.getElementById('Sardegna').style.color = 'white';
            document.getElementById('Sardegna_c').style.display = 'none';
            start_game()

            break;

            case "Toscana": 
            document.getElementById('Toscana').style.backgroundColor = 'blue';
            document.getElementById('Toscana').style.color = 'white';
            document.getElementById('Toscana_c').style.display = 'none';
            start_game()

            break;

            case "Trentino_Alto_Adige": 
            document.getElementById('Trentino_Alto_Adige').style.backgroundColor = 'blue';
            document.getElementById('Trentino_Alto_Adige').style.color = 'white';
            document.getElementById('Trentino_Alto_Adige_c').style.display = 'none';
            start_game()

            break;

            case "Umbria": 
            document.getElementById('Umbria').style.backgroundColor = 'blue';
            document.getElementById('Umbria').style.color = 'white';
            document.getElementById('Umbria_c').style.display = 'none';
            start_game()

            break;

            case "Valle D'Aosta": 
            document.getElementById('Valle_Aosta').style.backgroundColor = 'blue';
            document.getElementById('Valle_Aosta').style.color = 'white';
            document.getElementById('Valle_Aosta_c').style.display = 'none';
            start_game()

            break;

            case "Veneto": 
            document.getElementById('Veneto').style.backgroundColor = 'blue';
            document.getElementById('Veneto').style.color = 'white';
            document.getElementById('Veneto_c').style.display = 'none';
            start_game()

            break;
      }
      }


      start_game = () => {
        document.getElementById('title').innerHTML = "Inizia Aprendo 6 Pacchi";
        document.getElementById(user_choose).style.cursor = "not-allowed";
      }

    var picked;
function mostra(regione) {
    picked = regione.id;
console.log(picked)
console.log(country)
}

var a = 0;
var firstSix = 0;
var offer = null;
var numberToOpen = 5;
var nTo = numberToOpen + 1;
var changeAction;
var allRegion = document.querySelectorAll('.regione_2');
var packToOpen = 4;

change = () => {
    var WantToChange = picked;
    picked = user_choose;
    user_choose = WantToChange;
    document.getElementById(user_choose).style.backgroundColor = "blue";
    document.getElementById(user_choose).style.color = "white";
    document.getElementById(picked).style.backgroundColor = "white";
    document.getElementById(picked).style.color = "black";
    allRegion.forEach(function(element) {
        element.removeEventListener('click', change);
        element.addEventListener('click', mostra(this), self_open());
    });
    changeAction = 0;
    continua()
}

self_open = () => {
if(picked === user_choose) {    
    alert("Non puoi aprire il tuo stesso pacco")
} else if (country.includes(picked) && firstSix < numberToOpen) {
apri()
} else if(firstSix === numberToOpen) {
apri()

setTimeout(() => {
    if (firstSix === nTo) {
        console.log(offer)
        var offerORchangeSurvey = parseFloat(Math.random().toFixed(2));
        console.log(offerORchangeSurvey)
        if (offerORchangeSurvey >= 0.70) {
            document.getElementById('title').innerHTML = "Apri altri " + packToOpen + " pacchi oppure cambi?";
            document.getElementById('accept').style.display = "block";
            document.getElementById('accept').innerHTML = "Cambio";
            document.getElementById('confirm').style.display = "block";
            document.getElementById('confirm').onclick = continua, a = 0;
            changeAction = 1;
        } else {
            if (Object.values(country_values).includes(100000) &&
                Object.values(country_values).includes(200000) &&
                Object.values(country_values).includes(300000)) {
                offer = Math.floor(((offer/remainingObjectsCount + 1)*.1)/1000) * 1000;
                document.getElementById('title').innerHTML = "Apri altri " + packToOpen + " pacchi oppure accetti <br>" + offer + "€";
                document.getElementById('accept').style.display = "block";
                document.getElementById('accept').innerHTML = "Accetto l'offerta";
                document.getElementById('confirm').style.display = "block";
                document.getElementById('confirm').onclick = continua, a = 0;
            } else if (Object.values(country_values).includes(100000) &&
                        Object.values(country_values).includes(200000) &&
                        !Object.values(country_values).includes(300000)) {
                        offer = Math.floor(((offer/remainingObjectsCount + 1)*.4)/1000) * 1000;
                        document.getElementById('title').innerHTML = "Apri altri " + packToOpen + " pacchi oppure accetti <br>" + offer + "€";
                        document.getElementById('accept').style.display = "block";
                        document.getElementById('accept').innerHTML = "Accetto l'offerta";
                        document.getElementById('confirm').style.display = "block";
                        document.getElementById('confirm').onclick = continua, a = 0;
            } else if (Object.values(country_values).includes(100000) &&
            !Object.values(country_values).includes(200000) &&
            !Object.values(country_values).includes(300000)) {
                offer = Math.floor(((offer/remainingObjectsCount + 1)*.3)/1000) * 1000;
                document.getElementById('title').innerHTML = "Apri altri " + packToOpen + " pacchi oppure accetti <br>" + offer + "€";
                document.getElementById('accept').style.display = "block";
                document.getElementById('accept').innerHTML = "Accetto l'offerta";
                document.getElementById('confirm').style.display = "block";
                document.getElementById('confirm').onclick = continua, a = 0;
            } else if (!Object.values(country_values).includes(100000) &&
            !Object.values(country_values).includes(200000) &&
            !Object.values(country_values).includes(300000)) {
                offer = Math.floor(((offer)*.2)/100) * 100;
                document.getElementById('title').innerHTML = "Apri altri " + packToOpen + " pacchi oppure accetti <br>" + offer + "€";
                document.getElementById('accept').style.display = "block";
                document.getElementById('accept').innerHTML = "Accetto l'offerta";
                document.getElementById('confirm').style.display = "block";
                document.getElementById('confirm').onclick = continua, a = 0;
            }   else if (!Object.values(country_values).includes(100000) &&
            Object.values(country_values).includes(200000) &&
            !Object.values(country_values).includes(300000)) {
                offer = Math.floor(((offer/remainingObjectsCount + 1)*.2)/1000) * 1000;
                document.getElementById('title').innerHTML = "Apri altri " + packToOpen + " pacchi oppure accetti <br>" + offer + "€";
                document.getElementById('accept').style.display = "block";
                document.getElementById('accept').innerHTML = "Accetto l'offerta";
                document.getElementById('confirm').style.display = "block";
                document.getElementById('confirm').onclick = continua, a = 0;
            } else if (!Object.values(country_values).includes(100000) &&
            !Object.values(country_values).includes(200000) &&
            Object.values(country_values).includes(300000)) {
                offer = Math.floor(((offer/remainingObjectsCount + 1)*.28)/1000) * 1000;
                document.getElementById('title').innerHTML = "Apri altri " + packToOpen + " pacchi oppure accetti <br>" + offer + "€";
                document.getElementById('accept').style.display = "block";
                document.getElementById('accept').innerHTML = "Accetto l'offerta";
                document.getElementById('confirm').style.display = "block";
                document.getElementById('confirm').onclick = continua, a = 0;
            } else if (Object.values(country_values).includes(100000) &&
            !Object.values(country_values).includes(200000) &&
            Object.values(country_values).includes(300000)) {
                offer = Math.floor(((offer/remainingObjectsCount + 1)*.25)/1000) * 1000;
                document.getElementById('title').innerHTML = "Apri altri " + packToOpen + " pacchi oppure accetti <br>" + offer + "€";
                document.getElementById('accept').style.display = "block";
                document.getElementById('accept').innerHTML = "Accetto l'offerta";
                document.getElementById('confirm').style.display = "block";
                document.getElementById('confirm').onclick = continua, a = 0;
            }  else if (!Object.values(country_values).includes(100000) &&
            Object.values(country_values).includes(200000) &&
            Object.values(country_values).includes(300000)) {
                offer = Math.floor(((offer/remainingObjectsCount + 1)*.35)/1000) * 1000;
                document.getElementById('title').innerHTML = "Apri altri " + packToOpen + " pacchi oppure accetti <br>" + offer + "€";
                document.getElementById('accept').style.display = "block";
                document.getElementById('accept').innerHTML = "Accetto l'offerta";
                document.getElementById('confirm').style.display = "block";
                document.getElementById('confirm').onclick = continua, a = 0;
            }


        }
                




        accept = () => {
            if (changeAction == 1) {
                document.getElementById('accept').style.display = "none";
                document.getElementById('confirm').style.display = "none";
                document.getElementById('title').innerHTML = "Scegli il pacco che vuoi";
                allRegion.forEach(function(element) {
                    element.removeEventListener('click', mostra(this), self_open());
                    element.addEventListener('click', change);
                });
            } else {
                document.getElementById('title_confirm').style.display = "block";
                document.getElementById('title_confirm').innerHTML = "Hai accettato l'offerta di " + offer + ", scopri quanto avevi nel tuo pacco:,"
                document.getElementById(user_choose).innerHTML = country_values[user_choose]
            }

    }


}
}, 500);

    

} else  {
    if (changeAction == 1) {

    } else {
        
    }
}

}     



var fNtO = 0;
continua = () => {
    if (a === 0) {
        document.getElementById('title').innerHTML = "Fai altri " + packToOpen + " tiri";
        document.getElementById('accept').style.display = "none";
        document.getElementById('confirm').style.display = "none";
        a = a + 1;
    }
    switch (fNtO) {
        case 0:
            numberToOpen = 9;
            fNtO = fNtO + 1;
            packToOpen = 3;
            break;
        
        case 1:
            numberToOpen = 12;
            fNtO = fNtO + 1;
            packToOpen = 2;
            break;

        case 2:
            numberToOpen = 14;
            fNtO = fNtO + 1;
            packToOpen = 1;
            break;

        case 3:
            numberToOpen = 15;
            fNtO = fNtO + 1;
            packToOpen = 1;
            break;
        
        case 4:
            numberToOpen = 16;
            fNtO = fNtO + 1;
            break;

        case 5:
            numberToOpen = 17;
            fNtO = fNtO + 1;
            break;

        case 6:
            numberToOpen = 19;
            fNtO = fNtO + 1;
            break
    }
    nTo = numberToOpen + 1;
}
var remainingObjectsCount;
apri = () => {
if(numberToOpen == 19) {
    document.getElementById(picked).innerHTML = country_values[picked];
    document.getElementById(user_choose).innerHTML = country_values[user_choose];
    if (country_values[user_choose] <= 25000) {
        document.getElementById('title').innerHTML = "Hai portato a casa " + country_values[user_choose] + "€";
    } else if (country_values[user_choose] >= 25000) {
        document.getElementById('title').innerHTML = "Congratulazioni hai vinto " + country_values[user_choose] + "€";
    } 
}
        if (numberToOpen < 19 && country.includes(picked)) {
                    var values_confirmed = country_values[picked]
                document.getElementById(picked).innerHTML = values_confirmed;
                document.getElementById(country_values[picked]).style.display = "none";
            var indexToRemove = country.indexOf(picked);
            for (var key in country_values) {
            if (typeof country_values[key] === 'number') {
                offer += parseFloat(country_values[key]);
                
            }
        }
        if (indexToRemove !== -1) {
            country.splice(indexToRemove, 1);
        }   
            firstSix = firstSix + 1;
            delete country_values[picked];
            remainingObjectsCount = country.length;
        console.log(remainingObjectsCount)
        }
        console.log(country_values)
    }




