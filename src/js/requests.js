const btnShowRequests = document.getElementById("btn-show-requests");
const btnFinalizeOrder = document.getElementById("btn-finalize-order");
const btnBackRequests = document.getElementById("btn-back-requests");


btnShowRequests.addEventListener("click", () => {
    document.getElementById("box-requests").style.display = "block";

    addToRequests();
})

btnFinalizeOrder.addEventListener("click", () => {
    document.getElementById("box-requests").style.display = "none";

    document.getElementById("box-classic-burguer").style.display = "none";
    document.getElementById("box-vegetarian-burguer").style.display = "none";
    document.getElementById("box-bacon-burguer").style.display = "none";
    document.getElementById("box-coca-cola").style.display = "none";
    document.getElementById("box-fanta").style.display = "none";
    document.getElementById("box-sprite").style.display = "none";
    document.getElementById("box-orange-juice").style.display = "none";
    document.getElementById("box-lemon-juice").style.display = "none";
    document.getElementById("box-pineapple-juice").style.display = "none";

    btnShowRequests.style.display = "none";
})

btnBackRequests.addEventListener("click", () => {
    document.getElementById("box-requests").style.display = "none";
    document.getElementById("btn-show-requests").style.display = "block";
})



if (selectedProduct == "") {
    btnShowRequests.style.display = "none";
}



function addToRequests() {
    switch(addedProduct) {
        case "hamburguer classico":
            document.getElementById("box-classic-burguer").style.display = "block";
            btnFinalizeOrder.style.display = "block";
            break;
    
        case"hamburguer vegetariano":
            document.getElementById("box-vegetarian-burguer").style.display = "block";
            btnFinalizeOrder.style.display = "block";
            break;
    
        case "hamburguer bbq bacon":
            document.getElementById("box-bacon-burguer").style.display = "block";
            btnFinalizeOrder.style.display = "block";
            break;
    
        case "coca-cola":
            document.getElementById("box-coca-cola").style.display = "block";
            btnFinalizeOrder.style.display = "block";
            break;
    
        case "fanta":
            document.getElementById("box-fanta").style.display = "block";
            btnFinalizeOrder.style.display = "block";
            break;
    
        case "sprite":
            document.getElementById("box-sprite").style.display = "block";
            btnFinalizeOrder.style.display = "block";
            break;
    
        case "suco de laranja": 
            document.getElementById("box-orange-juice").style.display = "block";
            btnFinalizeOrder.style.display = "block";
            break;
    
        case "suco de limao": 
            document.getElementById("box-lemon-juice").style.display = "block";
            btnFinalizeOrder.style.display = "block";
            break;
    
        case "suco de abacaxi":
            document.getElementById("box-pineapple-juice").style.display = "block";
            btnFinalizeOrder.style.display = "block";
            break;
    
        default:
            document.getElementById("box-classic-burguer").style.display = "none";
            document.getElementById("box-vegetarian-burguer").style.display = "none";
            document.getElementById("box-bacon-burguer").style.display = "none";
            document.getElementById("box-coca-cola").style.display = "none";
            document.getElementById("box-fanta").style.display = "none";
            document.getElementById("box-sprite").style.display = "none";
            document.getElementById("box-orange-juice").style.display = "none";
            document.getElementById("box-lemon-juice").style.display = "none";
            document.getElementById("box-pineapple-juice").style.display = "none";
    }
}