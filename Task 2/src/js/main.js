function init () {
    fetch (gvars.url).then ((response) => {
        return response.json ();
    }).then (api => {
        gvars.cities = api.cities;
        gvars.months = api.months;
        const left = document.getElementById ("cities");
        const right = document.getElementById ("month");
        let item;
        for (let i = 0; i < gvars.cities.length; i++) {
            item = document.createElement ("a");
            item.setAttribute ("onclick",`citychange (${i})`);
            item.innerHTML = `${gvars.cities[i]}</br></br>`;
            left.appendChild (item);
        }
        for(let i = 0; i < gvars.months.length; i++) {
            item = document.createElement ("a");
            item.setAttribute ("onclick", `enabledays (${i+1})`);
            item.innerHTML = `${gvars.months[i]}</br></br>`;
            right.appendChild (item) ;
        }
    }).catch (function (error) {
       console.error(error); 
    });
}
init (); 