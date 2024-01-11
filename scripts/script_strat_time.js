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
    
    //usure inconnue -> tours de test
    //var test_tours = Number(document.getElementById("test_tours").value);
    //usure inconnue -> usure restante
    //var test_usure = Number(document.getElementById("test_usure").value);
    // usure connue -> usure par tour
    var usureParTourYes = Number(document.getElementById("test_usureYes").value);

    //conso au tour
    var conso = Number(document.getElementById("input_conso").value);// marge enlevée + 0.1;


    //CALCULS
    let dix_total_tour = (min_tour * 600) + (sec_tour * 10) + dix_tour //conversion temps tour en secondes
    let dix_course = temps_course * 600 //conversion temps course en dixèmes
    
    
    let nbr_tours = Math.ceil(dix_course / dix_total_tour); //calcul nbr de tours arrondi au superieur (finir tour)

    let fuel_total = Math.ceil(nbr_tours * conso); //calcul de la conso total


    // var usure_tour = 0;
    var usure_tour = usureParTourYes;
    var usure_calc = 0;
    var temps_calc = 0


    // ----- INPUT USURE CHECKED ---- + calcul usure pneus
    // var inputChecked = document.querySelector('.selectUsure:checked').value; // yes or no
    // if(inputChecked == "yes") {
    //     document.querySelector(".usureNo1").style.display = "none";
    //     document.querySelector(".usureNo2").style.display = "none";
    //     document.querySelector(".usureYes").style.display = "block";
    //     usure_tour = usureParTourYes;
        
    // } else {
    //     document.querySelector(".usureNo1").style.display = "block";
    //     document.querySelector(".usureNo2").style.display = "block";
    //     document.querySelector(".usureYes").style.display = "none";
    //     //usure_tour = (100 - test_usure) / test_tours;
    // }

    var usure_course = usure_tour * nbr_tours;

    // ------ CALCUL PNEUS POUR LA COURSE -----
    var affichePneus = document.querySelector('span.tyre');

    if (temps_course < 16) {
        affichePneus.textContent = "SOFT";
        if (pneus == "soft") {
            usure_calc = usure_course * 1;
            temps_calc = dix_total_tour * 1;
            //console.log("stratégie soft et le pneus test soft selectionné");
        } else if (pneus == "medium") {
            usure_calc = usure_course * 2;
            temps_calc = dix_total_tour / 1.01135;
           //console.log("stratégie soft et le pneus test médium selectionné");
        } else {
            usure_calc = usure_course * 4;
            temps_calc = dix_total_tour / 1.0226;
            //("stratégie soft et le pneus test hard selectionné");
        }
    } else if (temps_course < 31) {
        affichePneus.textContent = "MEDIUM";
        if (pneus == "soft") {
            usure_calc = usure_course / 2;
            temps_calc = dix_total_tour * 1.01135;
            //console.log("stratégie médium et le pneus test soft selectionné");
        } else if (pneus == "medium") {
            usure_calc = usure_course * 1;
            temps_calc = dix_total_tour * 1;
            //console.log("stratégie médium et le pneus test medium selectionné");
        } else {
            usure_calc = usure_course * 2;
            temps_calc = dix_total_tour / 1.01135;
            //console.log("stratégie médium et le pneus test hard selectionné");
        }
    } else {
        affichePneus.textContent = "HARD";
        if (pneus == "soft") {
            usure_calc = usure_course / 4;
            temps_calc = dix_total_tour * 1.0226;
            //("stratégie hard et le pneus test soft selectionné");
        } else if (pneus == "medium") {
            usure_calc = usure_course / 2;
            temps_calc = dix_total_tour * 1.01135;
            //("stratégie hard et le pneus test médium selectionné");
        } else {
            usure_calc = usure_course * 1;
            temps_calc = dix_total_tour * 1;
            //("stratégie hard et le pneus test hard selectionné");
        }
    }

    // ----- CALCUL ARRET NECESSAIRE ------
    var compteurPit = 0;
    var pitTyre = document.querySelector('span.pitTyre');
    var pit = document.querySelector('span.pit');

    while(usure_calc > 91) {
        console.log("l'usure calculé est de " + usure_calc + " %");
        //usure_course -= 90;
        usure_calc -= 90;
        compteurPit++;
    }
    // if(usure_course > 91) {
    //     compteurPit++;
    //     //usure_course -= 90;
    //     usure_calc -= 100;
    // }
   
    if(compteurPit >= 1) {
        var pitPluriel = "";
        if(compteurPit == 1) pitPluriel = " arrêt";
        else pitPluriel = " arrêts"
        pitTyre.textContent = "x " + (compteurPit + 1);
        pit.textContent = compteurPit + pitPluriel;
        if(affichePneus.textContent = "SOFT") affichePneus.textContent = "MEDIUM";
        if(affichePneus.textContent = "MEDIUM") affichePneus.textContent = "HARD";

    } else {
        pitTyre.textContent = "";
        pit.textContent = " pas d'arrêt";
    }


// calculé si soft * 2 alors -> si medium * 2 -> hard
console.log("compteur de pit = " + compteurPit)

    usure_calc = Math.ceil(usure_calc);

    //console.log ("nombre de minutes avant tronque: " + temps_calc / 600);
    var minutes = Math.trunc(temps_calc / 600);
    //console.log ("nombre de minutes : " + minutes);
    var secondes = Math.trunc((temps_calc / 600 - minutes) * 60);
    //console.log ("nombre de secondes : " + secondes);
    var dixiemes = Math.ceil((temps_calc / 600 - minutes) * 600 - secondes);
    //console.log ("nombre de dixièmes : " + dixiemes)


    // let number = 5;
    // number.toString().padStart(2, "0") // return "05"
    



    //AFFICHAGE RESULTAT
    document.querySelector('span.tours').textContent = nbr_tours + " tours";
    document.querySelector('span.fuel').textContent = Math.ceil(fuel_total + conso) + " litres";
    //document.querySelector('span.usure').textContent = usure_calc + " % soit " + (100 - usure_calc) + " % restant";
    document.querySelector('span.tps').textContent = minutes + "." + secondes.toString().padStart(2, "0") + "." + dixiemes;


    // ------ CONSOLE.LOG ------
    console.log("---------------")
    console.log("Fuel total : " + fuel_total);
    console.log("le temps au tour de base est " + dix_total_tour + "et le calculé est de " + temps_calc )
    console.log("compteur de pit = " + compteurPit);
    console.log("l'usure en course est de " + usure_course + " %");
    //console.log("l'usure calculé est de " + usure_calc + " %");

    // si usure total depasse 90% -> faire un arret : compteur arret +1 susure total reset

    //MISE A JOUR A CHAQUE FRAPPE DE CLAVIER
    document.addEventListener("keyup",tps);
    document.addEventListener("click",tps);
}