//视图
define(['jquery','http','config'],function($,http,config){
	function setView(data){
		$(data).each(function(index,element){
		$('.root').append("<li data-id="+element.song_id+">"+element.title+"</li>")
		})

		$('.root').on('click','li',function(event){
			http.http(config.pathUrl+"/sxtstu/music/baidu/play.php?mid="+$(this).attr('data-id'),function(data){
				$("audio").attr('src',data.bitrate.show_link);
			})
		})
	}
	return{
		setView:setView
	}
})