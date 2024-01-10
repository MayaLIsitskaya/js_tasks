//Task 1: Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива.
const arrayIntger = [1, 2, 5, 8, 9, 12, 14, 15, 16, 19, 20];
const integerFilterSum = arrayIntger
    .filter((element) => element % 2)
    .reduce((num, element) => num + Math.sqrt(element), 0);
console.log(integerFilterSum);



//Task 2: Напишите функцию, которая заполняет новый массив предоставленным значением. Ожидаемый результат: (3, 'a') => ['a', 'a', 'a']
const fillArray = (arrayLength, value) => {
  return new Array(arrayLength).fill(value);
}
console.log(fillArray(3,'a'));



//Task 3: Напишите функцию, которая разворачивает массив в обратном порядке. Пожалуйста, не используйте array.reverse(). Ожидаемый результат: [1, 2, 3] => [3, 2, 1]
function sortArray (a, b) {
    if (a < b)
        return 1;
    if (a > b)
        return -1;
    return 0
}

const arrayCorrect = [1, 2, 3];
console.log(arrayCorrect.sort(sortArray));

//Task 4: Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null. Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
//Task 5: Напишите функцию, которая возвращает объект, составленный из значений вложенных массивов. Первое элемент массива - ключ, второй - зачение. Ожидаемый результат: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
//Task 6: Напишите функцию, которая убирает повторяющиеся значения. Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]

const arrayRepeated = [1, 2, 3, 1, 2];
const arrayNotRepeated = array => array.filter((element, index) => array.indexOf(element) === index);
console.log(arrayNotRepeated(arrayRepeated));

//Task 7: Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны. Ожидаемый результат: ([1, 2, 3], [1, 2, 3]) => true
//Task 8: Напишите функцию, которая преобразует глубокий массив в одномерный. Ожидаемый результат: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]. не используйте array.flat()
//Task 9: Напишите функцию, которая разделяет массив на части заданного размера. Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
//Task 10: Преобразовать первый символ строки в нижний регистр

var str="Пример строки";
function capitalizeFirstLetter(str) {
// ...ваш код...
};
document.writeln(capitalizeFirstLetter(str)); // пример строки
