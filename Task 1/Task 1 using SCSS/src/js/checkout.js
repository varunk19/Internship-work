console.log("checkout.js loaded");
function buy () {
    if(!document.getElementById("buy").disabled)
        alert("Transaction status\nTotal: Rs."+gvars.total.toFixed(2)+"\nTransaction successful");
}