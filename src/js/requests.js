const btnShowOrders = document.getElementById("btn-show-requests");

const boxOrders = document.getElementById("box-orders");

const btnBackBoxOrders = document.getElementById("btn-back-box-orders");

const input = document.getElementById("input");


btnShowOrders.addEventListener("click", () => {
    boxBackground.style.display = "block";

    boxOrders.style.display = "block";

    totalToPay = valueClassicBurguer + valueVegetarianBurguer + valueBaconBurguer + valueCocaCola + valueFanta + valueSprite + valueOrangeJuice + valueLemonJuice + valuePineappleJuice;

    textTotalToPay.textContent = "COM ISSO, O TOTAL A PAGAR É " + totalToPay + " REAIS!";
})

btnBackBoxOrders.addEventListener("click", () => {
    boxBackground.style.display = "none";
    boxOrders.style.display = "none";
    btnShowOrders.style.display = "block";
})