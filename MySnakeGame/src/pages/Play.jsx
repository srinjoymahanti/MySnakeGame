import Button from "../components/Buttons/Button";
import GameArena from "../components/GameArena/GameArena";

function Play(){
    return(
        <>
        <h1>this is play page</h1>
        <GameArena/>
        {/* <Button text={"Start Game"} styleType={"red"} onClickHandeler={startGame}/> */}
        </>
        
    )
}

export default Play;