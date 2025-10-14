var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_EDALMADAPAVTRREO_1 = new ol.format.GeoJSON();
var features_EDALMADAPAVTRREO_1 = format_EDALMADAPAVTRREO_1.readFeatures(json_EDALMADAPAVTRREO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EDALMADAPAVTRREO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EDALMADAPAVTRREO_1.addFeatures(features_EDALMADAPAVTRREO_1);
var lyr_EDALMADAPAVTRREO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EDALMADAPAVTRREO_1, 
                style: style_EDALMADAPAVTRREO_1,
                popuplayertitle: 'ED. ALMADA - PAV TÉRREO',
                interactive: true,
    title: 'ED. ALMADA - PAV TÉRREO<br />\
    <img src="styles/legend/EDALMADAPAVTRREO_1_0.png" /> AUDIN<br />\
    <img src="styles/legend/EDALMADAPAVTRREO_1_1.png" /> BIUNILA<br />\
    <img src="styles/legend/EDALMADAPAVTRREO_1_2.png" /> COMPARTILHADO<br />\
    <img src="styles/legend/EDALMADAPAVTRREO_1_3.png" /> CORREGEDORIA<br />\
    <img src="styles/legend/EDALMADAPAVTRREO_1_4.png" /> EaD<br />\
    <img src="styles/legend/EDALMADAPAVTRREO_1_5.png" /> EdUNILA<br />\
    <img src="styles/legend/EDALMADAPAVTRREO_1_6.png" /> ILAACH<br />\
    <img src="styles/legend/EDALMADAPAVTRREO_1_7.png" /> ILACVN<br />\
    <img src="styles/legend/EDALMADAPAVTRREO_1_8.png" /> ILACVN/ILATIT<br />\
    <img src="styles/legend/EDALMADAPAVTRREO_1_9.png" /> ILAESP<br />\
    <img src="styles/legend/EDALMADAPAVTRREO_1_10.png" /> ILATIT<br />\
    <img src="styles/legend/EDALMADAPAVTRREO_1_11.png" /> IMEA<br />\
    <img src="styles/legend/EDALMADAPAVTRREO_1_12.png" /> OUVIDORIA<br />\
    <img src="styles/legend/EDALMADAPAVTRREO_1_13.png" /> PPGIES<br />\
    <img src="styles/legend/EDALMADAPAVTRREO_1_14.png" /> PRAE<br />\
    <img src="styles/legend/EDALMADAPAVTRREO_1_15.png" /> PROAGI<br />\
    <img src="styles/legend/EDALMADAPAVTRREO_1_16.png" /> PROCURADORIA<br />\
    <img src="styles/legend/EDALMADAPAVTRREO_1_17.png" /> PROEX<br />\
    <img src="styles/legend/EDALMADAPAVTRREO_1_18.png" /> PROGEPE<br />\
    <img src="styles/legend/EDALMADAPAVTRREO_1_19.png" /> PROGRAD<br />\
    <img src="styles/legend/EDALMADAPAVTRREO_1_20.png" /> PROINT<br />\
    <img src="styles/legend/EDALMADAPAVTRREO_1_21.png" /> PROPLAN<br />\
    <img src="styles/legend/EDALMADAPAVTRREO_1_22.png" /> PRPPG<br />\
    <img src="styles/legend/EDALMADAPAVTRREO_1_23.png" /> PRU<br />\
    <img src="styles/legend/EDALMADAPAVTRREO_1_24.png" /> REITORIA<br />\
    <img src="styles/legend/EDALMADAPAVTRREO_1_25.png" /> SACT<br />\
    <img src="styles/legend/EDALMADAPAVTRREO_1_26.png" /> SECAFE<br />\
    <img src="styles/legend/EDALMADAPAVTRREO_1_27.png" /> SECOM<br />\
    <img src="styles/legend/EDALMADAPAVTRREO_1_28.png" /> Uso comum<br />\
    <img src="styles/legend/EDALMADAPAVTRREO_1_29.png" /> <br />' });
var format_limitesterreo_2 = new ol.format.GeoJSON();
var features_limitesterreo_2 = format_limitesterreo_2.readFeatures(json_limitesterreo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_limitesterreo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limitesterreo_2.addFeatures(features_limitesterreo_2);
var lyr_limitesterreo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_limitesterreo_2, 
                style: style_limitesterreo_2,
                popuplayertitle: 'limitesterreo',
                interactive: false,
                title: '<img src="styles/legend/limitesterreo_2.png" /> limitesterreo'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_EDALMADAPAVTRREO_1.setVisible(true);lyr_limitesterreo_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_EDALMADAPAVTRREO_1,lyr_limitesterreo_2];
lyr_EDALMADAPAVTRREO_1.set('fieldAliases', {'FID': 'FID', 'ID': 'ID', 'almada-terreo_SALA': 'SALA', 'almada-terreo_DESCRICAO': 'DESCRICAO', 'almada-terreo_AREA': 'AREA', 'almada-terreo_CAPACIDADE': 'CAPACIDADE', 'almada-terreo_USO': 'USO', 'almada-terreo_SETOR': 'SETOR', 'almada-terreo_RESPONSAVEL': 'RESPONSAVEL', });
lyr_limitesterreo_2.set('fieldAliases', {'ID': 'ID', });
lyr_EDALMADAPAVTRREO_1.set('fieldImages', {'FID': 'TextEdit', 'ID': 'TextEdit', 'almada-terreo_SALA': 'TextEdit', 'almada-terreo_DESCRICAO': 'TextEdit', 'almada-terreo_AREA': 'TextEdit', 'almada-terreo_CAPACIDADE': 'TextEdit', 'almada-terreo_USO': 'TextEdit', 'almada-terreo_SETOR': 'TextEdit', 'almada-terreo_RESPONSAVEL': 'TextEdit', });
lyr_limitesterreo_2.set('fieldImages', {'ID': '', });
lyr_EDALMADAPAVTRREO_1.set('fieldLabels', {'FID': 'hidden field', 'ID': 'inline label - visible with data', 'almada-terreo_SALA': 'inline label - visible with data', 'almada-terreo_DESCRICAO': 'inline label - visible with data', 'almada-terreo_AREA': 'inline label - visible with data', 'almada-terreo_CAPACIDADE': 'inline label - visible with data', 'almada-terreo_USO': 'inline label - visible with data', 'almada-terreo_SETOR': 'inline label - visible with data', 'almada-terreo_RESPONSAVEL': 'inline label - visible with data', });
lyr_limitesterreo_2.set('fieldLabels', {'ID': 'inline label - visible with data', });
lyr_limitesterreo_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});