Ext.define('Application.Car',{
	config:{
		carName: ''
	},
	extend: "Ext.util.Observable",
	constructor: function(c) {
		var me = this;
		
		/** 
		* 同样这里的addEvents()可以省略
		* 好处是：统一的对外声明监听方法的名称
		*/
		me.addEvents('sing');
		me.addEvents('run');
		
		me.callParent(arguments);
	}
});