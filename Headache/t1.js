// WRITE SOLUTION HERE
//data changes
let containerRef = document.querySelector(".container");
data.forEach((d) => {
  let card = document.createElement("div");
  card.classList.add("card");
  let newElement = `
            <div class="details">
                <span class="product__name">${d.title}</span>
                <br>
                <span class="product__category">${d.category}</span>
                <div class="all__star">
                    <span class="star__filled">&#9733;</span>
                    <span class="star__filled">&#9733;</span>
                    <span class="star__filled">&#9733;</span>
                    <span class="star__filled">&#9733;</span>
                    <span class="star__notfilled">&#9734;</span>
                </div>
                <div class="rating__count">Rating Count : <span>${d.rating.count}</span></div>
            </div>
            <div class="btn">
                <button class="btn__buy">Buy Now</button>
            </div>`;
  card.innerHTML = newElement;
  containerRef.appendChild(card);
  console.log(newElement);
});
