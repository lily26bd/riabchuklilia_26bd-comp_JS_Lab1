function countFourDigitNumbers() {
    let k = parseInt(prompt("Введіть значення k:"));
    if (isNaN(k) || k < 1 || k > 36) {
        alert("k має бути ціле число від 1 до 36");
        return;
    }
    let count = 0;
    for (let num = 1000; num <= 9999; num++) {
        let sum = String(num).split('').reduce((acc, digit) => acc + Number(digit), 0);
        if (sum === k) {
            count++;
        }
    }
    document.getElementById("result").textContent = `Кількість чотиризначних чисел, сума цифр яких дорівнює ${k}: ${count}`;
}
countFourDigitNumbers();