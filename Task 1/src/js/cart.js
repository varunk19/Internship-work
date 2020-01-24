console.log("cart.js loaded");
let funcs = {
    inc: function (no) {
        document.getElementById ("buy").disabled = false;
        gvars.qty[no] = gvars.qty[no] + 1;
        gvars.mq = gvars.mq + 1;
        document.getElementById (no).innerHTML = "" + gvars.qty[no];
        document.getElementById ("qty").innerHTML = "Qty: " + gvars.mq;
        gvars.total = gvars.total + parseFloat (gvars.api[no]["Price"]);
        document.getElementById ("total").innerHTML = "Total: " + gvars.total.toFixed (2);
    },
    dec: function (no) {
        if (gvars.qty[no] > 0 && gvars.total != 0.00){
            gvars.qty[no] -= 1;
            gvars.mq -= 1;
            gvars.total -= parseFloat (gvars.api[no]["Price"]);
            document.getElementById (no).innerHTML = "" + gvars.qty[no];
            document.getElementById ("qty").innerHTML = "Qty " + gvars.mq;
            document.getElementById ("total").innerHTML = "Total: " + gvars.total.toFixed (2);
        }
        if (gvars.mq==0)
            document.getElementById ("buy").disabled=true;
    }
}