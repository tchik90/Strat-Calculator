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
    
    //conso au tour
    var conso = Number(document.getElementById("input_conso").value) + 0.1;
    
    //CALCULS
    let dix_total_tour = (min_tour * 600) + (sec_tour * 10) + dix_tour //conversion temps tour en secondes
    let dix_course = temps_course * 600 //conversion temps course en dixèmes
    
    
    let nbr_tours = Math.ceil(dix_course / dix_total_tour) //calcul nbr de tours arrondi au superieur (finir tour)
    let fuel_total = Math.ceil(nbr_tours * conso) //calcul de la conso total
    
    //RESULTAT
    document.querySelector('span.tours').textContent = nbr_tours + " tours";
    document.querySelector('span.fuel').textContent = Math.ceil(fuel_total + conso) + " litres";
    
    // console.log("dixièmes de la course : " + dix_course)
    // console.log("dixièmes au tour : " + dix_total_tour)
    
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