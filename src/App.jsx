import Pixel from './components/pixels'
import datas from './components/data'
import Heart from './components/life'
import Start from './components/Start'
import { useState,useEffect, useRef } from 'react'
function App(){
  
  const [start,setStart]=useState(false)
  const [startTimer,setStartTimer]=useState(5)//change to change the start timer
  const [gameOver,setGameOver]=useState(false)
  const [gameWon,setGameWon]=useState(false)
  const countOfPix=useRef(0)
  const check=datas[1]
  
  const Pixels=datas[0].map(data=><Pixel key={data.id} marked={data.isMarked} gameKey={false}/>)
  const emptyPixels=datas[0].map(()=><Pixel marked={false}/>)
  const StartRender=<Start start={start} setStart={setStart} startTimer={startTimer} setStartTimer={setStartTimer}/>
  const gamePixels=datas[0].map(data=><Pixel key={data.id} unique={data.id} marked={data.isMarked} gameKey={true} checkVal={check} setGameOver={setGameOver} countOfPix={countOfPix} setGameWon={setGameWon}/>)
  
  const [pix,setPix]=useState(emptyPixels)
  const [heartval,setHeartVal]=useState(10)

  
  useEffect(()=>{
    if (start && startTimer!==null) {
      console.log("start "+startTimer)
      setPix(Pixels)
  } else if(start){
    setHeartVal(startTimer)
    console.log("success")
      setPix(gamePixels)
  }else {
      setPix(emptyPixels)
  }
  if(gameOver){
    setTimeout(()=>setPix(<div className='text-white text-center text-[20px] bg-zinc-900 rounded-md px-24 py-24 w-screen h-24 mx-[200px] my-5'>Game Over</div>),500)
  }
  if(gameWon){
    setTimeout(()=>setPix(<div className='text-white text-center text-[20px] bg-zinc-900 rounded-md px-24 py-24 w-screen h-24 mx-[200px] my-5'>Game Won</div>),500)
    
  }
  },[start,startTimer,gameOver,gameWon])
  return(
    <div>
      {StartRender}
      <div className='mx-4 flex flex-wrap'>
          {pix}
      </div>
      <Heart start={heartval} gameWon={gameWon} gameOver={gameOver} setGameOver={setGameOver}/>
    </div>
  )
}
export default App