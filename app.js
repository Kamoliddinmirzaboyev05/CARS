const carName = document.querySelector("#carName");
const carSpeed = document.querySelector("#carSpeed");
const carPrice = document.querySelector("#carPrice");
const carImg = document.querySelector("#carImg");
const carColor = document.querySelector("#color");
const submit = document.querySelector(".submit");
const rightSide = document.querySelector(".right-side");

var db = [];
submit.addEventListener("click", () => {
  rightSide.innerHTML = "";
  if(carImg.value != "" && carName.value != "" && carSpeed.value != "" && carPrice.value != "" ){
   var addCar = {
    img: carImg.value,
    name: carName.value,
    speed: carSpeed.value,
    price: carPrice.value,
    color: carColor.value,
  };
  }else{
    alert("Ma`lumotlar to'liq kiritilmadi!")
  }
 
  db.push(addCar);
  db.forEach((item) => {
    rightSide.innerHTML += `
          <div class="card">
          <div class="car-img">
              <img src=${item.img} alt="">
          </div>
          <div class="car-name">
              <h2>${item.name}</h2>
              <i class="fas fa-trash"></i>
          </div>
          <div class="car-data data-border">
              <p>Speed:</p>
              <p>${item.speed} km/h</p>
          </div>
          <div class="car-data data-border">
              <p>Price:</p>
              <p>${item.price} $</p>
          </div>
          <div class="car-data data-border">
              <p>Color:</p>
              <p>${item.color}</p>
          </div>
          <div class="car-data">
              <a href="#">More images</a>
              <a>Another links</a>
          </div>
      </div>
          `;
  });
});
