

function insertionSort(arr) {
    // Parcourir le tableau à partir du deuxième élément
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]; // L'élément actuel à insérer
        let j = i - 1; // L'index de l'élément précédent

        // Déplacer les éléments du tableau qui sont plus grands que la clé d'une position vers la droite
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]; // Décalage des éléments
            j = j - 1; // Décrémenter l'index pour vérifier les éléments précédents
        }

        // Insérer la clé à la position correcte
        arr[j + 1] = key;
    }

    return arr;
}

