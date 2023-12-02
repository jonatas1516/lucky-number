const minFrom = document.querySelector("#min-from");

const maxTo = document.querySelector("#max-to");

const text = document.querySelector(".text");

const btn = document.querySelector(".btn");

btn.addEventListener("click", drawer);

function drawer() {
  const min = Math.ceil(minFrom.value);

  const max = Math.floor(maxTo.value);

  const result = Math.floor(Math.random() * (max - min + 1)) + min;

  text.innerHTML = result;
}
