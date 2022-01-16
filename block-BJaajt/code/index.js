const img = document.querySelector(".profile");
const userName = document.querySelector("h3");
const company = document.querySelector("p");
const followers = document.querySelector(".followers");
const following = document.querySelector(".following");
const input = document.querySelector("input");
const foll = document.querySelector("foll");
const body = document.querySelector('body');

function displayUI(data){
    img.src = data.avatar_url;
    userName.innerText = data.name;
    company.innerText = data.company;
    followers.innerText = `Followers: ${data.followers}`;
    following.innerText = `Following: ${data.following}`;
            
}

function handelChange(event){
    if (event.keyCode === 13 ){
        let fKingXHR = new XMLHttpRequest();
        fKingXHR.open('GET',`https://api.github.com/users/${event.target.value}`);
        fKingXHR.onload = function(){
            let userData = JSON.parse(fKingXHR.response);
            var arr = userData

            let fl = arr.followers_url;
            console.log(fl)
            
        let fKingXHR1 = new XMLHttpRequest();
            fKingXHR1.open('GET',`${fl}`);
            fKingXHR1.onload = function(){
                let userFollow = JSON.parse(fKingXHR1.response);
                console.log(userFollow);
                userFollow.forEach((e)=>{
                    console.log(e.login)
                    let rImg = document.createElement("img");
                    rImg.classList.add("round");
                    console.log(rImg)
                    rImg.src = e.avatar_url;
                    
                    body.append(rImg);
                })
                
        }
            fKingXHR1.send();
            
            // arr.forEach((e)=>{
            //     console.log(e)
            // })
            // Object.keys(userData).forEach(( value )=>{ 
            //     console.log( value.followers_url); 
            //  });
            displayUI(userData);
        };
        fKingXHR.onerror = function(){
            console.log('fucking Wrong!!!');
        };
        fKingXHR.send();
        event.target.value = '';
        
        
    }
}

input.addEventListener('keyup',handelChange);
