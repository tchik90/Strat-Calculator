window.onload = function () {
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

// DEBUG
// document.getElementById('input_time').value = 600;
// document.getElementById('minutes').value = 4;
// document.getElementById('input_conso').value = 6;
// document.getElementById('input_capacity').value = 100;

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

    let fuel_total = Math.ceil(nbr_tours * conso); //calcul de la conso total sans marge

    var temps_calc = 0;

    // nbr de tour sur un plein
    var inputCapacity = document.getElementById("input_capacity").value;

    var nbr_tour_par_plein = inputCapacity / conso;
    var nbr_tour_entier = Math.floor(nbr_tour_par_plein);
    var nbr_tour_decimal =  nbr_tour_par_plein - nbr_tour_entier;

    // nbr d'arrets
    var nbr_arret = Math.floor(Math.ceil(fuel_total) / inputCapacity);

    


    //AFFICHAGE RESULTAT

    // Compaptage des checkbox
    var checkboxes = document.querySelectorAll('.container_option input[type="checkbox"]');
    var checkedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
    console.log("checkedCount : " + checkedCount);
    
    if (checkedCount == 2) {
        fuel_total = fuel_total + conso + conso;
        document.querySelector('span.marge_fuel').textContent = "3";
    } else if (checkedCount == 1) {
        fuel_total = fuel_total + conso;
        document.querySelector('span.marge_fuel').textContent = "2";
    } else {
        fuel_total = fuel_total;
        document.querySelector('span.marge_fuel').textContent = "1";
    }


    // nombre de tours
    if (isNaN(nbr_tours) || nbr_tours == "Infinity") {
        console.log("NAN : " + nbr_tours)
        document.getElementById("result_tours").value = "";
    } else {
        console.log("number : " + nbr_tours)
        document.getElementById("result_tours").value = nbr_tours;
    }

    // fuel necessaire
    if (isNaN(fuel_total) || fuel_total == "Infinity") {
        document.getElementById("result_fuel").value = ""
    } else {
        document.getElementById("result_fuel").value = Math.ceil(fuel_total + conso);
    }

    
    // Nombre de tours par plein
    if (isNaN(nbr_tour_entier) || nbr_tour_entier == "Infinity" || nbr_tour_entier == "0") {
        document.getElementById("result_tours_plein").value = ""
    } else {
        document.getElementById("result_tours_plein").value = nbr_tour_entier;
    }

    // Nombre d'arrêt
    if (isNaN(nbr_arret) || nbr_arret == "Infinity") {
        document.getElementById("result_stop").value = ""
    } else {
        document.getElementById("result_stop").value = nbr_arret;
    }

    // // Refuel SIMPLE
    // var fuel_necessaire = document.getElementById("result_fuel").value;
    // var refuel = fuel_necessaire - (inputCapacity * nbr_arret);
    
    // // console.log("FUEL NECESSAIRE : " + fuel_necessaire);
    // // console.log("REFUEL : " + refuel);


    // if (isNaN(refuel) || refuel == "Infinity") {
    //     document.getElementById("result_refuel").value = ""
    // } else {
    //     document.getElementById("result_refuel").value = refuel;
    // }

    // Refuel COMPLEXE
    var fuel_necessaire = document.getElementById("result_fuel").value;
    var conso_relais = nbr_tour_entier * conso;
    var fuel_restant = inputCapacity - conso_relais;


    console.log("TOURS : " + nbr_tour_entier);
    console.log("CONSO : " + conso);
    console.log("RELAIS : " + conso_relais);
    console.log("RESTE : " + fuel_restant);


    var refuel = (fuel_necessaire - (inputCapacity * nbr_arret)) - fuel_restant;
    
    // console.log("FUEL NECESSAIRE : " + fuel_necessaire);
    // console.log("REFUEL : " + refuel);


    if (isNaN(refuel) || refuel == "Infinity" || nbr_arret == "0") {
        document.getElementById("result_refuel").value = ""
    } else {
        document.getElementById("result_refuel").value = refuel;
    }


    // ------ CONSOLE.LOG ------
    // console.log("---------------")
    // console.log("Fuel total : " + fuel_total);
    // console.log("le temps au tour de base est " + dix_total_tour + "et le calculé est de " + temps_calc)
    //console.log("l'usure calculé est de " + usure_calc + " %");

    // si usure total depasse 90% -> faire un arret : compteur arret +1 susure total reset

    //MISE A JOUR A CHAQUE FRAPPE DE CLAVIER
    document.addEventListener("keyup", tps);
    document.addEventListener("click", tps);
}