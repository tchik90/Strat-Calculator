function showOptions(type) {
    document.getElementById('response').innerHTML = "";
    document.getElementById('sous_virage').classList.add('hidden');
    document.getElementById('sur_virage').classList.add('hidden');
    document.getElementById(type).classList.remove('hidden');

    var affiche_infos = document.getElementById('text_infos');

    switch (type) {
        case 'sous_virage':
            console.log('sous_virage')
            affiche_infos.innerHTML = "<h4>Dans quels types de virages as tu du <strong>sous-virage</strong> ?</h4>"
            break;
        case 'sur_virage':
            console.log('sur_virage')
            affiche_infos.innerHTML = "<h4>Dans quels types de virages as tu du <strong>sur-virage</strong> ?</h4>"
            break;
    }
}

function showResponse(subtype) {
    var affiche_response = document.getElementById('response');

    switch (subtype) {
        case 'sous_lent':
            console.log('sous_lent');
            affiche_response.innerHTML = `<h2>Réglages pour Réduire le Sous-Virage dans les Virages Lents</h2>
            <p>Le sous-virage dans les virages lents peut être dû à plusieurs facteurs. Voici quelques ajustements possibles pour améliorer la réponse de la voiture dans ces conditions :</p>
            <ul>
                <li><strong>Précharge du différentiel :</strong> Réduire la précharge du différentiel pour améliorer la rotation de la voiture dans les virages lents.</li>
                <li><strong>Carrossage des pneus avant :</strong> Augmenter légèrement le carrossage négatif pour améliorer l'adhérence à l'avant.</li>
                <li><strong>Répartition du freinage :</strong> Déplacer légèrement la répartition du freinage vers l'arrière pour aider à la rotation lors de l'entrée en virage.</li>
                <li><strong>Tension des ressorts avant :</strong> Assouplir légèrement les ressorts avant pour améliorer la réponse de la direction.</li>
                <li><strong>Barres anti-roulis avant :</strong> Assouplir légèrement la barre anti-roulis avant pour réduire le sous-virage.</li>
                <li><strong>Angle de l'aileron arrière :</strong> Réduire légèrement l'angle de l'aileron arrière pour diminuer l'appui aérodynamique arrière, ce qui peut aider à la rotation.</li>
                <li><strong>Réglages des suspensions :</strong></li>
                <ul>
                    <li><strong>Slow Bump avant :</strong> Diminuer pour permettre à la suspension de mieux absorber les irrégularités lors de l'entrée en virage.</li>
                    <li><strong>Slow Rebound avant :</strong> Diminuer légèrement pour améliorer l'adhérence des pneus avant.</li>
                    <li><strong>Fast Bump avant :</strong> Diminuer pour une meilleure absorption des chocs rapides, aidant ainsi à maintenir l'adhérence en virage.</li>
                    <li><strong>Fast Rebound avant :</strong> Diminuer légèrement pour stabiliser l'avant de la voiture.</li>
                </ul>
            </ul>
            <p>Pour commencer, je te propose de faire les ajustements suivants :</p>
            <ul>
                <li><strong>Précharge du différentiel :</strong> Réduire de 2 crans.</li>
                <li><strong>Carrossage des pneus avant :</strong> Ajouter 0.5° de carrossage négatif.</li>
                <li><strong>Répartition du freinage :</strong> Déplacer de 1% vers l'arrière.</li>
                <li><strong>Tension des ressorts avant :</strong> Assouplir de 1 cran.</li>
                <li><strong>Barres anti-roulis avant :</strong> Assouplir de 1 cran.</li>
                <li><strong>Angle de l'aileron arrière :</strong> Réduire de 1°.</li>
                <li><strong>Slow Bump avant :</strong> Réduire de 2 clics.</li>
                <li><strong>Slow Rebound avant :</strong> Réduire de 2 clics.</li>
                <li><strong>Fast Bump avant :</strong> Réduire de 2 clics.</li>
                <li><strong>Fast Rebound avant :</strong> Réduire de 2 clics.</li>
            </ul>
            <p>Teste ces ajustements et fais-moi part de tes impressions. Nous pourrons affiner les réglages en fonction de tes retours sur la piste.</p>
        `;
            break;
        case 'sous_moyen':
            console.log('sous_moyen');
            affiche_response.innerHTML = `<h2>Réglages pour Réduire le Sous-Virage dans les Virages Moyens</h2>
            <p>Le sous-virage dans les virages de vitesse moyenne peut être corrigé par plusieurs ajustements. Voici quelques recommandations spécifiques :</p>
            <ul>
                <li><strong>Carrossage des pneus</strong> :
                    <ul>
                        <li>Augmente légèrement le carrossage négatif à l'avant. Cela permet d'augmenter la surface de contact du pneu lors des virages, améliorant ainsi l'adhérence.</li>
                    </ul>
                </li>
                <li><strong>Répartition du freinage</strong> :
                    <ul>
                        <li>Déplace la répartition du freinage légèrement vers l'arrière. Cela peut aider à réduire le sous-virage en entrée de virage en permettant à l'arrière de la voiture de participer davantage au freinage.</li>
                    </ul>
                </li>
                <li><strong>Hauteur de caisse</strong> :
                    <ul>
                        <li>Abaisse légèrement l'avant de la voiture ou augmente légèrement l'arrière. Cela peut aider à améliorer l'équilibre de la voiture et à réduire le sous-virage.</li>
                    </ul>
                </li>
                <li><strong>Barres anti-roulis</strong> :
                    <ul>
                        <li>Ramollir légèrement la barre anti-roulis avant ou durcir légèrement la barre anti-roulis arrière. Cela aide à transférer plus de charge sur l'arrière lors des virages, réduisant ainsi le sous-virage.</li>
                    </ul>
                </li>
                <li><strong>Suspensions</strong> :
                    <ul>
                        <li><strong>Slow Bump/Rebound</strong> : Réduis légèrement le slow bump à l'avant pour permettre à la suspension de mieux absorber les compressions lors des virages.</li>
                        <li><strong>Fast Bump/Rebound</strong> : Ajuste les paramètres de fast bump à l'avant et à l'arrière pour s'assurer que la voiture reste stable sur les bosses, mais garde une légère préférence pour un amortissement plus souple à l'avant pour réduire le sous-virage.</li>
                    </ul>
                </li>
                <li><strong>Précharge du différentiel</strong> :
                    <ul>
                        <li>Diminue légèrement la précharge du différentiel pour permettre à l'arrière de la voiture de pivoter plus librement, réduisant ainsi le sous-virage en milieu de virage.</li>
                    </ul>
                </li>
            </ul>

            <p><strong>Meilleur réglage recommandé :</strong></p>
            <ul>
                <li><strong>Carrossage des pneus</strong> : Augmente le carrossage négatif avant de 0.1 à 0.2 degrés.</li>
                <li><strong>Répartition du freinage</strong> : Déplace la répartition de freinage de 1-2% vers l'arrière.</li>
                <li><strong>Hauteur de caisse</strong> : Abaisse l'avant de 1 à 2 mm ou augmente l'arrière de 1 à 2 mm.</li>
                <li><strong>Barres anti-roulis</strong> : Ramollis la barre anti-roulis avant de 1 clic ou durcis la barre anti-roulis arrière de 1 clic.</li>
                <li><strong>Suspensions (Slow Bump/Rebound)</strong> : Diminue le slow bump à l'avant de 1 à 2 clics.</li>
                <li><strong>Précharge du différentiel</strong> : Diminue la précharge de 1 clic.</li>
            </ul>

            <p>Essaie ces ajustements et reviens vers moi avec tes impressions pour affiner encore davantage les réglages.</p>
            `;
            break;
        case 'sous_rapide':
            console.log('sous_rapide');
            affiche_response.innerHTML = `<h2>Réglages pour Réduire le Sous-Virage dans les Virages Rapides</h2>
            <p>Le sous-virage dans les virages rapides nécessite des ajustements spécifiques pour améliorer la maniabilité et l'équilibre de la voiture. Voici quelques recommandations :</p>
            <ul>
                <li><strong>Carrossage des pneus</strong> :
                    <ul>
                        <li>Augmente le carrossage négatif à l'avant. Cela améliore l'adhérence dans les virages rapides en augmentant la surface de contact du pneu avec la piste.</li>
                    </ul>
                </li>
                <li><strong>Répartition du freinage</strong> :
                    <ul>
                        <li>Déplace légèrement la répartition du freinage vers l'arrière. Cela aide à réduire le sous-virage en permettant à l'arrière de la voiture de participer davantage au freinage.</li>
                    </ul>
                </li>
                <li><strong>Hauteur de caisse</strong> :
                    <ul>
                        <li>Abaisse légèrement l'avant de la voiture ou augmente légèrement l'arrière. Cela améliore l'équilibre aérodynamique de la voiture, réduisant ainsi le sous-virage à haute vitesse.</li>
                    </ul>
                </li>
                <li><strong>Barres anti-roulis</strong> :
                    <ul>
                        <li>Ramollis légèrement la barre anti-roulis avant ou durcis légèrement la barre anti-roulis arrière. Cela permet de transférer plus de charge à l'arrière de la voiture lors des virages, réduisant le sous-virage.</li>
                    </ul>
                </li>
                <li><strong>Suspensions</strong> :
                    <ul>
                        <li><strong>Slow Bump/Rebound</strong> : Réduis légèrement le slow bump à l'avant pour permettre une meilleure absorption des compressions lors des virages rapides.</li>
                        <li><strong>Fast Bump/Rebound</strong> : Ajuste les paramètres de fast bump à l'avant et à l'arrière pour maintenir la stabilité de la voiture sur les bosses tout en favorisant une légère préférence pour un amortissement plus souple à l'avant.</li>
                    </ul>
                </li>
                <li><strong>Angle de l'aileron arrière</strong> :
                    <ul>
                        <li>Augmente légèrement l'angle de l'aileron arrière. Cela génère plus d'appui aérodynamique à l'arrière, améliorant l'adhérence et réduisant le sous-virage dans les virages rapides.</li>
                    </ul>
                </li>
            </ul>

            <p><strong>Meilleur réglage recommandé :</strong></p>
            <ul>
                <li><strong>Carrossage des pneus</strong> : Augmente le carrossage négatif avant de 0.2 à 0.3 degrés.</li>
                <li><strong>Répartition du freinage</strong> : Déplace la répartition de freinage de 2-3% vers l'arrière.</li>
                <li><strong>Hauteur de caisse</strong> : Abaisse l'avant de 1 à 2 mm ou augmente l'arrière de 1 à 2 mm.</li>
                <li><strong>Barres anti-roulis</strong> : Ramollis la barre anti-roulis avant de 1 à 2 clics ou durcis la barre anti-roulis arrière de 1 clic.</li>
                <li><strong>Suspensions (Slow Bump/Rebound)</strong> : Diminue le slow bump à l'avant de 2 à 3 clics.</li>
                <li><strong>Angle de l'aileron arrière</strong> : Augmente l'angle de l'aileron arrière de 1 à 2 degrés.</li>
            </ul>

            <p>Essaie ces ajustements et reviens vers moi avec tes impressions pour affiner encore davantage les réglages.</p>
            `;
            break;
        case 'sur_lent':
            console.log('sur_lent');
            affiche_response.innerHTML = `<h2>Réglages pour Réduire le Survirage dans les Virages Lents</h2>
            <p>Le survirage dans les virages lents peut être dû à plusieurs facteurs. Voici quelques ajustements possibles pour améliorer la stabilité de la voiture dans ces conditions :</p>
            <ul>
                <li><strong>Précharge du différentiel :</strong> Augmenter la précharge du différentiel pour améliorer la traction et la stabilité en sortie de virage.</li>
                <li><strong>Carrossage des pneus arrière :</strong> Augmenter légèrement le carrossage négatif pour améliorer l'adhérence à l'arrière.</li>
                <li><strong>Répartition du freinage :</strong> Déplacer légèrement la répartition du freinage vers l'avant pour éviter le blocage des roues arrière.</li>
                <li><strong>Tension des ressorts arrière :</strong> Assouplir légèrement les ressorts arrière pour améliorer la traction.</li>
                <li><strong>Barres anti-roulis arrière :</strong> Assouplir légèrement la barre anti-roulis arrière pour réduire le survirage.</li>
                <li><strong>Angle de l'aileron arrière :</strong> Augmenter légèrement l'angle de l'aileron arrière pour augmenter l'appui aérodynamique à l'arrière.</li>
                <li><strong>Réglages des suspensions :</strong>
                    <ul>
                        <li><strong>Slow Bump arrière :</strong> Augmenter pour stabiliser la voiture lors des transitions lentes.</li>
                        <li><strong>Slow Rebound arrière :</strong> Augmenter légèrement pour contrôler le mouvement de la suspension.</li>
                        <li><strong>Fast Bump arrière :</strong> Augmenter pour une meilleure absorption des chocs rapides.</li>
                        <li><strong>Fast Rebound arrière :</strong> Augmenter légèrement pour stabiliser l'arrière de la voiture.</li>
                    </ul>
                </li>
            </ul>
            <p>Pour commencer, je te propose de faire les ajustements suivants :</p>
            <ul>
                <li><strong>Précharge du différentiel :</strong> Augmenter de 2 crans.</li>
                <li><strong>Carrossage des pneus arrière :</strong> Ajouter 0.5° de carrossage négatif.</li>
                <li><strong>Répartition du freinage :</strong> Déplacer de 1% vers l'avant.</li>
                <li><strong>Tension des ressorts arrière :</strong> Assouplir de 1 cran.</li>
                <li><strong>Barres anti-roulis arrière :</strong> Assouplir de 1 cran.</li>
                <li><strong>Angle de l'aileron arrière :</strong> Augmenter de 1°.</li>
                <li><strong>Slow Bump arrière :</strong> Augmenter de 2 clics.</li>
                <li><strong>Slow Rebound arrière :</strong> Augmenter de 2 clics.</li>
                <li><strong>Fast Bump arrière :</strong> Augmenter de 2 clics.</li>
                <li><strong>Fast Rebound arrière :</strong> Augmenter de 2 clics.</li>
            </ul>
            <p>Teste ces ajustements et fais-moi part de tes impressions. Nous pourrons affiner les réglages en fonction de tes retours sur la piste.</p>
        `;
            break;
        case 'sur_moyen':
            console.log('sur_moyen');
            affiche_response.innerHTML = `<h2>Réglages pour Réduire le Survirage dans les Virages Moyens</h2>
            <p>Le survirage dans les virages moyens peut être dû à plusieurs facteurs. Voici quelques ajustements possibles pour améliorer la stabilité de la voiture dans ces conditions :</p>
            <ul>
                <li><strong>Précharge du différentiel :</strong> Augmenter la précharge du différentiel pour améliorer la traction et la stabilité en sortie de virage.</li>
                <li><strong>Carrossage des pneus arrière :</strong> Augmenter légèrement le carrossage négatif pour améliorer l'adhérence à l'arrière.</li>
                <li><strong>Répartition du freinage :</strong> Déplacer légèrement la répartition du freinage vers l'avant pour éviter le blocage des roues arrière.</li>
                <li><strong>Tension des ressorts arrière :</strong> Assouplir légèrement les ressorts arrière pour améliorer la traction.</li>
                <li><strong>Barres anti-roulis arrière :</strong> Assouplir légèrement la barre anti-roulis arrière pour réduire le survirage.</li>
                <li><strong>Angle de l'aileron arrière :</strong> Augmenter légèrement l'angle de l'aileron arrière pour augmenter l'appui aérodynamique à l'arrière.</li>
                <li><strong>Réglages des suspensions :</strong>
                    <ul>
                        <li><strong>Slow Bump arrière :</strong> Augmenter pour stabiliser la voiture lors des transitions lentes.</li>
                        <li><strong>Slow Rebound arrière :</strong> Augmenter légèrement pour contrôler le mouvement de la suspension.</li>
                        <li><strong>Fast Bump arrière :</strong> Augmenter pour une meilleure absorption des chocs rapides.</li>
                        <li><strong>Fast Rebound arrière :</strong> Augmenter légèrement pour stabiliser l'arrière de la voiture.</li>
                    </ul>
                </li>
            </ul>
            <p>Pour commencer, je te propose de faire les ajustements suivants :</p>
            <ul>
                <li><strong>Précharge du différentiel :</strong> Augmenter de 2 crans.</li>
                <li><strong>Carrossage des pneus arrière :</strong> Ajouter 0.5° de carrossage négatif.</li>
                <li><strong>Répartition du freinage :</strong> Déplacer de 1% vers l'avant.</li>
                <li><strong>Tension des ressorts arrière :</strong> Assouplir de 1 cran.</li>
                <li><strong>Barres anti-roulis arrière :</strong> Assouplir de 1 cran.</li>
                <li><strong>Angle de l'aileron arrière :</strong> Augmenter de 1°.</li>
                <li><strong>Slow Bump arrière :</strong> Augmenter de 2 clics.</li>
                <li><strong>Slow Rebound arrière :</strong> Augmenter de 2 clics.</li>
                <li><strong>Fast Bump arrière :</strong> Augmenter de 2 clics.</li>
                <li><strong>Fast Rebound arrière :</strong> Augmenter de 2 clics.</li>
            </ul>
            <p>Teste ces ajustements et fais-moi part de tes impressions. Nous pourrons affiner les réglages en fonction de tes retours sur la piste.</p>
        `;
            break;
        case 'sur_rapide':
            console.log('sur_rapide');
            affiche_response.innerHTML = `<h2>Réglages pour Réduire le Survirage dans les Virages Rapides</h2>
            <p>Le survirage dans les virages rapides peut être dû à plusieurs facteurs. Voici quelques ajustements possibles pour améliorer la stabilité de la voiture dans ces conditions :</p>
            <ul>
                <li><strong>Précharge du différentiel :</strong> Augmenter la précharge du différentiel pour améliorer la traction et la stabilité en sortie de virage.</li>
                <li><strong>Carrossage des pneus arrière :</strong> Augmenter légèrement le carrossage négatif pour améliorer l'adhérence à l'arrière.</li>
                <li><strong>Répartition du freinage :</strong> Déplacer légèrement la répartition du freinage vers l'avant pour éviter le blocage des roues arrière.</li>
                <li><strong>Tension des ressorts arrière :</strong> Assouplir légèrement les ressorts arrière pour améliorer la traction.</li>
                <li><strong>Barres anti-roulis arrière :</strong> Assouplir légèrement la barre anti-roulis arrière pour réduire le survirage.</li>
                <li><strong>Angle de l'aileron arrière :</strong> Augmenter légèrement l'angle de l'aileron arrière pour augmenter l'appui aérodynamique à l'arrière.</li>
                <li><strong>Réglages des suspensions :</strong>
                    <ul>
                        <li><strong>Slow Bump arrière :</strong> Augmenter pour stabiliser la voiture lors des transitions lentes.</li>
                        <li><strong>Slow Rebound arrière :</strong> Augmenter légèrement pour contrôler le mouvement de la suspension.</li>
                        <li><strong>Fast Bump arrière :</strong> Augmenter pour une meilleure absorption des chocs rapides.</li>
                        <li><strong>Fast Rebound arrière :</strong> Augmenter légèrement pour stabiliser l'arrière de la voiture.</li>
                    </ul>
                </li>
            </ul>
            <p>Pour commencer, je te propose de faire les ajustements suivants :</p>
            <ul>
                <li><strong>Angle de l'aileron arrière :</strong> Augmenter de 1 à 2 crans.</li>
                <li><strong>Précharge du différentiel :</strong> Augmenter de 2 crans.</li>
                <li><strong>Carrossage des pneus arrière :</strong> Ajouter 0.5° de carrossage négatif.</li>
                <li><strong>Répartition du freinage :</strong> Déplacer de 1% vers l'avant.</li>
                <li><strong>Tension des ressorts arrière :</strong> Assouplir de 1 cran.</li>
                <li><strong>Barres anti-roulis arrière :</strong> Assouplir de 1 cran.</li>
                <li><strong>Slow Bump arrière :</strong> Augmenter de 2 clics.</li>
                <li><strong>Slow Rebound arrière :</strong> Augmenter de 2 clics.</li>
                <li><strong>Fast Bump arrière :</strong> Augmenter de 2 clics.</li>
                <li><strong>Fast Rebound arrière :</strong> Augmenter de 2 clics.</li>
            </ul>
            <p>Teste ces ajustements et fais-moi part de tes impressions. Nous pourrons affiner les réglages en fonction de tes retours sur la piste.</p>
        `;
            break;
    }
}