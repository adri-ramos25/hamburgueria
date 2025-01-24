const btnProduct = document.getElementsByClassName("btn-product");

const boxBackground = document.getElementsByClassName("box-background")[0];

// Caixa que mostra o produto selecionado
const boxSelectedProduct = document.getElementById("box-selected-product");

// Imagem do produto selecionado
const imageSelectedProduct = document.getElementsByClassName("image-selected-product");

// Nome do produto selecionado
const nameSelectedProduct = document.getElementsByClassName("name-selected-product");

const btnBackSelectedProduct = document.getElementById("btn-back-selected-product");

const boxAddres = document.getElementsByClassName("box-address")[0];

const btnConfirmAddress = document.getElementById("btn-confirm-address");


hideImagesAndNames();


// Hamburguer classico
btnProduct[0].addEventListener("click", () => {
    btnShowOrders.style.display = "none";

    showBoxSelectedProduct();

    imageSelectedProduct[0].style.display = "block";
    nameSelectedProduct[0].style.display = "block";
    btnAddSelectedProduct[0].style.display = "block";

    btnAddSelectedProduct[1].style.display = "none";
    btnAddSelectedProduct[2].style.display = "none";
    btnAddSelectedProduct[3].style.display = "none";
    btnAddSelectedProduct[4].style.display = "none";
    btnAddSelectedProduct[5].style.display = "none";
    btnAddSelectedProduct[6].style.display = "none";
    btnAddSelectedProduct[7].style.display = "none";
    btnAddSelectedProduct[8].style.display = "none";
})


// Hamburguer vegetariano
btnProduct[1].addEventListener("click", () => {
    btnShowOrders.style.display = "none";

    showBoxSelectedProduct();

    imageSelectedProduct[1].style.display = "block";
    nameSelectedProduct[1].style.display = "block";
    btnAddSelectedProduct[1].style.display = "block";

    btnAddSelectedProduct[0].style.display = "none";
    btnAddSelectedProduct[2].style.display = "none";
    btnAddSelectedProduct[3].style.display = "none";
    btnAddSelectedProduct[4].style.display = "none";
    btnAddSelectedProduct[5].style.display = "none";
    btnAddSelectedProduct[6].style.display = "none";
    btnAddSelectedProduct[7].style.display = "none";
    btnAddSelectedProduct[8].style.display = "none";
})


// Hamburguer bbq bacon
btnProduct[2].addEventListener("click", () => {
    btnShowOrders.style.display = "none";

    showBoxSelectedProduct();

    imageSelectedProduct[2].style.display = "block";
    nameSelectedProduct[2].style.display = "block";
    btnAddSelectedProduct[2].style.display = "block";

    btnAddSelectedProduct[0].style.display = "none";
    btnAddSelectedProduct[1].style.display = "none";
    btnAddSelectedProduct[3].style.display = "none";
    btnAddSelectedProduct[4].style.display = "none";
    btnAddSelectedProduct[5].style.display = "none";
    btnAddSelectedProduct[6].style.display = "none";
    btnAddSelectedProduct[7].style.display = "none";
    btnAddSelectedProduct[8].style.display = "none";
})


// Coca-cola
btnProduct[3].addEventListener("click", () => {
    btnShowOrders.style.display = "none";

    showBoxSelectedProduct();

    imageSelectedProduct[3].style.display = "block";
    nameSelectedProduct[3].style.display = "block";
    btnAddSelectedProduct[3].style.display = "block";

    btnAddSelectedProduct[0].style.display = "none";
    btnAddSelectedProduct[1].style.display = "none";
    btnAddSelectedProduct[2].style.display = "none";
    btnAddSelectedProduct[4].style.display = "none";
    btnAddSelectedProduct[5].style.display = "none";
    btnAddSelectedProduct[6].style.display = "none";
    btnAddSelectedProduct[7].style.display = "none";
    btnAddSelectedProduct[8].style.display = "none";
})


// Fanta
btnProduct[4].addEventListener("click", () => {
    btnShowOrders.style.display = "none";

    showBoxSelectedProduct();

    imageSelectedProduct[4].style.display = "block";
    nameSelectedProduct[4].style.display = "block";
    btnAddSelectedProduct[4].style.display = "block";

    btnAddSelectedProduct[0].style.display = "none";
    btnAddSelectedProduct[1].style.display = "none";
    btnAddSelectedProduct[2].style.display = "none";
    btnAddSelectedProduct[3].style.display = "none";
    btnAddSelectedProduct[5].style.display = "none";
    btnAddSelectedProduct[6].style.display = "none";
    btnAddSelectedProduct[7].style.display = "none";
    btnAddSelectedProduct[8].style.display = "none";
})


// Sprite
btnProduct[5].addEventListener("click", () => {
    btnShowOrders.style.display = "none";

    showBoxSelectedProduct();

    imageSelectedProduct[5].style.display = "block";
    nameSelectedProduct[5].style.display = "block";
    btnAddSelectedProduct[5].style.display = "block";

    btnAddSelectedProduct[0].style.display = "none";
    btnAddSelectedProduct[1].style.display = "none";
    btnAddSelectedProduct[2].style.display = "none";
    btnAddSelectedProduct[3].style.display = "none";
    btnAddSelectedProduct[4].style.display = "none";
    btnAddSelectedProduct[6].style.display = "none";
    btnAddSelectedProduct[7].style.display = "none";
    btnAddSelectedProduct[8].style.display = "none";
})


// Suco de laranja
btnProduct[6].addEventListener("click", () => {
    btnShowOrders.style.display = "none";

    showBoxSelectedProduct();

    imageSelectedProduct[6].style.display = "block";
    nameSelectedProduct[6].style.display = "block";
    btnAddSelectedProduct[6].style.display = "block";

    btnAddSelectedProduct[0].style.display = "none";
    btnAddSelectedProduct[1].style.display = "none";
    btnAddSelectedProduct[2].style.display = "none";
    btnAddSelectedProduct[4].style.display = "none";
    btnAddSelectedProduct[3].style.display = "none";
    btnAddSelectedProduct[4].style.display = "none";
    btnAddSelectedProduct[5].style.display = "none";
    btnAddSelectedProduct[7].style.display = "none";
    btnAddSelectedProduct[8].style.display = "none";
})


// Suco de limao
btnProduct[7].addEventListener("click", () => {
    btnShowOrders.style.display = "none";

    showBoxSelectedProduct();

    imageSelectedProduct[7].style.display = "block";
    nameSelectedProduct[7].style.display = "block";
    btnAddSelectedProduct[7].style.display = "block";

    btnAddSelectedProduct[0].style.display = "none";
    btnAddSelectedProduct[1].style.display = "none";
    btnAddSelectedProduct[2].style.display = "none";
    btnAddSelectedProduct[3].style.display = "none";
    btnAddSelectedProduct[4].style.display = "none";
    btnAddSelectedProduct[5].style.display = "none";
    btnAddSelectedProduct[6].style.display = "none";
    btnAddSelectedProduct[8].style.display = "none";
})


// Suco de abacaxi
btnProduct[8].addEventListener("click", () => {
    btnShowOrders.style.display = "none";

    showBoxSelectedProduct();

    imageSelectedProduct[8].style.display = "block";
    nameSelectedProduct[8].style.display = "block";
    btnAddSelectedProduct[8].style.display = "block";

    btnAddSelectedProduct[0].style.display = "none";
    btnAddSelectedProduct[1].style.display = "none";
    btnAddSelectedProduct[2].style.display = "none";
    btnAddSelectedProduct[3].style.display = "none";
    btnAddSelectedProduct[4].style.display = "none";
    btnAddSelectedProduct[5].style.display = "none";
    btnAddSelectedProduct[6].style.display = "none";
    btnAddSelectedProduct[7].style.display = "none";
})


btnBackSelectedProduct.addEventListener("click", () => {
    boxSelectedProduct.style.display = "none";

    boxBackground.style.display = "none";

    if (quantitiesClassicBurguer>=1 || quantitiesVegetarianBurguer>=1 || quantitiesBaconBurguer>=1 || quantitiesCocaCola>=1 || quantitiesFanta>=1 || quantitiesSprite>=1 || quantitiesOrangeJuice>=1 || quantitiesLemonJuice>=1 || quantitiesPineappleJuice>=1) {
        btnShowOrders.style.display = "block";
    } else {
        btnShowOrders.style.display = "none";
    }

    // Esconde as imagens dos produtos selecionados
    imageSelectedProduct[0].style.display = "none";
    imageSelectedProduct[1].style.display = "none";
    imageSelectedProduct[2].style.display = "none";
    imageSelectedProduct[3].style.display = "none";
    imageSelectedProduct[4].style.display = "none";
    imageSelectedProduct[5].style.display = "none";
    imageSelectedProduct[6].style.display = "none";
    imageSelectedProduct[7].style.display = "none";
    imageSelectedProduct[8].style.display = "none"; 
        
    // Esconde os nomes dos produtos
    nameSelectedProduct[0].style.display = "none";
    nameSelectedProduct[1].style.display = "none";  
    nameSelectedProduct[2].style.display = "none";
    nameSelectedProduct[3].style.display = "none";  
    nameSelectedProduct[4].style.display = "none";  
    nameSelectedProduct[5].style.display = "none";
    nameSelectedProduct[6].style.display = "none";  
    nameSelectedProduct[7].style.display = "none";  
    nameSelectedProduct[8].style.display = "none";
})


btnConfirmAddress.addEventListener("click", () => {
    alert("OS PEDIDOS SERÃO ENTREGUES NO ENDEREÇO INFORMADO!");

    location.reload(true);
})



// Esconde as imagens e nomes dos produtos selecionados pelo usuario
function hideImagesAndNames() {
    imageSelectedProduct[0].style.display = "none";
    imageSelectedProduct[1].style.display = "none";
    imageSelectedProduct[2].style.display = "none";
    imageSelectedProduct[3].style.display = "none";
    imageSelectedProduct[4].style.display = "none";
    imageSelectedProduct[5].style.display = "none";
    imageSelectedProduct[6].style.display = "none";
    imageSelectedProduct[7].style.display = "none";
    imageSelectedProduct[8].style.display = "none";


    nameSelectedProduct[0].style.display = "none";
    nameSelectedProduct[1].style.display = "none";
    nameSelectedProduct[2].style.display = "none";
    nameSelectedProduct[3].style.display = "none";
    nameSelectedProduct[4].style.display = "none";
    nameSelectedProduct[5].style.display = "none";
    nameSelectedProduct[6].style.display = "none";
    nameSelectedProduct[7].style.display = "none";
    nameSelectedProduct[8].style.display = "none";
}


// Mostra a caixa dos produtos selecionados
function showBoxSelectedProduct() {
    boxBackground.style.display = "block";
    boxBackground.style.display = "flex";
    textQuantity.style.display = "none";
    boxSelectedProduct.style.display = "block";
    boxSelectedProduct.style.display = "flex";
    btnBackSelectedProduct.style.display = "block";
    btnShowOrders.style.display;
}