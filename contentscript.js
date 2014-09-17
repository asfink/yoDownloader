console.log("THIS HAS BEEN LOADED");
chrome.downloads.onChanged.addListener(function(state){
	console.log(state);
	if (state==="interrupted"||state==="complete")
	{
		if (chrome.downloads.DownloadItem.fileSize>=10)
		{
			chrome.storage.sync.get('username',function(result){
				//var username = result.username;
				//$.post('http://api.justyo.co/yo/', { 'api_token': 70dfac71-cd49-37bd-c2da-5a2459f8f81a, 'username':'asfink'});
				alert('YOOOOO');
				console.log(result);
			});
		}
	}
});


