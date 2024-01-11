document.addEventListener('DOMContentLoaded', start_lap())


function lap() {

    //console.log("Fonction LAP")
    
    //temps course en minutes
    var nbr_tours = Number(document.getElementById("input_time").value);
    
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
    let dix_course = nbr_tours * dix_total_tour //conversion temps course en dixème

    let usure_tour = test_tours / (100 - test_usure)
    let usure_course = usure_tour * nbr_tours
    
    //RESULTAT
    document.querySelector('span.tours').textContent = Math.ceil(nbr_tours * dix_total_tour / 600) + " min";
    document.querySelector('span.fuel').textContent = Math.ceil(usure_course) + " % soit " + (100 - usure_course) + " % restant";
    
    // console.log("usure par tours : " + usure_tour)
    // console.log("usure total en course : " + usure_course)
    
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