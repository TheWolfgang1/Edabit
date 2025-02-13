// Fonctions de manipulation de chaînes :
    // fontion qui inverse une chaine donnée
    function reverseString(str) {
        return str.split('').reverse().join('');
    }

    // fonction qui compte les caractères
    function countCharacters(str) {
        return str.length;
    }

    // fonction qui met les mots en majuscule
    function capitalizeWords(str) {
        return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }


// Fonctions de tableau :
    // Rechercher le maximum et le minimum
    function minMax(arr) {
        arr.sort(function(a, b){return(a - b)})
        return [arr[0], arr[arr.length - 1]]
        
    }

    // Somme d'un tableau
    function sumArray(arr) {
        return arr.reduce((sum, num) => sum + num, 0);
      }

    // Filtrer le tableau 
    function filterArray(arr, condition) {
        return arr.filter(condition);
      }


// Fonctions mathématiques
      // Factorielle
      function factorial(n) {
        if (n === 0) {
          return 1;
        }
        return n * factorial(n - 1);
      }

      // Vérification des nombres premiers
      function isPrime(num) {
        if (num <= 1) {
          return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
            return false;
          }
        }
        return true;
      }

      // suite de fibonacci
      function fibonacci(n) {
        const sequence = [0, 1];
        for (let i = 2; i < n; i++) {
          sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
        return sequence;
      }