// Estimer usuge pneus et delta entre pneus S M et H (test via motec)
// Tant % +rapide / tenu 15 tours etc
// Test en solo usure pneus augmentée
// Test : tour de sortie / tour chrono (ref) / tour pit_entrée / tour pit_sortie
// formule : (pit_entrée - chrono) + (pit_sortie - chrono) = temps perdu pour un pit_entrée
// enlever éventuellement 24sec (pour la gt3) pour avoir juste le temps perdu sans changement pneus

// estimer temps perdu entre chaque pneus niveau carburant egal
// estimer temps perdu pour 1L de carburant

// ->>> Quel voiture utilisé (pour temps carburant par litres)
// ->>> Quel piste (temps pits)

// Caclculer quels pneus pour la course, arret ou pas


// course 60min
// temps pit avec pneus = 40sec
// S=1:30 / M=1:32 / H=1:34
//   15t     30t      45t

// tests effectué toujours en soft


function start() {
    // temps de course en minutes // 60
    var temps_course = document.getElementById("course").value;
    temps_course = Number(temps_course)
    //minutes au tour qualif // 1
    var min_tour = document.getElementById("minutes").value;
    min_tour = Number(min_tour)
    //secondes au tour qualif // 30
    var sec_tour = document.getElementById("secondes").value;
    sec_tour = Number(sec_tour)
    //dixièmes au tour qualif // 5
    var dix_tour = document.getElementById("dixiemes").value;
    dix_tour = Number(dix_tour)

    
    

    //TRAITEMENT
    let sec_total_tour = min_tour * 60 + sec_tour //conversion temps tour en secondes
    let sec_course = temps_course * 60 //conversion temps course en secondes
    
    let nbr_tours = Math.trunc(sec_course / sec_total_tour) + 1 //calcul nbr de tours + 1 de marge

    let usure_tour = (100 - pneus) / tours //calcul usuge par tours
    let usure_total = (100 - pneus) / tours * nbr_tours //calcul usuge par tours


    //RESULTAT
    // On remplace le texte à l'intérieur du span.
    document.querySelector('span.usure_total').textContent = usure_total;
    document.querySelector('span.usure_tour').textContent = usure_tour;
    
    console.log("/////////////////////////// seconde au tour : " + sec_total_tour)
    console.log("seconde de course : " + sec_course)
    console.log("nbr de tours : " + nbr_tours)
    console.log("nombre de tours de test : " + tours)
    console.log("usure de pneus consommé : " + (100 - pneus))
}

document.addEventListener("keyup", start);
document.addEventListener("click", start);