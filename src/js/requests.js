const btnShowOrders = document.getElementById("btn-show-requests");

const boxOrders = document.getElementById("box-orders");

const btnBackBoxOrders = document.getElementById("btn-back-box-orders");


btnShowOrders.addEventListener("click", () => {
    boxOrders.style.display = "block";

    totalToPay = valueClassicBurguer + valueVegetarianBurguer + valueBaconBurguer + valueCocaCola + valueFanta + valueSprite + valueOrangeJuice + valueLemonJuice + valuePineappleJuice;

    textTotalToPay.textContent = "COM ISSO, O TOTAL A PAGAR É " + totalToPay + " REAIS!";
})

btnBackBoxOrders.addEventListener("click", () => {
    boxOrders.style.display = "none";
    btnShowOrders.style.display = "block";
})



if (selectedProduct == "") {
    btnShowOrders.style.display = "none";
}