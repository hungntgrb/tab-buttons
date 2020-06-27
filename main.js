const btns = document.querySelectorAll(".btn");
const articles = document.querySelectorAll(".article");

function removeActive(list) {
  list.forEach((item) => item.classList.remove("active"));
}
function getAssoArticle(button) {
  return document.getElementById(button.dataset.id);
}

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    removeActive(btns);
    btn.classList.add("active");
    removeActive(articles);
    const article = getAssoArticle(e.target);
    article.classList.add("active");
  });
});
