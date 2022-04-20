// function calculateLikes(starCount, dislikeTotal, likesTotal) {
//   if (likesTotal == 0 || starCount == 0) return 0;
//   return (starCount - dislikeTotal / (likesTotal / starCount)).toFixed(1);
// }

// document.getElementById("star").innerHTML = starCount;

// //console.log(starCount);
// console.log(calculateLikes(5, 101, 172));

// start cart functionality
let basket = document.getElementById("addToBasket");

basket.addEventListener("click", () => {
  basketNumbers();
});

let products = {
  name: "LeBron grey",
  tag: "leBron grey",
  price: 200,
  inBasket: 0,
};

function onLoadBasketNumbers() {
  let productNumbers = localStorage.getItem("basketNumbers");
  if (productNumbers) {
    document.querySelector(".cart-counter").textContent = productNumbers;
  }
}

function basketNumbers() {
  let productNumbers = localStorage.getItem("basketNumbers");

  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    localStorage.setItem("basketNumbers", productNumbers + 1);
    document.querySelector(".cart-counter").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("basketNumbers", 1);
    document.querySelector(".cart-counter").textContent = 1;
  }
}
onLoadBasketNumbers();
//  end cart functionality

//show sizes
function showItem(item) {
  document.getElementById("dropdownMenuButton1").innerHTML = item.innerHTML;
}

// let select = document.getElementById("dropDown");
// let input = document.getElementById("txtprice");
// select.onchange = function () {
//   input.value = select.value;
// };
