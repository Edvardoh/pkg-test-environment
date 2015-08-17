Ext.define('TestBase.Application', {
    extend: 'Ext.app.Application',

    requires: [
    	'TestBase.controller.TestController'
    ],

    initControllers: function() {
    	this.controllers.push('TestBase.controller.TestController');
    	
    	this.callParent();
    }
});