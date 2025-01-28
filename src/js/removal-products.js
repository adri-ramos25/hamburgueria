const btnRemoveOrder = document.getElementsByClassName("btn-remove-order");

// Remove hamburguer classico dos pedidos
btnRemoveOrder[0].addEventListener("click", () => { 
    valueClassicBurguer = 0;

    quantityAddedProducts -= 1;

    verifyOrderClassicBurguer -= 1;

    totalToPay = valueClassicBurguer + valueVegetarianBurguer + valueBaconBurguer + valueCocaCola + valueFanta + valueSprite + valueOrangeJuice + valueLemonJuice + valuePineappleJuice;

    textTotalToPay.textContent = "COM ISSO, O TOTAL A PAGAR É " + totalToPay + " REAIS!";
    textTotalToPay.style.fontSize = "12px";

    boxAddedProduct[0].style.display = "none";

    quantitiesClassicBurguer = 0;

    numProductsAdded();
})

// Remove hamburguer vegetariano dos pedidos
btnRemoveOrder[1].addEventListener("click", () => { 
    valueVegetarianBurguer = 0;

    quantityAddedProducts -= 1;

    verifyOrderVegetarianBurguer -= 1;

    totalToPay = valueClassicBurguer + valueVegetarianBurguer + valueBaconBurguer + valueCocaCola + valueFanta + valueSprite + valueOrangeJuice + valueLemonJuice + valuePineappleJuice;

    textTotalToPay.textContent = "COM ISSO, O TOTAL A PAGAR É " + totalToPay + " REAIS!";
    textTotalToPay.style.fontSize = "12px";

    boxAddedProduct[1].style.display = "none";

    quantitiesVegetarianBurguer = 0;

    numProductsAdded();
})

// Remove hamburguer bbq bacon dos pedidos
btnRemoveOrder[2].addEventListener("click", () => { 
    valueBaconBurguer = 0;

    quantityAddedProducts -= 1;

    verifyOrderBaconBurguer -= 1;

    totalToPay = valueClassicBurguer + valueVegetarianBurguer + valueBaconBurguer + valueCocaCola + valueFanta + valueSprite + valueOrangeJuice + valueLemonJuice + valuePineappleJuice;

    textTotalToPay.textContent = "COM ISSO, O TOTAL A PAGAR É " + totalToPay + " REAIS!";
    textTotalToPay.style.fontSize = "12px";

    boxAddedProduct[2].style.display = "none";

    quantitiesBaconBurguer = 0;

    numProductsAdded();
})

// Remove coca-cola dos pedidos
btnRemoveOrder[3].addEventListener("click", () => {
    valueCocaCola = 0;
 
    quantityAddedProducts -= 1;

    verifyOrderCocaCola -= 1;

    totalToPay = valueClassicBurguer + valueVegetarianBurguer + valueBaconBurguer + valueCocaCola + valueFanta + valueSprite + valueOrangeJuice + valueLemonJuice + valuePineappleJuice;

    textTotalToPay.textContent = "COM ISSO, O TOTAL A PAGAR É " + totalToPay + " REAIS!";
    textTotalToPay.style.fontSize = "12px";

    boxAddedProduct[3].style.display = "none";

    quantitiesCocaCola = 0;

    numProductsAdded();
})

// Remove fanta dos pedidos
btnRemoveOrder[4].addEventListener("click", () => { 
    valueFanta = 0;

    quantityAddedProducts -= 1;

    verifyOrderFanta -= 1;

    totalToPay = valueClassicBurguer + valueVegetarianBurguer + valueBaconBurguer + valueCocaCola + valueFanta + valueSprite + valueOrangeJuice + valueLemonJuice + valuePineappleJuice;

    textTotalToPay.textContent = "COM ISSO, O TOTAL A PAGAR É " + totalToPay + " REAIS!";
    textTotalToPay.style.fontSize = "12px";

    boxAddedProduct[4].style.display = "none";

    quantitiesFanta = 0;

    numProductsAdded();
})

// Remove sprite dos pedidos
btnRemoveOrder[5].addEventListener("click", () => { 
    valueSprite = 0;

    quantityAddedProducts -= 1;

    verifyOrderSprite -= 1;

    totalToPay = valueClassicBurguer + valueVegetarianBurguer + valueBaconBurguer + valueCocaCola + valueFanta + valueSprite + valueOrangeJuice + valueLemonJuice + valuePineappleJuice;

    textTotalToPay.textContent = "COM ISSO, O TOTAL A PAGAR É " + totalToPay + " REAIS!";
    textTotalToPay.style.fontSize = "12px";

    boxAddedProduct[5].style.display = "none";

    quantitiesSprite = 0;

    numProductsAdded();
})

// Remove suco de laranja dos pedidos
btnRemoveOrder[6].addEventListener("click", () => { 
    valueOrangeJuice = 0;

    quantityAddedProducts -= 1;

    verifyOrderOrangeJuice -= 1;

    totalToPay = valueClassicBurguer + valueVegetarianBurguer + valueBaconBurguer + valueCocaCola + valueFanta + valueSprite + valueOrangeJuice + valueLemonJuice + valuePineappleJuice;

    textTotalToPay.textContent = "COM ISSO, O TOTAL A PAGAR É " + totalToPay + " REAIS!";
    textTotalToPay.style.fontSize = "12px";

    boxAddedProduct[6].style.display = "none";

    quantitiesOrangeJuice = 0;

    numProductsAdded();
})

// Remove suco de limao dos pedidos
btnRemoveOrder[7].addEventListener("click", () => { 
    valueLemonJuice = 0;

    quantityAddedProducts -= 1;

    verifyOrderLemonJuice -= 1;

    totalToPay = valueClassicBurguer + valueVegetarianBurguer + valueBaconBurguer + valueCocaCola + valueFanta + valueSprite + valueOrangeJuice + valueLemonJuice + valuePineappleJuice;

    textTotalToPay.textContent = "COM ISSO, O TOTAL A PAGAR É " + totalToPay + " REAIS!";
    textTotalToPay.style.fontSize = "12px";

    boxAddedProduct[7].style.display = "none";

    quantitiesLemonJuice = 0;

    numProductsAdded();
})

// Remove suco de abacaxi dos pedidos
btnRemoveOrder[8].addEventListener("click", () => { 
    valuePineappleJuice = 0;

    quantityAddedProducts -= 1;

    verifyOrderPineappleJuice -= 1;

    totalToPay = valueClassicBurguer + valueVegetarianBurguer + valueBaconBurguer + valueCocaCola + valueFanta + valueSprite + valueOrangeJuice + valueLemonJuice + valuePineappleJuice;

    textTotalToPay.textContent = "COM ISSO, O TOTAL A PAGAR É " + totalToPay + " REAIS!";
    textTotalToPay.style.fontSize = "12px";

    boxAddedProduct[8].style.display = "none";

    quantitiesPineappleJuice = 0;

    numProductsAdded();
})



// As caixas somem se a quantidade de produtos adicionados aos pedidos for 0
function numProductsAdded() {
    if (quantityAddedProducts <= 0) {
        boxBackground.style.display = "none";
        boxOrders.style.display = "none";
        btnShowOrders.style.display = "none";
    }
}