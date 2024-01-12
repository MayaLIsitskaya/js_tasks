//Task 1: Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива.
const arrayIntger = [1, 2, 5, 8, 9, 12, 14, 15, 16, 19, 20];
const sumSquare = arrayIntger
    .filter((element) => element % 2)
    .reduce((num, element) => num + Math.sqrt(element), 0);
console.log(sumSquare);

//Task 2: Напишите функцию, которая заполняет новый массив предоставленным значением. Ожидаемый результат: (3, 'a') => ['a', 'a', 'a']

const arrayFilled = function (arrayLength, value) {
    return new Array(arrayLength).fill(value);
}
console.log(arrayFilled(3, 'a'));


//Task 3: Напишите функцию, которая разворачивает массив в обратном порядке. Пожалуйста, не используйте array.reverse(). Ожидаемый результат: [1, 2, 3] => [3, 2, 1]

const currectArray = [1, 2, 3];
const reversedArray = currectArray.map((element, index, arr) => arr[arr.length - 1 - index]);
console.log(reversedArray);


//Task 4: Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null. Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]

const notFilterdArray = [0, 1, false, 2, undefined, '', 3, null];
const filteredArray = notFilterdArray.filter((element) => element !== false && element !== undefined && element !== '' && element !== 0 && element !== null);
console.log(filteredArray);


//Task 5: Напишите функцию, которая возвращает объект, составленный из значений вложенных массивов. Первое элемент массива - ключ, второй - зачение. Ожидаемый результат: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
function createObjectFromArrays(inputArrays){
    let result;

    result = inputArrays.reduce(function (resultObject, subArray) {
        let subArrayKey = subArray[0];
        let subArrayValue = subArray[1];

        resultObject[subArrayKey] = subArrayValue;

        return resultObject;
    }, {});

    return result;
}

const res = createObjectFromArrays([['a',1],['b', 2]])
console.log(res);


//Task 6: Напишите функцию, которая убирает повторяющиеся значения. Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]

const filteredArraySecond = array => array.filter((el, index) => array.indexOf(el) === index);
const arrayWithoutFilter = [1, 2, 3, 1, 2];
console.log(filteredArraySecond(arrayWithoutFilter));


//Task 7: Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны. Ожидаемый результат: ([1, 2, 3], [1, 2, 3]) => true

function arraysAreEqual(firstArray, secondArray){
    if (firstArray.length !== secondArray.length) {
        return false;
    }

    return firstArray.every(function (item) {
        return secondArray.includes(item);
    });
}

result = arraysAreEqual([1,2,3], [1,2,3])
console.log(result);


//Task 8: Напишите функцию, которая преобразует глубокий массив в одномерный. Ожидаемый результат: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]. не используйте array.flat()

let deepArray =[1, 2, [3, 4, [5]]];
function createDimensionalArrayFromDeepArray(array) {
    let resultArray = [];

    for (let i = 0; i < array.length; i++) {
        if (!Array.isArray(array[i])) {
            resultArray.push(array[i]);
        } else {
            resultArray = resultArray.concat(createDimensionalArrayFromDeepArray(array[i]));
        }
    }
    return resultArray;
}

console.log(createDimensionalArrayFromDeepArray(deepArray));

//Task 9: Напишите функцию, которая разделяет массив на части заданного размера. Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]

function splicedArray(array, size) {
    const result = [];

    while (array.length > 0) {
        const chunk = array.splice(0, size);
        result.push(chunk);
    }
    return result;
}

const array = [1, 2, 3, 4, 5];
console.log(splicedArray(array, 2));


//Task 10: Преобразовать первый символ строки в нижний регистр

var str="Пример строки";
function capitalizeFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

document.writeln(capitalizeFirstLetter(str)); // пример строки



