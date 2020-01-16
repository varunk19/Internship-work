function enabledays (no) {
    let i;
    const dates =  document.getElementById ("days");
    while (dates.firstChild) {
      dates.removeChild (dates.firstChild);
    }
    switch(no) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12: i = 31;
               break;
      case 4:
      case 6:
      case 9:
      case 11: i = 30;
               break;
      case 2: i = 28;
              break;
    }
    let day;
    for(let n = 1; n <= i; n++) {
      day = document.createElement ("a");
      day.innerHTML = `${n}&nbsp;&nbsp;&nbsp;`;
      day.setAttribute ("onclick", `datechange (${n},${no-1})`);
      dates.appendChild (day);
    }
}