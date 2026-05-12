let btn = document.querySelector("button");
let body = document.querySelector("body");
let isBool=true
let h2 = document.querySelector("h2");
let data=prompt("enter user name")
console.log(data);
h2.innerText="hello"+" "+data


btn.addEventListener("click", function () {
    
     if (isBool) {
        body.style.backgroundColor = "red"
        isBool=false
    } else {
        body.style.backgroundColor = "pink"
        isBool=true;
    }
});
