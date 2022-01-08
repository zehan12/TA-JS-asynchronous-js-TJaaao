
const img = document.querySelector("img");
const input = document.querySelector("input");
const body = document.querySelector("body");
img.style.height = "400px";
img.style.width = "400px";



function handelChange(event){
    if (event.keyCode === 13 ){
    let fKingXHR = new XMLHttpRequest();

fKingXHR.open('GET',`https://api.unsplash.com/search/photos?query=${event.target.value}&client_id=ilGa2_Ql0bDszy8XXGlQ8RMxdLT5ZyfU4FFx0AbtM3c`);

fKingXHR.onload = function () {
    let imgData = JSON.parse(fKingXHR.response);
    console.log(imgData)
    data = [imgData];
    console.log(data[0].results)
    let arr = [];
    data[0].results.forEach((ele) => {
        console.log(ele.urls.regular);
        arr.push(ele.urls.regular)   
    });
    arr.forEach((v)=>{
        img.src = v;
        body.append(img);
    })
    console.log(arr);
};

fKingXHR.onerror = function () {
    console.log("FUCKING!!! Wrong");
};

 fKingXHR.send();
 event.target.value = '';
 }
}

input.addEventListener('keyup',handelChange);

// api key
// ilGa2_Ql0bDszy8XXGlQ8RMxdLT5ZyfU4FFx0AbtM3c


// httprequest
// https://api.unsplash.com/photos/random/?client_id=YOUR_ACCESS_KEY

// https://api.unsplash.com/photos/?client_id=ilGa2_Ql0bDszy8XXGlQ8RMxdLT5ZyfU4FFx0AbtM3c

// https://api.unsplash.com/search/photos?query=${event.target.value}&client_id=ilGa2_Ql0bDszy8XXGlQ8RMxdLT5ZyfU4FFx0AbtM3c