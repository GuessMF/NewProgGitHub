let armstrongPloshad = 0.36; //metr
// сделать валидацию в инпуты чтоб вместо запятой была точка

//расчитывает  площадь комнаты и рисует ее
//нужно чтобы считал и раставлял блоки относительно ширины комнаты и рисовал это поверх комнаты

let div;
calculate.addEventListener("click", () => {
  ploshad = width.value * height.value; //площадь комнаты
  rezultat = ploshad / armstrongPloshad; // количество плит
  result.innerHTML = rezultat.toFixed(1); // результат округленный
  console.log("blocks" + rezultat);
  console.log("ploshad" + ploshad);

  drawRoom(width.value, height.value);
  drawBoxs(height.value, width.value, div);
});

function drawRoom(width, height) {
  div = document.createElement("div");
  div.className = "test";
  div.style.cssText = `
  width: ${width * 90}px;
  height: ${height * 90}px
`;

  container.appendChild(div);
  drawBoxs(height.value, width.value, div);
}

function drawBoxs(col, row, parent) {
  let table = document.createElement("table");
  table.className = "table";
  for (i = 0; i < row / 0.6; i++) {
    let tr = document.createElement("tr");

    table.appendChild(tr);

    for (n = 0; n < col / 0.6; n++) {
      let td = document.createElement("td");
      td.className = "td";
      tr.appendChild(td);
    }
  }
  parent.appendChild(table);
}
test2.addEventListener("click", () => {
  draw(width.value, height.value);
});

function draw(width, height) {
  let canvas = document.getElementById("canvas");
  canvas.style.width = `${width * 100}px`;
  canvas.style.height = `${height * 100}px`;
  let ctx = canvas.getContext("2d");
  ctx.fillStyle = "rgb(186, 118, 118)";
  one = 179 / width;
  two = 89 / width;
  for (i = 0; i < width / 0.6; i++) {
    for (n = 0; n < height / 0.6; n++) {
      ctx.fillRect(i * (one + 1), n * (two + 1), one, two);
    }
  }

  ploshad = width * height;
  rezultat = ploshad / armstrongPloshad; // количество плит
  result.innerHTML = rezultat.toFixed(1);
}

function newnewDraw(width, height) {
  let canvas = document.getElementById("canvas");
  canvas.classList = "canv";
  clientWidth = width * 100;
  clientHeight = height * 100;
  canvas.width = clientWidth;
  canvas.height = clientHeight;
  // canvas.style.width = `${width * 100}px`;
  // canvas.style.height = `${height * 100}px`;
  let ctx = canvas.getContext("2d");
  ctx.fillStyle = "white";
  // ctx.lineWidth = 0.1;
  ctx.strokeStyle = "black";

  // st1 = (width * 100) / Math.trunc(width / 0.6);
  //console.log(startin);
  // num = 18 / width;
  // st1 = num * 10;
  // st2 = st1;
  // st1 = 60;
  // st2 = 60;

  for (i = 0; i < Math.trunc(width / 0.6); i++) {
    for (n = 0; n < Math.trunc(height / 0.6); n++) {
      ver = 60 + 0.5 + n * 60; // шаг между вертикальными линиями
      hor = 60 + 0.5 + i * 60; //шаг между горизонтальными линиями
      ctx.moveTo(hor, 0);
      ctx.lineTo(hor, clientHeight);
      ctx.moveTo(0, ver);
      ctx.lineTo(clientWidth, ver);
      ctx.stroke();
    }
  }
}
test.addEventListener("click", () => {
  //let here = document.getElementById("here");
  // here.classList = "canv";

  //canvas.classList.add = "canv";
  newnewDraw(width.value, height.value);
});
// test.addEventListener("click", () => {
//   drawMaze(height.value, width.value, div);
// });

//рабочий
/*
function draw(width, height) {
  let canvas = document.getElementById("canvas");
  canvas.style.width = "500px";
  canvas.style.height = "500px";
  let ctx = canvas.getContext("2d");

  for (n = 0; n < width / 0.6; n++) {
    //ширина
    for (i = 0; i < height / 0.6; i++) {
      //высота
      ctx.save();
      ctx.fillStyle = "rgb(186, 118, 118)";
      ctx.translate(11 * n, 6 * i);
      ctx.fillRect(0, 0, 10, 5);
      ctx.restore();
    }
  }
}
*/

///работает при 10х10
// for (n = 0; n < 10; n++) {
//   //ширина
//   for (i = 0; i < 10; i++) {
//     //высота
//     ctx.save();
//     ctx.fillStyle = "black";
//     ctx.translate(20 * n, 10 * i);
//     ctx.fillRect(5, 2, 10, 5);
//     ctx.restore();
//   }
// }

//  ctx.beginPath();
// ctx.moveTo(25, 50);
// ctx.lineTo(150, 75);
// ctx.lineTo(150, 25);
// ctx.lineTo(25, 50);
// ctx.stroke();

// for (i = 0; i < 4; i++) {
//   ctx.save();
//   ctx.fillRect(0, 0, 300, 300);
//   ctx.moveTo(60.5 + i * 60, 0);
//   ctx.lineTo(60.5 + i * 60, 400);
//   ctx.stroke();
// }
// for (n = 0; n < 4; n++) {
//   ctx.save();
//   ctx.moveTo(0, 29.5 + n * 30);
//   ctx.lineTo(300, 29.5 + n * 30);
//   ctx.stroke();
// }

//рабоч
// let canvas = document.getElementById("canvas");
// canvas.style.width = "300px";
// canvas.style.height = "300px";
// let ctx = canvas.getContext("2d");
// ctx.fillStyle = "rgb(186, 118, 118)";
// one = 179 / width;
// two = 89 / width;

// for (i = 0; i < 4; i++) {
//   for (n = 0; n < 4; n++) {
//     ctx.fillRect(0, 0, 300, 300);
//     ctx.moveTo(60.5 + i * 60, 0);
//     ctx.lineTo(60.5 + i * 60, 400);
//     ctx.moveTo(0, 29.5 + n * 30);
//     ctx.lineTo(300, 29.5 + n * 30);
//     ctx.stroke();
//   }
// }

/// WOOORRKKKIIINNGGGG
// for (i = 0; i < Math.trunc(width / 0.6); i++) {
//   for (n = 0; n < Math.trunc(height / 0.6); n++) {
//     vertik = st2 + 0.5 + n * st2;
//     horizontal = st1 + 0.5 + i * st1;
//     if (Number.isInteger(vertik) == false) {
//       ctx.fillRect(0, 0, width * 100, height * 100);
//       ctx.moveTo(horizontal, 0);
//       ctx.lineTo(horizontal, 400);
//       ctx.moveTo(0, vertik);
//       ctx.lineTo(300, vertik);
//       ctx.stroke();
//     } else if (Number.isInteger(vertik) == true || Number.isInteger(horizontal)== true ) {
//       vertik = vertik + 0.5;
//       horizontal = horizontal + 0.5;
//       ctx.fillRect(0, 0, width * 100, height * 100);
//       ctx.moveTo(horizontal, 0);
//       ctx.lineTo(horizontal, 400);
//       ctx.moveTo(0, vertik);
//       ctx.lineTo(300, vertik);
//       ctx.stroke();
//     } else if(Number.isInteger(horizontal)== false ){

//     }

//   }

//// tochno rabocheee

// function newnewDraw(width, height) {
//   let canvas = document.getElementById("canvas");
//   clientWidth = width * 100;
//   clientHeight = height * 100;
//   canvas.width = clientWidth;
//   canvas.height = clientHeight;
//   // canvas.style.width = `${width * 100}px`;
//   // canvas.style.height = `${height * 100}px`;
//   let ctx = canvas.getContext("2d");
//   ctx.fillStyle = "white";
//   // ctx.lineWidth = 0.1;
//   ctx.strokeStyle = "black";

//   // st1 = (width * 100) / Math.trunc(width / 0.6);
//   //console.log(startin);
//   num = 18 / width;
//   st1 = num * 10;
//   st2 = st1;

//   for (i = 0; i < Math.trunc(width / 0.6); i++) {
//     for (n = 0; n < Math.trunc(height / 0.6); n++) {
//       vertik = st2 + 0.5 + n * st2;
//       horizontal = st1 + 0.5 + i * st1;
//       ctx.lineWidth = 0.1;

//       Number.isInteger(vertik) == true
//         ? (vertik = vertik + 0.5)
//         : (vertik = vertik);
//       Number.isInteger(horizontal) == true
//         ? (horizontal = horizontal + 0.5)
//         : (horizontal = horizontal);
//       ctx.fillRect(0, 0, width * 100, height * 100);
//       ctx.moveTo(horizontal, 0);
//       ctx.lineTo(horizontal, 400);
//       ctx.moveTo(0, vertik);
//       ctx.lineTo(300, vertik);
//       ctx.stroke();
//     }
//     console.log(width / 0.6);
//   }
// }
// test.addEventListener("click", () => {
//   newnewDraw(width.value, height.value);
// });

//// tochno rabochee
