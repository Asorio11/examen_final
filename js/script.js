//func
function calcularTriangulo() {
  const ladoA = parseFloat(document.getElementById("ladoA").value) || 0;
  const ladoB = parseFloat(document.getElementById("ladoB").value) || 0;
  const ladoC = parseFloat(document.getElementById("ladoC").value) || 0;


//perimetro
  const perimetro = ladoA + ladoB + ladoC;
  const semiperimetro = perimetro / 2;

//area
  const area = Math.sqrt(
    semiperimetro *
      (semiperimetro - ladoA) *
      (semiperimetro - ladoB) *
      (semiperimetro - ladoC)
  );

//angulos
  const anguloA =
    (Math.acos((ladoB ** 2 + ladoC ** 2 - ladoA ** 2) / (2 * ladoB * ladoC)) * 180) /
    Math.PI;
  const anguloB =
    (Math.acos((ladoA ** 2 + ladoC ** 2 - ladoB ** 2) / (2 * ladoA * ladoC)) * 180) /
    Math.PI;
  const anguloC = 180 - anguloA - anguloB;

//altura
  const alturaA = (2 * area) / ladoA;
  const alturaB = (2 * area) / ladoB;
  const alturaC = (2 * area) / ladoC;

//medianas
  const medianaA = 0.5 * Math.sqrt(2 * ladoB ** 2 + 2 * ladoC ** 2 - ladoA ** 2);
  const medianaB = 0.5 * Math.sqrt(2 * ladoA ** 2 + 2 * ladoC ** 2 - ladoB ** 2);
  const medianaC = 0.5 * Math.sqrt(2 * ladoA ** 2 + 2 * ladoB ** 2 - ladoC ** 2);

//bisectriz
  const bisectrizA =
    (2 * ladoB * ladoC) / (ladoB + ladoC) * Math.cos((anguloA * Math.PI) / 360);
  const bisectrizB =
    (2 * ladoA * ladoC) / (ladoA + ladoC) * Math.cos((anguloB * Math.PI) / 360);
  const bisectrizC =
    (2 * ladoA * ladoB) / (ladoA + ladoB) * Math.cos((anguloC * Math.PI) / 360);

//resultados
  document.getElementById("anguloA").	textContent = anguloA.toFixed(2);
  document.getElementById("anguloB").	textContent = anguloB.toFixed(2);
  document.getElementById("anguloC").	textContent = anguloC.toFixed(2);
  document.getElementById("alturaA").	textContent = alturaA.toFixed(2);
  document.getElementById("alturaB").	textContent = alturaB.toFixed(2);
  document.getElementById("alturaC").	textContent = alturaC.toFixed(2);
  document.getElementById("medianaA").	textContent = medianaA.toFixed(2);
  document.getElementById("medianaB").	textContent = medianaB.toFixed(2);
  document.getElementById("medianaC").	textContent = medianaC.toFixed(2);
  document.getElementById("bisectrizA").textContent = bisectrizA.toFixed(2);
  document.getElementById("bisectrizB").textContent = bisectrizB.toFixed(2);
  document.getElementById("bisectrizC").textContent = bisectrizC.toFixed(2);
  document.getElementById("perimetro"). textContent = perimetro.toFixed(2);
  document.getElementById("area").		textContent = area.toFixed(2);

//triangulo cancvas
  dibujarTriangulo(ladoA, ladoB, ladoC);
}


//func triangulo
function dibujarTriangulo(a, b, c) {
  const canvas = document.getElementById("triangleCanvas");
  const ctx = canvas.getContext("2d");

//esc_posici
  const escala = 10;
  const x1 = 50,
    y1 = 100; //partida
  const x2 = x1 + b * escala, //punto_2
    y2 = y1;
  const angulo = Math.acos((b ** 2 + c ** 2 - a ** 2) / (2 * b * c)); //ang_rad
  const x3 = x1 + c * escala * Math.cos(angulo); //tercer punto
  const y3 = y1 - c * escala * Math.sin(angulo);

//dibujo de triangulo
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.closePath();
  ctx.strokeStyle = "#0073e6";
  ctx.lineWidth = 2;
  ctx.stroke();

//lados
  ctx.fillStyle = "#000";
  ctx.font = "15px Arial";
  ctx.fillText("a = " + a, (x3 + x1) / 2 - 20, (y3 + y1) / 2 - 10);
  ctx.fillText("b = " + b, (x1 + x2) / 2, y1 + 15);
  ctx.fillText("c = " + c, (x3 + x2) / 2 + 10, (y3 + y2) / 2);
}
