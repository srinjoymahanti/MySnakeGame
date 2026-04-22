function Button({text,styletype,onClickHandeler}){
    return(
        <button
        onClick={onClickHandeler}
        className={`text-white ${getButtonStyling(styleType)} px-4 py-4 mx-1 my-1 rounded-3xl cursor-pointer`}
        >

        </button>
    )
}

export default Button;