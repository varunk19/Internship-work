function add() {
    let table = document.getElementsByClassName("table")[0];
    let row = document.createElement("div");
    row.setAttribute("class","row");
    let cols = [];
    cols[0] = document.createElement("div");
    cols[0].setAttribute("class","cell sl");
    let sno = document.createElement("p");
    gvars.slno += 1;
    sno.innerHTML = `${gvars.slno}`;
    cols[0].appendChild(sno);
    row.appendChild(cols[0]);
    for (let i = 1; i <= 4; i++) {
        cols[i] = document.createElement("div");
        cols[i].setAttribute("class","cell");
        let val = document.createElement("p");
        if (i == 4)
            val.innerHTML = `<input type="text" name="c${i}" disabled>`;
        else
            val.innerHTML = `<input type="text" name="c${i}">`;
        cols[i].appendChild(val);
        row.appendChild(cols[i]);
    }
    let qty = row.children[2].children[0].children[0];
    let price = row.children[3].children[0].children[0];
    console.log(qty);
    console.log(price);
    qty.addEventListener("input", function() {
        calc(gvars.slno-1);
    });
    price.addEventListener("input", function() {
        calc(gvars.slno-1)
    });
    table.appendChild(row);
}