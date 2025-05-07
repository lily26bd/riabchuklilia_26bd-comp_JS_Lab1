function areCoplanar() {
    let a = [
        parseFloat(prompt("Введіть x1:")), 
        parseFloat(prompt("Введіть y1:")), 
        parseFloat(prompt("Введіть z1:"))
    ];
    let b = [
        parseFloat(prompt("Введіть x2:")), 
        parseFloat(prompt("Введіть y2:")), 
        parseFloat(prompt("Введіть z2:"))
    ];
    let c = [
        parseFloat(prompt("Введіть x3:")), 
        parseFloat(prompt("Введіть y3:")), 
        parseFloat(prompt("Введіть z3:"))
    ];
    
    let v1 = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
    let v2 = [c[0] - a[0], c[1] - a[1], c[2] - a[2]];
    
    let scalarTripleProduct = 
        v1[0] * (v2[1] * c[2] - v2[2] * c[1]) -
        v1[1] * (v2[0] * c[2] - v2[2] * c[0]) +
        v1[2] * (v2[0] * c[1] - v2[1] * c[0]);
    
    let result = "Вектори є компланарними.";
    if (scalarTripleProduct !== 0) {
        result = "Вектори не є компланарними.";
    }
    document.getElementById("result").textContent = result;
}
areCoplanar();