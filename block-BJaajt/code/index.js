const img = document.querySelector("img");
const userName = document.querySelector("h3");
const company = document.querySelector("p");
const followers = document.querySelector(".followers");
const following = document.querySelector(".following");
const input = document.querySelector("input");


function displayUI(data){
    img.src = data.avatar_url;
    userName.innerText = data.name;
    company.innerText = data.company;
    followers.innerText = `Followers: ${data.followers}`;
    following.innerText = `Following: ${data.following}`

}

function handelChange(event){
    if (event.keyCode === 13 ){
        let fKingXHR = new XMLHttpRequest();
        fKingXHR.open('GET',`https://api.github.com/users/${event.target.value}`);
        fKingXHR.onload = function(){
            let userData = JSON.parse(fKingXHR.response);
            console.log(userData)
            let arr = [...userData]
            console.log(arr);
            Object.keys(userData).forEach(( value )=>{ 
                console.log( value.followers_url); 
             });
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
