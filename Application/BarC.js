Ext.define('Application.BarC', {
    extend: 'Ext.app.Controller',
	id: 'BarC',
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