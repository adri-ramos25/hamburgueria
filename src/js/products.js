const btnClassicBurguer = document.getElementById("btn-classic-burguer");
const btnVegetarianBurguer = document.getElementById("btn-vegetarian-burguer");
const btnBaconBurguer = document.getElementById("btn-bacon-burguer");
const btnCocaCola = document.getElementById("btn-coca-cola");
const btnFanta = document.getElementById("btn-fanta");
const btnSprite = document.getElementById("btn-sprite");
const btnOrangeJuice = document.getElementById("btn-orange-juice");
const btnLemonJuice = document.getElementById("btn-lemon-juice");
const btnPineappleJuice = document.getElementById("btn-pineapple-juice");
const btnBackBoxSelectedProduct = document.getElementById("btn-back-box-selected-product");

let selectedProduct = "";


btnClassicBurguer.addEventListener("click", () => {
    hideBtnAddProduct();

    selectedProduct = "hamburguer classico";

    document.getElementById("box-selected-product").style.display = "block";

    document.getElementById("box-selected-product").style.display = "flex";

    document.getElementById("image-selected-classic-burguer").style.display = "block";

    document.getElementById("name-classic-burguer").style.display = "block";

    btnShowRequests.style.display = "none";

    showBtnAddSelectedProduct();
})

btnVegetarianBurguer.addEventListener("click", () => {
    hideBtnAddProduct();

    selectedProduct = "hamburguer vegetariano";

    document.getElementById("box-selected-product").style.display = "block";

    document.getElementById("box-selected-product").style.display = "flex";

    document.getElementById("image-selected-vegetarian-burguer").style.display = "block";

    document.getElementById("name-vegetarian-burguer").style.display = "block";

    btnShowRequests.style.display = "none";

    showBtnAddSelectedProduct();
})

btnBaconBurguer.addEventListener("click", () => {
    hideBtnAddProduct();

    selectedProduct = "hamburguer bbq bacon";

    document.getElementById("box-selected-product").style.display = "block";

    document.getElementById("box-selected-product").style.display = "flex";

    document.getElementById("image-selected-bacon-burguer").style.display = "block";

    document.getElementById("name-bacon-burguer").style.display = "block";

    btnShowRequests.style.display = "none";

    showBtnAddSelectedProduct();
})

btnCocaCola.addEventListener("click", () => {
    hideBtnAddProduct();

    selectedProduct = "coca-cola";

    document.getElementById("box-selected-product").style.display = "block";

    document.getElementById("box-selected-product").style.display = "flex";

    document.getElementById("image-selected-coca-cola").style.display = "block";

    document.getElementById("name-coca-cola").style.display = "block";

    btnShowRequests.style.display = "none";

    showBtnAddSelectedProduct();
})

btnFanta.addEventListener("click", () => {
    hideBtnAddProduct();

    selectedProduct = "fanta";

    document.getElementById("box-selected-product").style.display = "block";

    document.getElementById("box-selected-product").style.display = "flex";

    document.getElementById("image-selected-fanta").style.display = "block";

    document.getElementById("name-fanta").style.display = "block";

    btnShowRequests.style.display = "none";

    showBtnAddSelectedProduct();
})

btnSprite.addEventListener("click", () => {
    hideBtnAddProduct();

    selectedProduct = "sprite";

    document.getElementById("box-selected-product").style.display = "block";

    document.getElementById("box-selected-product").style.display = "flex";

    document.getElementById("image-selected-sprite").style.display = "block";

    document.getElementById("name-sprite").style.display = "block";

    btnShowRequests.style.display = "none";

    showBtnAddSelectedProduct();
})

btnOrangeJuice.addEventListener("click", () => {
    hideBtnAddProduct();

    selectedProduct = "suco de laranja";

    document.getElementById("box-selected-product").style.display = "block";

    document.getElementById("box-selected-product").style.display = "flex";

    document.getElementById("image-selected-orange-juice").style.display = "block";

    document.getElementById("name-orange-juice").style.display = "block";

    btnShowRequests.style.display = "none";

    showBtnAddSelectedProduct();
})

btnLemonJuice.addEventListener("click", () => {
    hideBtnAddProduct();

    selectedProduct = "suco de limão";

    document.getElementById("box-selected-product").style.display = "block";

    document.getElementById("box-selected-product").style.display = "flex";

    document.getElementById("image-selected-lemon-juice").style.display = "block";

    document.getElementById("name-lemon-juice").style.display = "block";

    btnShowRequests.style.display = "none";

    showBtnAddSelectedProduct();
})

btnPineappleJuice.addEventListener("click", () => {
    hideBtnAddProduct();

    selectedProduct = "suco de abacaxi";

    document.getElementById("box-selected-product").style.display = "block";

    document.getElementById("box-selected-product").style.display = "flex";

    document.getElementById("image-selected-pineapple-juice").style.display = "block";

    document.getElementById("name-pineapple-juice").style.display = "block";

    btnShowRequests.style.display = "none";

    showBtnAddSelectedProduct();
})

btnBackBoxSelectedProduct.addEventListener("click", () => {
    if (addedProduct == "") {
        btnShowRequests.style.display = "none";
    } else {
        btnShowRequests.style.display = "block";
    }

    document.getElementById("box-selected-product").style.display = "none";

    // Esconde as imagens dos produtos selecionados
    document.getElementById("image-selected-classic-burguer").style.display = "none";
    document.getElementById("image-selected-vegetarian-burguer").style.display = "none";
    document.getElementById("image-selected-bacon-burguer").style.display = "none";
    document.getElementById("image-selected-coca-cola").style.display = "none";
    document.getElementById("image-selected-fanta").style.display = "none";
    document.getElementById("image-selected-sprite").style.display = "none";
    document.getElementById("image-selected-orange-juice").style.display = "none";
    document.getElementById("image-selected-lemon-juice").style.display = "none";
    document.getElementById("image-selected-pineapple-juice").style.display = "none"; 
        
    // Esconde os nomes dos produtos
    document.getElementById("name-classic-burguer").style.display = "none";
    document.getElementById("name-vegetarian-burguer").style.display = "none";  
    document.getElementById("name-bacon-burguer").style.display = "none";
    document.getElementById("name-coca-cola").style.display = "none";  
    document.getElementById("name-fanta").style.display = "none";  
    document.getElementById("name-sprite").style.display = "none";
    document.getElementById("name-orange-juice").style.display = "none";  
    document.getElementById("name-lemon-juice").style.display = "none";  
    document.getElementById("name-pineapple-juice").style.display = "none";
})



function showBtnAddSelectedProduct() {
    switch(selectedProduct) {
        case "hamburguer classico":
            btnAddClassicBurguer.style.display = "block";
            break;

        case "hamburguer vegetariano":
            btnAddVegetarianBurguer.style.display = "block";
            break;

        case "hamburguer bbq bacon":
            btnAddBaconBurguer.style.display = "block";
            break;

        case "coca-cola":
            btnAddCocaCola.style.display = "block";
            break;

        case "fanta":
            btnAddFanta.style.display = "block";
            break;

        case "sprite":
            btnAddSprite.style.display = "block";
            break;

        case "suco de laranja":
            btnAddOrangeJuice.style.display = "block";
            break;

        case "suco de limão":
            btnAddLemonJuice.style.display = "block";
            break;

        case "suco de abacaxi":
            btnAddPineappleJuice.style.display = "block";
            break;

        default:
            alert("Produto não encontrado.");
    }
}