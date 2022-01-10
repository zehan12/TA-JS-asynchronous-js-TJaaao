let body = document.querySelector("body")

let user = fetch(`https://api.spaceflightnewsapi.net/v3/articles?_limit=30`).then(res=>res.json()).then(user => user.forEach((e)=>{
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
    body.append(container)
}))



