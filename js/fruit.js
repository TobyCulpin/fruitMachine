
document.getElementById("b").addEventListener("click",spin);

function spin()
{
    let v1 = spinReel("r1");
    let v2 = spinReel("r2");
    let v3 = spinReel("r3");
    

    if (v1 == v2 && v1 == v3)
    {
        alert("Winner!");
    }
}

function spinReel(reel)
{
    let v1 = Math.floor(Math.random() * 9);
    

    switch (v1)
    {
        case 0:
            document.getElementById(reel).src = "images/apple.png";
            break;
        case 1:
            document.getElementById(reel).src = "images/banana.png";
            break;
        case 2:
            document.getElementById(reel).src = "images/kiwi.jp2";
            break;
        case 3:
            document.getElementById(reel).src = "images/lemon.jp2";
            break;
        case 4:
            document.getElementById(reel).src = "images/orange.png";
            break;
        case 5:
            document.getElementById(reel).src = "images/peach.png";
            break;
        case 6:
            document.getElementById(reel).src = "images/pear.png";
            break;
        case 7:
            document.getElementById(reel).src = "images/strawberry.png";
            break;
        case 8:
            document.getElementById(reel).src = "images/watermelon.png";
            break;
        
    }

    return v1;
}