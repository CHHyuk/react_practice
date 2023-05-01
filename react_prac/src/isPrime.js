console.clear();

// 소수판별함수
function isPrimeNumber(no) {
    for (let i = 2; i < no; i++) {
        if ( i * i > no) {
            break
        }

        if (no % i == 0) {
            return false;
        }
    }

    return true;
}

// max까지의 소수 리스트
function getPrimeNumbers(max) {
    const primeNumbers = [];

    for (let i = 2; i <= max; i++) {
        if (isPrimeNumber(i)) {
            primeNumbers.push(i);
        }
    }

    return primeNumbers;
}

// max까지의 소수 리스트의 갯수
function getPrimeNumbersCount(max) {
    return getPrimeNumbers(max).length;
}