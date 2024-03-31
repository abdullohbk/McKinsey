let overView = document.querySelector(".overview");
let dropDown1 = document.querySelector(".dropDown1");
let dropDown2 = document.querySelector(".dropDown2");
let dropDown3 = document.querySelector(".dropDown3");
let commit = document.querySelector(".commit");
let work = document.querySelector(".work");

overView.addEventListener("mouseover", () => {
  dropDown1.classList.remove("hide");
  dropDown2.classList.add("hide");
  dropDown3.classList.add("hide");
});

document.addEventListener("click", () => {
  dropDown1.classList.add("hide");
});

commit.addEventListener("mouseover", () => {
  dropDown2.classList.remove("hide");
  dropDown1.classList.add("hide");
  dropDown3.classList.add("hide");
});

document.addEventListener("click", () => {
  dropDown2.classList.add("hide");
});

work.addEventListener("mouseover", () => {
  dropDown3.classList.remove("hide");
  dropDown1.classList.add("hide");
  dropDown2.classList.add("hide");
});

document.addEventListener("click", () => {
  dropDown3.classList.add("hide");
});
