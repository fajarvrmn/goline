/*
 * File: app/view/Admission.js
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

Ext.define('GOlineplus.view.Admission', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.admission',

    requires: [
        'GOlineplus.view.AdmissionViewModel',
        'GOlineplus.view.AdmissionViewController',
        'Ext.toolbar.Toolbar',
        'Ext.form.Label',
        'Ext.form.field.Text',
        'Ext.container.ButtonGroup',
        'Ext.button.Button'
    ],

    controller: 'mypanel1',
    viewModel: {
        type: 'mypanel1'
    },
    flex: 5,
    itemId: 'Admission',
    layout: 'card',

    items: [
        {
            xtype: 'panel',
            height: '100%',
            dockedItems: [
                {
                    xtype: 'toolbar',
                    border: '12px',
                    dock: 'top',
                    height: 75,
                    items: [
                        {
                            xtype: 'label',
                            flex: 4,
                            html: '<font size="5pt"><b>Admission</b></font>',
                            margin: 10
                        },
                        {
                            xtype: 'textfield',
                            flex: 1,
                            border: '2px',
                            dock: 'right',
                            height: 35,
                            width: 241,
                            fieldLabel: ''
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'toolbar',
                    border: '1px',
                    items: [
                        {
                            xtype: 'buttongroup',
                            flex: 1,
                            frame: false,
                            margin: '50 0 0 20',
                            columns: 1,
                            items: [
                                {
                                    xtype: 'label',
                                    html: '<font size ="3pt"><b>Pendaftaran</b></font>'
                                },
                                {
                                    xtype: 'button',
                                    text: 'Rawat Jalan',
                                    textAlign: 'left',
                                    listeners: {
                                        click: 'onRawatjalanClick'
                                    }
                                },
                                {
                                    xtype: 'button',
                                    text: 'Instalasi Gawat Darurat',
                                    textAlign: 'left'
                                },
                                {
                                    xtype: 'button',
                                    text: 'Rawat Inap',
                                    textAlign: 'left'
                                },
                                {
                                    xtype: 'button',
                                    text: 'Penunjang Medis',
                                    textAlign: 'left'
                                },
                                {
                                    xtype: 'button',
                                    text: 'Home Care',
                                    textAlign: 'left'
                                },
                                {
                                    xtype: 'button',
                                    text: 'Transaksi Non Pasien',
                                    textAlign: 'left'
                                }
                            ]
                        },
                        {
                            xtype: 'buttongroup',
                            flex: 2,
                            frame: false,
                            height: 202,
                            margin: '0 0 0 20',
                            bodyBorder: false,
                            columns: 1,
                            items: [
                                {
                                    xtype: 'label',
                                    html: '<font size ="3pt"><b>Booking</b></font>'
                                },
                                {
                                    xtype: 'button',
                                    text: 'Pendaftaran Rawat Jalan',
                                    textAlign: 'left'
                                },
                                {
                                    xtype: 'button',
                                    text: 'Kamar',
                                    textAlign: 'left'
                                },
                                {
                                    xtype: 'button',
                                    text: 'Pencatatan Rujukan Pasien',
                                    textAlign: 'left'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'toolbar',
                    border: '1px',
                    margin: '0,5 0 0 0',
                    items: [
                        {
                            xtype: 'buttongroup',
                            flex: 1,
                            frame: false,
                            margin: '50 0 0 20',
                            columns: 1,
                            items: [
                                {
                                    xtype: 'label',
                                    html: '<font size ="3pt"><b>Lainnya</b></font>'
                                },
                                {
                                    xtype: 'button',
                                    text: 'Peminjaman Buku Status',
                                    textAlign: 'left'
                                },
                                {
                                    xtype: 'button',
                                    text: 'Pengembalian Buku Status',
                                    textAlign: 'left'
                                },
                                {
                                    xtype: 'button',
                                    text: 'Tracking Berkas Poliklinik',
                                    textAlign: 'left'
                                },
                                {
                                    xtype: 'button',
                                    text: 'Tracking Berkas Rawat Inap',
                                    textAlign: 'left'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]

});