$(function(){
	$(".chose_number_input").keypress(function (evt) {
		if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57)
		{
			evt.preventDefault();
		}
	});			
})

function generateIputs(){
	$('#div-inputs').html("");
	var qnt_input = $('#number-inputs').val();
	if (qnt_input && qnt_input != 0) {
		for (var i = qnt_input; i > 0; i--) {
			html = '<input class="form-control number_input input-sum" type="number" name="input-sum-'+i+'" id="input-sum-'+i+'" placeholder="Digite um número." required="true">'
				 + '<p class="error" id="input-feedback-'+i+'"></p>';

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
	} else {
		alert('A quantidade de inputs não pode ser nula ou igual a 0 (zero)');
	}
}

function destroyInputs(){
	$('#div-btn-destroyInputs').hide();
	$('#div-btn-sum').hide()
	$('#div-inputs').html("");
}

function validateInputs(){
	var validate = [];
	var inputs = $('.input-sum');
	inputs.each(function(idx, val){
		if (!val.value){
			feedback_id = val.id.replace('input-sum-','');
			$('#input-feedback-'+feedback_id).html('Este input não pode ficar vazio!')
			validate.push(0)
		} else {
			validate.push(1)
		}
	})

	setTimeout(function(){
		$('.error').html("");
	},3000)

	if($.inArray(0,validate) == '-1')
		sumInputs(inputs);
}

function sumInputs(inputs){
	var sum = 0;
	inputs.each(function(idx, val){
		if (val.value) {
			number = parseInt(val.value);
			sum += number;
		}
	});
	alert("A soma é: "+sum);
}