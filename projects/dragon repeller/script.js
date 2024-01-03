let button1 = document.querySelector("#button1");

button1.onclick = function (teste) {
  console.log("oi");
};

function goStore() {
  console.log("teste");
}

button1.onclick = goStore;
