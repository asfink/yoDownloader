$(document).ready(function () {
	$.fn.form.settings.rules.number = function(value){
		var numberRegex = new RegExp("^[0-9]*$", "i");
		return numberRegex.test(value);
	};
	prepopulateFields('username');
	prepopulateFields('fileSize');
	$('.ui.form').form({
		username:{
			identifier: 'username',
			rules:[{
				type:'empty',
				prompt: 'Please enter your username'
			}]
		},
		fileSize:{
			identifier:'fileSize',
			rules:[
			{
				type: 'empty',
				prompt:'Invalid file size entry'
			},
			{
				type: 'number',
				prompt: 'Invalid file size entry'
			}
			]
		}
	});
	// $('.ui.form').form({
	// onSuccess: function(event){
	// 	event.preventDefault();
	// 	var username = $("input[name=username]").val();
	// 	console.log(username);
	// 	var fileSize = $("input[name=fileSize]").val();
	// 	console.log(fileSize);

	// 	chrome.storage.sync.set({'username': username});
	// 	chrome.storage.sync.set({'fileSize': fileSize});
	// 	alert("saved!");}
	// }
	// );
});


function prepopulateFields(field){
	chrome.storage.sync.get(field,function(result){
		var name = result.field;
		console.log(name);
		var $nameInput = $("input[name="+field+"]");
		$nameInput.val(name);
	});
}

function save()
{
	var username = $("input[name=username]").val();
	console.log(username);
	var fileSize = $("input[name=fileSize]").val();
	console.log(fileSize);

	chrome.storage.sync.set({'username': username});
	chrome.storage.sync.set({'fileSize': fileSize});
	alert("saved!");
}