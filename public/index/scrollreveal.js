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
    { interval: 100 }
  )