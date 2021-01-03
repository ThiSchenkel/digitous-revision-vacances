// 02 - Compter les voyelles  - Créez une fonction `countvowels` qui prend une string en paramètre et qui retourne le nombre de voyelles contenues dans un texte.

function countvowels(nbreString) {
    var vowels = "aeéèêiouyAEIOUY";
    var vcount = 0;
    for (var i = 0; i < nbreString.length; i++) {
        if (vowels.indexOf(nbreString[i]) !== -1) {
            vcount += 1;
        }
    }
    return vcount;
}
console.log(countvowels("Il est né lE divine enfAnt"));

var nbreString = string => [...string].filter(c => 'aeéèêiouy'.includes(c.toLowerCase())).length;
console.log(nbreString("Il est né lE divine enfAnt"));