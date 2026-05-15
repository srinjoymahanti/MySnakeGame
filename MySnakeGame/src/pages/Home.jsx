import Button from "../components/Buttons/Button";
import { useNavigate } from "react-router-dom";

function Home(){

    const navigate=useNavigate();

    function moveToPlay(event){
        event.preventDefault();
        navigate('/play');
    }
    return(
        <>
        <h1 className="text-5xl text-cyan-950">Sanke Game</h1>
        <Button text={"play"} styletype={"red"} onClickHandeler={moveToPlay}/>
        </>
    )
}

export default Home;