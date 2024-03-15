const searchIconEl = document.querySelector(".magnifier-icon");

const searchContEl = document.querySelector(".searchbar-container");

const expandInput = () => {
  // console.log("clicked")
  searchContEl.classList.toggle("active");
};

searchIconEl.addEventListener("click", expandInput);
