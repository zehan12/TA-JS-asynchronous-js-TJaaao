let body = document.querySelector("body");
let container = document.querySelector(".flex");
let btn = document.querySelectorAll("button");
let root = document.querySelector(".main");
const a = document.querySelectorAll("a");

const url = `https://api.spaceflightnewsapi.net/v3/articles?_limit=70`

function fetchData(url){
fetch(url).then(res=>res.json()).then(data => { display(data),array(data)}).then()
}

var outObject;
function array(user){
    outObject = user.reduce(function(a, e) {
        // GROUP BY estimated key (estKey), well, may be a just plain key
        // a -- Accumulator result object
        // e -- sequentally checked Element, the Element that is tested just at this itaration
        // new grouping name may be calculated, but must be based on real value of real field
        let estKey = (e.newsSite); 
        (a[estKey] ? a[estKey] : (a[estKey] = null || [])).push(e);
        return a;
    }, []);
    // console.log(outObject);
    return clickFunction(outObject);
}

function clickFunction(object){
    Object.keys( outObject ).forEach(( value )=>{ 
        console.log( outObject[value] ); 
        a.forEach((an,i)=>{   
            an.addEventListener('click',(event)=>{
                if ( event.target.innerText === value ){
                    console.log("good")
                    display(outObject[value])
                }
        })
    });
})
}


function display(user){
    root.innerHTML = " ";
user.forEach((e)=>{
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





