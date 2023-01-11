"use strict";
function getLosangoArea(D, d) {
    return (D * d) / 2;
}

function getTrapezioArea(B, b, h) {
    return ((B + b) * h) / 2;
}
function circleArea(raio) {
    const raioAOQUadrado = raio * raio;
    const PI = 3.14;
    const area = PI * raioAOQUadrado;
    return area;
}
