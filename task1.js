function reverseNumber() {
    let num = prompt("Введіть тризначне натуральне число:");
    if (num.length !== 3 || isNaN(num)) {
        alert("Не коректне значення");
        return;
    }
    let reversed = num.split('').reverse().join('');
    document.getElementById("result").textContent = `Результат: число в зворотньому порядку: ${reversed}`;
}
reverseNumber();