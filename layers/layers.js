var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_TerritoireTshopoWM_1 = new ol.format.GeoJSON();
var features_TerritoireTshopoWM_1 = format_TerritoireTshopoWM_1.readFeatures(json_TerritoireTshopoWM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TerritoireTshopoWM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerritoireTshopoWM_1.addFeatures(features_TerritoireTshopoWM_1);
var lyr_TerritoireTshopoWM_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerritoireTshopoWM_1, 
                style: style_TerritoireTshopoWM_1,
                popuplayertitle: 'Territoire Tshopo WM',
                interactive: true,
    title: 'Territoire Tshopo WM<br />\
    <img src="styles/legend/TerritoireTshopoWM_1_0.png" /> Bafwasende<br />\
    <img src="styles/legend/TerritoireTshopoWM_1_1.png" /> Banalia<br />\
    <img src="styles/legend/TerritoireTshopoWM_1_2.png" /> Basoko<br />\
    <img src="styles/legend/TerritoireTshopoWM_1_3.png" /> Isangi<br />\
    <img src="styles/legend/TerritoireTshopoWM_1_4.png" /> Kisangani<br />\
    <img src="styles/legend/TerritoireTshopoWM_1_5.png" /> Opala<br />\
    <img src="styles/legend/TerritoireTshopoWM_1_6.png" /> Ubundu<br />\
    <img src="styles/legend/TerritoireTshopoWM_1_7.png" /> Yahuma<br />' });
var format_Secteur_2 = new ol.format.GeoJSON();
var features_Secteur_2 = format_Secteur_2.readFeatures(json_Secteur_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteur_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteur_2.addFeatures(features_Secteur_2);
var lyr_Secteur_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteur_2, 
                style: style_Secteur_2,
                popuplayertitle: 'Secteur',
                interactive: true,
    title: 'Secteur<br />\
    <img src="styles/legend/Secteur_2_0.png" /> Agricole<br />\
    <img src="styles/legend/Secteur_2_1.png" /> Bois<br />\
    <img src="styles/legend/Secteur_2_2.png" /> Commerce<br />\
    <img src="styles/legend/Secteur_2_3.png" /> (Minier)<br />' });

lyr_GoogleMaps_0.setVisible(true);lyr_TerritoireTshopoWM_1.setVisible(true);lyr_Secteur_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_TerritoireTshopoWM_1,lyr_Secteur_2];
lyr_TerritoireTshopoWM_1.set('fieldAliases', {'NOM': 'NOM', 'TYPE': 'TYPE', 'CODE_INS': 'CODE_INS', 'SCE_SEM': 'SCE_SEM', 'SCE_GEO': 'SCE_GEO', 'MODIF': 'MODIF', 'SURFACE': 'SURFACE', 'ORIGINE': 'ORIGINE', });
lyr_Secteur_2.set('fieldAliases', {'NOM': 'NOM', 'SURFACE': 'SURFACE', 'Secteur': 'Secteur d\'activités', });
lyr_TerritoireTshopoWM_1.set('fieldImages', {'NOM': 'TextEdit', 'TYPE': 'TextEdit', 'CODE_INS': 'Range', 'SCE_SEM': 'TextEdit', 'SCE_GEO': 'TextEdit', 'MODIF': 'DateTime', 'SURFACE': 'TextEdit', 'ORIGINE': 'TextEdit', });
lyr_Secteur_2.set('fieldImages', {'NOM': 'TextEdit', 'SURFACE': 'TextEdit', 'Secteur': 'ValueMap', });
lyr_TerritoireTshopoWM_1.set('fieldLabels', {'NOM': 'inline label - always visible', 'TYPE': 'inline label - always visible', 'CODE_INS': 'hidden field', 'SCE_SEM': 'hidden field', 'SCE_GEO': 'hidden field', 'MODIF': 'hidden field', 'SURFACE': 'inline label - always visible', 'ORIGINE': 'hidden field', });
lyr_Secteur_2.set('fieldLabels', {'NOM': 'inline label - always visible', 'SURFACE': 'inline label - always visible', 'Secteur': 'inline label - always visible', });
lyr_Secteur_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});