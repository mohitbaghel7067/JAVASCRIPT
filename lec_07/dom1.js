let inp=document.querySelector("input")
let h1=document.querySelector("h1")
inp.addEventListener("input",(e)=>{
    h1.innerText= e.target.value
})
