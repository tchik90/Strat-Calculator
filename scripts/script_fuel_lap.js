document.addEventListener('DOMContentLoaded', start_lap())


function lap() {

    //console.log("Fonction LAP")
    
    //nombre de tours
    var nbr_tours = Number(document.getElementById("input_time").value);
    
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
    let dix_course = nbr_tours * dix_total_tour //conversion temps course en dixèmes
    
    let fuel_total = Math.ceil(nbr_tours * conso) //calcul de la conso total
    
    //RESULTAT
    document.querySelector('span.tours').textContent = Math.ceil(nbr_tours * dix_total_tour / 600) + " min";
    document.querySelector('span.fuel').textContent = Math.ceil(fuel_total + conso) + " litres";
    
    // console.log("nombre de tours : " + input_time)
    // console.log("dixièmes au tour : " + dix_total_tour)
    
    // console.log("Conso par tour : " + conso)
    
    // console.log("nombre de tours : " + nbr_tours)
    // console.log("fuel total : " + fuel_total)

    //MISE A JOUR A CHAQUE FRAPPE DE CLAVIER
    document.addEventListener("keyup",lap);
}

function start_lap() {
    document.getElementById("input_time").focus();
    lap()
}