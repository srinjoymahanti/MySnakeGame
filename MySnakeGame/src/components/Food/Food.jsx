function Food() {
    return (
        < >
            <div className="w-5 h-5 bg-red-500 absolute rounded-full animate-[blink_1s_infinite]" />

            <style>
                {`
          @keyframes blink {
            50% {
              opacity: 0.5;
            }
          }
        `}
            </style>
        </>
    )
}

export default Food;