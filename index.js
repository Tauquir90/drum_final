
const handClick = function()
{
    alert("I got clicked");
}
document.addEventListener("keydown",function(e)
{
    const keyName = e.key;
    console.log(`${keyName}`);
    const keys = ['w','a','s','d','j','k','l'];
    switch(keyName)
    {
        case 'w':
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case'a':
             let kick = new Audio("sounds/kick.mp3");
             kick.play();
             break;
        case's':
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        
        case 'd':
             let tom1 = new Audio("sounds/tom-1.mp3");
             tom1.play();
            break;

        case 'j':
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

         case 'k':
                let tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;

        case 'l':
                    let tom4 = new Audio("sounds/tom-4.mp3");
                    tom4.play();
                    break;

         
        default:
                console.log("something went wrong!!"); 
    }
});

//mose event
//document.querySelector('button').addEventListener('click',handClick);
var z = document.querySelectorAll('.drum');
var noOfDrum = document.querySelectorAll('.drum').length;
console.log(noOfDrum);
for (let i = 0; i <= noOfDrum; i++)
{
    z[i].addEventListener("click",function(){
        this.style.color="white";
        let buttonInnerHTML = this.innerHTML;
        switch(buttonInnerHTML)
        {
            case 'w':
                let crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;

            case'a':
                 let kick = new Audio("sounds/kick.mp3");
                 kick.play();
                 break;
            case's':
                let snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            
            case 'd':
                 let tom1 = new Audio("sounds/tom-1.mp3");
                 tom1.play();
                break;

            case 'j':
                let tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;

             case 'k':
                    let tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    break;

             case 'l':
                        let tom4 = new Audio("sounds/tom-4.mp3");
                        tom4.play();
                        break;
            default:
                    console.log("something went wrong!!");
                  

        }
        
    });
   
}

//let audio = new Audio("sounds/crash.mp3");
//audio.play();
