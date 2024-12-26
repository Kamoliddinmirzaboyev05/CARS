const carName = document.querySelector("#carName");
const carSpeed = document.querySelector("#carSpeed");
const carPrice = document.querySelector("#carPrice");
const carImg = document.querySelector("#carImg");
const carColor = document.querySelector("#color");
const submit = document.querySelector(".submit");
const rightSide = document.querySelector(".right-side");

var db = [];

const writeData = () => {
  rightSide.innerHTML = "";
  db.forEach((item) => {
    rightSide.innerHTML += `
        <div class="card">
        <div class="car-img">
            <img src=${item.img} alt="">
        </div>
        <div class="car-name">
            <h2>${item.name}</h2>
            <i onclick="removeCar(${item.id})" class="fas fa-trash"></i>
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
};
submit.addEventListener("click", () => {
  var obj = {
    id: Math.random() * 999,
    name: carName.value,
    speed: carSpeed.value,
    price: carPrice.value,
    color: carColor.value,
    img: carImg.value,
  };
  db.push(obj);
  writeData();
  carName.value = "";
  carSpeed.value = "";
  carPrice.value = "";
  carColor.value = "";
  carImg.value = "";
});

var removeCar = (id) => {
  var newData = db.filter((item) => {
    return id != item.id;
  });
  db = newData;
  writeData();
};
