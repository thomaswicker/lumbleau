$(document).ready(function(){

		$('.supportBlockQuestions').click(function (e) {
			$(this).next("p").slideToggle("fast");
			e.preventDefault();
		});

		$('#box').keyup(function(){
			var valThis = $(this).val().toLowerCase();
			if(valThis == ""){
				$('.supportBlockQuestions').show();           
			} else {
				$('.supportBlockQuestions').each(function(){
					var text = $(this).text().toLowerCase();
					(text.indexOf(valThis) >= 0) ? $(this).show() : $(this).hide();
				});
			};
		});


	});