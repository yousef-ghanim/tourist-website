// Array.from(document.querySelectorAll(".tours-btn")).forEach((item) => {
//   item.addEventListener("click", () => {
//     item.parentElement.parentElement.parentElement.toggle("change");
//   });
// });

Array.from(document.querySelectorAll(".tours-btn")).forEach((item) => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});

const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const container = document.querySelector(".web-container");
openBtn.addEventListener("click", () => {
  container.classList.add("change");
});
closeBtn.addEventListener("click", () => {
  container.classList.remove("change");
});
