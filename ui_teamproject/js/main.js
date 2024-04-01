let roller = document.querySelector('.image-wrap');
const leftBtn = document.querySelector("#rolling_left");
const rightBtn = document.querySelector("#rolling_right");
const rollLeft = new Animation(
    new KeyframeEffect(
        roller,
    [ 
        {transform: "translateX(-860px)"},
    ],
    {
        direction: 'normal',
        duration: 600,
        fill: 'forwards'
    }
    )
);
const rollRight = new Animation(
    new KeyframeEffect(
        roller,
        [
            {transform: "translateX(860px)"},
        ],
    {
        direction: 'normal',
        duration:600,
        fill: 'forwards'
    }
    )
);


leftBtn.addEventListener("click", function() {
    rollLeft.play();
});

rightBtn.addEventListener("click", function(){
    rollRight.play();
});