/*const url = "src/assets/json/items.json";
let api;
let funcs;
let qty=[];
let mq=0;
let total=0.00;
function {
    fetch (url).then ((response) => {
        return response.json();
    }).then (obj => {
        api = obj;
        for (let i = 0; i < api.length; i++) {
            qty[i] = api[i]["Quantity"];
        }
        let content = document.getElementById ("content");
        for (let i = 0; i < api.length; i++) {
            let str = api[i]["BrandName"].toUpperCase();
            let item = document.createElement ("div");
            item.setAttribute ("class","item");
            item.innerHTML = `<div class = "left">
                                  <img src = "src/assets/images/${api[i]["ImageUrl"]}" width = "200px" height = "200px">
                                  <p class = "others off">${api[i]["OfferText"]}</p>
                              </div>
                              <div class = "right">
                                  <p class = "name">${str}</p>
                                  <p class = "desc">${api[i]["ProductName"]}</p></br>
                                  <p class = "others">1 L</p>
                                  <p class = "others mrp">MRP RS.${api[i]["MRP"]}</p>
                                  <p class = "others"><span class = "rs">RS. </span>${api[i]["Price"]}</p>
                                  <button id ="a${i}" class = "option cart" onclick = "funcs.inc(${i})">Add Cart</button>&nbsp;&nbsp;&nbsp;&nbsp;
                                  <button id = "p${i}" class = "option change add" onclick = "funcs.inc(${i})">&#43;</button>&nbsp;
                                  <p id = "${i}" class = "qty">${api[i]["Quantity"]}</p>&nbsp;
                                  <button id = "d${i}" class = "option change dec" onclick = "funcs.dec(${i})">&#45;</button>
                              </div>`;
            content.appendChild (item);
        }
    }).catch (function (error) {
        console.error(error);
    });
}
funcs = {
    inc: function (no) {
        document.getElementById ("buy").disabled = false;
        qty[no] = qty[no] + 1;
        mq = mq + 1;
        document.getElementById (no).innerHTML = "" + qty[no];
        document.getElementById ("qty").innerHTML = "Qty: " + mq;
        total = total + parseFloat (api[no]["Price"]);
        document.getElementById ("total").innerHTML = "Total: " + total.toFixed (2);
    },
    dec: function (no) {
        if (qty[no] > 0 && total != 0.00){
            qty[no] -= 1;
            mq -= 1;
            total -= parseFloat (api[no]["Price"]);
            document.getElementById (no).innerHTML = "" + qty[no];
            document.getElementById ("qty").innerHTML = "Qty " + mq;
            document.getElementById ("total").innerHTML = "Total: " + total.toFixed (2);
        }
    if (mq==0)
        document.getElementById ("buy").disabled=true;
    },
    display: function () {
        if(!document.getElementById("buy").disabled)
            alert("Transaction status\nTotal: Rs."+total.toFixed(2)+"\nTransaction successful");
    }
}*/