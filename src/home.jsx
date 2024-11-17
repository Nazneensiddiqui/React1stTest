import { changeColor } from "./ColorSlice";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";
import w1 from "./images/w11.webp"

const Home=()=>{
    const clr= useSelector((state)=>state.mycolor.color)
    const cnt= useSelector((state)=>state.mycounter.cnt)
  
    const dispatch=useDispatch()
    return(
        <>
        <h1>change color</h1>
        <button onClick={()=>{dispatch(changeColor())}}>click here</button>
        <br/>
        <div style={{width:"300px" , height:"200px", border:"1px solid red" , backgroundColor:clr}}></div>

        <div>
            <h1>my counter programe</h1>
            <button onClick={()=>{dispatch(increment(cnt))}}>Increment</button>
            <h1>{cnt}</h1>
            <button onClick={()=>{dispatch(decrement(cnt))}}>Decrement</button>
        </div>
        <br/>
        <div>
            <img src={w1}/>
        </div>

       
        </>
    )
}
export default Home;