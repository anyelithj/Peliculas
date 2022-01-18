import { data } from "../data/data.js";

const modalContainer = document.getElementById("modalContainer");
const modal =  document.getElementById("content__modal");
const cardItem = document.getElementById("cardItem");
const fragment = document.createDocumentFragment();


window.addEventListener("load", (e) => {
    e.preventDefault();
    let movies = data.map((movie) => {
        const { id, title, image } = movie;
        let card = document.createElement("div");
        card.setAttribute("class", "card__item");
        card.innerHTML += `
          <div class="card__container">
              <img src="${image}" class="img" id="${id}" alt="image of movie">
              <a href="" id="button">
                  <h3 class="title" id="">${title}</h3>
              </a>
          </div>
      `;
      
        let cloneCard = card.cloneNode(true);
        fragment.appendChild(cloneCard);
      });
      cardItem.appendChild(fragment);      
})


  
cardItem.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e)
    if (e.target.classList.contains("img")) {
        let idInfo = e.target.id;
        console.log(idInfo)
        data.forEach(item => {
            const {id, title, info, gender, image } = item;
            console.log(title);
            if(idInfo == id) {
                modalContainer.style.display = 'block';
                modal.innerHTML = ` 
                <div>
                    <span class="close"  id="close">&times;</span>
                </div>
                <div class="content__modal--left">
                    <div class="modal__header">                         
                            <h2>${title}</h2>
                        </div>
                        <div class="modal__body">
                            <p>${info}</p>			
                        </div>
                        <div class="modal__footer">
                            <p>${gender}</p>
                        </div>
                    </div>
                    <div class="content__modal--right">                             
                    <img src="${image}" class="modal__img" alt="">               
                    </div>        
               `; 
            } 
        });
    }
});

modal.addEventListener('click', (e) => {
    e.preventDefault;
    if (modalContainer.style.display === 'block') {
        modalContainer.style.display = 'none';
      } else {
        modalContainer.style.display = 'block';
      }
});
  
 
