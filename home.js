document.addEventListener("DOMContentLoaded", function () {
  const dots = document.querySelectorAll(".dot");
  const cardContainer = document.querySelector(".card-container");
  let currentIndex = 0;

  function updateSlide(index) {
    const offset = -index * cardContainer.clientWidth;
    cardContainer.style.transform = `translateX(${offset}px)`;
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", function () {
      const index = parseInt(this.getAttribute("data-index"));
      currentIndex = index;
      updateSlide(currentIndex);
    });
  });

  updateSlide(currentIndex);
});
document.addEventListener("DOMContentLoaded", () => {
  const readMoreButtons = document.querySelectorAll(".read-button button");
  readMoreButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const url = "https://www.fylehq.com/";
      window.open(url, "_blank");
    });
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  const modal = document.getElementById("contactFormModal");
  const openFormButton = document.getElementById("openFormButton");
  const closeButton = document.getElementsByClassName("close-button")[0];

  openFormButton.onclick = function () {
    modal.style.display = "block";
  };

  closeButton.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});

document.addEventListener("DOMContentLoaded", () => {
  const mainImage = document.getElementById("mainImage");
  const originalImageSrc = mainImage.src;

  const textItems = document.querySelectorAll(".text-item");
  const imagePaths = ["image.png", "image2.2.jpg", "image3.jpg"];

  textItems.forEach((item, index) => {
    item.addEventListener("click", function () {

      mainImage.src = imagePaths[index];
      textItems.forEach((textItem) => {
        textItem.classList.remove("clicked");
      });
      this.classList.add("clicked");
    });
  });
  mainImage.src = imagePaths[0];
  textItems[0].classList.add("clicked");
  textItems[0].click(); 
});
