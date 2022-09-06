//let armstrongPloshad = 0.36; //metr
// сделать валидацию в инпуты чтоб вместо запятой была точка

//расчитывает  площадь комнаты и рисует ее
//нужно чтобы считал и раставлял блоки относительно ширины комнаты и рисовал это поверх комнаты

let div;
calculate.addEventListener("click", () => {
  a = Number(width.value);
  b = Number(height.value);
  ploshadd.innerHTML = a * b + " m²";

  perimetr.innerHTML = (a + b) * 2;
  blocks.innerHTML = ((a * b) / 0.36).toFixed(1);
  visote.innerHTML = (a / 0.6).toFixed(1);
  shirine.innerHTML = (b / 0.6).toFixed(1);

  canvasDraw(width.value, height.value);
});

function canvasDraw(width, height) {
  canvas = document.getElementById("canvas");
  canvas.classList = "canv";
  clientWidth = width * 100;
  clientHeight = height * 100;
  canvas.width = clientWidth;
  canvas.height = clientHeight;

  let ctx = canvas.getContext("2d");
  ctx.fillStyle = "rgb(246, 234, 220)";
  ctx.strokeStyle = "black";
  //без центровки
  for (i = 0; i < Math.trunc(width / 0.6); i++) {
    for (n = 0; n < Math.trunc(height / 0.6); n++) {
      ver = 60 + 0.5 + n * 60; // шаг между вертикальными линиями
      hor = 60 + 0.5 + i * 60; //шаг между горизонтальными линиями
      ctx.fillRect(0, 0, clientWidth, clientHeight);
      ctx.moveTo(hor, 0);
      ctx.lineTo(hor, clientHeight);
      ctx.moveTo(0, ver);
      ctx.lineTo(clientWidth, ver);
      ctx.stroke();
    }
  }
  ctx.fillStyle = "#00F";
  ctx.strokeStyle = "#F00";
  ctx.font = "10pt Arial";
  ctx.fillText("Fill text", 20.5, 50.5);
  ctx.font = "bold 10px sans-serif";
  ctx.strokeText("Stroke text", 20, 100);
}
