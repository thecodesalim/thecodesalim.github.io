const main = document.querySelector(".move");
const second = document.querySelector(".second");

let count = 0;

var animation = anime({
  targets: main,
  translateX: 250,
  rotate: "1turn",
  autoplay: false,
  loop: false
});

var s = anime({
  targets: '.second',
  autoplay: false,
  translateX: 250,
  easing: 'easeInOutSine'
});


const stories = [
  {
    body: "Understanding Prang: Looking into Politics",
    list: "By Salim"
  },
  {
    body: "I picked 11 photos to analyse",
    list: "_"
  },
  {
    body: "These are the 10 Categories",
    list: `
    <ul> 
    <li>Conservative or Liberal</li>
    <li>Pro-life or Pro choice</li>
    <li>Introvert or Extrovert</li>
    <li>Loud or Quiet</li>
    <li>Logical or Emotional</li>
    <li>Optimist or Pessimist</li>
    <li>Agressive YES/NO</li>
    <li>Religious YES/NO</li>
    <li>Creative or Analytical</li>
    <li>Death Penalty YES/NOT</li>
    <li>Euthanasia YES/NO</li>
    <li>Brexit Leave/Remain</li>
    </ul>`
  },
  {
    body: "Conclusion",
    list: `
    <ul> 
    <li>She is interested in POLITICS</li>
    <li>She doesnt particpate in POLITICS</li>
    </ul>`
  }
];

main.textContent = stories[count].body;
second.innerHTML = stories[count].list


const colors = ["green", "yellow", "red"];

document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;

  animation.play

  if (e.keyCode == "37" && count > 0) {
    count--;
    console.log(count);
    main.textContent = stories[count].body;
    if(stories[count].list) second.innerHTML = stories[count].list
    // left arrow
  } else if (e.keyCode == "39" && count < stories.length - 1) {
    count++;
    console.log(count);
    main.textContent = stories[count].body;
    if(stories[count].list) second.innerHTML = stories[count].list
    main.style.backgroundColor = colors[Math.floor(Math.random() * 3)];
  }
}
console.log(animation.play);
window.onclick = animation.play;
//window.onclick = s.play









