import getButtonStyle from "./getButtonStyle";

function Button({text,styleType,onClickHandeler}){
    return(
        <button
        onClick={onClickHandeler}
        className={`text-white ${getButtonStyle(styleType)} px-4 py-4 mx-1 my-1 rounded-3xl cursor-pointer`}
        >
            {text}
        </button>
    )
}

export default Button;