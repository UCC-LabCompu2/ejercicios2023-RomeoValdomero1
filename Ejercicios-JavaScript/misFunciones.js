/**
 * Conversion de unidddes, de metros, yardas, pies y pulgadas.
 * @method Nombre de la función
 * @param {string} id - El id de los imputs de metros, yardas, pies o pulgadas
 * @param {number} valor - El valor de los imputs de metros, yardas, pies o pulgadas
 * @return
 */
function conversorUnidades(id, valor) {
    if (valor.includes(",")) {
        valor = valor.replace(",", ".");
    }
    if (isNaN(valor)) {
        document.lasUnidades.unid_metro.value = "";
        document.lasUnidades.unid_yarda.value = "";
        document.lasUnidades.unid_pie.value = "";
        document.lasUnidades.unid_pulgada.value = "";
        alert("El valor ingresado es incorrecto");
    } else if (id == "metro") {
        document.lasUnidades.unid_yarda.value = Math.round(1.09361 * valor * 100) / 100;
        document.lasUnidades.unid_pie.value = Math.round(3.28084 * valor * 100) / 100;
        document.lasUnidades.unid_pulgada.value = Math.round(39.3701 * valor * 100) / 100;
    } else if (id == "pulgada") {
        document.lasUnidades.unid_metro.value = Math.round(valor * 0.0254 * 100) / 100;
        document.lasUnidades.unid_pie.value = Math.round(valor * 0.08333 * 100) / 100;
        document.lasUnidades.unid_yarda.value = Math.round(valor * 0.027778 * 100) / 100;
    } else if (id == "pie") {
        document.lasUnidades.unid_metro.value = Math.round(valor * 0.3048) / 100;
        document.lasUnidades.unid_pulgada.value = Math.round(valor * 12 * 100) / 100;
        document.lasUnidades.unid_yarda.value = Math.round(valor * 0.333333 * 100) / 100;
    } else if (id == "yarda") {
        document.lasUnidades.unid_metro.value = Math.round(valor * 0.9144 * 100) / 100;
        document.lasUnidades.unid_pulgada.value = Math.round(valor * 36 * 100) / 100;
        document.lasUnidades.unid_pie.value = Math.round(valor * 3 * 100) / 100;
    }
}

function convertirGR(id) {
    var grad, rad;
    if (id == "grados") {
        grad = document.getElementById("grados").value;
        rad = (grad * Math.PI) / 180;
    } else if (id == "radianes") {
        rad = document.getElementById("radianes").value;
        grad = (rad * 180) / Math.PI;
    }
    console.log(rad)
    console.log(grad)
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}

function mostrar_ocultar(valorMo) {
    if (valorMo == "val_mostrar") {
        document.getElementById("divMo").style.display = 'block';
    } else if (valorMo == "val_ocultar") {
        document.getElementById("divMo").style.display = 'none';
    }
}

function calcularSuma() {
    var num1, num2;
    num1 = document.getElementsByName("sum_num1") [0].value;
    num2 = document.getElementsByName("sum_num2") [0].value;
    document.getElementsByName("sum_total") [0].innerHTML = Number(num1) + Number(num2);
}

function calcularResta() {
    var num1, num2;
    num1 = document.getElementsByName("res_num1") [0].value;
    num2 = document.getElementsByName("res_num2") [0].value;
    document.getElementsByName("res_total") [0].innerHTML = Number(num1) - Number(num2);
}

function calcularMultiplicacion() {
    var num1, num2;
    num1 = document.getElementsByName("mul_num1") [0].value;
    num2 = document.getElementsByName("mul_num2") [0].value;
    document.getElementsByName("mul_total") [0].innerHTML = Number(num1) * Number(num2);
}

function calcularDivision() {
    var num1, num2;
    num1 = document.getElementsByName("div_num1") [0].value;
    num2 = document.getElementsByName("div_num2") [0].value;
    document.getElementsByName("div_total") [0].innerHTML = Number(num1) / Number(num2);
}

function cargarweb() {
    var cant, unidad, urlComp;

    cant = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;

    urlComp = "segundaWeb.html#" + cant + "#" + unidad;
    window.open(urlComp);

}

function cargarRresultado() {
    var urlComp, can, un;

    urlComp = window.location.href.split("/")[5];

    can = urlComp.split("#")[1];
    un = urlComp.split("#")[2];

    document.getElementById("dist").value = can + " " + un;
}

function guardarLocalStorage() {
    let distancia, unidad;
    distancia = document.getElementById('distancia').value;
    unidad = document.getElementsByName('distancia')[0].value;
    localStorage.setItem("distancia_local_storage", distancia);
    localStorage.setItem("unidades_local_storage", unidades);
    window.open('2_wen.html');
}

function cargarLocalStorage() {
    let cantidad, unidad;
    cant = localStorage.getItem("distancia_local_storage");
    un = localStorage.getItem("unidades_local_storage");

    document.getElementById("dist").value = cant + " " + un;
}

function dibujarCirCuad() {
    var canvas = document.getElementById("myCanvas")
    var ctx = canvas.getContext("2d");
    var xMax = canvas.width;
    var yMax = canvas.height;
    var margen = 5;
    ctx.fillStyle = "#333899";
    ctx.fillRect(0 + margen, yMax - 40 - margen, 40, 40);

    ctx.arc(xMax / 2, yMax / 2, 20, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#a17cad";
    ctx.fill();

}

let dibujarCuadriculado = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.font = "10pt Verdana";
    ctx.fillStyle = "blue";

    console.log("Se comenzara a dibujar!!!");
    const xMax = canvas.width;
    const yMax = canvas.height;

    let paso = 20;
    let ejeX = -15;
    let ejeY = -25;
    let despl = 2;

    //Dibujar Líneas Horizontales

    for (let i = 0; i < yMax; i += paso) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(xMax, i);
        ctx.strokeStyle = "#a19797"
        ctx.stroke();
        ctx.fillText(ejeX, xMax / 2 + despl, i + 4);
        ejeX += 1;
        ctx.closePath();
    }

    //Dibujar Líneas Verticales
    for (let i = 0; i < xMax; i += paso) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, yMax);
        ctx.strokeStyle = "#1b73f8"
        ctx.fillText(ejeY, i, yMax / 2 - 6);
        ejeY += 1;
        ctx.stroke();
        ctx.closePath();
    }

    //Eje X
    ctx.beginPath();
    ctx.moveTo(0, yMax / 2);
    ctx.lineTo(xMax, yMax / 2);
    ctx.strokeStyle = "#830303"
    ctx.stroke();
    ctx.closePath();

    //Eje Y
    ctx.beginPath();
    ctx.moveTo(xMax / 2, 0);
    ctx.lineTo(xMax / 2, yMax);
    ctx.strokeStyle = "#830303"
    ctx.stroke();
    ctx.closePath();
}

/*
function dibujarCuadriculado() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var anchoMax = canvas.width;
    var alturaMax = canvas.height;
    //dibujar lineas horizontales
    for (var i = 0; i < alturaMax;) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(anchoMax, i);
        ctx.strokeStyle = "#000000";
        ctx.stroke();
        i = i + 20;
    }
    ctx.closePath();
    //dibujar lineas varticales
    for (var i = 0; i < anchoMax;) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, alturaMax);
        ctx.strokeStyle = "#000000";
        ctx.stroke();
        i = i + 20;
    }
    ctx.closePath();

    //eje x
    ctx.beginPath();
    ctx.moveTo(0, alturaMax / 2);
    ctx.lineTo(anchoMax, alturaMax / 2);
    ctx.strokeStyle = "#0226ff";
    ctx.stroke();
    ctx.closePath();

    //eje y
    ctx.beginPath();
    ctx.moveTo(anchoMax / 2, 0);
    ctx.lineTo(anchoMax / 2, alturaMax);
    ctx.strokeStyle = "#0226ff";
    ctx.stroke();
    ctx.closePath();
}


*/
function dibujarImagen(posX, posY) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width();

    var img = new Image();
    img.src = "images/auto.png";

    img.onload = function () {
        ctx.drawImage(img, posX, posY);
    }
}

x = 0;
dx = 2;

function animarAuto() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;

    var img= new Image();
    img.src = "images/auto.png";

    img.onload = function (){
        ctx.drawImage(img, x, 100)
    }
    if(x>canvas.width){
        x=0;
    }

    x += dx;
}
