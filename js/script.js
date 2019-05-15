$(function(){
	$(".chose_number_input").keypress(function (evt) {
		if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57)
		{
			evt.preventDefault();
		}
	});			
})

function generateIputs(){
	qnt_input = $('#number-inputs').val();
	if (qnt_input && qnt_input != 0) {
		for (var i = qnt_input; i > 0; i--) {
			html = '<input class="form-control number_input input-sum" type="number" name="input-sum-'+i+'" id="input-sum-'+i+'" placeholder="Digite um número." required="true">'
			+ '<p class="error"></p>';

			$('#div-inputs').append(html);
		}
		$(".number_input").keypress(function (evt) {
			if (evt.which != 8 && evt.which != 0 && evt.which == 189 && evt.which == 109 && evt.which < 48 || evt.which > 57)
			{
				evt.preventDefault();
			}
		});	
		$('#div-btn-destroyInputs').show();
		$('#div-btn-sum').show()
	}
}

function destroyInputs(){
	$('#div-btn-destroyInputs').hide();
	$('#div-btn-sum').hide()
	$('#div-inputs').html("");
}

function sumInputs(){
	sum = 0;
	$('.input-sum').each(function(idx, val){
		number = parseInt(val.value);
		sum += number;
	});
	alert("A soma é: "+sum);
}