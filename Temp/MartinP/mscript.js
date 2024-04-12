document.addEventListener("DOMContentLoaded", () => {
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  const btn3 = document.getElementById("btn3");
  const stvari = document.getElementById("stvari2");

  btn1.addEventListener("click", () => {
    fetch("./pages/emailform.html")
      .then((response) => response.text())
      .then((data) => {
        stvari.innerHTML = data;
        stvari.classList.add("show");
      });
  });

  btn2.addEventListener("click", () => {
    fetch("./pages/contactpage.html")
      .then((response) => response.text())
      .then((data) => {
        stvari.innerHTML = data;
        stvari.classList.add("show");
      });
  });

  btn3.addEventListener("click", () => {
    fetch("./pages/praz.html")
      .then((response) => response.text())
      .then((data) => {
        stvari.innerHTML = data;
        stvari.classList.add("show");
      });
  });
});
