function SnakeLogic(snake,food){

    let dx=20;
    let dy=0;
    const newHead={x:snake[0].x+dx,y:snake[0].y+dy};
    snake.unshift(newHead);//add new head to the snake

    if(newHead.x==food.x && newHead.y==food.y){
        score+=10;
        moveFood();
        clearInterval(intervalId);
        gameSpeed-=10;
        gameLoop();
    }else{
        snake.pop();
    }
}

export default SnakeLogic;