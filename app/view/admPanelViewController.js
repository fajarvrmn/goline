/*
 * File: app/view/admPanelViewController.js
 *
 * This file was generated by Sencha Architect version 4.2.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.6.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.6.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('GOlineplus.view.admPanelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.admpanel',

    onRawjalBtnClick: function(button, e, eOpts) {
        this.getView('Ext.widget.admpanel').hide();




        // console.log(this.getView('widget.formrawjal3').show());



        var win = this.getComp();

        win = Ext.create('widget.formrawjal1');

        win.show();

    }

});
