let lastScrollStop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
   const scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;
   if (scrollTop > lastScrollStop) {
      navbar.style.top = "-110px";
   } else {
      navbar.style.top = "0";
   }
   lastScrollStop = scrollTop;
});

//TYPED
const typedText = document.getElementById('typed-text');
const text = ["Bonjour à tous et à toutes, je me présente je m'appelle Kamis, Etudiant en 2ème année en Informatique à l'Ecole Superieure de Gestion des Sciences et d'Informatique",
"m'ayant fait accerir plusieurs connaissances de base en Informatique et en Sécurité Informatique J'ai décidé de me lancé à font dans l'apprentissage du code",
"depuis près de 6 mois je me forme à temps plein en autodidacte aux langages front tels que le css, javascript et son framework React afin de devenir le plus rapidement possible un dévoloppeur.",
" Plus qu'un avenir professionnel, je me suis decouvet une passion, celle de coder."];

let index = 0;
let timer = setInterval(function() {
  typedText.innerHTML += text[index][typedText.innerHTML.length];
  if (typedText.innerHTML.length === text[index].length) {
    clearInterval(timer);
    index++;
    if (index === text.length) return;
    setTimeout(function() {
      timer = setInterval(arguments.callee, 50);
    }, 1000);
  }
}, 50);
