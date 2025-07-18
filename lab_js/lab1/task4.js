document.addEventListener('DOMContentLoaded', function() {
    const findPrimesButton = document.getElementById('findPrimesButton');
    const numberInput = document.getElementById('numberInput');
    const resultElement = document.getElementById('result');

    // Основная функция для поиска простых чисел
    function findPrimes() {
        const n = parseInt(numberInput.value);
        
        if (isNaN(n) || n < 2) {
            resultElement.textContent = "Пожалуйста, введите число больше 1";
            return;
        }
        
        const primes = [];
        
        // Функция проверки на простое число
        function isPrime(num) {
            for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
                if (num % i === 0) return false;
            }
            return num > 1;
        }
        
        // Находим все простые числа от 2 до n
        for (let i = 2; i <= n; i++) {
            if (isPrime(i)) {
                primes.push(i);
            }
        }
        
        // Выводим в консоль
        console.log("Простые числа от 2 до " + n + ":");
        console.log(primes.join(", "));
        
        // Выводим на страницу
        resultElement.innerHTML = `
            <p>Простые числа от 2 до ${n}:</p>
            <p><strong>${primes.join(", ")}</strong></p>
            <p>Результат также выведен в консоль.</p>
        `;
    }

    // Обработчик для кнопки
    findPrimesButton.addEventListener('click', findPrimes);
    
    // Обработчик для нажатия Enter в поле ввода
    numberInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            findPrimes();
        }
    });
});