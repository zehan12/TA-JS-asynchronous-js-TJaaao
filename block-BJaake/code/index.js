// let body = document.querySelector("body");
// let container = document.querySelector(".flex");
// let btn = document.querySelectorAll("button");
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

// var outObject;
// function array(user){
//     outObject = user.reduce(function(a, e) {
//         // GROUP BY estimated key (estKey), well, may be a just plain key
//         // a -- Accumulator result object
//         // e -- sequentally checked Element, the Element that is tested just at this itaration
//         // new grouping name may be calculated, but must be based on real value of real field
//         let estKey = (e.newsSite); 
//         (a[estKey] ? a[estKey] : (a[estKey] = null || [])).push(e);
//         return a;
//     }, {});
//     console.log(outObject);
//     clickFunction(outObject);
// }

function displayFilterData( data = newsData ){
    if ( news.value == "All" ){
        display(data);
        return;
    } 
    const filterData = data.filter((obj)=> obj.newsSite == news.value);
    display(filterData);
}


// function clickFunction(outObject){
//     Object.keys( outObject ).forEach(( value )=>{ 
//         console.log( outObject[value] ); 
//         a.forEach((an)=>{   
//             an.addEventListener('click',(event)=>{
//                 console.log("So Far So Good")
//                 if ( event.target.innerText === value ){
//                     // console.log("So Far So Good")
//                     display(outObject[value])
//                 }
//         })
//     });
// })
// }


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



// ! added new solution :
// const source = document.querySelector('#source');
// const root = document.querySelector('.root');
// let allnews;

// source.addEventListener('change', (event) => {
//    if(event.target.value === 'default'){
//     createUI(allnews);
//    }else{
//     let filteredNews = allnews.filter(ele => {
//         return ele.newsSite.toLowerCase().split(" ").join("") === event.target.value;
//     })
//     createUI(filteredNews);
//    }
// });

// function createUI(news) {
//     root.innerHTML =""
//     news.forEach(eachNews => {
//         let innerHtml = `
//           <div class="img-container flex-40">
//               <img class="full-width" src="${eachNews.imageUrl}" alt="">
//           </div>
//           <div class="flex-56">
//               <h3>${eachNews.newsSite}</h3>
//               <p>${eachNews.title}</p>
//               <a href="${eachNews.url}" target='_blank'>Read More</a>
//           </div>`
//         let article = document.createElement('article');
//         article.classList.add('flex','relative');
//         article.innerHTML = innerHtml;  
//         root.append(article);
//     })
// }

// fetch('https://api.spaceflightnewsapi.net/v3/articles?_limit=30')
//   .then((res) => res.json())
//   .then((data)=>{
//       allnews = data;
//       createUI(data);
//   });

