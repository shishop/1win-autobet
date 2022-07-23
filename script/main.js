$(document).ready(function(){
	$('.item-copy').click(function(){

  		Swal.fire({
		  position: 'center-center',
		  icon: 'success',
		  title: 'Промокод успешно скопирован',
		  showConfirmButton: false,
		  timer: 2000
		});

	  	var copytext = document.createElement('input');
	    copytext.value = $(this).attr("data-promo");
	    document.body.appendChild(copytext);
	    copytext.select();
	    document.execCommand('copy');
	    document.body.removeChild(copytext);
	});

	$('.btn-mobile-menu').click(function(){
		var dataActive = $(".menu").attr("data-active");

		if(dataActive == undefined || dataActive == "0"){
			$('.menu').addClass("active-menu");
			$('.menu').attr("data-active","1");
		}else{
			$('.menu').removeClass("active-menu");
			$('.menu').attr("data-active","0");
		}
	});

	

    $('.lazyload').lazy({
            delay:500
        });
});