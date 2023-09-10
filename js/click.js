$('.tab').on("click",function(){
  $('.tab span').toggleClass('active')
})
$('.tab').on("click",function(){
  $('.new').toggleClass('active1');
  $('.tab').css('z-index','1');
})


let count = 0;

// window.addEventListener("scroll",function(){
//   $('.plus').text(0)
//   if(window.scrollY >= 4800){
//     count++
//     $('.plus').text()
//   }
// })



$('.top').on("click",function(){
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
})