/*function catCarousel(){
	$('.thumbnail').on('click', event => {
		console.log(event);
		alert("You clicked me");
	});

}*/

function catCarousel(){
  $('.thumbnail').on('click', function(e){
  	console.log(e);
  	console.log(this);
    let source = $(this).find('img').attr('src');
    let altText = $(this).find('img').attr('alt');
   
    $('.hero img').attr('src', source);
    $('.hero img').attr('alt', altText);
    
    
  })
}

$(catCarousel);
