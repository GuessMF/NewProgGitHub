let armstrongPloshad = 0.36; //sm
// сделать валидацию в инпуты чтоб вместо запятой была точка

//расчитывает  площадь комнаты и рисует ее
//нужно чтобы считал и раставлял блоки относительно ширины комнаты и рисовал это поверх комнаты
calculate.addEventListener("click", () => {
  ploshad = width.value * height.value; //площадь комнаты
  rezultat = ploshad / armstrongPloshad; // количество плит
  result.innerHTML = rezultat.toFixed(1); // результат округленный
  console.log("blocks" + rezultat);
  console.log("ploshad" + ploshad);

  drawMaze(height.value, width.value, div);
});

let div = document.getElementById("container");

function drawMaze(col, row, parent) {
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

// test.addEventListener("click", () => {
//   drawMaze(height.value, width.value, div);
// });
