console.log("getdata loaded");
function getdata () {
    let url1 = "https://api.cloud.altbalaji.com/zuul/catalogue/balaji/catalogue/filters/all-movies-in?domain=IN&page=1&size=9";
    fetch (url1).then ((response) => {
        return response.json ();
    }).then (myJson1 => {
        gvars.v = 0;
        gvars.api[1] = myJson1;
    }).catch (function (error) {
        console.error (error);
    });
    let url2 = "https://api.cloud.altbalaji.com/zuul/catalogue/balaji/catalogue/filters/all-movies-in?domain=IN&page=2&size=9";
    fetch (url2).then ((response) => {
        return response.json ();
    }).then (myJson2 => {
        gvars.u = 0;
        gvars.api[2] = myJson2;
        console.log(gvars.api);
        display ();
    }).catch (function (error) {
        console.error (error);
    });
}
getdata();