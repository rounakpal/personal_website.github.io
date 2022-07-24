//Portfolio Item filter
const filtercontainer = document.querySelector(".portfolio-filter");
const filterBtns = filtercontainer.children;
const totalFilterBtns = filterBtns.length;
const portfolioItems = document.querySelectorAll(".portfolio-item");
const totalportfolioItems = portfolioItems.length;

for (let i = 0; i < totalFilterBtns; i++) {
  filterBtns[i].addEventListener("click", function () {
    filtercontainer.querySelector(".active").classList.remove("active");
    this.classList.add("active");

    const filterValue = this.getAttribute("data-filter");
    for (let k = 0; k < totalportfolioItems; k++) {
      if (filterValue === portfolioItems[k].getAttribute("data-catagory")) {
        portfolioItems[k].classList.add("show");
        portfolioItems[k].classList.remove("hide");
      }
      else {
        portfolioItems[k].classList.add("hide");
        portfolioItems[k].classList.remove("show");
      }
      if (filterValue === "all") {
        portfolioItems[k].classList.remove("hide");
        portfolioItems[k].classList.add("show");
      }
    }
  });
}


//Aside Navbar
const nav = document.querySelector(".nav");
const navlist = nav.querySelectorAll("li");
const totalnavlist=navlist.length;

for(let i=0; i<totalnavlist; i++){
  const a=navlist[i].querySelector("a");
  a.addEventListener("click",function(){
    for(let j=0; j<totalnavlist; j++){
      navlist[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
  })
}