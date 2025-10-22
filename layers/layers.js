var wms_layers = [];


        var lyr_MapaSatlite_0 = new ol.layer.Tile({
            'title': 'Mapa Satélite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PavimentoTrreo_1 = new ol.format.GeoJSON();
var features_PavimentoTrreo_1 = format_PavimentoTrreo_1.readFeatures(json_PavimentoTrreo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PavimentoTrreo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PavimentoTrreo_1.addFeatures(features_PavimentoTrreo_1);
var lyr_PavimentoTrreo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PavimentoTrreo_1, 
                style: style_PavimentoTrreo_1,
                popuplayertitle: 'Pavimento Térreo',
                interactive: true,
    title: 'Pavimento Térreo<br />\
    <img src="styles/legend/PavimentoTrreo_1_0.png" /> Acadêmico<br />\
    <img src="styles/legend/PavimentoTrreo_1_1.png" /> Administrativo<br />\
    <img src="styles/legend/PavimentoTrreo_1_2.png" /> Atend. Individualizado<br />\
    <img src="styles/legend/PavimentoTrreo_1_3.png" /> Auditório<br />\
    <img src="styles/legend/PavimentoTrreo_1_4.png" /> Biblioteca<br />\
    <img src="styles/legend/PavimentoTrreo_1_5.png" /> Circulação<br />\
    <img src="styles/legend/PavimentoTrreo_1_6.png" /> Convivência<br />\
    <img src="styles/legend/PavimentoTrreo_1_7.png" /> Copa – Cozinha – Cantina<br />\
    <img src="styles/legend/PavimentoTrreo_1_8.png" /> Depósito<br />\
    <img src="styles/legend/PavimentoTrreo_1_9.png" /> Dormitório<br />\
    <img src="styles/legend/PavimentoTrreo_1_10.png" /> Esporte<br />\
    <img src="styles/legend/PavimentoTrreo_1_11.png" /> Extensão<br />\
    <img src="styles/legend/PavimentoTrreo_1_12.png" /> Lab. de Informática<br />\
    <img src="styles/legend/PavimentoTrreo_1_13.png" /> Laboratório – Ensino<br />\
    <img src="styles/legend/PavimentoTrreo_1_14.png" /> Laboratório – Pesquisa<br />\
    <img src="styles/legend/PavimentoTrreo_1_15.png" /> Laboratório – Prática<br />\
    <img src="styles/legend/PavimentoTrreo_1_16.png" /> Monitoria<br />\
    <img src="styles/legend/PavimentoTrreo_1_17.png" /> Restaurante<br />\
    <img src="styles/legend/PavimentoTrreo_1_18.png" /> Reunião<br />\
    <img src="styles/legend/PavimentoTrreo_1_19.png" /> Sala de aula<br />\
    <img src="styles/legend/PavimentoTrreo_1_20.png" /> Sala de aula (Pós)<br />\
    <img src="styles/legend/PavimentoTrreo_1_21.png" /> Sala de estudo<br />\
    <img src="styles/legend/PavimentoTrreo_1_22.png" /> Sala de Professores<br />\
    <img src="styles/legend/PavimentoTrreo_1_23.png" /> Sala Técnica<br />\
    <img src="styles/legend/PavimentoTrreo_1_24.png" /> Sanitários<br />\
    <img src="styles/legend/PavimentoTrreo_1_25.png" /> Saúde<br />\
    <img src="styles/legend/PavimentoTrreo_1_26.png" /> <br />' });
var format_Prdios_2 = new ol.format.GeoJSON();
var features_Prdios_2 = format_Prdios_2.readFeatures(json_Prdios_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prdios_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prdios_2.addFeatures(features_Prdios_2);
var lyr_Prdios_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prdios_2, 
                style: style_Prdios_2,
                popuplayertitle: 'Prédios',
                interactive: true,
                title: '<img src="styles/legend/Prdios_2.png" /> Prédios'
            });
var format_terreno_3 = new ol.format.GeoJSON();
var features_terreno_3 = format_terreno_3.readFeatures(json_terreno_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_terreno_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_terreno_3.addFeatures(features_terreno_3);
var lyr_terreno_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_terreno_3, 
                style: style_terreno_3,
                popuplayertitle: 'terreno',
                interactive: true,
                title: '<img src="styles/legend/terreno_3.png" /> terreno'
            });

lyr_MapaSatlite_0.setVisible(true);lyr_PavimentoTrreo_1.setVisible(true);lyr_Prdios_2.setVisible(true);lyr_terreno_3.setVisible(true);
var layersList = [lyr_MapaSatlite_0,lyr_PavimentoTrreo_1,lyr_Prdios_2,lyr_terreno_3];
lyr_PavimentoTrreo_1.set('fieldAliases', {'FID': 'FID', 'ID': 'ID', 'almada-terreo_SALA': 'SALA', 'almada-terreo_DESCRICAO': 'DESCRICAO', 'almada-terreo_AREA': 'AREA', 'almada-terreo_CAPACIDADE': 'CAPACIDADE', 'almada-terreo_USO': 'USO', 'almada-terreo_SETOR': 'SETOR', 'almada-terreo_RESPONSAVEL': 'RESPONSAVEL', });
lyr_Prdios_2.set('fieldAliases', {'ID': 'ID', 'nome': 'Prédio', 'url': 'Mais info', });
lyr_terreno_3.set('fieldAliases', {'ID': 'ID', 'Nome': 'Nome', 'Area': 'Area', 'Perimetro': 'Perimetro', });
lyr_PavimentoTrreo_1.set('fieldImages', {'FID': 'TextEdit', 'ID': 'TextEdit', 'almada-terreo_SALA': 'TextEdit', 'almada-terreo_DESCRICAO': 'TextEdit', 'almada-terreo_AREA': 'TextEdit', 'almada-terreo_CAPACIDADE': 'TextEdit', 'almada-terreo_USO': 'TextEdit', 'almada-terreo_SETOR': 'TextEdit', 'almada-terreo_RESPONSAVEL': 'TextEdit', });
lyr_Prdios_2.set('fieldImages', {'ID': 'TextEdit', 'nome': 'TextEdit', 'url': 'TextEdit', });
lyr_terreno_3.set('fieldImages', {'ID': 'TextEdit', 'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perimetro': 'TextEdit', });
lyr_PavimentoTrreo_1.set('fieldLabels', {'FID': 'hidden field', 'ID': 'inline label - visible with data', 'almada-terreo_SALA': 'inline label - visible with data', 'almada-terreo_DESCRICAO': 'inline label - visible with data', 'almada-terreo_AREA': 'inline label - visible with data', 'almada-terreo_CAPACIDADE': 'inline label - visible with data', 'almada-terreo_USO': 'inline label - visible with data', 'almada-terreo_SETOR': 'inline label - visible with data', 'almada-terreo_RESPONSAVEL': 'inline label - visible with data', });
lyr_Prdios_2.set('fieldLabels', {'ID': 'hidden field', 'nome': 'inline label - visible with data', 'url': 'inline label - visible with data', });
lyr_terreno_3.set('fieldLabels', {'ID': 'hidden field', 'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perimetro': 'inline label - visible with data', });
lyr_terreno_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});