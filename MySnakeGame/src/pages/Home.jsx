import Button from "../components/Buttons/Button";
import { useNavigate } from "react-router-dom";

function Home(){

    const navigate=useNavigate();

    function moveToPlay(){

    }
    return(
        <>
        <h1>this is home page</h1>
        <Button text={"play"} styletype={"red"} onClickHandeler={moveToPlay}/>
        </>
    )
}

export default Home;