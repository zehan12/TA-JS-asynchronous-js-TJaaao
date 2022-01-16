
let root = document.querySelector(".main");
const a = document.querySelectorAll("a");
let newsData = [];
let news = document.querySelector("#news-cat");
console.log(news)

news.addEventListener('change',(event)=>{
    displayFilterData(newsData);
    console.log(event)
})

const url = `https://api.spaceflightnewsapi.net/v3/articles?_limit=70`

function fetchData(url){
fetch(url).then(res=>res.json()).then(data => { 
    newsData = data;
    displayFilterData(newsData);
})}


function displayFilterData( data = newsData ){
    if ( news.value == "All" ){
        display(data);
        return;
    } 
    const filterData = data.filter((obj)=> obj.newsSite == news.value);
    display(filterData);
}

function display(array){
    root.innerHTML = " ";
array.forEach((e)=>{
    let img = document.createElement("img");
    img.classList.add("img")
    img.src = `${e.imageUrl}`
    let p = document.createElement("p");
    p.innerText = `${e.newsSite}`
    let h2 = document.createElement("h2");
    h2.innerText = `${e.title}`
    let btn = document.createElement("button");
    btn.innerText = "Read More"
    let para = document.createElement("div");
    para.append(p,h2,btn)
    let image_contain = document.createElement("div");
    image_contain.append(img)
    let container = document.createElement("div");
    container.classList.add("flex")
    container.append(image_contain,para)
    root.append(container)
})
}

fetchData(url);

console.log("script is working!!")