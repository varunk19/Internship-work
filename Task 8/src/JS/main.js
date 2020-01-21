function init() {
    let items = document.getElementsByTagName("tbody")[0];
    let row = document.createElement("tr");
    row.innerHTML = `<td>Nails(box)</td>
                     <td>100</td>
                     <td>5</td>
                     <td class="total">500</td>`;
    items.appendChild(row);
    calc();
}
function calc() {
    let data = document.getElementsByClassName("total");
    let subt = document.getElementsByTagName("tfoot")[0].children[0].children[1];
    let res = 0.0;
    for (let i = 0; i < data.length; i++) {
        let n = parseFloat(data[i].innerHTML);
        res += n;
    }
    subt.innerHTML = `${res}`;
    let per = parseFloat(document.getElementsByTagName("tfoot")[0].children[1].children[1].innerHTML);
    let tax = document.getElementsByTagName("tfoot")[0].children[1].children[2];
    let taxamt = res * (per/100);
    tax.innerHTML = `${taxamt.toFixed(2)}`;
    let grand = document.getElementsByTagName("tfoot")[0].children[2].children[1];
    let gtotal = res + taxamt;
    if (gtotal > 150) {
        grand.parentElement.style.color = "red";
    }
    grand.innerHTML = `&#36; ${gtotal}`;
}
init();