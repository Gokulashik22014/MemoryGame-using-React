import {useState,useEffect} from 'react'
export default function Start(props){
    const [intervalId,setIntervalId]=useState(null)
    const [sty,setSty]=useState({display:'block'})
    useEffect(()=>{
        if(props.startTimer===0){
            clearInterval(intervalId)
            props.setStartTimer(null)
            //console.log("Inside start"+props.gamePlay.current)
            setSty({display:'none'})
        }
    },[props.startTimer,intervalId])
    function timeStart(){
        if (!props.start) {
            props.setStart(true);
        }
        const finish=setInterval(()=>props.setStartTimer(o=>o>0?o-1:0),1000)
        setIntervalId(finish)
    }
    return(
        <div className='flex flex-col items-center justify-center'>
            <h1 className="text-[50px]">Memory<span className="text-rose-300">Game</span></h1>
            <button onClick={timeStart} className='bg-rose-300 px-5 py-2 my-2 rounded-md hover:bg-rose-400 '>{!props.start?'Start':'Find'}</button>
            <p className='h-10 w-10 rounded-full text-center text-white bg-zinc-700' style={sty} >{props.startTimer}</p>
        </div>
    )
}