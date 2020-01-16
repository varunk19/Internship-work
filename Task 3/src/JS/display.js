console.log("display loaded");
function display () {
    let table = document.getElementById("body");
    for(let i = 1; i <= gvars.api[1].size; i++) {
        let data = document.createElement("div");
        if ((i % 3) == 0)
            data.setAttribute("class","data3");
        else if (((i+1) % 3) == 0)
            data.setAttribute("class","data2");
        else
            data.setAttribute("class","data1");
        data.innerHTML = `<img src='${gvars.api[1]["content"][gvars.v]["images"][0]["url"]}'>
                          <p>${gvars.api[1]["content"][gvars.v]["title"]}</p>`;
        data.setAttribute ("onclick",`res("${gvars.v}","${1}")`);
        table.appendChild (data);
        gvars.v += 1;
    }
    for(let i = 1; i <= gvars.api[2].size; i++) {
        let data = document.createElement("div");
        if ((i % 3) == 0)
            data.setAttribute("class","data3");
        else if (((i+1) % 3) == 0)
            data.setAttribute("class","data2");
        else
            data.setAttribute("class","data1");
        data.innerHTML = `<img src='${gvars.api[2]["content"][gvars.u]["images"][0]["url"]}'>
                          <p>${gvars.api[2]["content"][gvars.u]["title"]}</p>`;
        data.setAttribute ("onclick",`res("${gvars.u}","${2}")`);
        table.appendChild (data);
        gvars.u += 1;
    }
}