function display () {
    console.log("display.js loaded");
    let content = document.getElementById ("content");
    for (let i = 0; i < gvars.api.length; i++) {
        let str = gvars.api[i]["BrandName"].toUpperCase();
        let item = document.createElement ("div");
        item.setAttribute ("class","item");
        item.innerHTML = `<div class = "left">
                              <img src = "src/assets/images/${gvars.api[i]["ImageUrl"]}" width = "200px" height = "200px">
                              <p class = "others off">${gvars.api[i]["OfferText"]}</p>
                          </div>
                          <div class = "right">
                              <p class = "name">${str}</p>
                              <p class = "desc">${gvars.api[i]["ProductName"]}</p></br>
                              <p class = "others">1 L</p>
                              <p class = "others mrp">MRP RS.${gvars.api[i]["MRP"]}</p>
                              <p class = "others"><span class = "rs">RS. </span>${gvars.api[i]["Price"]}</p>
                              <button id ="a${i}" class = "option cart" onclick = "funcs.inc(${i})">Add Cart</button>&nbsp;&nbsp;&nbsp;&nbsp;
                              <button id = "p${i}" class = "option change add" onclick = "funcs.inc(${i})">&#43;</button>&nbsp;
                              <p id = "${i}" class = "qty">${gvars.api[i]["Quantity"]}</p>&nbsp;
                              <button id = "d${i}" class = "option change dec" onclick = "funcs.dec(${i})">&#45;</button>
                          </div>`;
        content.appendChild (item);
    }
}