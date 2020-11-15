function bubbleSort (array) {
    for (let n = 0; n < array.length; n++) {
        for (let i = 0; i < array.length - 1 - n; i++) {
            if (array[i] > array[i + 1]) {
                const buff = array[i]
                array[i] = array[i + 1]
                array[i + 1] = buff
            }
        }
    }

    return array
}

function maxElement (arr) {
    let m = [0]
    for (let i = 1; i <= arr.length -1; i++ ) {
        if (arr[i] > m)
            m = arr[i]
    }
    return m
}

function minElement (arr) {
    let m = [0]
    for (let i = 0; i <= arr.length -1; i++ ) {
        if (arr[i] < m)
            m = arr[i]
    }
    return m
}

const length = prompt('Введите количество эл-ов в массиве: ')
alert('Количество эл-ов в массиве: ' + length)

const arr = []

for (let i=0; i<length; i++){
	arr[i] = parseInt(prompt('Введите целое число: '))	
}
console.log('Введённый массив: arr = [' + arr + ' ]')

console.log('Sort array: arr = [' + bubbleSort(arr) + ' ]')
console.log('Max element: ' + maxElement(arr))
console.log('minElement: ' + minElement(arr))

 let summ = 0
for(let i = 0; i < length; i++){
    summ += arr[i] 
}
console.log('Sum of element: ' + summ)