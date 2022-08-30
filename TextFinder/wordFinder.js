let bodyy = document.body.innerHTML;
let stat = false;
let foundButton = document.getElementById("found");

// стата Фолс, после поиска буквы стата Тру, жмем на инпут, проверяется на стату, если она Тру, меняем на изначальную страницу
function newPage() {
  document.body.innerHTML = bodyy;
}

foundButton.addEventListener("click", () => {
  newCheck();
  console.log(stat);
});

input.addEventListener("click", () => {
  if (stat == true) {
    newPage();
  }
  console.log(stat);
});

function newCheck() {
  let letterToFind = document.getElementById("input").value; //буква введенная в инпут

  let massives = []; //добавление всех спанов в массив
  let spansLength = document.getElementsByTagName("span").length; // колличество спанов в документе
  let body, mass;
  let words = []; //для отслеживания колличества изменений
  let changed = document.getElementById("changeMe");

  for (i = 1; i < spansLength + 1; i++) {
    body = document.getElementById(i); //все имеющиеся спаны (в скобках айди)
    mass = body.innerHTML.split(""); // посимвольное добавление в массив каждого спана
    massives.push(mass);

    for (i = 0; i < massives.length; i++) {
      for (n = 0; n < massives[i].length; n++) {
        if (massives[i][n] == letterToFind) {
          //поверка совпадения заглавной буквы из массива с введенной заглавной
          massives[i][n] = "<font color=red>" + massives[i][n] + "</font>"; //добавление цвета
          body.innerHTML = mass.join(""); // новая html с измененным цветом
          words.push(massives[i][n]); // добавление в массив измененных символов
        }
      }
    }
  }

  changed.innerHTML = words.length;
  stat = true;

  input.value = "";
}

// function innnn() {
//   if (clk == true && document.body.innerHTML !== bodyy) {
//     //newPage();
//     clk = false;
//     console.log("nado obnovit");
//   }
// }

// function testing() {
//   newCheck();
//   if (document.body.innerHTML !== bodyy) {
//
//     // newCheck();
//   }
// }
