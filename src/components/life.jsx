import { useState,useEffect } from "react"
function Heart(props){
    const [timer,setTimer]=useState(10)//change this to increase the limit time
    const [intervalId,setIntervalId]=useState(null)
    useEffect(()=>{
        if(props.start===null){
            const finish=setInterval(()=>setTimer(o=>o>0?o-1:"Timer Up"),1000)
            setIntervalId(finish)
        }
    },[props.start])
    useEffect(()=>{
        if(props.gameOver || props.gameWon){
            clearInterval(intervalId)
        }
        if(timer===0){
            props.setGameOver(true)
        }
    },[props.gameWon,props.gameOver,intervalId,timer])
    return(
        <div>
            <p className="mx-[280px] text-center text-[30px] text-white bg-zinc-800 w-10 h-10 rounded-full">{timer}</p>
        </div>
    )
}
export default Heart 