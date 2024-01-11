document.addEventListener('DOMContentLoaded', start_tps())

function start_tps() {
    document.getElementById("input_time").focus();
    tps()    
}


// idée :
// soft = 100% du temps au tour
// medium = 90%
// hard = 80%
// soft = 100% de durée
// medium = 200% de durée
// hard = 400% de durée

function tps() {

    // var pneus; 
    // if (document.getElementById('soft').checked) {
    //     pneus = document.getElementById('soft').value;
    // } else if (document.getElementById('medium').checked) {
    //     pneus = document.getElementById('medium').value;
    // } else if (document.getElementById('hard').checked) {
    //     pneus = document.getElementById('hard').value;
    // }

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
    
    //CALCULS
    let dix_total_tour = (min_tour * 600) + (sec_tour * 10) + dix_tour //conversion temps tour en secondes
    let dix_course = temps_course * 600 //conversion temps course en dixèmes
    
    
    let nbr_tours = Math.ceil(dix_course / dix_total_tour); //calcul nbr de tours arrondi au superieur (finir tour)

    let fuel_total = Math.ceil(nbr_tours * conso); //calcul de la conso total

    console.log("///////////////le pneus test est : " + pneus);
    //console.log("l'usure prévue de base est : " + usure_course + ", soit " + (nbr_tours / usure_course) + " par tours")

    /////////////////    10      /  (100 - 50 )
    let usure_tour = (100 - test_usure) / test_tours;
    let usure_course = usure_tour * nbr_tours;

    console.log("l'usure prévue de base au tour est de " + usure_tour + " %")

    var usure_calc = 0;
    var temps_calc = 0

    if (temps_course < 16) {
        document.querySelector('span.tyre').textContent = "SOFT";
        if (pneus == "soft") {
            usure_calc = usure_course * 1;
            temps_calc = dix_total_tour * 1;
            console.log("stratégie soft et le pneus test soft selectionné");
        } else if (pneus == "medium") {
            usure_calc = usure_course * 2;
            temps_calc = dix_total_tour / 1.01135;
            console.log("stratégie soft et le pneus test médium selectionné");
        } else {
            usure_calc = usure_course * 4;
            temps_calc = dix_total_tour / 1.0226;
            ("stratégie soft et le pneus test hard selectionné");
        }
    } else if (temps_course < 31) {
        document.querySelector('span.tyre').textContent = "MEDIUM";
        if (pneus == "soft") {
            usure_calc = usure_course / 2;
            temps_calc = dix_total_tour * 1.01135;
            console.log("stratégie médium et le pneus test soft selectionné");
        } else if (pneus == "medium") {
            usure_calc = usure_course * 1;
            temps_calc = dix_total_tour * 1;
            console.log("stratégie médium et le pneus test medium selectionné");
        } else {
            usure_calc = usure_course * 2;
            temps_calc = dix_total_tour / 1.01135;
            console.log("stratégie médium et le pneus test hard selectionné");
        }
    } else {
        document.querySelector('span.tyre').textContent = "HARD";
        if (pneus == "soft") {
            usure_calc = usure_course / 4;
            temps_calc = dix_total_tour * 1.0226;
            ("stratégie hard et le pneus test soft selectionné");
        } else if (pneus == "medium") {
            usure_calc = usure_course / 2;
            temps_calc = dix_total_tour * 1.01135;
            ("stratégie hard et le pneus test médium selectionné");
        } else {
            usure_calc = usure_course * 1;
            temps_calc = dix_total_tour * 1;
            ("stratégie hard et le pneus test hard selectionné");
        }
    }

    usure_calc = Math.ceil(usure_calc);

    console.log ("nombre de minutes avant tronque: " + temps_calc / 600);
    var minutes = Math.trunc(temps_calc / 600);
    console.log ("nombre de minutes : " + minutes);
    var secondes = Math.trunc((temps_calc / 600 - minutes) * 60);
    console.log ("nombre de secondes : " + secondes);
    var dixiemes = Math.ceil((temps_calc / 600 - minutes) * 600 - secondes);
    console.log ("nombre de dixièmes : " + dixiemes)

    console.log("le temps au tour de base est " + dix_total_tour + "et le calculé est de " + temps_calc )
    console.log("")
    console.log("l'usure en course est de " + usure_course + " %");
    console.log("l'usure calculé est de " + usure_calc + " %");

    // let number = 5;
    // number.toString().padStart(2, "0") // return "05"
    
    //RESULTAT
    document.querySelector('span.tours').textContent = nbr_tours + " tours";
    document.querySelector('span.fuel').textContent = Math.ceil(fuel_total + conso) + " litres";
    document.querySelector('span.usure').textContent = usure_calc + " % soit " + (100 - usure_calc) + " % restant";
    document.querySelector('span.tps').textContent = minutes + "." + secondes.toString().padStart(2, "0") + "." + dixiemes;

    //console.log(usure_course)

    //MISE A JOUR A CHAQUE FRAPPE DE CLAVIER
    document.addEventListener("keyup",tps);
    document.addEventListener("click",tps);
}