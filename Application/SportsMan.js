Ext.define('Application.SportsMan',{
	config:{
		userName: ''
	},
	extend: "Ext.util.Observable", // 关键是这里
	constructor: function(c) {
		var me = this;
		
		/** 添加事件名称或者定义事件名称
		*	是不是多余？addListener已经有了事件名称了,但是的确可以省略
		*	
		*   不多余，起到统一声明的作用
		*/
		me.addEvents('sing');
		me.addEvents('run');
		
		/** 
		* 注意必须在addListener之前调用callParent 
		* 因为在Observable的构造方法constructor中要进行一些初始化操作
		*/
		me.callParent(arguments);
		/** 1 对类添加监听事件 */
		this.addListener('sing',function(milk){  
			console.log(me.getUserName() + ' is singing..');
		}); 
		
		/** 定义多个处理事件 */
		this.addListener('sing',function(milk){  
			console.log('note: ' + me.getUserName() + ' is singing again ..');
		}); 
		
		this.addListener('run',function(milk){  
			console.log(me.getUserName() + ' is running..');
		});
	}
});