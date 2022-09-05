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

//let div = document.getElementById("div");

function drawRoom(width, height) {
  div = document.createElement("div");
  div.className = "test";
  div.style.cssText = `
  width: ${width * 100}px;
  height: ${height * 100}px
`;

  container.appendChild(div);
  drawBoxs(height.value, width.value, div);
}

function drawBoxs(col, row, parent) {
  let table = document.createElement("table");
  table.className = "table";
  for (i = 0; i < row; i++) {
    let tr = document.createElement("tr");

    table.appendChild(tr);

    for (n = 0; n < col; n++) {
      let td = document.createElement("td");
      td.className = "td";
      tr.appendChild(td);
    }
  }
  parent.appendChild(table);
  console.log("test");
}
test2.addEventListener("click", () => {
  draw(width.value, height.value);
});

function draw(width, height) {
  let canvas = document.getElementById("canvas");
  canvas.style.width = `${width * 100}px`;
  canvas.style.height = `${height * 100}px`;
  let ctx = canvas.getContext("2d");

  for (n = 0; n < width / 0.6; n++) {
    //ширина
    for (i = 0; i < height / 0.6; i++) {
      //высота
      ctx.save();
      ctx.fillStyle = "rgb(186, 118, 118)";
      ctx.translate(31 * n, 16 * i);
      ctx.fillRect(0, 0, 30, 15);
      ctx.restore();
    }
  }
}

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
