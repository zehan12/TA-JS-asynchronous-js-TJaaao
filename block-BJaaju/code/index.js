
// const img = document.querySelector("img");
const input = document.querySelector("input");
const body = document.querySelector("body");
let div = document.createElement("div")
    div.style.display = "flex";
    div.style.flexDirection = "row";
    div.style.flexWrap = "wrap";
    div.style.justifyContent = "space-evenly";
    body.append(div);
    body.style.background = "rgb(241,222,184)";
    
    

function handelChange(event){
    if (event.keyCode === 13 ){
    let fKingXHR = new XMLHttpRequest();
    let keyWord = event.target.value.toLowerCase();
fKingXHR.open('GET',`https://api.unsplash.com/search/photos?query=${keyWord}&client_id=ilGa2_Ql0bDszy8XXGlQ8RMxdLT5ZyfU4FFx0AbtM3c`);

fKingXHR.onload = function () {
    let imgData = JSON.parse(fKingXHR.response);
    console.log(imgData)
    data = [imgData];
   
    console.log(data[0].results)
    let arr = [];
    data[0].results.forEach((ele) => {
        console.log(ele.urls.small);
        arr.push(ele.urls.small);   
    });
    arr.forEach((v)=>{
        let box = document.createElement("div");
        box.style.padding = "30px";
        div.append(box);
        var img = document.createElement("img");
        img.style.height = "300px";
        img.style.width = "300px";
        img.src = v;
        box.append(img);
    })
    console.log(arr);
};

fKingXHR.onerror = function () {
    console.log("FUCKING!!! Wrong");
};

 fKingXHR.send();
 event.target.value = " ";
 div.innerHTML = " ";
 }
}

input.addEventListener('keyup',handelChange);
console.log("script is working!!!")

// api key
// ilGa2_Ql0bDszy8XXGlQ8RMxdLT5ZyfU4FFx0AbtM3c


// httprequest
// https://api.unsplash.com/photos/random/?client_id=YOUR_ACCESS_KEY

// https://api.unsplash.com/photos/?client_id=ilGa2_Ql0bDszy8XXGlQ8RMxdLT5ZyfU4FFx0AbtM3c

// https://api.unsplash.com/search/photos?query=${event.target.value}&client_id=ilGa2_Ql0bDszy8XXGlQ8RMxdLT5ZyfU4FFx0AbtM3c