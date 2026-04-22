import SnakeLogic from "./SnakeLogic";

function Snake({snakeVal,foodVal}){
    SnakeLogic(snakeVal,foodVal);
    return(
        <>
        <div className="w-[20px] h-[20px] bg-[chartreuse] absolute rounded-[5px]"/>
        </>
        
    )
}

export default Snake;