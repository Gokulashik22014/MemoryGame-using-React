function decide(){
    return Math.floor(Math.random()*3)
}
const datas=[]
const checkMarked=[]
let total=20 // change this to increase the pixels
for(let i=0;i<total;i++){
    datas.push({
        id:i,
        isMarked:decide()==1?true:false
    })
    if(!datas[i].isMarked)
    checkMarked.push(datas[i].id)
}

console.log(datas)
export default [datas,checkMarked]
