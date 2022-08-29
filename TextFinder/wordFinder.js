let bodyy = document.body.innerHTML;
function newPage() {
  document.body.innerHTML = bodyy;
}

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
  input.value = "";
}

// function test() {
//   newPage();

//   setTimeout(newCheck(), 2000);
// }

// function greeting() {
//   newCheck();
// }

// function processUserInput(callback) {
//   document.body.innerHTML = bodyy;
//   callback();
// }

// processUserInput(greeting);
