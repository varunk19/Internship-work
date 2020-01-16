function datechange (i,no) {
    const datechange = document.getElementById ("date");
    datechange.innerHTML = `${i}&nbsp;${gvars.months[no]}`;   
}