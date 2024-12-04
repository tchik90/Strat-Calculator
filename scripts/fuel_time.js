window.onload=function() {
    start_tps();
}

function start_tps() {
    document.getElementById("input_time").focus();
    tps();
}


// idée :
// soft = 100% du temps au tour
// medium = 90%
// hard = 80%
// soft = 100% de durée
// medium = 200% de durée
// hard = 400% de durée

function tps() {

    //temps course en minutes
    var temps_course = Number(document.getElementById("input_time").value);
    
    //minutes au tour
    var min_tour = Number(document.getElementById("minutes").value);    
    //secondes au tour
    var sec_tour = Number(document.getElementById("secondes").value);   
    //dixièmes au tour
    var dix_tour = Number(document.getElementById("dixiemes").value);

    //conso au tour
    var conso = Number(document.getElementById("input_conso").value);// marge enlevée + 0.1;


    //CALCULS
    let dix_total_tour = (min_tour * 600) + (sec_tour * 10) + dix_tour //conversion temps tour en secondes
    let dix_course = temps_course * 600 //conversion temps course en dixèmes
     
    let nbr_tours = Math.ceil(dix_course / dix_total_tour); //calcul nbr de tours arrondi au superieur (finir tour)

    let fuel_total = Math.ceil(nbr_tours * conso); //calcul de la conso total

    var temps_calc = 0;



    //AFFICHAGE RESULTAT

    // nombre de tours
    if (isNaN(nbr_tours) || nbr_tours == "Infinity") {
        console.log("NAN : " + nbr_tours)
        // document.querySelector('span.tours').textContent = "";
        document.getElementById("result_tours").value = "test"
    } else {
        console.log("number : " + nbr_tours)
        document.querySelector('span.tours').textContent = nbr_tours + " tours";
    }

    // Compaptage des checkbox
    var checkboxes = document.querySelectorAll('.container_option input[type="checkbox"]');
    var checkedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
    console.log("checkedCount : " + checkedCount);

    if(checkedCount == 2) {
        fuel_total = fuel_total + conso + conso;
        document.querySelector('span.marge_fuel').textContent = "3";
    } else if(checkedCount == 1) {
        fuel_total = fuel_total + conso;
        document.querySelector('span.marge_fuel').textContent = "2";
    } else {
        fuel_total = fuel_total;
        document.querySelector('span.marge_fuel').textContent = "1";
    }



    // Gestion des options checkbox
    var formation_lap = document.getElementById('formation_lap');

    if (formation_lap.checked) {
        document.querySelector('span.formation').textContent = "OUI";
    } else {
        document.querySelector('span.formation').textContent = "NON";
    }

    // if (tour_marge.checked) {
    //     fuel_total = fuel_total + conso;
    //     document.querySelector('span.marge_fuel').textContent = "2";
    // } else {
    //     fuel_total = fuel_total;
    //     document.querySelector('span.marge_fuel').textContent = "1";
    // }


    // fuel necessaire
    if (isNaN(fuel_total)) {
        document.querySelector('span.fuel').textContent = "";
    } else {
        document.querySelector('span.fuel').textContent = Math.ceil(fuel_total + conso) + " litres";
    }


    // ------ CONSOLE.LOG ------
    console.log("---------------")
    console.log("Fuel total : " + fuel_total);
    console.log("le temps au tour de base est " + dix_total_tour + "et le calculé est de " + temps_calc )
    //console.log("l'usure calculé est de " + usure_calc + " %");

    // si usure total depasse 90% -> faire un arret : compteur arret +1 susure total reset

    //MISE A JOUR A CHAQUE FRAPPE DE CLAVIER
    document.addEventListener("keyup",tps);
    document.addEventListener("click",tps);
}