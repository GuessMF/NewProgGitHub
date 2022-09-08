//let armstrongPloshad = 0.36; //metr
// сделать валидацию в инпуты чтоб вместо запятой была точка
// поправить размытие при дробных числах 2 и 2,61

let div;
calculate.addEventListener("click", () => {
  a = Number(width.value);
  b = Number(height.value);
  ploshadd.innerHTML = (a * b).toFixed(2) + " m²";

  perimetr.innerHTML = ((a + b) * 2).toFixed(2);
  blocks.innerHTML = ((a * b) / 0.36).toFixed(1);
  visote.innerHTML = (b / 0.6).toFixed(1);
  shirine.innerHTML = (a / 0.6).toFixed(1);

  ostPrav = Number(shirine.innerHTML) - Math.floor(a / 0.6);
  ostatokPrav.innerHTML = (ostPrav * 0.6).toFixed(2);

  ostNiz = Number(visote.innerHTML) - Math.floor(b / 0.6);

  ostatokNiz.innerHTML = (ostNiz * 0.6).toFixed(2);
  ostatokNiz.innerHTML == 0 || ostatokPrav.innerHTML == 0
    ? console.log("")
    : (melkyi.innerHTML =
        " Выс  " +
        ostatokNiz.innerHTML +
        "  " +
        " Шир  " +
        ostatokPrav.innerHTML);

  canvasDraw(width.value, height.value);
});
centred.addEventListener("click", () => {
  canvasDrawCentred(width.value, height.value);
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
  //подписанные
  // ctx.fillStyle = "#00F";
  // ctx.font = "7pt Arial";
  // ctx.fillWidth = 1;
  // ostatokNiz.innerHTML == 0 || ostatokPrav.innerHTML == 0
  //   ? console.log("no")
  //   : ctx.fillText(`${ostatokNiz.innerHTML}`, hor - 10.5, clientHeight);
  // ctx.fillText(`${ostatokPrav.innerHTML}`, hor, ver - 2);
  // сtx.strokeText(`${ostatokPrav.innerHTML}`, ver - 1, clientHeight - 30);
}

function canvasDrawCentred(width, height) {
  //выравненные
  canvas = document.getElementById("canvas");
  canvas.classList = "canv";
  clientWidth = width * 100;
  clientHeight = height * 100;
  canvas.width = clientWidth;
  canvas.height = clientHeight;

  let ctx = canvas.getContext("2d");
  ctx.fillStyle = "rgb(246, 234, 220)";
  ctx.strokeStyle = "black";

  shirLast = 60 + 0.5 + (Math.trunc(width / 0.6) - 1) * 60;
  visotLast = 60 + 0.5 + (Math.trunc(height / 0.6) - 1) * 60;
  kraiVert = (clientWidth - shirLast) / 2;
  kraiHor = (clientHeight - visotLast) / 2;

  for (i = 0; i < Math.trunc(width / 0.6) + 1; i++) {
    for (n = 0; n < Math.trunc(height / 0.6) + 1; n++) {
      ver = kraiHor + 0.75 + n * 60; // шаг между вертикальными линиями
      hor = kraiVert + 0.75 + i * 60; //шаг между горизонтальными линиями
      //firstHor = (clientWidth - hor) / 2;
      console.log(hor);
      ctx.fillRect(0, 0, clientWidth, clientHeight); //фон
      ctx.moveTo(hor, 0);
      ctx.lineTo(hor, clientHeight);
      ctx.moveTo(0, ver);
      ctx.lineTo(clientWidth, ver);
      ctx.stroke();
    }
  }
  console.log(kraiVert + "   kraivert");
  console.log(kraiHor + "   kraiHor");

  console.log(hor);
}
