$(function () {
	var width = 800;
	var height = 300;
	var default_top = 50 + '%';
	var default_left = 50 + '%';
	var top = -150 + 'px';
	var left = -400 + 'px';

	function mordal() {

		$('.mordal').animate({
			"width": width,
			"height": height,
			"margin-top": top,
			"margin-left": left
		}, 700).show();
		$('.bg3').css('display', 'block');
		$('.bg3').click(function () {
			$(this).fadeOut();
			$('.mordal').fadeOut().css({
				"width": 0,
				"height": 0,
				"top": default_top,
				"left": default_left
			});
		});
	};

	(function janken() {
		$('.img_box img').click(function () {
			var data = ['img/goo.png', 'img/tyoki.png', 'img/per.png'];
			var randoms = Math.floor(Math.random() * 3);
			var result = $('#output').attr('src', data[randoms]);
			var enemy = $('#output').attr('src');
			var self = this;
			var result_img = $(self).attr('data-img');

			$('.mordal').fadeOut().css({
				"width": 0,
				"height": 0,
				"top": default_top,
				"left": default_left
			});
			$('.bg3').fadeOut();

			function win_or_losing(result_img, enemy) {
				var janken_ob = function() {};
				janken_ob.prototype.paturn = {
					goo: 'img/goo.png',
					tyoki: 'img/tyoki.png',
					per: 'img/per.png'
				};
				var win_paturn = new janken_ob();
				var losing_paturn = new janken_ob();
				console.log(enemy);
				console.log(result_img);
				var paturn1 = janken_ob.goo && janken_ob.tyoki;
				var paturn2 = janken_ob.tyoki && janken_ob.per;
				var paturn3 = janken_ob.per && janken_ob.goo;
				var paturn4 = janken_ob.tyoki && janken_ob.goo;
				var paturn5 = janken_ob.per && janken_ob.tyoki;
				var paturn6 = janken_ob.goo && janken_ob.per;
				
				if (result_img && enemy === paturn1) {
					window.alert('あなたの勝ちです');
				}
				if (result_img && enemy === paturn2) {
					window.alert('あなたの勝ちです');
				}
				if (result_img && enemy === paturn3) {
					window.alert('あなたの勝ちです');
				}
				if (result_img && enemy === paturn4) {
					window.alert('あなたの負けです');
				}
				if (result_img && enemy === paturn5) {
					window.alert('あなたの負けです');
				}
				if (result_img && enemy === paturn6) {
					window.alert('あなたの負けです');
				}
			};
			win_or_losing(enemy, result_img);
		});
	})();
	$('#btn').on('click', function () {
		mordal();
	});
});