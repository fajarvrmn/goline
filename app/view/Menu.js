/*
 * File: app/view/Menu.js
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

Ext.define('GOlineplus.view.Menu', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.menu',

    requires: [
        'GOlineplus.view.MenuViewModel',
        'GOlineplus.view.Admission',
        'Ext.Img',
        'Ext.toolbar.Toolbar',
        'Ext.container.ButtonGroup',
        'Ext.button.Button'
    ],

    viewModel: {
        type: 'menu'
    },
    reference: 'menu',
    flex: 1,
    scrollable: true,
    layout: 'border',

    items: [
        {
            xtype: 'panel',
            region: 'west',
            border: false,
            margin: '0 1 0 0',
            scrollable: true,
            width: 216,
            bodyBorder: false,
            dockedItems: [
                {
                    xtype: 'panel',
                    border: false,
                    dock: 'top',
                    height: 67,
                    width: 214,
                    bodyBorder: false,
                    items: [
                        {
                            xtype: 'image',
                            height: 29,
                            margin: '24 20 20 20',
                            width: 143,
                            src: 'images/logo.png'
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'toolbar',
                    height: '100%',
                    width: 205,
                    items: [
                        {
                            xtype: 'buttongroup',
                            dock: 'left',
                            frame: false,
                            width: 190,
                            title: '',
                            columns: 1,
                            items: [
                                {
                                    xtype: 'button',
                                    width: 182,
                                    text: 'Admission'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'admission',
            flex: 1,
            region: 'center'
        }
    ]

});