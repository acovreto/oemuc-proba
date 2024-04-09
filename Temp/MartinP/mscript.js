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
      })
      .catch((error) => console.error("Error fetching window1.html:", error));
  });

  btn2.addEventListener("click", () => {
    fetch("./pages/conactpage.html")
      .then((response) => response.text())
      .then((data) => {
        stvari.innerHTML = data;
        stvari.classList.add("show");
      })
      .catch((error) => console.error("Error fetching window2.html:", error));
  });

  btn3.addEventListener("click", () => {
    fetch("./pages/sezap.html")
      .then((response) => response.text())
      .then((data) => {
        stvari.innerHTML = data;
        stvari.classList.add("show");
      })
      .catch((error) => console.error("Error fetching window2.html:", error));
  });
});