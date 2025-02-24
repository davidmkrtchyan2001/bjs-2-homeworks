function getArrayParams(...arr) {
  // Инициализация начальных значений
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num < min) min = num;

    if (num > max) max = num;

    sum += num;
  }

  let avg = (sum / arr.length).toFixed(2);

  avg = parseFloat(avg);

  return { min, max, avg };
}

function summElementsWorker(...arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0; // Если массив пустой, возвращаем 0
  }

  const max = Math.max(...arr);
  const min = Math.min(...arr);

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0; // Если массив пустой, возвращаем 0
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num % 2 === 0) {
      sumEvenElement += num;
    } else {
      sumOddElement += num;
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0; // Если массив пустой, возвращаем 0
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num % 2 === 0) {
      sumEvenElement += num;
      countEvenElement += 1;
    }
  }

  if (countEvenElement === 0) {
    return 0; // Возвращаем 0, если чётных элементов нет
  }

  return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const workerResult = func(...arrOfArr[i]);

    if (workerResult > maxWorkerResult) {
      maxWorkerResult = workerResult;
    }
  }
  return maxWorkerResult; // Возвращаем максимальный результат
}
