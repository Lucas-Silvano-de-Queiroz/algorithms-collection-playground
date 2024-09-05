/**
 * Realiza uma busca linear em um array para encontrar um elemento específico.
 *
 * @param {Array} arr - O array onde a busca será realizada.
 * @param {*} target - O elemento que está sendo procurado no array.
 * @returns {number} - O índice do elemento encontrado ou -1 se o elemento não for encontrado.
 *
 * @example
 * // Exemplo de uso:
 * const numbers = [3, 1, 4, 1, 5, 9, 2];
 * const target = 5;
 * const result = linearSearch(numbers, target); // Retorna 4
 */

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;  // Retorna o índice do elemento encontrado
        }
    }
    return -1;  // Retorna -1 se o elemento não for encontrado
}
