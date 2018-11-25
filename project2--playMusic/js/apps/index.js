//主入口
define(['http','config','view'],function(http,config,view){
	http.http(config.pathUrl+config.musicUrl,function(data){
		view.setView(data.song_list);
	})
})