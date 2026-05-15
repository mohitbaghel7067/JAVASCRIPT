let box =document.querySelectorAll("button")
let resetbtn=document.querySelector("#reset")
let msgBox= document.querySelector("h2")
let win=[[0,1,2],[3,4,5],[6,7,8],[1,4,7],[0,4,8],[2,4,6]]
let trun0=true

for(let a of box){
    a.addEventListener("click",()=>{
        console.log("hello");
        if(trun0){
            a.innerText="0"
            trun0=false
            a.disabled=true

        }
        else{
            a.innerText="X"
            trun0=true
            a.disabled=true
        }
    })
}
function checkwinner(){
    for(let pattern of win){
        let x= box[pattern[0]].innerText
        let y= box[pattern[1]].innerText
        let z= box[pattern[2]].innerText
        if(x!="" && y!="" && z!=""){
            if(x==y && y==z){
                msgBox.innerText=x+ "app jeet gayee hehehe"
                console.log("kyaaaaaaa");
            }
        }
    }
}