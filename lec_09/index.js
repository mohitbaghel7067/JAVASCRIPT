let input=document.querySelector('input');
let btn=document.querySelector('button');
let list=document.getElementById('list');
btn.addEventListener("click",()=>{
let data=input.value
fetch(`https://api.tvmaze.com/search/shows?q=${data}`).
then((info)=>{
    return info.json()
}).then((val)=>{
    console.log(val[0].show.image.
        original);
        show(val)
    
})
})
function show(val){
    for(let i of val){
let img= document.createElement("img")
if(i.show.image){
    console.log(i.show.image.original, "hehehe");

    let img = document.createElement("img");
    img.setAttribute("src", i.show.image.original);

    list.append(img);
}
list.append(img)
    }
    // let img=document.createElement("img")
    // img.setAttribute("src",val[0].show.image.original)
    // list.appendChild(img)
}

