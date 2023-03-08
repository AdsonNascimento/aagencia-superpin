/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/*===========scrollreveal=============*/
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#servicos .text-info, #servicos .itens,
  #potifolio .text-info, #potifolio .itens,
  #galeria .text-info, #galeria .itens-galeria,
  #sobre .text-sobre, #sobre .container-iframe,
  #contact .text, #contact .links,
  footer .footer-logo, footer .footer-contatos`,
  { interval: 120 }
)