function init() {
    let a = document.getElementsByClassName("add");
    a[0].children[0].addEventListener("click",add);
    let b = document.getElementsByClassName("del");
    b[0].children[0].addEventListener("click",del);
    for (let i = 0; i < gvars.slno; i++) {
        let qty = gvars.rows[i].children[2].children[0].children[0];
        let price = gvars.rows[i].children[3].children[0].children[0];
        qty.addEventListener("input", function() {
            calc(i);
        });
        price.addEventListener("input", function() {
            calc(i)
        });
    }
}
function calc(no) {
    let total = 0.0;
    let qty = parseFloat(gvars.rows[no].children[2].children[0].children[0].value);
    let price = parseFloat(gvars.rows[no].children[3].children[0].children[0].value);
    let res = gvars.rows[no].children[4].children[0].children[0];
    if (!isNaN(qty) && !isNaN(price)) {
        total = qty * price;
        res.value = `${total.toFixed(2)}`;
        subcalc();
    }
    else {
        res.value = '';
    }
}
function subcalc() {
    let total = document.getElementsByName("c4");
    let sub = 0.0;
    for (let i = 0; i < total.length; i++) {
        sub += parseFloat(total[i].value);
    }
    let subt = document.getElementsByName("subt")[0];
    subt.value = `${sub.toFixed(2)}`;
    taxcalc(sub);
}
function taxcalc(sub) {
    let tax = parseFloat(document.getElementsByName("tax")[0].value);
    let taxamt = document.getElementsByName("taxamt")[0];
    let res;
    if(tax < 100)
        res = sub * (tax/100);
    taxamt.value = `${res.toFixed(2)}`;
    result(sub,res);
}
function result(sub,tax) {
    let grand = document.getElementsByName("grandt")[0];
    let res = sub - tax;
    grand.value = `${res.toFixed(2)}`;
}
init();