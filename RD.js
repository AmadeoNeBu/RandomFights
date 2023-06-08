let PowerN1El = document.getElementById("PowerNumb1") 
let ThrowsEl = document.getElementById("Throws")
let MainREl = document.getElementById("MainRow")
let PowerN2El = document.getElementById("PowerNumb2") 
let round = 1
let Count = 5
let IsAlive = false

let Power2 = 0 
let Power1 = 0

let BossIn = 10 - round

// To change the images of the oponents, in fight() has to update
let OponentNumber = 1
OponentSource = "./Multimedia/Oponent" + OponentNumber + ".jpg"
document.getElementById("img2").src = OponentSource


function Roll() {
 
  if (Count > 0) {
    Power1 = Math.floor(Math.random() * 50)  + 1
    PowerN1El.textContent = Power1
    Count -=1
    ThrowsEl.textContent = Count
    MainREl.textContent = "Choose your next move!"

    }
    if (Power2 == 0) {
      Power2 = Math.floor(Math.random() * 20)  + 1
      PowerN2El.textContent = Power2
      console.log(Power2)
      IsAlive = true
  } 
}

function Restart() {
  Count = 5;
  ThrowsEl.textContent = Count
  MainREl.textContent = "Roll the Power Dice to know the power of your fighter!" ;Power1 = 0
  Power2 = 0
  PowerN1El.textContent = Power1
  PowerN2El.textContent = Power2
  round = 1
  IsAlive = false
  OponentNumber = 1
  OponentSource = "./Multimedia/Oponent" + OponentNumber + ".jpg"
  document.getElementById("img2").src = OponentSource
}


function Fight() {

  console.log(round)

  if (Power1 >= Power2 && IsAlive == true && round == 10) {
    IsAlive = false
    round += 1
    BossIn = 10 - round
    MainREl.textContent = "You won! now the world is a happy and safe place! "
    Power2 = "--"
    Power1 = "--"
    PowerN2El.textContent = Power2
    PowerN1El.textContent = Power1
    Count = "--"
    ThrowsEl.textContent = Count

  }


  if (Power2 > Power1 && IsAlive == true) {
    
    Count = 0
    ThrowsEl.textContent = Count
    MainREl.textContent = "You have lost! Press restart to play again";
    IsAlive == false


  }

  if (Power1 >= Power2 && IsAlive == true && round == 9) {
    round += 1
    BossIn = 10 - round
    MainREl.textContent = "The final boss is finally here, can you beat him? "
    Count += 1
    ThrowsEl.textContent = Count
    Power2 = 40
    PowerN2El.textContent = Power2

    OponentNumber += 1
    OponentSource = "./Multimedia/Oponent" + OponentNumber + ".jpg"
    document.getElementById("img2").src = OponentSource
  }


  if (Power1 >= Power2 && IsAlive == true && round > 5 && round < 9) {
    round += 1
    BossIn = 10 - round
    MainREl.textContent = "You won!, prepare for your next oponent! the final boss is coming in " + BossIn +" rounds...";
    Count += 1
    ThrowsEl.textContent = Count
    Power2 = Math.floor(Math.random() * (30 + round * 2))  + 1
    PowerN2El.textContent = Power2

    OponentNumber += 1
    OponentSource = "./Multimedia/Oponent" + OponentNumber + ".jpg"
    document.getElementById("img2").src = OponentSource
  }
 
  
  if (Power1 >= Power2 && IsAlive == true && round <= 5) {
    MainREl.textContent = "You have won the fight, prepare for your next oponent!";
    Count += 1
    ThrowsEl.textContent = Count
    round += 1
    Power2 = Math.floor(Math.random() * (30 + round * 2))  + 1
    PowerN2El.textContent = Power2

    OponentNumber += 1
    OponentSource = "./Multimedia/Oponent" + OponentNumber + ".jpg"
    document.getElementById("img2").src = OponentSource
  }
 
}