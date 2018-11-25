//请求
define(['jquery'],function($){
	function http(url,callback){
		$.ajax({
			type:'GET',
			url:url,
			success:function(data){
				callback(data)
			}
		})
	}
	return{
		http:http
	}
})