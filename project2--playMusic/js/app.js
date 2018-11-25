requirejs.config({
	baseUrl:'js/',
	paths:{
		'jquery':'libs/jquery-3.3.1',
		'config':'apps/config',
		'http':'apps/http',
		'index':'apps/index',
		'view':'apps/view'
	}
});
requirejs(['jquery','config','http','index','view'],function($,config,http,index,view){

})