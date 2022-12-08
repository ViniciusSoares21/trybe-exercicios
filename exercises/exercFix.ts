function getLosangoArea(D: number, d: number): number {
  return (D * d) / 2;
} 

function getTrapezioArea(B: number, b: number, h: number): number {
  return ((B + b) * h) / 2;
}

function circleArea (raio: number): number {
  const raioAOQUadrado = raio * raio
  const PI = 3.14;

  const area = PI * raioAOQUadrado;

 return area;
}