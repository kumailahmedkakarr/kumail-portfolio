function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

window.addEventListener("scroll", function(){
  const cards = document.querySelectorAll(".project-card, .blog-card");
  cards.forEach(card=>{
    const position = card.getBoundingClientRect().top;
    const screen = window.innerHeight;
    if(position < screen - 100){
      card.style.opacity="1";
      card.style.transform="translateY(0)";
    }
  });
});
