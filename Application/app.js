
(function(){  
	// 脚本缓存，方便调试
	Ext.Loader.setConfig({
		disableCaching: false,
		enabled: true
	});
	
	Ext.onReady(function(){  
	
		/** 浏览器原生的事件机制 */
		var e = document.getElementById("test");
		// DOM 0 事件覆盖
		e.onclick = function(event) { console.log("dom 0, event 1, event type: " + event.type); };
		e.onclick = function(event) { console.log("dom 0, event 2, event type: " + event.type); };
		// DOM 2 支持多处理事件
		e.addEventListener("click",function(event){
			console.log("dom 2, event 1, event type: " + event.type);
		},false);
		e.addEventListener("click",function(event){
			console.log("dom 2, event 2, event type: " + event.type);
		},false);
		
		
		/** Ext封装了DOM和Event事件 */
		var test = Ext.get("test");

		/**
		* 注意这里调用的是Ext.EventManager的on()方法
		* 而不是后面例子中Observer中的on()方法
		* 但是二者类似
		*
		* Ext.dom.Element中定义了on()方法，会调用Ext.EventManager的on()
		*/
		test.on("click", function () {
			console.log("ext handler1");
		});
		test.on("click", function () {
			console.log("ext handler2");
		});




		/** 类的加载方式1
		var lx = Ext.create('Application.SportsMan',{});
		lx.setUserName('liu xiang');
		lx.fireEvent('run');

		var ym = Ext.create('Application.SportsMan',{});
		ym.setUserName('yao ming');
		ym.fireEvent('sing');
		*/

		/** 类的加载方式2 */
		Ext.require('Application.SportsMan',function(SportsMan){
			var lx = new SportsMan();
			lx.setUserName('liu xiang');
			lx.fireEvent('run');
			
			var ym = new SportsMan();
			ym.setUserName('yao ming');
			ym.fireEvent('sing');
		});
		
		
		Ext.require('Application.Car',function(Car){
			var bc = new Car();
			/** 2 给对象绑定事件监听 */
			bc.on('run',function(){ // on 是addListener的简写
				/**
				* 这里的getCarName()在方法setCarName() 调用之前
				* 也没有问题，因为是回调函数
				*/
				console.log(bc.getCarName() + ' is running..'); 
			});
			bc.on('run',function(){
				console.log('note: ' + bc.getCarName() + ' run far away..');
			});
			
			bc.setCarName('ben chi');
			bc.fireEvent('run');
			
			var bmw = new Car();
			bmw.addListener('sing',function(){
				console.log(bmw.getCarName() + ' is singing..');
			});
			bmw.setCarName('bao ma');
			bmw.fireEvent('sing');
			
			
			/** 3 在对象的配置项中，定义监听 */
			var pt = new Car({
				carName: 'Phaeton',
				listeners:{
					run: function(){
						console.log(this.getCarName() + ' is running..');
					}
				}
			});
			pt.fireEvent('run');
		});
		
		
		Ext.require(['Application.BarC','Application.BzzC','Application.FooC'],function(BarC,BzzC,FooC){
			new BarC().init();
			new BzzC().init();
			new FooC().init();
		});
	});         
})();  

