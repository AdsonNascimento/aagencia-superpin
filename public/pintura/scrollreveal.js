/*===========scrollreveal=============*/
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
  })
  
  scrollReveal.reveal(
    `.capa img, .capa .p, .capa .button,
    .container .text, .container .container-list, .container .button
    footer .footer-logo, footer .footer-contatos`,
    { interval: 100 }
  )