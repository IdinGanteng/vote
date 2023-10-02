import React from 'react'

const Button = () => {
  var click1 = 0;
  var click2=0;
  var click3=0;

  var voteBtn1 = document.getElementById("clicks1").click
  var voteBtn2 = document.getElementById("clicks2");
  var voteBtn3 = document.getElementById("clicks3");
  const clickMe=()=>{
    
    if(voteBtn1){
      click1 ++
      voteBtn1.innerHTML = click1
    }
    else if (voteBtn2){
      click2 ++
      voteBtn2.innerHTML = click2 
    }
    else if (voteBtn3){
      click3 ++
      voteBtn3.innerHTML = click3 
    }
    // console.log(click);
  }
  return (
    <button type='button' onClick={clickMe}>
        Vote
    </button>
  )
}

export default Button