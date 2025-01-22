// Leva o usuario para a tela onde ele pode definir a quantidade de produtos que ele quer adicionar aos pedidos
const btnAddSelectedProduct = document.getElementsByClassName("btn-add-selected-product");

const btnConfirmOrder = document.getElementsByClassName("btn-confirm-order");

const btnCancelAddition = document.getElementsByClassName("btn-cancel-addition");

const boxBtnsMoreAndLess = document.getElementsByClassName("box-btns-more-and-less");

const boxNameAddedProduct = document.getElementsByClassName("box-names-added-product");

// Pergunta: "quantos voce quer adicionar?"
const textQuantity = document.getElementById("text-quantity");

// Caixa onde aparece a quantidade de um mesmo produto selecionado pelo usuario
const productQuantity = document.getElementsByClassName("product-quantity");

let quantityAddedProducts = 0;


const btnMoreClassicBurguer = document.getElementsByClassName("btns-more-and-less")[1];
const btnLessClassicBurguer = document.getElementsByClassName("btns-more-and-less")[0];


const btnMoreVegetarianBurguer = document.getElementsByClassName("btns-more-and-less")[3];
const btnLessVegetarianBurguer = document.getElementsByClassName("btns-more-and-less")[2];


const btnMoreBaconBurguer = document.getElementsByClassName("btns-more-and-less")[5];
const btnLessBaconBurguer = document.getElementsByClassName("btns-more-and-less")[4];


const btnMoreCocaCola = document.getElementsByClassName("btns-more-and-less")[7];
const btnLessCocaCola = document.getElementsByClassName("btns-more-and-less")[6];


const btnMoreFanta = document.getElementsByClassName("btns-more-and-less")[9];
const btnLessFanta = document.getElementsByClassName("btns-more-and-less")[8];


const btnMoreSprite = document.getElementsByClassName("btns-more-and-less")[11];
const btnLessSprite = document.getElementsByClassName("btns-more-and-less")[10];


const btnMoreOrangeJuice = document.getElementsByClassName("btns-more-and-less")[13];
const btnLessOrangeJuice = document.getElementsByClassName("btns-more-and-less")[12];


const btnMoreLemonJuice = document.getElementsByClassName("btns-more-and-less")[15];
const btnLessLemonJuice = document.getElementsByClassName("btns-more-and-less")[14];


const btnMorePineappleJuice = document.getElementsByClassName("btns-more-and-less")[17];
const btnLessPineappleJuice = document.getElementsByClassName("btns-more-and-less")[16];


// Texto que mostra o valor total que o usuario tem que pagar pelos produtos que ele adicionou aos pedidos
const textTotalToPay = document.getElementById("text-total-to-pay");

const btnConfirmOrders = document.getElementsByClassName("btn-confirm-orders");

const boxAddedProduct = document.getElementsByClassName("box-added-product");

let addedProduct = "";

let quantitiesClassicBurguer = 0;
let quantitiesVegetarianBurguer = 0;
let quantitiesBaconBurguer = 0;
let quantitiesCocaCola = 0;
let quantitiesFanta = 0;
let quantitiesSprite = 0;
let quantitiesOrangeJuice = 0;
let quantitiesLemonJuice = 0;
let quantitiesPineappleJuice = 0;


let valueClassicBurguer = 0;
let valueVegetarianBurguer = 0;
let valueBaconBurguer = 0;
let valueCocaCola = 0;
let valueFanta = 0;
let valueSprite = 0;
let valueOrangeJuice = 0;
let valueLemonJuice = 0;
let valuePineappleJuice = 0;


// Essas variaveis verificam se tem algum produto adiiconado sos pedidos
let verifyOrderClassicBurguer = 0;
let verifyOrderVegetarianBurguer = 0;
let verifyOrderBaconBurguer = 0;
let verifyOrderCocaCola = 0;
let verifyOrderFanta = 0;
let verifyOrderSprite = 0;
let verifyOrderOrangeJuice = 0;
let verifyOrderLemonJuice = 0;
let verifyOrderPineappleJuice = 0;


// Valor total a ser pago pela quantidade de produtos adicionados aos pedidos
let totalToPay;


const nameAddedProduct = document.getElementsByClassName("name-added-product");


hideBtnsConfirmeOrder();


// Botao que fecha a caixa dos pedidos adicionados
btnBackBoxOrders.addEventListener("click", () => {
    boxOrders.style.display = "none";
})

// Botao que confirma os pedidos adicionados
btnConfirmOrders[0].addEventListener("click", () => {
    alert("PEDIDOS CONFIRMADOS! AGORA BASTA INFORMAR O ENDEREÇO DE ENTREGA!");
    boxOrders.style.display = "none";
    btnShowOrders.style.display = "none";
    boxAddres.style.display = "block";
    boxAddres.style.display = "flex";
})


// Leva à tela onde pode adicionar o hamburguer classico aos pedidos
btnAddSelectedProduct[0].addEventListener("click", () => {
    addedProduct = "hamburguer classico";

    if (quantitiesClassicBurguer >= 1) {
        btnConfirmOrder[0].style.display = "block";
    } else {
        btnConfirmOrder[0].style.display = "none";
    }

    boxBtnsMoreAndLess[0].style.display = "block";
    boxBtnsMoreAndLess[0].style.display = "flex";
    productQuantity[0].style.display = "block";
    productQuantity[0].style.display = "flex";
    imageSelectedProduct[0].style.display = "none";
    nameSelectedProduct[0].style.display = "none";
    btnCancelAddition[0].style.display = "block";
    btnAddSelectedProduct[0].style.display = "none";

    showBtns();

    // Pega a quantidade de produtos definidos pelo usuario e exibe na tela
    productQuantity[0].textContent = quantitiesClassicBurguer;
})


// Hamburguer vegetariano
btnAddSelectedProduct[1].addEventListener("click", () => {
    addedProduct = "hamburguer vegetariano";

    if (quantitiesVegetarianBurguer >= 1) {
        btnConfirmOrder[1].style.display = "block";
    } else {
        btnConfirmOrder[1].style.display = "none";
    }

    boxBtnsMoreAndLess[1].style.display = "block";
    boxBtnsMoreAndLess[1].style.display = "flex";
    productQuantity[1].style.display = "block";
    productQuantity[1].style.display = "flex";
    imageSelectedProduct[1].style.display = "none";
    nameSelectedProduct[1].style.display = "none";
    btnCancelAddition[1].style.display = "block";
    btnAddSelectedProduct[1].style.display = "none";

    showBtns();

    // Pega a quantidade de produtos definidos pelo usuario e exibe na tela
    productQuantity[1].textContent = quantitiesVegetarianBurguer;
})


// Hamburguer bbq bacon
btnAddSelectedProduct[2].addEventListener("click", () => {
    addedProduct = "hamburguer bacon";

    if (quantitiesBaconBurguer >= 1) {
        btnConfirmOrder[2].style.display = "block";
    } else {
        btnConfirmOrder[2].style.display = "none";
    }

    boxBtnsMoreAndLess[2].style.display = "block";
    boxBtnsMoreAndLess[2].style.display = "flex";
    productQuantity[2].style.display = "block";
    productQuantity[2].style.display = "flex";
    imageSelectedProduct[2].style.display = "none";
    nameSelectedProduct[2].style.display = "none";
    btnCancelAddition[2].style.display = "block";
    btnAddSelectedProduct[2].style.display = "none";

    showBtns();

    // Pega a quantidade de produtos definidos pelo usuario e exibe na tela
    productQuantity[2].textContent = quantitiesBaconBurguer;
})


// Coca-cola
btnAddSelectedProduct[3].addEventListener("click", () => {
    addedProduct = "coca cola";

    if (quantitiesCocaCola >= 1) {
        btnConfirmOrder[3].style.display = "block";
    } else {
        btnConfirmOrder[3].style.display = "none";
    }

    boxBtnsMoreAndLess[3].style.display = "block";
    boxBtnsMoreAndLess[3].style.display = "flex";
    productQuantity[3].style.display = "block";
    productQuantity[3].style.display = "flex";
    imageSelectedProduct[3].style.display = "none";
    nameSelectedProduct[3].style.display = "none";
    btnCancelAddition[3].style.display = "block";
    btnAddSelectedProduct[3].style.display = "none";

    showBtns();

    // Pega a quantidade de produtos definidos pelo usuario e exibe na tela
    productQuantity[3].textContent = quantitiesCocaCola;
})


// Fanta
btnAddSelectedProduct[4].addEventListener("click", () => {
    addedProduct = "hamburguer bacon";

    if (quantitiesFanta >= 1) {
        btnConfirmOrder[4].style.display = "block";
    } else {
        btnConfirmOrder[4].style.display = "none";
    }

    boxBtnsMoreAndLess[4].style.display = "block";
    boxBtnsMoreAndLess[4].style.display = "flex";
    productQuantity[4].style.display = "block";
    productQuantity[4].style.display = "flex";
    imageSelectedProduct[4].style.display = "none";
    nameSelectedProduct[4].style.display = "none";
    btnCancelAddition[4].style.display = "block";
    btnAddSelectedProduct[4].style.display = "none";

    showBtns();

    // Pega a quantidade de produtos definidos pelo usuario e exibe na tela
    productQuantity[4].textContent = quantitiesFanta;
})


// Sprite
btnAddSelectedProduct[5].addEventListener("click", () => {
    addedProduct = "sprite";

    if (quantitiesSprite >= 1) {
        btnConfirmOrder[5].style.display = "block";
    } else {
        btnConfirmOrder[5].style.display = "none";
    }

    boxBtnsMoreAndLess[5].style.display = "block";
    boxBtnsMoreAndLess[5].style.display = "flex";
    productQuantity[5].style.display = "block";
    productQuantity[5].style.display = "flex";
    imageSelectedProduct[5].style.display = "none";
    nameSelectedProduct[5].style.display = "none";
    btnCancelAddition[5].style.display = "block";
    btnAddSelectedProduct[5].style.display = "none";

    showBtns();

    // Pega a quantidade de produtos definidos pelo usuario e exibe na tela
    productQuantity[5].textContent = quantitiesSprite;
})


// Suco de laranja
btnAddSelectedProduct[6].addEventListener("click", () => {
    addedProduct = "suco de laranja";

    if (quantitiesOrangeJuice >= 1) {
        btnConfirmOrder[6].style.display = "block";
    } else {
        btnConfirmOrder[6].style.display = "none";
    }

    boxBtnsMoreAndLess[6].style.display = "block";
    boxBtnsMoreAndLess[6].style.display = "flex";
    productQuantity[6].style.display = "block";
    productQuantity[6].style.display = "flex";
    imageSelectedProduct[6].style.display = "none";
    nameSelectedProduct[6].style.display = "none";
    btnCancelAddition[6].style.display = "block";
    btnAddSelectedProduct[6].style.display = "none";

    showBtns();

    // Pega a quantidade de produtos definidos pelo usuario e exibe na tela
    productQuantity[6].textContent = quantitiesOrangeJuice;
})


// Suco de limao
btnAddSelectedProduct[7].addEventListener("click", () => {
    addedProduct = "suco de limao";

    if (quantitiesLemonJuice >= 1) {
        btnConfirmOrder[7].style.display = "block";
    } else {
        btnConfirmOrder[7].style.display = "none";
    }

    boxBtnsMoreAndLess[7].style.display = "block";
    boxBtnsMoreAndLess[7].style.display = "flex";
    productQuantity[7].style.display = "block";
    productQuantity[7].style.display = "flex";
    imageSelectedProduct[7].style.display = "none";
    nameSelectedProduct[7].style.display = "none";
    btnCancelAddition[7].style.display = "block";
    btnAddSelectedProduct[7].style.display = "none";

    showBtns();

    // Pega a quantidade de produtos definidos pelo usuario e exibe na tela
    productQuantity[7].textContent = quantitiesLemonJuice;
})


// Suco de abacaxi
btnAddSelectedProduct[8].addEventListener("click", () => {
    addedProduct = "suco de abacaxi";

    if (quantitiesPineappleJuice >= 1) {
        btnConfirmOrder[8].style.display = "block";
    } else {
        btnConfirmOrder[8].style.display = "none";
    }

    boxBtnsMoreAndLess[8].style.display = "block";
    boxBtnsMoreAndLess[8].style.display = "flex";
    productQuantity[8].style.display = "block";
    productQuantity[8].style.display = "flex";
    imageSelectedProduct[8].style.display = "none";
    nameSelectedProduct[8].style.display = "none";
    btnCancelAddition[8].style.display = "block";
    btnAddSelectedProduct[8].style.display = "none";

    showBtns();

    // Pega a quantidade de produtos definidos pelo usuario e exibe na tela
    productQuantity[8].textContent = quantitiesPineappleJuice;
})



// Confirma a adicao do hamburguer classico aos pedidos
btnConfirmOrder[0].addEventListener("click", () => {
    quantityAddedProducts += 1;

    boxAddedProduct[0].style.display = "block";
    boxAddedProduct[0].style.display = "flex";

    // Se tiver algum hamburguer classico adicionado aos pedidos a verifyOrderClassicBurguer recebe mais 1
    if (quantitiesClassicBurguer >= 1 & verifyOrderClassicBurguer <= 0) {
        verifyOrderClassicBurguer += 1;
    } else {
        verifyOrderClassicBurguer = 0;
    }

    if (quantitiesClassicBurguer == 1) {
        nameAddedProduct[0].textContent = quantitiesClassicBurguer + " HAMBÚRGUER CLÁSSICO";

        btnConfirmOrders[0].textContent = "CONFIRMAR PEDIDO";
    } else {
        nameAddedProduct[0].textContent = quantitiesClassicBurguer + " HAMBÚRGUERES CLÁSSICOS";
    }

    alert("ADICIONADO AOS PEDIDOS COM SUCESSO!");

    boxSelectedProduct.style.display = "none";
    productQuantity[0].style.display = "none";
    boxBtnsMoreAndLess[0].style.display = "none";
    btnCancelAddition[0].style.display = "none";
    btnConfirmOrder[0].style.display = "none";
    btnShowOrders.style.display = "block";
    btnRemoveOrder[0].style.display = "block";
})
// Cancela a adicao do hamburguer classico aos pedidos
btnCancelAddition[0].addEventListener("click", () => {
    if (quantitiesVegetarianBurguer>=1 || quantitiesClassicBurguer>=1 || quantitiesBaconBurguer>=1) {
        btnShowOrders.style.display = "block";
    } else {
        btnShowOrders.style.display = "none";
    }

    boxSelectedProduct.style.display = "none";
    boxBtnsMoreAndLess[0].style.display = "none";
    productQuantity[0].style.display = "none";
    btnCancelAddition[0].style.display = "none";
    btnConfirmOrder[0].style.display = "none";
})




// Confirma a adicao do hamburguer vegetariano aos pedidos
btnConfirmOrder[1].addEventListener("click", () => {
    quantityAddedProducts += 1;

    boxAddedProduct[1].style.display = "block";
    boxAddedProduct[1].style.display = "flex";

    // Se tiver algum hamburguer classico adicionado aos pedidos verifyOrderClassicBurguer recebe mais 1
    if (quantitiesVegetarianBurguer >= 1 & verifyOrderVegetarianBurguer <= 0) {
        verifyOrderVegetarianBurguer += 1;
    } else {
        verifyOrderVegetarianBurguer = 0;
    }

    if (quantitiesVegetarianBurguer == 1) {
        nameAddedProduct[1].textContent = quantitiesVegetarianBurguer + " HAMBÚRGUER VEGETARIANO";

        btnConfirmOrders[0].textContent = "CONFIRMAR PEDIDO";
    } else {
        nameAddedProduct[1].textContent = quantitiesVegetarianBurguer + " HAMBÚRGUERES VEGETARIANOS";
    }

    alert("ADICIONADO AOS PEDIDOS COM SUCESSO!");

    boxSelectedProduct.style.display = "none";
    productQuantity[1].style.display = "none";
    boxBtnsMoreAndLess[1].style.display = "none";
    btnCancelAddition[1].style.display = "none";
    btnConfirmOrder[1].style.display = "none";
    btnShowOrders.style.display = "block";
    btnRemoveOrder[1].style.display = "block";
})
// Cancela a adicao do hamburguer vegetariano aos pedidos
btnCancelAddition[1].addEventListener("click", () => {
    if (quantitiesVegetarianBurguer>=1 || quantitiesClassicBurguer>=1 || quantitiesBaconBurguer>=1) {
        btnShowOrders.style.display = "block";
    } else {
        btnShowOrders.style.display = "none";
    }

    boxSelectedProduct.style.display = "none";
    boxBtnsMoreAndLess[1].style.display = "none";
    productQuantity[1].style.display = "none";
    btnCancelAddition[1].style.display = "none";
    btnConfirmOrder[1].style.display = "none";
})




// Confirma a adicao do hamburguer bbq bacon aos pedidos
btnConfirmOrder[2].addEventListener("click", () => {
    quantityAddedProducts += 1;

    boxAddedProduct[2].style.display = "block";
    boxAddedProduct[2].style.display = "flex";

    // Se tiver algum hamburguer classico adicionado aos pedidos verifyOrderClassicBurguer recebe mais 1
    if (quantitiesBaconBurguer >= 1 & verifyOrderBaconBurguer <= 0) {
        verifyOrderBaconBurguer += 1;
    } else {
        verifyOrderBaconBurguer = 0;
    }

    if (quantitiesBaconBurguer == 1) {
        nameAddedProduct[2].textContent = quantitiesBaconBurguer + " HAMBÚRGUER BBQ BACON";

        btnConfirmOrders[0].textContent = "CONFIRMAR PEDIDO";
    } else {
        nameAddedProduct[2].textContent = quantitiesBaconBurguer + " HAMBÚRGUERES BBQ BACON";
    }

    alert("ADICIONADO AOS PEDIDOS COM SUCESSO!");

    boxSelectedProduct.style.display = "none";
    productQuantity[2].style.display = "none";
    boxBtnsMoreAndLess[2].style.display = "none";
    btnCancelAddition[2].style.display = "none";
    btnConfirmOrder[2].style.display = "none";
    btnShowOrders.style.display = "block";
    btnRemoveOrder[2].style.display = "block";
})
// Cancela a adicao do hamburguer bbq bacon aos pedidos
btnCancelAddition[2].addEventListener("click", () => {
    if (quantitiesBaconBurguer>=1 || quantitiesClassicBurguer>=1 || quantitiesVegetarianBurguer>=1) {
        btnShowOrders.style.display = "block";
    } else {
        btnShowOrders.style.display = "none";
    }

    boxSelectedProduct.style.display = "none";
    boxBtnsMoreAndLess[2].style.display = "none";
    productQuantity[2].style.display = "none";
    btnCancelAddition[2].style.display = "none";
    btnConfirmOrder[2].style.display = "none";
})




// Confirma a adicao da coca cola aos pedidos
btnConfirmOrder[3].addEventListener("click", () => {
    quantityAddedProducts += 1;

    boxAddedProduct[3].style.display = "block";
    boxAddedProduct[3].style.display = "flex";

    // Se tiver algum hamburguer classico adicionado aos pedidos verifyOrderClassicBurguer recebe mais 1
    if (quantitiesCocaCola >= 1 & verifyOrderCocaCola <= 0) {
        verifyOrderCocaCola += 1;
    } else {
        verifyOrderCocaCola = 0;
    }

    if (quantitiesCocaCola == 1) {
        nameAddedProduct[3].textContent = quantitiesCocaCola + " COCA-COLA";

        btnConfirmOrders[0].textContent = "CONFIRMAR PEDIDO";
    } else {
        nameAddedProduct[3].textContent = quantitiesCocaCola + " COCA-COLAS";
    }

    alert("ADICIONADO AOS PEDIDOS COM SUCESSO!");

    boxSelectedProduct.style.display = "none";
    productQuantity[3].style.display = "none";
    boxBtnsMoreAndLess[3].style.display = "none";
    btnCancelAddition[3].style.display = "none";
    btnConfirmOrder[3].style.display = "none";
    btnShowOrders.style.display = "block";
    btnRemoveOrder[3].style.display = "block";
})
// Cancela a adicao da coca cola aos pedidos
btnCancelAddition[3].addEventListener("click", () => {
    if (quantitiesCocaCola>=1 || quantitiesClassicBurguer>=1 || quantitiesVegetarianBurguer>=1 || quantitiesBaconBurguer) {
        btnShowOrders.style.display = "block";
    } else {
        btnShowOrders.style.display = "none";
    }

    boxSelectedProduct.style.display = "none";
    boxBtnsMoreAndLess[3].style.display = "none";
    productQuantity[3].style.display = "none";
    btnCancelAddition[3].style.display = "none";
    btnConfirmOrder[3].style.display = "none";
})




// Confirma a adicao da fanta aos pedidos
btnConfirmOrder[4].addEventListener("click", () => {
    quantityAddedProducts += 1;

    boxAddedProduct[4].style.display = "block";
    boxAddedProduct[4].style.display = "flex";

    // Se tiver algum hamburguer classico adicionado aos pedidos verifyOrderClassicBurguer recebe mais 1
    if (quantitiesFanta >= 1 & verifyOrderFanta <= 0) {
        verifyOrderFanta += 1;
    } else {
        verifyOrderFanta = 0;
    }

    if (quantitiesFanta == 1) {
        nameAddedProduct[4].textContent = quantitiesFanta + " FANTA";

        btnConfirmOrders[0].textContent = "CONFIRMAR PEDIDO";
    } else {
        nameAddedProduct[4].textContent = quantitiesFanta + " FANTAS";
    }

    alert("ADICIONADO AOS PEDIDOS COM SUCESSO!");

    boxSelectedProduct.style.display = "none";
    productQuantity[4].style.display = "none";
    boxBtnsMoreAndLess[4].style.display = "none";
    btnCancelAddition[4].style.display = "none";
    btnConfirmOrder[4].style.display = "none";
    btnShowOrders.style.display = "block";
    btnRemoveOrder[4].style.display = "block";
})
// Cancela a adicao da fanta aos pedidos
btnCancelAddition[4].addEventListener("click", () => {
    if (quantitiesFanta>=1 || quantitiesClassicBurguer>=1 || quantitiesVegetarianBurguer>=1 || quantitiesBaconBurguer || quantitiesCocaCola>=1) {
        btnShowOrders.style.display = "block";
    } else {
        btnShowOrders.style.display = "none";
    }

    boxSelectedProduct.style.display = "none";
    boxBtnsMoreAndLess[4].style.display = "none";
    productQuantity[4].style.display = "none";
    btnCancelAddition[4].style.display = "none";
    btnConfirmOrder[4].style.display = "none";
})




// Confirma a adicao do sprite aos pedidos
btnConfirmOrder[5].addEventListener("click", () => {
    quantityAddedProducts += 1;

    boxAddedProduct[5].style.display = "block";
    boxAddedProduct[5].style.display = "flex";

    // Se tiver algum hamburguer classico adicionado aos pedidos verifyOrderClassicBurguer recebe mais 1
    if (quantitiesSprite >= 1 & verifyOrderSprite <= 0) {
        verifyOrderSprite += 1;
    } else {
        verifyOrderSprite = 0;
    }

    if (quantitiesSprite == 1) {
        nameAddedProduct[5].textContent = quantitiesSprite + " SPRITE";

        btnConfirmOrders[0].textContent = "CONFIRMAR PEDIDO";
    } else {
        nameAddedProduct[5].textContent = quantitiesSprite + " SPRITES";
    }

    alert("ADICIONADO AOS PEDIDOS COM SUCESSO!");

    boxSelectedProduct.style.display = "none";
    productQuantity[5].style.display = "none";
    boxBtnsMoreAndLess[5].style.display = "none";
    btnCancelAddition[5].style.display = "none";
    btnConfirmOrder[5].style.display = "none";
    btnShowOrders.style.display = "block";
    btnRemoveOrder[5].style.display = "block";
})
// Cancela a adicao do sprite aos pedidos
btnCancelAddition[5].addEventListener("click", () => {
    if (quantitiesFanta>=1 || quantitiesSprite>=1 || quantitiesClassicBurguer>=1 || quantitiesVegetarianBurguer>=1 || quantitiesBaconBurguer || quantitiesCocaCola>=1) {
        btnShowOrders.style.display = "block";
    } else {
        btnShowOrders.style.display = "none";
    }

    boxSelectedProduct.style.display = "none";
    boxBtnsMoreAndLess[5].style.display = "none";
    productQuantity[5].style.display = "none";
    btnCancelAddition[5].style.display = "none";
    btnConfirmOrder[5].style.display = "none";
})




// Confirma a adicao do suco de laranja aos pedidos
btnConfirmOrder[6].addEventListener("click", () => {
    quantityAddedProducts += 1;

    boxAddedProduct[6].style.display = "block";
    boxAddedProduct[6].style.display = "flex";

    // Se tiver algum hamburguer classico adicionado aos pedidos verifyOrderClassicBurguer recebe mais 1
    if (quantitiesOrangeJuice >= 1 & verifyOrderOrangeJuice <= 0) {
        verifyOrderOrangeJuice += 1;
    } else {
        verifyOrderOrangeJuice = 0;
    }

    if (quantitiesOrangeJuice == 1) {
        nameAddedProduct[6].textContent = quantitiesOrangeJuice + " SUCO DE LARANJA";

        btnConfirmOrders[0].textContent = "CONFIRMAR PEDIDO";
    } else {
        nameAddedProduct[6].textContent = quantitiesOrangeJuice + " SUCOS DE LARANJA";
    }

    alert("ADICIONADO AOS PEDIDOS COM SUCESSO!");

    boxSelectedProduct.style.display = "none";
    productQuantity[6].style.display = "none";
    boxBtnsMoreAndLess[6].style.display = "none";
    btnCancelAddition[6].style.display = "none";
    btnConfirmOrder[6].style.display = "none";
    btnShowOrders.style.display = "block";
    btnRemoveOrder[6].style.display = "block";
})
// Cancela a adicao do suco de laranja aos pedidos
btnCancelAddition[6].addEventListener("click", () => {
    if (quantitiesOrangeJuice>=1 || quantitiesFanta>=1 || quantitiesSprite>=1 || quantitiesClassicBurguer>=1 || quantitiesVegetarianBurguer>=1 || quantitiesBaconBurguer || quantitiesCocaCola>=1) {
        btnShowOrders.style.display = "block";
    } else {
        btnShowOrders.style.display = "none";
    }

    boxSelectedProduct.style.display = "none";
    boxBtnsMoreAndLess[6].style.display = "none";
    productQuantity[6].style.display = "none";
    btnCancelAddition[6].style.display = "none";
    btnConfirmOrder[6].style.display = "none";
})




// Confirma a adicao do suco de limao aos pedidos
btnConfirmOrder[7].addEventListener("click", () => {
    quantityAddedProducts += 1;

    boxAddedProduct[7].style.display = "block";
    boxAddedProduct[7].style.display = "flex";

    // Se tiver algum hamburguer classico adicionado aos pedidos verifyOrderClassicBurguer recebe mais 1
    if (quantitiesLemonJuice >= 1 & verifyOrderLemonJuice <= 0) {
        verifyOrderLemonJuice += 1;
    } else {
        verifyOrderLemonJuice = 0;
    }

    if (quantitiesLemonJuice == 1) {
        nameAddedProduct[7].textContent = quantitiesLemonJuice + " SUCO DE LIMÃO";

        btnConfirmOrders[0].textContent = "CONFIRMAR PEDIDO";
    } else {
        nameAddedProduct[7].textContent = quantitiesLemonJuice + " SUCOS DE LIMÃO";
    }

    alert("ADICIONADO AOS PEDIDOS COM SUCESSO!");

    boxSelectedProduct.style.display = "none";
    productQuantity[7].style.display = "none";
    boxBtnsMoreAndLess[7].style.display = "none";
    btnCancelAddition[7].style.display = "none";
    btnConfirmOrder[7].style.display = "none";
    btnShowOrders.style.display = "block";
    btnRemoveOrder[7].style.display = "block";
})
// Cancela a adicao do suco de limao aos pedidos
btnCancelAddition[7].addEventListener("click", () => {
    if (quantitiesLemonJuice>=1 || quantitiesOrangeJuice>=1 || quantitiesFanta>=1 || quantitiesSprite>=1 || quantitiesClassicBurguer>=1 || quantitiesVegetarianBurguer>=1 || quantitiesBaconBurguer || quantitiesCocaCola>=1) {
        btnShowOrders.style.display = "block";
    } else {
        btnShowOrders.style.display = "none";
    }

    boxSelectedProduct.style.display = "none";
    boxBtnsMoreAndLess[7].style.display = "none";
    productQuantity[7].style.display = "none";
    btnCancelAddition[7].style.display = "none";
    btnConfirmOrder[7].style.display = "none";
})




// Confirma a adicao do suco de abacaxi aos pedidos
btnConfirmOrder[8].addEventListener("click", () => {
    quantityAddedProducts += 1;

    boxAddedProduct[8].style.display = "block";
    boxAddedProduct[8].style.display = "flex";

    // Se tiver algum hamburguer classico adicionado aos pedidos verifyOrderClassicBurguer recebe mais 1
    if (quantitiesPineappleJuice >= 1 & verifyOrderPineappleJuice <= 0) {
        verifyOrderPineappleJuice += 1;
    } else {
        verifyOrderPineappleJuice = 0;
    }

    if (quantitiesPineappleJuice == 1) {
        nameAddedProduct[8].textContent = quantitiesPineappleJuice + " SUCO DE ABACAXI";

        btnConfirmOrders[0].textContent = "CONFIRMAR PEDIDO";
    } else {
        nameAddedProduct[8].textContent = quantitiesPineappleJuice + " SUCOS DE ABACAXI";
    }

    alert("ADICIONADO AOS PEDIDOS COM SUCESSO!");

    boxSelectedProduct.style.display = "none";
    productQuantity[8].style.display = "none";
    boxBtnsMoreAndLess[8].style.display = "none";
    btnCancelAddition[8].style.display = "none";
    btnConfirmOrder[8].style.display = "none";
    btnShowOrders.style.display = "block";
    btnRemoveOrder[8].style.display = "block";
})
// Cancela a adicao do suco de abacaxi aos pedidos
btnCancelAddition[8].addEventListener("click", () => {
    if (quantitiesLemonJuice>=1 || quantitiesLemonJuice>=1 || quantitiesOrangeJuice>=1 || quantitiesFanta>=1 || quantitiesSprite>=1 || quantitiesClassicBurguer>=1 || quantitiesVegetarianBurguer>=1 || quantitiesBaconBurguer || quantitiesCocaCola>=1) {
        btnShowOrders.style.display = "block";
    } else {
        btnShowOrders.style.display = "none";
    }

    boxSelectedProduct.style.display = "none";
    boxBtnsMoreAndLess[8].style.display = "none";
    productQuantity[8].style.display = "none";
    btnCancelAddition[8].style.display = "none";
    btnConfirmOrder[8].style.display = "none";
})




// Soma 1 hamburguer classico
btnMoreClassicBurguer.addEventListener("click", () => {
    quantitiesClassicBurguer += 1;

    valueClassicBurguer += 7;

    productQuantity[0].textContent = quantitiesClassicBurguer;
    productQuantity[0].style.display = "flex";

    if (quantitiesClassicBurguer >= 1) {
        btnConfirmOrder[0].style.display = "block";
    }
})
// Diminui 1 hamburguer classico
btnLessClassicBurguer.addEventListener("click", () => {
    valueClassicBurguer -= 7;

    if (quantitiesClassicBurguer >= 1) {
        quantitiesClassicBurguer -= 1;
    }

    productQuantity[0].textContent = quantitiesClassicBurguer;
    productQuantity[0].style.display = "flex";

    if (quantitiesClassicBurguer == 0) {
        btnConfirmOrder[0].style.display = "none";
    }
})



// Soma 1 hamburguer vegetariano
btnMoreVegetarianBurguer.addEventListener("click", () => {
    quantitiesVegetarianBurguer += 1;

    valueVegetarianBurguer += 9.5;

    productQuantity[1].textContent = quantitiesVegetarianBurguer;
    productQuantity[1].style.display = "flex";

    if (quantitiesVegetarianBurguer >= 1) {
        btnConfirmOrder[1].style.display = "block";
    }
})
// Diminui 1 hamburguer vegetariano
btnLessVegetarianBurguer.addEventListener("click", () => {
    valueVegetarianBurguer -= 9.5;

    if (quantitiesVegetarianBurguer >= 1) {
        quantitiesVegetarianBurguer -= 1;
    }

    productQuantity[1].textContent = quantitiesVegetarianBurguer;
    productQuantity[1].style.display = "flex";

    if (quantitiesVegetarianBurguer == 0) {
        btnConfirmOrder[1].style.display = "none";
    }
})



// Soma 1 hamburguer bbq bacon
btnMoreBaconBurguer.addEventListener("click", () => {
    quantitiesBaconBurguer += 1;

    valueBaconBurguer += 12;

    productQuantity[2].textContent = quantitiesBaconBurguer;
    productQuantity[2].style.display = "flex";

    if (quantitiesBaconBurguer >= 1) {
        btnConfirmOrder[2].style.display = "block";
    }
})
// Diminui 1 hamburguer bbq bacon
btnLessBaconBurguer.addEventListener("click", () => {
    valueBaconBurguer -= 12;

    if (quantitiesBaconBurguer >= 1) {
        quantitiesBaconBurguer -= 1;
    }

    productQuantity[2].textContent = quantitiesBaconBurguer;
    productQuantity[2].style.display = "flex";

    if (quantitiesBaconBurguer == 0) {
        btnConfirmOrder[2].style.display = "none";
    }
})




// Soma 1 coca cola
btnMoreCocaCola.addEventListener("click", () => {
    quantitiesCocaCola += 1;

    valueCocaCola += 8;

    productQuantity[3].textContent = quantitiesCocaCola;
    productQuantity[3].style.display = "flex";

    if (quantitiesCocaCola >= 1) {
        btnConfirmOrder[3].style.display = "block";
    }
})
// Diminui 1 coca cola
btnLessCocaCola.addEventListener("click", () => {
    valueCocaCola -= 8;

    if (quantitiesClassicBurguer >= 1) {
        quantitiesCocaCola -= 1;
    }

    productQuantity[3].textContent = quantitiesCocaCola;
    productQuantity[3].style.display = "flex";

    if (quantitiesCocaCola == 0) {
        btnConfirmOrder[0].style.display = "none";
    }
})



// Soma 1 fanta
btnMoreFanta.addEventListener("click", () => {
    quantitiesFanta += 1;

    valueFanta += 6;

    productQuantity[4].textContent = quantitiesFanta;
    productQuantity[4].style.display = "flex";

    if (quantitiesFanta >= 1) {
        btnConfirmOrder[4].style.display = "block";
    }
})
// Diminui 1 fanta
btnLessFanta.addEventListener("click", () => {
    valueFanta -= 6;

    if (quantitiesFanta >= 1) {
        quantitiesFanta -= 1;
    }

    productQuantity[4].textContent = quantitiesFanta;
    productQuantity[4].style.display = "flex";

    if (quantitiesFanta == 0) {
        btnConfirmOrder[0].style.display = "none";
    }
})




// Soma 1 sprite
btnMoreSprite.addEventListener("click", () => {
    quantitiesSprite += 1;

    valueSprite += 6.5;

    productQuantity[5].textContent = quantitiesSprite;
    productQuantity[5].style.display = "flex";

    if (quantitiesSprite >= 1) {
        btnConfirmOrder[5].style.display = "block";
    }
})
// Diminui 1 sprite
btnLessSprite.addEventListener("click", () => {
    valueSprite -= 6.5;

    if (quantitiesSprite >= 1) {
        quantitiesSprite -= 1;
    }

    productQuantity[5].textContent = quantitiesSprite;
    productQuantity[5].style.display = "flex";

    if (quantitiesSprite == 0) {
        btnConfirmOrder[5].style.display = "none";
    }
})




// Soma 1 suco de laranja
btnMoreOrangeJuice.addEventListener("click", () => {
    quantitiesOrangeJuice += 1;

    valueOrangeJuice += 5;

    productQuantity[6].textContent = quantitiesOrangeJuice;
    productQuantity[6].style.display = "flex";

    if (quantitiesOrangeJuice >= 1) {
        btnConfirmOrder[6].style.display = "block";
    }
})
// Diminui 1 suco de laranja
btnLessOrangeJuice.addEventListener("click", () => {
    valueOrangeJuice -= 5;

    if (quantitiesOrangeJuice >= 1) {
        quantitiesOrangeJuice -= 1;
    }

    productQuantity[6].textContent = quantitiesOrangeJuice;
    productQuantity[6].style.display = "flex";

    if (quantitiesOrangeJuice == 0) {
        btnConfirmOrder[6].style.display = "none";
    }
})




// Soma 1 suco de limao
btnMoreLemonJuice.addEventListener("click", () => {
    quantitiesLemonJuice += 1;

    valueLemonJuice += 7;

    productQuantity[7].textContent = quantitiesLemonJuice;
    productQuantity[7].style.display = "flex";

    if (quantitiesLemonJuice >= 1) {
        btnConfirmOrder[7].style.display = "block";
    }
})
// Diminui 1 suco de limao
btnLessLemonJuice.addEventListener("click", () => {
    valueLemonJuice -= 7;

    if (quantitiesLemonJuice >= 1) {
        quantitiesLemonJuice -= 1;
    }

    productQuantity[7].textContent = quantitiesLemonJuice;
    productQuantity[7].style.display = "flex";

    if (quantitiesLemonJuice == 0) {
        btnConfirmOrder[7].style.display = "none";
    }
})




// Soma 1 suco de abacaxi
btnMorePineappleJuice.addEventListener("click", () => {
    quantitiesPineappleJuice += 1;

    valuePineappleJuice += 7.5;

    productQuantity[8].textContent = quantitiesPineappleJuice;
    productQuantity[8].style.display = "flex";

    if (quantitiesPineappleJuice >= 1) {
        btnConfirmOrder[8].style.display = "block";
    }
})
// Diminui 1 suco de abacaxi
btnLessPineappleJuice.addEventListener("click", () => {
    valuePineappleJuice -= 7.5;

    if (quantitiesPineappleJuice >= 1) {
        quantitiesPineappleJuice -= 1;
    }

    productQuantity[8].textContent = quantitiesPineappleJuice;
    productQuantity[8].style.display = "flex";

    if (quantitiesPineappleJuice == 0) {
        btnConfirmOrder[8].style.display = "none";
    }
})



function showBtns() {
    textQuantity.style.display = "block";
    btnBackSelectedProduct.style.display = "none";
}


function hideBtnsConfirmeOrder() {
    btnConfirmOrder[0].style.display = "none";
    btnConfirmOrder[1].style.display = "none";
    btnConfirmOrder[2].style.display = "none";
    btnConfirmOrder[3].style.display = "none";
    btnConfirmOrder[4].style.display = "none";
    btnConfirmOrder[5].style.display = "none";
    btnConfirmOrder[6].style.display = "none";
    btnConfirmOrder[7].style.display = "none";
    btnConfirmOrder[8].style.display = "none";
}