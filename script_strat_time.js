document.addEventListener('DOMContentLoaded', start_tps())

function start_tps() {
    document.getElementById("input_time").focus();
    tps()    
}

function tps() {
    
    //////////// ENTREE DES DONNEES ////////////
    var pneus; 
    if (document.getElementById('soft').checked) {
        pneus = "soft";
    } else if (document.getElementById('medium').checked) {
        pneus = "medium";
    } else if (document.getElementById('hard').checked) {
        pneus = "hard";
    }
    
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

    //conso au tour
    var conso = Number(document.getElementById("input_conso").value) + 0.1;

    
    //////////// CALCULS /////////////
    let dix_total_tour = (min_tour * 600) + (sec_tour * 10) + dix_tour //conversion temps tour en secondes
    let dix_course = temps_course * 600 //conversion temps course en dixèmes
    
    
    let nbr_tours = Math.ceil(dix_course / dix_total_tour); //calcul nbr de tours arrondi au superieur (finir tour)

    let fuel_total = Math.ceil(nbr_tours * conso); //calcul de la conso total

    let usure_tour = (100 - test_usure) / test_tours;
    let usure_course = usure_tour * nbr_tours;

    var usure_calc = 0;
    var temps_calc = 0

    if (temps_course < 16) {
        document.querySelector('span.tyre').textContent = "SOFT";
        if (pneus == "soft") {
            usure_calc = usure_course * 1;
            temps_calc = dix_total_tour * 1;
        } else if (pneus == "medium") {
            usure_calc = usure_course * 2;
            temps_calc = dix_total_tour / 1.01135;
        } else {
            usure_calc = usure_course * 4;
            temps_calc = dix_total_tour / 1.0226;
        }
    } else if (temps_course < 31) {
        document.querySelector('span.tyre').textContent = "MEDIUM";
        if (pneus == "soft") {
            usure_calc = usure_course / 2;
            temps_calc = dix_total_tour * 1.01135;
        } else if (pneus == "medium") {
            usure_calc = usure_course * 1;
            temps_calc = dix_total_tour * 1;
        } else {
            usure_calc = usure_course * 2;
            temps_calc = dix_total_tour / 1.01135;
        }
    } else {
        document.querySelector('span.tyre').textContent = "HARD";
        if (pneus == "soft") {
            usure_calc = usure_course / 4;
            temps_calc = dix_total_tour * 1.0226;
        } else if (pneus == "medium") {
            usure_calc = usure_course / 2;
            temps_calc = dix_total_tour * 1.01135;
        } else {
            usure_calc = usure_course * 1;
            temps_calc = dix_total_tour * 1;
        }
    }

    usure_calc = Math.ceil(usure_calc);


    var minutes = Math.trunc(temps_calc / 600);
    var secondes = Math.trunc((temps_calc / 600 - minutes) * 60);
    var dixiemes = Math.ceil((temps_calc / 600 - minutes) * 600 - secondes);

    
    //////////// AFFICHAGE RESULTAT ////////////
    document.querySelector('span.tours').textContent = nbr_tours + " tours";
    document.querySelector('span.fuel').textContent = Math.ceil(fuel_total + conso) + " litres";
    document.querySelector('span.usure').textContent = usure_calc + " % soit " + (100 - usure_calc) + " % restant";
    document.querySelector('span.tps').textContent = minutes + "." + secondes.toString().padStart(2, "0") + "." + dixiemes;


    //////////// MISE A JOUR A CHAQUE FRAPPE DE CLAVIER ////////////
    document.addEventListener("keyup",tps);
    document.addEventListener("click",tps);
}
