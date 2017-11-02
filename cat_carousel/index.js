
function catCarousel(){
    //$ same as jquery()
    $('.thumbnail').on('click', function(event){
        
        //console.log(event);
        console.log(this);
        console.log(event.currentTarget);

        const thumbSource = $(event.currentTarget).find('img').attr('src');
        //console.log(thumbSource);
        //console.log (typeof thumbSource);

        const thumbAlt = $(event.currentTarget).find('img').attr('alt');
        //console.log(thumbAlt);

        $('.hero img').attr('src', thumbSource);
        $('.hero img').attr('alt', thumbAlt);
        
        
    })

}

$(catCarousel());