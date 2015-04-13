Ext.define('Application.FooC', {
    extend: 'Ext.app.Controller',
	id: 'FooC',
	init: function(){
		this.fireEvent('barOpenWindow', 'Foo');
	}
	
});