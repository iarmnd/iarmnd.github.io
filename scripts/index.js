var count = document.querySelector(".counter");
var visits = localStorage.getItem("page_view");
//enable button if it's needed
//var reset = document.querySelector("#reset");
//count for each visit
if (visits) {
    //visits=0
  visits = Number(visits) + 1;
  localStorage.setItem("page_view", visits);
} else {
  visits = 1;
  localStorage.setItem("page_view", 1);
}
count.innerHTML = visits;

// Reset count if it's needed
//reset.addEventListener("click", () => {
//  visits = 1;
//  localStorage.setItem("page_view", 1);
//  count.innerHTML = visits;
//});