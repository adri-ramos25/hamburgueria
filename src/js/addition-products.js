const btnAddClassicBurguer = document.getElementById("btn-add-classic-burguer");
const btnAddVegetarianBurguer = document.getElementById("btn-add-vegetarian-burguer");
const btnAddBaconBurguer = document.getElementById("btn-add-bacon-burguer");
const btnAddCocaCola = document.getElementById("btn-add-coca-cola");
const btnAddFanta = document.getElementById("btn-add-fanta");
const btnAddSprite = document.getElementById("btn-add-sprite");
const btnAddOrangeJuice = document.getElementById("btn-add-orange-juice");
const btnAddLemonJuice = document.getElementById("btn-add-lemon-juice");
const btnAddPineappleJuice = document.getElementById("btn-add-pineapple-juice");

let addedProduct = "";



btnAddClassicBurguer.addEventListener("click", () => {
    addedProduct = "hamburguer classico";

    document.getElementById("image-selected-classic-burguer").style.display = "none";

    document.getElementById("name-classic-burguer").style.display = "none";

    document.getElementById("box-selected-product").style.display = "none";

    btnShowRequests.style.display = "block";
})

btnAddVegetarianBurguer.addEventListener("click", () => {
    addedProduct = "hamburguer vegetariano";

    document.getElementById("image-selected-vegetarian-burguer").style.display = "none";

    document.getElementById("name-vegetarian-burguer").style.display = "none";

    document.getElementById("box-selected-product").style.display = "none";

    btnShowRequests.style.display = "block";
})

btnAddBaconBurguer.addEventListener("click", () => {
    addedProduct = "hamburguer bbq bacon";

    document.getElementById("image-selected-bacon-burguer").style.display = "none";

    document.getElementById("name-bacon-burguer").style.display = "none";

    document.getElementById("box-selected-product").style.display = "none";

    btnShowRequests.style.display = "block";
})

btnAddCocaCola.addEventListener("click", () => {
    addedProduct = "coca-cola";

    document.getElementById("image-selected-coca-cola").style.display = "none";

    document.getElementById("name-coca-cola").style.display = "none";

    document.getElementById("box-selected-product").style.display = "none";

    btnShowRequests.style.display = "block";
})

btnAddFanta.addEventListener("click", () => {
    addedProduct = "fanta";

    document.getElementById("image-selected-fanta").style.display = "none";

    document.getElementById("name-fanta").style.display = "none";

    document.getElementById("box-selected-product").style.display = "none";

    btnShowRequests.style.display = "block";
})

btnAddSprite.addEventListener("click", () => {
    addedProduct = "sprite";

    document.getElementById("image-selected-sprite").style.display = "none";

    document.getElementById("name-sprite").style.display = "none";

    document.getElementById("box-selected-product").style.display = "none";

    btnShowRequests.style.display = "block";
})

btnAddOrangeJuice.addEventListener("click", () => {
    addedProduct = "suco de laranja";

    document.getElementById("image-selected-orange-juice").style.display = "none";

    document.getElementById("name-orange-juice").style.display = "none";

    document.getElementById("box-selected-product").style.display = "none";

    btnShowRequests.style.display = "block";
})

btnAddLemonJuice.addEventListener("click", () => {
    addedProduct = "suco de limao";

    document.getElementById("image-selected-lemon-juice").style.display = "none";

    document.getElementById("name-lemon-juice").style.display = "none";

    document.getElementById("box-selected-product").style.display = "none";

    btnShowRequests.style.display = "block";
})

btnAddPineappleJuice.addEventListener("click", () => {
    addedProduct = "suco de abacaxi";

    document.getElementById("image-selected-pineapple-juice").style.display = "none";

    document.getElementById("name-pineapple-juice").style.display = "none";

    document.getElementById("box-selected-product").style.display = "none";

    btnShowRequests.style.display = "block";
})


function hideBtnAddProduct() {
    btnAddClassicBurguer.style.display = "none";
    btnAddVegetarianBurguer.style.display = "none";
    btnAddBaconBurguer.style.display = "none";
    btnAddCocaCola.style.display = "none";
    btnAddFanta.style.display = "none";
    btnAddSprite.style.display = "none";
    btnAddOrangeJuice.style.display = "none";
    btnAddLemonJuice.style.display = "none";
    btnAddPineappleJuice.style.display = "none";
}