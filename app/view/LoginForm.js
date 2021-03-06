/*
 * File: app/view/LoginForm.js
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

Ext.define('GOlineplus.view.LoginForm', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.loginform',

    requires: [
        'GOlineplus.view.LoginFormViewModel',
        'GOlineplus.view.LoginFormViewController',
        'Ext.Img',
        'Ext.toolbar.Toolbar',
        'Ext.form.Label',
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.button.Button'
    ],

    controller: 'loginform',
    viewModel: {
        type: 'loginform'
    },
    height: '100%',
    scrollable: true,
    layout: 'border',

    items: [
        {
            xtype: 'panel',
            flex: 1,
            region: 'west',
            flex: 1,
            width: 150,
            title: '',
            items: [
                {
                    xtype: 'image',
                    height: '100%',
                    width: '100%',
                    src: 'images/bg_login.png',
                    title: ''
                }
            ]
        },
        {
            xtype: 'panel',
            flex: 1,
            region: 'center',
            layout: {
                type: 'vbox',
                align: 'stretchmax'
            },
            items: [
                {
                    xtype: 'container',
                    flex: 1,
                    layout: {
                        type: 'vbox',
                        align: 'stretchmax'
                    },
                    items: [
                        {
                            xtype: 'toolbar',
                            flex: 1,
                            flex: 2,
                            width: '100%'
                        },
                        {
                            xtype: 'panel',
                            flex: 1,
                            flex: 5,
                            height: '100px',
                            margin: '0 0 0 100',
                            layout: {
                                type: 'vbox',
                                align: 'stretchmax'
                            },
                            dockedItems: [
                                {
                                    xtype: 'toolbar',
                                    dock: 'top',
                                    height: 84,
                                    items: [
                                        {
                                            xtype: 'label',
                                            height: 10,
                                            html: '<font size="10pt"><b>Sign In</b></font>',
                                            margin: '3 0 0 0',
                                            width: 188
                                        }
                                    ]
                                }
                            ],
                            items: [
                                {
                                    xtype: 'form',
                                    border: false,
                                    height: 344,
                                    width: 525,
                                    layout: 'auto',
                                    bodyPadding: 20,
                                    jsonSubmit: false,
                                    dockedItems: [
                                        {
                                            xtype: 'toolbar',
                                            dock: 'top',
                                            width: '100%',
                                            items: [
                                                {
                                                    xtype: 'label',
                                                    html: '<font size="3pt" color="#A2A0A0"><b>Username</b></font>',
                                                    margin: '0 0 0 10'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'toolbar',
                                            dock: 'top',
                                            width: '100%',
                                            items: [
                                                {
                                                    xtype: 'textfield',
                                                    height: 40,
                                                    margin: '0 0 0 10',
                                                    width: 500,
                                                    labelAlign: 'top',
                                                    msgTarget: 'title',
                                                    name: 'username',
                                                    allowBlank: false,
                                                    blankText: 'Enter your Username.',
                                                    regexText: 'Enter your username.'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'toolbar',
                                            dock: 'top',
                                            margin: '20 0 0 0',
                                            width: '100%',
                                            items: [
                                                {
                                                    xtype: 'label',
                                                    html: '<font size="3pt" color="#A2A0A0"><b>Password</b></font>',
                                                    margin: '0 0 0 10'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'toolbar',
                                            dock: 'top',
                                            height: 55,
                                            width: 200,
                                            items: [
                                                {
                                                    xtype: 'textfield',
                                                    height: 40,
                                                    margin: '0 0 0 10',
                                                    width: 500,
                                                    labelAlign: 'top',
                                                    msgTarget: 'title',
                                                    name: 'password',
                                                    inputType: 'password',
                                                    allowBlank: false,
                                                    blankText: 'Enter your password.'
                                                }
                                            ]
                                        }
                                    ],
                                    items: [
                                        {
                                            xtype: 'button',
                                            formBind: true,
                                            width: 160,
                                            scale: 'large',
                                            text: 'Login',
                                            listeners: {
                                                click: 'onLoginButtonClick'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]

});