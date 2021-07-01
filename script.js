let mainContent = '', main = document.querySelector('.cards__row');



function render(ev) {
    
    fetch("https://6075786f0baf7c0017fa64ce.mockapi.io/products")
    .then(function(response) {
        return response.json();
    })
    .then(function(response){

        var filter = response.filter( function(e){
            if (e.id <= 16) {
                return true;
            }
        });

          
        filter.forEach((callback, argthis) => {
            let count = callback.id;
            

            

            mainContent+=`
            
            <div class="col-md-3 cards__col">
                    <div class="cards__card-wrapper">
                        <div id="slider_${count}" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#slider_${count}" data-bs-slide-to="0" class="active"
                                    aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#slider_${count}" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#slider_${count}" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="goods-iteractive">
                                    <button class="goods-interactive__btn btn-compare"></button>
                                    <button class="goods-interactive__btn btn-like"></button>
                                </div>
                                <a href="http://arshakyan.info" class="cards__img-link" target="_blank"></a>
                                <div class="carousel-item active">
                                    <div class="img_block w-100"></div>
                                </div>
                                <div class="carousel-item">
                                    <div class="img_block w-100"></div>
                                </div>
                                <div class="carousel-item">
                                    <div class="img_block w-100"></div>
                                </div>
                            </div>
                        </div>
                        <div class="cards__card-info-wrapper">
                            <div class="container cards__info-innerCon">
                                <div class="row d-flex justify-content-between">
                                    <div class="col-auto">
                                        <p class="cards__oldPrice">
                                            <del>${callback.oldPrice} ₽</del>
                                        </p>
                                        <p class="cards__price">
                                        ${callback.price} ₽
                                        </p>
                                    </div>
                                    <div class="col-auto">
                                        <button class="cards__info-btn btn-delivery"></button>
                                        <button class="cards__info-btn btn-deal"></button>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-auto">
                                        <a href="http://arshakyan.info" class="cards__item-name">
                                        ${callback.title}
                                        </a>
                                    </div>
                                </div>
                                <div class="row d-flex justify-content-between">
                                    <div class="col-auto cards__city">
                                        ${callback.locality}
                                    </div>
                                    <div class="col-auto cards__date">
                                        ${count}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            `
            
            main.innerHTML = mainContent;
            
        })
    
    })

}

render();


function renderAll(ev) {
    fetch("https://6075786f0baf7c0017fa64ce.mockapi.io/products")
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        moreBtn.classList.add('d-none');
        mainContent = '';
        response.forEach((callback, argthis) => {
            let count = callback.id;

            mainContent+=`
            
            <div class="col-md-3 cards__col">
                    <div class="cards__card-wrapper">
                        <div id="slider_${count}" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#slider_${count}" data-bs-slide-to="0" class="active"
                                    aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#slider_${count}" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#slider_${count}" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="goods-iteractive">
                                    <button class="goods-interactive__btn btn-compare"></button>
                                    <button class="goods-interactive__btn btn-like"></button>
                                </div>
                                <a href="http://http://arshakyan.info" class="cards__img-link" target="_blank"></a>
                                <div class="carousel-item active">
                                    <div class="img_block w-100"></div>
                                </div>
                                <div class="carousel-item">
                                    <div class="img_block w-100"></div>
                                </div>
                                <div class="carousel-item">
                                    <div class="img_block w-100"></div>
                                </div>
                            </div>
                        </div>
                        <div class="cards__card-info-wrapper">
                            <div class="container cards__info-innerCon">
                                <div class="row d-flex justify-content-between">
                                    <div class="col-auto">
                                        <p class="cards__oldPrice">
                                            <del>${callback.oldPrice} ₽</del>
                                        </p>
                                        <p class="cards__price">
                                        ${callback.price} ₽
                                        </p>
                                    </div>
                                    <div class="col-auto">
                                        <button class="cards__info-btn btn-delivery"></button>
                                        <button class="cards__info-btn btn-deal"></button>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-auto">
                                        <a href="http://arshakyan.info" class="cards__item-name">
                                        ${callback.title}
                                        </a>
                                    </div>
                                </div>
                                <div class="row d-flex justify-content-between">
                                    <div class="col-auto cards__city">
                                        ${callback.locality}
                                    </div>
                                    <div class="col-auto cards__date">
                                        ${count}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            `

            main.innerHTML = mainContent;
        })

    })

}

let moreBtn = document.querySelector('.more-btn');

moreBtn.addEventListener('click', renderAll);







