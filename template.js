var app = {
	onLoad: function() {

		var language = navigator.language.replace(/-\w+$/, '');

		$.get('../data.json', function(data){

			var data_item = data[language];
			if(typeof data[language] != 'undefined') {
				data_item = data[language];
			} else {
				data_item = data['en'];
			}

			$('html').attr('lang', navigator.language);
			//$('title').html(data_item.title);
			$('.q-wrapper .text').html(data_item.h1).next().html(data_item.yes).next().html(data_item.no);
		}, 'json');
	}
}

$(function(){
	app.onLoad();
});