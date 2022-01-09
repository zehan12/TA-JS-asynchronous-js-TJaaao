









function fetch(url){
    return new Promise((resolve,reject)=>{
        let fKingXHR = new XMLHttpRequest();
        fKingXHR.open('GET',url);
        fKingXHR.onload = ()=> resolve(JSON.parse(fKingXHR.response));
        fKingXHR.onerror = ()=> reject("Fucking Wrong!!!");
        fKingXHR.send();
    })
}

let data = fetch(``).then((data)=>{console.log(data)}).catch((error)=>{console.log("check internet connection")});