const allMealsBtn = document.querySelector(".firstAllBtn");
const breakfastBtn = document.querySelector(".breakfastBtn")
const lunchBtn = document.querySelector(".lunchBtn")
const shakesBtn = document.querySelector(".shakesBtn")
const dinnerBtn = document.querySelector(".dinnerBtn")
const mainContainer = document.querySelector('.container');
const myApiUrl = 'https://gist.githubusercontent.com/maratgaip/44060c688fcf5f2b7b3985a6d15fdb1d/raw/e93c3dce0826d08c8c6e779cb5e6d9512c8fdced/restaurant-menu.json'

const showData = fetchAllFood()

 async function fetchAllFood () {
        const response = await fetch(myApiUrl);
        const myData = await response.json();
    
        console.log(myData)
        myData.forEach(dish => {
          const div = document.createElement('div');
          const image = document.createElement('img');
          image.classList.add("img");

          image.src = dish.img;
          const title = document.createElement('h4');
          title.classList.add("priceAndName");
          title.innerHTML = dish.title
          const price = document.createElement('p');
          price.classList.add("p");
          price.innerHTML = dish.price
          let description = document.createElement('p');
          description.classList.add("description")
          description.innerHTML = dish.desc.replace(/`/g, "")
          div.appendChild(image);
          div.appendChild(title);
          div.appendChild(price);
          div.appendChild(description);
          mainContainer.appendChild(div)
        });
}
//fetchAllFood() 

function getAllMeals() {
    clear()
    fetchAllFood() 
}


    async function getBreakfast() {
        clear()
        const response = await fetch(myApiUrl);
        const data = await response.json();
       const  breakfastDishes = data.filter( breakfast => breakfast.category === 'breakfast');
    console.log( breakfastDishes)

     breakfastDishes.forEach(food => {
        const div = document.createElement('div');
          const image = document.createElement('img');
          image.classList.add("img");
          image.src = food.img;
          const title = document.createElement('h4');
          title.classList.add("priceAndName");
          title.innerHTML = food.title
          const price = document.createElement('p');
          price.classList.add("p");
          price.innerHTML = food.price
          const description = document.createElement('p');
          description.classList.add("description")
          description.innerHTML = food.desc.replace(/`/g, "");
          div.appendChild(image);
          div.appendChild(title);
          div.appendChild(price);
          div.appendChild(description);
          mainContainer.appendChild(div) 

    })
}
    async function getLunch() {
        clear()
        const response = await fetch(myApiUrl);
        const data = await response.json();
       const  lunchDishes = data.filter( lunch => lunch.category === 'lunch');
    console.log( lunchDishes)

     lunchDishes.forEach(food => {
        const div = document.createElement('div');
          const image = document.createElement('img');
          image.classList.add("img");
          image.src = food.img;
          const title = document.createElement('h4');
          title.classList.add("priceAndName");
          title.innerHTML = food.title
          const price = document.createElement('p');
          price.classList.add("p");
          price.innerHTML = food.price
          const description = document.createElement('p');
          description.classList.add("description")
          description.innerHTML = food.desc.replace(/`/g, "");
          div.appendChild(image);
          div.appendChild(title);
          div.appendChild(price);
          div.appendChild(description);
          mainContainer.appendChild(div) 

    })
}
    async function getShakes() {
        clear()
        const response = await fetch(myApiUrl);
        const data = await response.json();
       const  shakes = data.filter( shakes => shakes.category === 'shakes');
    console.log(shakes)

     shakes.forEach(food => {
        const div = document.createElement('div');
          const image = document.createElement('img');
          image.classList.add("img");
          image.src = food.img;
          const title = document.createElement('h4');
          title.classList.add("priceAndName");
          title.innerHTML = food.title
          const price = document.createElement('p');
          price.classList.add("p");
          price.innerHTML = food.price
          const description = document.createElement('p');
          description.classList.add("description")
          description.innerHTML = food.desc.replace(/`/g, "");
          div.appendChild(image);
          div.appendChild(title);
          div.appendChild(price);
          div.appendChild(description);
          mainContainer.appendChild(div) 

    })
}
    async function getDinner() {
        clear()
        const response = await fetch(myApiUrl);
        const data = await response.json();
       const  dinnerDishes = data.filter( dinner => dinner.category === 'dinner');
    console.log(dinnerDishes)

     dinnerDishes.forEach(food => {
        const div = document.createElement('div');
        div.classList.add("div")
          const image = document.createElement('img');
          image.classList.add("img");
          image.src = food.img;
          const title = document.createElement('h4');
          title.classList.add("priceAndName");
          title.innerHTML = food.title
          const price = document.createElement('p');
          price.classList.add("p");
          price.innerHTML = food.price
          const description = document.createElement('p');
          description.classList.add("description")
          description.innerHTML = food.desc.replace(/`/g, "");
          div.appendChild(image);
          div.appendChild(title);
          div.appendChild(price);
          div.appendChild(description);
          mainContainer.appendChild(div);

    })
}


function clear() {
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild)
    }
}