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
