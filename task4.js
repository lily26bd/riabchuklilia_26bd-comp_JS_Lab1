function factorizeNumber() {
    let n = parseInt(prompt("Введіть натуральне число:"));
    if (isNaN(n) || n < 1) {
        alert("n має бути натуральним числом");
        return;
    }
    let factors = [];
    let divisor = 2;
    let temp = n;
    
    while (temp > 1) {
        while (temp % divisor === 0) {
            factors.push(divisor);
            temp /= divisor;
        }
        divisor++;
    }
    document.getElementById("result").textContent = `Прості множники числа: ${factors.join(', ')}`;
}
factorizeNumber();