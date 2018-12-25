function main()
{
  var colorclass='';
  $('.select-color').on('click',function()
  {
  	var selectedcolor=$(this).attr('class');
    switch(selectedcolor)
      {
        case 'select-color cyan not-selected':
          			colorclass='cyan';
          			break;
        case 'select-color yellow not-selected':
          			colorclass='yellow';
          			break;
        case 'select-color magenta not-selected':
          			colorclass='magenta';
          			break;
      }
    $(this).removeClass('not-selected');
    $(this).siblings().addClass('not-selected');
  });
   $('.box').on('click', function() {
   
		  $(this).toggleClass(colorclass);
		});
 		$('.toggle-blink').on('click', function() {
				if(colorclass)
          {
           	$(this).toggleClass('opacity'); 
            setInterval(function(){
              $('.box.cyan, .box.yellow, .box.magenta').toggleClass('blink');
            },350);
          }
		});
}

$(document).ready(main);