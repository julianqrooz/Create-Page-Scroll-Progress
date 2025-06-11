let el = document.querySelector(".scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let sceollTop = document.documentElement.scrollTop;
  el.style.width = `${(sceollTop / height) * 100}%`;
});
