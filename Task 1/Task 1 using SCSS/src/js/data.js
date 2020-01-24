function getData (){
    console.log("data.js loaded");
    fetch (gvars.url).then ((response) => {
        return response.json();
    }).then (obj => {
        for (let i = 0; i < obj.length; i++) {
            gvars.qty[i] = obj[i]["Quantity"];
        }
        gvars.api = obj;
        display();
    }).catch (function (error) {
        console.error(error);
    });
}