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
        'GOlineplus.view.admPanel',
        'GOlineplus.view.FormRawJal3',
        'Ext.Img',
        'Ext.toolbar.Toolbar',
        'Ext.container.ButtonGroup',
        'Ext.button.Button',
        'Ext.form.Label',
        'Ext.form.field.Text'
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
            flex: 1,
            region: 'west',
            border: true,
            flex: 1.5,
            margin: '0 1 0 0',
            scrollable: false,
            bodyBorder: false,
            items: [
                {
                    xtype: 'panel',
                    border: false,
                    height: 95,
                    width: '100%',
                    bodyBorder: false,
                    items: [
                        {
                            xtype: 'image',
                            height: 29,
                            margin: '24 20 20 50',
                            width: 134,
                            src: 'images/logo.png'
                        }
                    ]
                },
                {
                    xtype: 'toolbar',
                    height: '100%',
                    width: '100%',
                    items: [
                        {
                            xtype: 'buttongroup',
                            dock: 'left',
                            frame: false,
                            width: 235,
                            title: '',
                            columns: 1,
                            items: [
                                {
                                    xtype: 'button',
                                    width: 218,
                                    text: 'Admission'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'panel',
            flex: 1,
            region: 'center',
            flex: 5,
            itemId: 'Admission',
            scrollable: true,
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    flex: 4,
                    height: 95,
                    items: [
                        {
                            xtype: 'label',
                            flex: 4,
                            html: '<font size="5pt"><b>Admission</b></font>',
                            margin: 10
                        },
                        {
                            xtype: 'textfield',
                            border: '2px',
                            dock: 'right',
                            height: 35,
                            margin: '0 15 0 0',
                            width: 280,
                            fieldLabel: ''
                        },
                        {
                            xtype: 'image',
                            height: '35px',
                            margin: '0 40 0 0',
                            width: '35px',
                            src: 'images%5Csec.png'
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'panel',
                    height: 923,
                    scrollable: true,
                    title: 'My Panel',
                    items: [
                        {
                            xtype: 'admpanel'
                        },
                        {
                            xtype: 'formrawjal3',
                            hidden: true,
                            hideMode: 'visibility'
                        }
                    ]
                }
            ]
        }
    ]

});