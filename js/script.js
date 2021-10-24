const chunLi = document.getElementById('chun-li');
// const psy = document.getElementById('pysloke');
const score = document.getElementById('score');

function jump() {
    chunLi.classList.add("jump-animation");
    setTimeout(() =>
      chunLi.classList.remove("jump-animation"), 750);
  }

  document.addEventListener('keypress', () => {
      if (!chunLi.classList.contains("jump-animation")){
          jump();
      }
    })
    document.addEventListener('click', () => {
        if (!chunLi.classList.contains("jump-animation")){
            jump();
        }
      })
setInterval(() => {
    const chunTop = parseInt(window.getComputedStyle(chunLi).getPropertyValue('top'));
    const jugLeft = parseInt(window.getComputedStyle(juggernaut).getPropertyValue('left'));
    score.innerText++;

    if (jugLeft < 0) {
            juggernaut.style.display = "none";
    } else {
        juggernaut.style.display= "";
    }

    if (jugLeft < 50 && jugLeft > 0 && chunTop > 300){
        alert("You got a score of: " + score.innerText +
        "\n\nPlay again? \n\nTo play: use space bar on keyboard or Jump button if on phone.");
      location.reload();
    }
}, 50)