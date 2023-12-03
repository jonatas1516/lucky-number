const minFrom = document.querySelector("#min-from");

const maxTo = document.querySelector("#max-to");

const text = document.querySelector(".text");

const btn = document.querySelector(".btn");

btn.addEventListener("click", drawer);

function drawer() {
  if (minFrom.value == "") {
    alert("Digite um valor mínimo!");
  } else if (maxTo.value == "") {
    alert("Digite um valor máximo!");
  } else if (minFrom.value == maxTo.value) {
    if (minFrom.value == "" && maxTo.value == "") {
      alert("Os valores não foram digitados!");
    } else {
      alert("Os valores são iguais!");
    }
  } else if (minFrom.value > maxTo.value) {
    alert("O valor mínimo não pode ser maior que o valor máximo!");
  } else {
    const min = Math.ceil(minFrom.value);

    const max = Math.floor(maxTo.value);

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    text.innerHTML = result;
  }
}
