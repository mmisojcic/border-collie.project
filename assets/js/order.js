$(document).ready(function() {
	$('input[type=text]')
		.focus(function() {
			$(this)
				.removeClass('input-blur input-ok')
				.addClass('input-focus');
			this.value = '';
		})
		.blur(function() {
			if ($(this).val()) {
				$(this).addClass('input-ok');
			}
			$(this)
				.removeClass('input-focus')
				.addClass('input-blur');
		});

	// FIRST NAME VALIDATION
	$('input[name=firstName]').blur(function() {
		let value = $(this).val();
		let regEx = /^[A-Z][a-z]{2,20}$/;

		if (!regEx.test(value)) {
			$(this).addClass('input-error')
			.removeClass('input-ok');
			$('#errorFirstName').text(
				'Invalid name! Must contain 2-20 characters with capital first character.'
			).css('opacity','1');
		} else {
			$(this)
				.removeClass('input-error')
				.addClass('input-ok');
			$('#errorFirstName').html('&nbsp;');
		}
	});
	// LAST NAME VALIDATION
	$('input[name=lastName]').blur(function() {
		let value = $(this).val();
		let regEx = /^[A-Z][a-z]{2,30}$/;

		if (!regEx.test(value)) {
			$(this).addClass('input-error')
			.removeClass('input-ok');
			$('#errorLastName').text(
				'Invalid last name! Must contain 2-30 characters with capital first character.'
			);
		} else {
			$(this)
				.removeClass('input-error')
				.addClass('input-ok');
			$('#errorLastName').html('&nbsp;');
		}
	});

	// EMAIL VALIDATION
	$('input[name=email]').blur(function() {
		let value = $(this).val();
		let regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!regEx.test(value)) {
			$(this).addClass('input-error')
			.removeClass('input-ok');
			$('#errorEmail').text('Invalid email! Follow example.');
		} else {
			$(this)
				.removeClass('input-error')
				.addClass('input-ok');
			$('#errorEmail').html('&nbsp;');
		}
	});
	// PHONE VALIDATION
	$('input[name=phone]').blur(function() {
		let value = $(this).val();
		let regEx = /^[0-9]{3}\s[0-9]{2}\s[0-9]{2}\s[0-9]{3}$/;
		if (!regEx.test(value)) {
			$(this).addClass('input-error')
			.removeClass('input-ok');
			$('#errorPhone').text('Invalid phone number! Follow example.');
		} else {
			$(this)
				.removeClass('input-error')
				.addClass('input-ok');
			$('#errorPhone').html('&nbsp;');
		}
	});
	// ADDRESS VALIDATION
	$('input[name=address]').blur(function() {
		let value = $(this).val();
		let regEx = /^[a-zA-Z0-9\s,.'-]{3,}$/;
		if (!regEx.test(value)) {
			$(this).addClass('input-error')
			.removeClass('input-ok');
			$('#errorAddress').text(
				'Invalid address! Must not contain special characters "{} [] @ : ; ` " /" and must be longer then 3 characters.'
			);
		} else {
			$(this)
				.removeClass('input-error')
				.addClass('input-ok');
			$('#errorAddress').html('&nbsp;');
		}
	});
	// CITY VALIDATION
	$('input[name=city]').blur(function() {
		let value = $(this).val();
		let regEx = /^[A-Z][a-z]{2,30}$/;

		if (!regEx.test(value)) {
			$(this).addClass('input-error')
			.removeClass('input-ok');
			$('#errorCity').text(
				'Invalid city name! Must contain 2-30 characters with capital first character.'
			);
		} else {
			$(this)
				.removeClass('input-error')
				.addClass('input-ok');
			$('#errorCity').html('&nbsp;');
		}
	});
	// ZIP VALIDATION
	$('input[name=zip]').blur(function() {
		let value = $(this).val();
		let regEx = /^[0-9]{5}$/;

		if (!regEx.test(value)) {
			$(this).addClass('input-error')
			.removeClass('input-ok');
			$('#errorZip').text('Invalid ZIP! Must contain 5 numbers.').animates;
		} else {
			$(this)
				.removeClass('input-error')
				.addClass('input-ok');
			$('#errorZip').html('&nbsp;');
		}
	});
	// QUANTITY VALIDATION
	$('input[name=quantity]').blur(function() {
		let value = $(this).val();
		let regEx = /^[0-9]{1,}$/;

		if (!regEx.test(value)) {
			$(this).addClass('input-error')
			.removeClass('input-ok');
			$('#errorQuantity').text(
				'Invalid quantity! Must contain only numbers.'
			);
		} else {
			$(this)
				.removeClass('input-error')
				.addClass('input-ok');
			$('#errorQuantity').html('&nbsp;');
			let quantity = parseInt($('input[name=quantity]').val());
			$('#total').text(quantity * options[index].price + '$');
		}
	});

	let options = [
		{name:'Select a breeder', price:0},
		{name:'Boywod Border Collies', price:340},
		{name:'Astra Border Collies', price:310},
		{name:'Zig"s Border Collies', price:280},
		{name:'Nethhill Border Collies', price:250},
		{name:'Stirling Collies', price:520},
		{name:'Catsash Boarding Kennels', price:420}
	];

	$('option[value=default]').text(options[0].name);
	$('option[value=boywod]').text(options[1].name + ' - ' + options[1].price + '$');
	$('option[value=astra]').text(options[2].name + ' - ' + options[2].price + '$');
	$('option[value=zigs]').text(options[3].name + ' - ' + options[3].price + '$');
	$('option[value=nethhill]').text(options[4].name + ' - ' + options[4].price + '$');
	$('option[value=stirling]').text(options[5].name + ' - ' + options[5].price + '$');
	$('option[value=catsash]').text(options[6].name + ' - ' + options[6].price + '$');
	

	let index;
	$('select').change(function(){
		index = $("option:selected").index();
		if($(this).val() == 'default'){
			$('#quantity').text('Quantity?');
			$('input[name=quantity]').val('').removeClass('input-blur input-ok');
		}else{
			$('#quantity').text('Quantity? Price for one puppy: ' + options[index].price + '$');
			$('input[name=quantity]').val('').removeClass('input-blur input-ok');
		}
	});

});
