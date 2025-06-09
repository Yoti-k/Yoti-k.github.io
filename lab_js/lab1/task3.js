document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы DOM
    const numberLink = document.getElementById('numberLink');
    const modal = document.getElementById('numberModal');
    const numberInput = document.getElementById('numberInput');
    const submitBtn = document.getElementById('submitNumber');
    const cancelBtn = document.getElementById('cancelInput');
    const closeBtn = document.querySelector('.close');

    // Обработчик клика по ссылке
    numberLink.addEventListener('click', function(event) {
        event.preventDefault();
        modal.style.display = 'block';
        numberInput.value = '';
        numberInput.focus();
    });

    // Обработчик отправки числа
    submitBtn.addEventListener('click', function() {
        const num = parseInt(numberInput.value);
        
        if (num > 100) {
            modal.style.display = 'none';
            window.location.href = numberLink.href;
        } else {
            alert('Пожалуйста, введите число больше 100!');
            numberInput.value = '';
            numberInput.focus();
        }
    });

    // Обработчик отмены ввода
    cancelBtn.addEventListener('click', function() {
        const confirmCancel = confirm('Вы уверены, что хотите отменить ввод числа?');
        if (confirmCancel) {
            modal.style.display = 'none';
        }
    });

    // Закрытие модального окна через крестик
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Закрытие модального окна при клике вне его области
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Обработка нажатия Enter в поле ввода
    numberInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            submitBtn.click();
        }
    });
});