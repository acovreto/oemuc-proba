document.addEventListener("DOMContentLoaded", () => {
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  const btn3 = document.getElementById("btn3");
  const stvari = document.getElementById("stvari2");

  async function fetchHTMLstvari() {
    try {
      const response = await fetch("../footer-misc/pages/contactpage.html");

      if (!response.ok) {
        throw new Error("ne rab");
      }

      const htmlContent = await response.text();

      stvari.innerHTML = htmlContent;
    } catch (error) {
      console.error("rabotit?", error);
    }
  }
  fetchHTMLstvari();

  btn1.addEventListener("click", () => {
    fetch("../footer-misc/pages/contactpage.html")
      .then((response) => response.text())
      .then((data) => {
        stvari.innerHTML = data;
        stvari.classList.add("show");
      });
  });

  btn2.addEventListener("click", () => {
    fetch("../footer-misc/pages/emailform.html")
      .then((response) => response.text())
      .then((data) => {
        stvari.innerHTML = data;
        stvari.classList.add("show");
      });
  });

  btn3.addEventListener("click", () => {
    fetch("../footer-misc/pages/praz.html")
      .then((response) => response.text())
      .then((data) => {
        stvari.innerHTML = data;
        stvari.classList.add("show");
      });
  });
});
