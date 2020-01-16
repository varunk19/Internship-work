/*const url = "src/assets/json/data.json";
let cities;
let months;
funcs = {
    "init": function () {
                fetch (url).then ((response) => {
                    return response.json ();
                }).then (api => {
                    cities = api.cities;
                    months = api.months;
                    const left = document.getElementById ("cities");
                    const right = document.getElementById ("month");
                    let item;
                    for (let i = 0; i < months.length; i++) {
                        item = document.createElement ("a");
                        item.setAttribute ("onclick",`funcs.citychange (${i})`);
                        item.innerHTML = `${cities[i]}</br></br>`;
                        left.appendChild (item);
                    }
                    for(let i = 0; i < months.length; i++) {
                        item = document.createElement ("a");
                        item.setAttribute ("onclick", `funcs.enabledays (${i+1})`);
                        item.innerHTML = `${months[i]}</br></br>`;
                        right.appendChild (item) ;
                    }
                }).catch (function (error) {
                   console.error(error); 
                });
            },
    "citychange": function (no) {
                      const c = document.getElementById ("city");
                      c.innerHTML = cities[no];
                  },
    "enabledays": function (no) {
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
                          day.setAttribute ("onclick", `funcs.datechange (${n},${no-1})`);
                          dates.appendChild (day);
                      }
                  },
    "datechange": function (i,no) {
                      const datechange = document.getElementById ("date");
                      datechange.innerHTML = `${i}&nbsp;${months[no]}`;   
    }
}
function citychange (no) {
    const c = document.getElementById ("city");
    c.innerHTML = cities[no];
}
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
    dates.style.border = "2px solid black";
}
function datechange (i,no) {
    const datechange = document.getElementById ("date");
    datechange.innerHTML = `${i}&nbsp;${months[no]}`;
}*/