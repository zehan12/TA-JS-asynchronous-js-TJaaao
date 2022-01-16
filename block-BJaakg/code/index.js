
const body = document.querySelector("body");
let root = document.querySelector(".container")
root.style.display = "flex";
root.style.flexWrap = "wrap";
root.style.textAlign = "center";
root.style.justifyContent = "space-evenly";
let raw = []

let url = "https://www.anapioficeandfire.com/api/books";


function fetchData(url){
    fetch(url).then(res=>res.json()).then(data => { display(data); raw = data;
        console.log(data)}).catch((error) =>{
            //? blank the body
            body.innerHTML = "";

            // ? added error message on HTML Structure 
        body.innerHTML= `<p> 1 of errors on the page</p>
        <h1>${error}</h1>
        <p>The cause of the error is pretty straightforward, the onClick expects a function but got a string type instead. A quick fix for this is taking out the surrounding quotes and replacing with {} like this The cause of the error is pretty straightforward, the onClick expects a function but got a string type instead. A quick fix for this is taking out the surrounding quotes and replacing with {} like this The cause of the error is pretty straightforward, the onClick expects a function but got a string type instead. A quick fix for this is taking out the surrounding quotes and replacing with {} like this </p>        
        <h2> 20 stack frame collapsed</h2>        
        <h3>Conclusion</h3>
        <p>Errors are part of our development now and we see them even in code that works. What we do when they are found is what counts. I have a feeling you have at a point seen these errors or still have them at this moment in time. I hope this helps you fix those.
        </p>`
        let h1 = document.querySelector("h1");
        h1.style.color = "red"
        console.log("error");
        console.log(error);
    })
}

//! this will display and render data
function display( user ){
    user.forEach((ele) => {
        // console.log(ele);
        body.style.margin = "50px";
        let pack = document.createElement("div");
        pack.style.height = "200px"
        pack.style.width = "600px"
        pack.style.border = "2px dotted red"
        let title = document.createElement("h3");
        title.innerText = ele.name;
        let author = document.createElement("p");
        author.innerText = ele.authors;
        let charaterBtn = document.createElement("button");
        charaterBtn.innerHTML = `Show Character (${ele["characters"].length})`
        charaterBtn.classList.add(ele["characters"].length);
        charaterBtn.style.color = "white"
        charaterBtn.style.backgroundColor = "black"
        pack.append(title,author,charaterBtn);
        root.append(pack);
    });
    //! select the character button
    let ch = document.querySelectorAll("button");
    console.log(ch);
    ch.forEach((v)=>{
        v.addEventListener("click",(event)=>{
            if( v.className === event.target.innerText.split(" ").slice(-1)[0].slice(1,-1) ){  
                console.log("SO FAR SO GOOD")
                body.innerHTML = "";
                body.style.backgroundColor = "red" ; 
                let box = document.createElement("a"); 
                    box.innerText = "close";
                    box.href = "index.html" 
                    box.style.backgroundColor = "blue"; 
                    let h1 = document.createElement("h1");
                        h1.innerText = "Charater"
                        body.append(box) 
                        body.append(h1)
                    

                box.addEventListener("click",()=>{
                    body.innerHTML = " ";                    
                })
                user.forEach((e,i)=>{
                    console.log(e)
                    e["characters"].forEach((v)=>{
                    fetch(v).then(res=>res.json()).then(data => { 
                        console.log(data);
                        let wrap = document.createElement("div");
                        wrap.style.border = "2px solid white"
                    let characterName = document.createElement("h2")
                    characterName.innerText = data.name 
                    wrap.append(characterName);
                    body.append(wrap);
                     })
                    })
                })
            }
        })
    })
}



fetchData(url);

console.log("script is working");
