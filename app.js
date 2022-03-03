let checkbox = document.getElementsByClassName("checkbox")[0];
let btn = document.getElementById("btn");
let lottiePlayer = document.getElementsByTagName('lottie-player')[0];
let troll = document.getElementById('troll')
let allTry = 0;
let warrior = 0
let button = document.getElementById('verify');

let images = ['dog1.jpg','building.jpg','fruit.jpg','montagne.jpg','personne.jpg','sea.jpg','ville.jpg','ville2.jpg','voile.jpg'];

const img = document.getElementsByClassName('case');
for(let i = 0; images.length > i ; i++) {
  img[i].style['background-image'] = `url("./img/${images[Math.round(Math.random() * (images.length -1))]}")`
}

document.querySelectorAll('.case').forEach(item => {
    item.addEventListener('click', event => {
      item.classList.toggle("selected")
    })
  });

checkbox.addEventListener('click', (event) => {
      let challenge = document.getElementsByClassName('challenge')[0]
      challenge.classList.toggle("hidden");
      checkbox.classList.toggle("hidden-checkbox")
      lottiePlayer.classList.toggle("hidden")
    });


button.addEventListener('click', () => {
    let challenge = document.getElementsByClassName('challenge')[0];
    challenge.classList.add('hidden');
    checkbox.classList.remove("hidden-checkbox");
    lottiePlayer.classList.add("hidden");
    allTry++;
    phraseCaptcha(allTry);
    const img = document.getElementsByClassName('case');
    for(let i = 0; images.length > i ; i++) {
      img[i].style['background-image'] = `url("./img/${images[Math.round(Math.random() * (images.length -1))]}")`
    }
});


let phraseTroll = ["", "Cliquer partout ça fonctionne pas...", "Les deux pieds dans le plat !", "Abandonne !", "Allez arrête là.", "Comment tu forces !", "T'es un dur à cuire toi !", ]


function phraseCaptcha(number) {
    if(phraseTroll.length <= number) {
      allTry = 1
      warrior++
      console.log(warrior)
    }
    troll.innerText = phraseTroll[allTry];
}



