
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const main = document.querySelector('.main');
    const buttonClose = document.querySelector('.button-close img')
    const arrow1  =document.querySelector('.arrow1');
    const arrow2  =document.querySelector('.arrow2');
    
    const subItem1 = document.querySelector('.nav-links__items__dropdown__subItems1')
    const subItem2 = document.querySelector('.nav-links__items__dropdown__subItems2')




    burger.addEventListener('click' ,  function(){
        console.log('hi')
        nav.classList.toggle('nav-active');
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

  
 
    
    })
  //   close Menu
  buttonClose.addEventListener('click' ,  function(){
      
    nav.classList.remove('nav-active')
    document.body.style.backgroundColor = "rgba(0,0,0,0.0)";
  
})

   // arrows dropdown
   arrow1.addEventListener('click' , ()=>{
    console.log('hi')
    subItem1.classList.toggle('subItems-active');
    //    arrow image
   arrow1.classList.toggle('rotate')
})
arrow2.addEventListener('click' , ()=>{

   
    subItem2.classList.toggle('subItems-active')
    arrow2.classList.toggle('rotate')
    
})


   
    