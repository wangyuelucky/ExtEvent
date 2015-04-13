Ext.define('Application.BzzC', {
    extend: 'Ext.app.Controller',
	id: 'BzzC',
    init: function() {
        this.listen({
            controller: { // 详见Ext.app.domain.Controller
                '#FooC': {      
                    barOpenWindow: 'openWindow'
                }
            }
        });
    },
 
    openWindow: function(who) {
        console.log(who + ' is coming..');
    }
});