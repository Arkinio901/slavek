//(this) to na czym robiona jest cała akcja. W tym przypadku na document
$(document).on('scroll', function () {
 const windowHeight = $(window).height(); //pobieram 100vh czyli jedną wysokość okna przeglądarki
 const scrollValue = $(this).scrollTop();
 // console.log(scrolollValue)


     //PIERWSZA SEKCJA


 const $art1 = $('.art1');
 const art1FromTop = $art1.offset().top;//Jak daleko jest nasz element od początku strony
 const art1Height = $art1.outerHeight();//wielkość naszego elementu
 // console.log(art2Height);

 const $art2 = $('.art2');
 const art2FromTop = $art2.offset().top;
 const art2Height = $art2.outerHeight();

 const $art3 = $('.art3');
 const art3FromTop = $art3.offset().top;
 const art3Height = $art3.outerHeight();
 
 const $art4 = $('.art4');
 const art4FromTop = $art4.offset().top;
 const art4Height = $art4.outerHeight();
 const $arrow = $('.arrow');



 if (scrollValue > art1FromTop + art1Height - windowHeight){
     $art1.addClass('active');
     $art2.addClass('active');
     $art3.addClass('active');
     $art4.addClass('active');
     $arrow.addClass('show');
 }
// 



        

 // zabieram klasę active
 if (scrollValue < 100){
    $('article').removeClass('active');
    $arrow.removeClass('show');
}

})

$('.arrow').on('click', function(){
    $('html, body').animate({scrollTop:0}, '300')
})
