document.addEventListener('DOMContentLoaded', start_tps())


function tps() {

    //console.log("Fonction TEMPS")
    
    //temps course en minutes
    var temps_course = Number(document.getElementById("input_time").value);
    
    //minutes au tour
    var min_tour = Number(document.getElementById("minutes").value);
    
    //secondes au tour
    var sec_tour = Number(document.getElementById("secondes").value);
    
    //dixièmes au tour qualif //
    var dix_tour = Number(document.getElementById("dixiemes").value);
    
    //tours de test
    var test_tours = Number(document.getElementById("test_tours").value);

    //usure restante
    var test_usure = Number(document.getElementById("test_usure").value);
    
    //CALCULS
    let dix_total_tour = (min_tour * 600) + (sec_tour * 10) + dix_tour //conversion temps tour en secondes
    let dix_course = temps_course * 600 //conversion temps course en dixèmes
    
    
    let nbr_tours = Math.ceil(dix_course / dix_total_tour) //calcul nbr de tours arrondi au superieur (finir tour)

    let usure_tour = test_tours / (100 - test_usure)
    let usure_course = usure_tour * nbr_tours
    
    //RESULTAT
    document.querySelector('span.tours').textContent = nbr_tours + " tours";
    document.querySelector('span.fuel').textContent = Math.ceil(usure_course) + " % soit " + (100 - usure_course) + " % restant";
    
    // console.log("usure par tours : " + usure_tour)
    // console.log("usure total en course : " + usure_course)
    
    // console.log("Conso par tour : " + conso)
    
    // console.log("nombre de tours : " + nbr_tours)
    // console.log("fuel total : " + fuel_total)

    //MISE A JOUR A CHAQUE FRAPPE DE CLAVIER
    document.addEventListener("keyup",tps);
}

function start_tps() {
    document.getElementById("input_time").focus();
    tps()
}