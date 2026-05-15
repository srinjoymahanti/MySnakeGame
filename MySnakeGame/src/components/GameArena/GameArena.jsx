import Snake from "../Snake/Snake";

function GameArena(){
    let snake=[{x:160,y:200},{x:140,y:200},{x:120,y:200}];
    let food = { x: 300, y: 200 };
    return(
        <div className="w-[600px] h-[600px] bg-[#333] relative border-[5px] border-[#666] mb-5 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <Snake snakeVal={snake} foodVal={food}/>
            {/* <Food/> */}
        </div>
    )
}

export default GameArena;