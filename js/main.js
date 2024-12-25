let list = document.querySelector(".product");
let API = "https://restcountries.com/v3.1/all";

fetch(API)
  .then((data) => data.json())
  .then((unp) => {
    unp.forEach((item) => {
      console.log(item);

      list.innerHTML += `
        <div class="cart">
        <img src="${item.flags.svg}" alt="" />
        </div>
        `;
    });
  });
