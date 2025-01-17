const btnRemoveOrder = document.getElementsByClassName("btn-remove-order");

// Hamburguer classico
btnRemoveOrder[0].addEventListener("click", () => { 
    valueClassicBurguer = 0;

    quantityAddedProducts -= 1;

    verifyOrderClassicBurguer -= 1;

    boxAddedProduct[0].style.display = "none";

    quantitiesClassicBurguer = 0;

    numProductsAdded();
})

// Hamburguer vegetariano
btnRemoveOrder[1].addEventListener("click", () => { 
    valueVegetarianBurguer = 0;

    quantityAddedProducts -= 1;

    verifyOrderVegetarianBurguer -= 1;

    boxAddedProduct[1].style.display = "none";

    quantitiesVegetarianBurguer = 0;

    numProductsAdded();
})

// Hamburguer bbq bacon
btnRemoveOrder[2].addEventListener("click", () => { 
    valueBaconBurguer = 0;

    quantityAddedProducts -= 1;

    verifyOrderBaconBurguer -= 1;

    boxAddedProduct[2].style.display = "none";

    quantitiesBaconBurguer = 0;

    numProductsAdded();
})

// Coca cola
btnRemoveOrder[3].addEventListener("click", () => {
    valueCocaCola = 0;
 
    quantityAddedProducts -= 1;

    verifyOrderCocaCola -= 1;

    boxAddedProduct[3].style.display = "none";

    quantitiesCocaCola = 0;

    numProductsAdded();
})

// Fanta
btnRemoveOrder[4].addEventListener("click", () => { 
    valueFanta = 0;

    quantityAddedProducts -= 1;

    verifyOrderFanta -= 1;

    boxAddedProduct[4].style.display = "none";

    quantitiesFanta = 0;

    numProductsAdded();
})

// Sprite
btnRemoveOrder[5].addEventListener("click", () => { 
    valueSprite = 0;

    quantityAddedProducts -= 1;

    verifyOrderSprite -= 1;

    boxAddedProduct[5].style.display = "none";

    quantitiesSprite = 0;

    numProductsAdded();
})

// Suco de laranja
btnRemoveOrder[6].addEventListener("click", () => { 
    valueOrangeJuice = 0;

    quantityAddedProducts -= 1;

    verifyOrderOrangeJuice -= 1;

    boxAddedProduct[6].style.display = "none";

    quantitiesOrangeJuice = 0;

    numProductsAdded();
})

// Suco de limao
btnRemoveOrder[7].addEventListener("click", () => { 
    valueLemonJuice = 0;

    quantityAddedProducts -= 1;

    verifyOrderLemonJuice -= 1;

    boxAddedProduct[7].style.display = "none";

    quantitiesLemonJuice = 0;

    numProductsAdded();
})

// Suco de abacaxi
btnRemoveOrder[8].addEventListener("click", () => { 
    valuePineappleJuice = 0;

    quantityAddedProducts -= 1;

    verifyOrderPineappleJuice -= 1;

    boxAddedProduct[8].style.display = "none";

    quantitiesPineappleJuice = 0;

    numProductsAdded();
})




function numProductsAdded() {
    if (quantityAddedProducts <= 0) {
        boxOrders.style.display = "none";
        btnShowOrders.style.display = "none";
    }
}