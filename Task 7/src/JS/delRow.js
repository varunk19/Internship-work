function del() {
    let rows = document.getElementsByClassName("row");
    if (gvars.slno > 0) {
        rows[gvars.slno-1].parentElement.removeChild(rows[gvars.slno-1]);
    gvars.slno -= 1;
    }
    subcalc();
}