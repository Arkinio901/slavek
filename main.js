
document.addEventListener('scroll', function () {
 const scrollValue = window.scrollY; 
 const windowHeight = window.innerHeight;
 
     //PIERWSZA SEKCJA

 const sec1 = document.querySelector('.sec1');
 const sec1FromTop = sec1.offsetTop;
 const sec1Height = sec1.offsetHeight;
 

 const sec2 = document.querySelector('.sec2');
 const sec2FromTop = sec2.offsetTop;
 const sec2Height = sec2.offsetHeight;
 

 const sec3 = document.querySelector('.sec3');
 const sec3FromTop = sec3.offsetTop;
 const sec3Height = sec3.offsetHeight;
 
 
 const sec4 = document.querySelector('.sec4');
 const sec4FromTop = sec4.offsetTop;
 const sec4Height = sec4.offsetHeight;
 
 const arrow = document.querySelector('.arrow');

const sec = document.querySelectorAll('section');
const secAll= [... sec];
secAll.forEach(one=>{


 if (scrollValue > sec1FromTop + sec1Height - windowHeight){
     one.classList.add('active');
     arrow.classList.add('show');
 }
})
// 



        

 // zabieram klasę active
 secAll.forEach(one =>{

 
 if (scrollValue < 100){
    one.classList.remove('active');
    arrow.classList.remove('show');
}
})

})

document.querySelector('.arrow').addEventListener('click', ()=>{
    window.scrollTo(0,0);
})
