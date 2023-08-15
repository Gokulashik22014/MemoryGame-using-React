import { useEffect, useState,useRef } from "react";

function Pixel(props) {
    //console.log(props.marked ? "zinc" : "cyan");
    const [sty,setSty]=useState({backgroundColor: !props.marked ? 'white' : 'black'})

    useEffect(() => {
        if (props.gameKey) {
            setSty({ backgroundColor: "white" })
        } else {
            //console.log("Inside pixel"+props.gamePlay)
            setSty({ backgroundColor: !props.marked ? 'white' : 'black' })
        }
    }, [props.gameKey]);

    function check(){
        if(props.gameKey){
            setSty({backgroundColor: !props.marked ? 'red' : 'green'})
        }
        //console.log(props.checkVal)
        for(let i=0;i<props.checkVal.length;i++){
            if(props.unique==props.checkVal[i]){
                //console.log("Game over")
                props.setGameOver(true)
                return null
            }
        }
        props.countOfPix.current+=1
        if(props.countOfPix.current===20-props.checkVal.length){
            props.setGameWon(true)
        }
        console.log(props.countOfPix.current)
    }
    return (
        <div onClick={check} className={`h-24 w-24 mx-2 my-2 rounded-md border-2 border-zinc-900`} style={sty}  ></div>
    )
}

export default Pixel
