let canvas=document.querySelector("canvas")
let pen =canvas.getContext("2d")
let snakecell=[[0,0]]
let cell=50
let direction="right"
let gameover=false

 let id=setInterval(()=>{
    draw()
    update()
},300)

document.addEventListener("keydown",(e)=>{
    console.log(e);
if(e.key=="ArrowUp"){
    direction='up'
}else if(e.key=="ArrowDown"){
    direction='down'
}
else if(e.key=="ArrowLeft"){
    direction='left'
}
else{
    direction='right'
}
})
function draw(){
if(gameover==true){
    clearInterval(id)
    return
}
    pen.fillStyle="gold"
    pen.clearRect(0,0,1000,600)
    for(let a of snakecell){
        pen.fillRect(a[0],a[1],cell,cell)
        
    }
    
}

function update(){
    let headx=snakecell[snakecell.length-1][0]
    let heady=snakecell[snakecell.length-1][1]

    let newx
    let newy
    if(direction=='right'){
        newx=headx+cell
        newy=heady
        if(newx==1000){
            gameover=true
        }
    }
    else if(direction=="left"){
        newx=headx-cell
        newy=heady
        if(newx<0){
            gameover=true
        }

    }
    else if(direction=="down"){
        newx=headx
        newy=heady+cell
        if(newy==600){
            gameover=true
        }
    }
    else{
        newx=headx
        newy=heady-cell
        if(newy<0){
            gameover=true
        }
    }
    snakecell.push([newx,newy])
    snakecell.shift() 
}
function generateR(){
    return[
        Math.floor(Math.random()*950/cell)*cell(),
        Math.floor(Math.random()*550/cell)*cell

    ]
}

