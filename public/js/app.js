console.log('connected')


var pics = document.getElementsByClassName('photo-ctr');
// console.log(typeof(pics))
//
// console.log(pics.length)


for(i=0;i<pics.length;i++){
  var randomNumber = Math.random() * 1.5;
  var leftRight = Math.floor(Math.random() * 10) + 1
  var plusMinus = '';

  if(leftRight > 5){
    plusMinus = '-'
  } else {
    plusMinus = ''
  }
  // console.log(leftRight)
  // console.log(randomNumber)
  pics[i].style.transform = "rotate("+ plusMinus + randomNumber + "deg)"
}


$('.photo-ctr').mouseenter(function(){
  // this.style.transform = 'rotate(0deg)'
  this.style.transform = 'scale(1.1)'
  this.style.boxShadow = "3px 3px 15px  #888"
})

$('.photo-ctr').mouseleave(function(){

  var randomNumber = Math.random() * 1.5;
  var leftRight = Math.floor(Math.random() * 10) + 1
  var plusMinus = '';

  if(leftRight > 5){
    plusMinus = '-'
  } else {
    plusMinus = ''
  }
  // console.log(this.style.transform = 'rotate(0deg)')
  this.style.transform = 'scale(1)'
  this.style.transform = "rotate("+ plusMinus + randomNumber + "deg)"
  this.style.boxShadow = "0px 0px 0px #888"

})


$('.like-btn').click(function(){
  console.log(this.closest('.photo-ctr'))
})
