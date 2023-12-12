var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Sectioncommunalesection_1 = new ol.format.GeoJSON();
var features_Sectioncommunalesection_1 = format_Sectioncommunalesection_1.readFeatures(json_Sectioncommunalesection_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sectioncommunalesection_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sectioncommunalesection_1.addFeatures(features_Sectioncommunalesection_1);
var lyr_Sectioncommunalesection_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sectioncommunalesection_1, 
                style: style_Sectioncommunalesection_1,
                interactive: true,
    title: 'Section communale — section<br />\
    <img src="styles/legend/Sectioncommunalesection_1_0.png" /> 1<br />\
    <img src="styles/legend/Sectioncommunalesection_1_1.png" /> 2<br />\
    <img src="styles/legend/Sectioncommunalesection_1_2.png" /> 3<br />\
    <img src="styles/legend/Sectioncommunalesection_1_3.png" /> 4<br />\
    <img src="styles/legend/Sectioncommunalesection_1_4.png" /> 5<br />\
    <img src="styles/legend/Sectioncommunalesection_1_5.png" /> 6<br />'
        });
var format_Batis_points_2 = new ol.format.GeoJSON();
var features_Batis_points_2 = format_Batis_points_2.readFeatures(json_Batis_points_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batis_points_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batis_points_2.addFeatures(features_Batis_points_2);
var lyr_Batis_points_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Batis_points_2, 
                style: style_Batis_points_2,
                interactive: true,
                title: '<img src="styles/legend/Batis_points_2.png" /> Batis_points '
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Sectioncommunalesection_1.setVisible(true);lyr_Batis_points_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Sectioncommunalesection_1,lyr_Batis_points_2];
lyr_Sectioncommunalesection_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID_Com': 'ID_Com', 'NAME_Sec': 'NAME_Sec', 'ID_Dep': 'ID_Dep', 'NAME_Dep': 'NAME_Dep', 'NAME_Com': 'NAME_Com', 'N_Section_': 'N_Section_', 'Section_': 'Section_', 'ID_Sec_COR': 'ID_Sec_COR', 'No_Section': 'No_Section', 'ID_Arr': 'ID_Arr', 'NAME_Arr': 'NAME_Arr', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Batis_points_2.set('fieldAliases', {'fid': 'fid', 'gid,N,10,0': 'gid,N,10,0', 'ID,N,24,15': 'ID,N,24,15', 'FLAG_DUPLI': 'FLAG_DUPLI', 'NGDC_DATE,': 'NGDC_DATE,', 'TEMPORAL_A': 'TEMPORAL_A', 'EQ_YEAR,N,': 'EQ_YEAR,N,', 'EQ_MONTH,N': 'EQ_MONTH,N', 'EQ_DAY,N,1': 'EQ_DAY,N,1', 'HOUR,N,10,': 'HOUR,N,10,', 'MINUTE,N,1': 'MINUTE,N,1', 'LATITUDE,N': 'LATITUDE,N', 'LONGITUDE,': 'LONGITUDE,', 'DEPTH_KM,N': 'DEPTH_KM,N', 'MAGNITUDE_': 'MAGNITUDE_', 'Descriptio': 'Descriptio', 'INTENSITY,': 'INTENSITY,', 'DEATH_DESC': 'DEATH_DESC', 'NUMBER_OF_': 'NUMBER_OF_', 'DAMAGE_DES': 'DAMAGE_DES', 'DAMAGE_MIL': 'DAMAGE_MIL', 'FLAG_TSUNA': 'FLAG_TSUNA', 'LOCATION_D': 'LOCATION_D', 'SLIDES_URL': 'SLIDES_URL', 'MAP_SLIDE_': 'MAP_SLIDE_', 'OBJECTID,N': 'OBJECTID,N', });
lyr_Sectioncommunalesection_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'ID_Com': 'Range', 'NAME_Sec': 'TextEdit', 'ID_Dep': 'Range', 'NAME_Dep': 'TextEdit', 'NAME_Com': 'TextEdit', 'N_Section_': 'Range', 'Section_': 'TextEdit', 'ID_Sec_COR': 'TextEdit', 'No_Section': 'TextEdit', 'ID_Arr': 'Range', 'NAME_Arr': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Batis_points_2.set('fieldImages', {'fid': '', 'gid,N,10,0': '', 'ID,N,24,15': '', 'FLAG_DUPLI': '', 'NGDC_DATE,': '', 'TEMPORAL_A': '', 'EQ_YEAR,N,': '', 'EQ_MONTH,N': '', 'EQ_DAY,N,1': '', 'HOUR,N,10,': '', 'MINUTE,N,1': '', 'LATITUDE,N': '', 'LONGITUDE,': '', 'DEPTH_KM,N': '', 'MAGNITUDE_': '', 'Descriptio': '', 'INTENSITY,': '', 'DEATH_DESC': '', 'NUMBER_OF_': '', 'DAMAGE_DES': '', 'DAMAGE_MIL': '', 'FLAG_TSUNA': '', 'LOCATION_D': '', 'SLIDES_URL': '', 'MAP_SLIDE_': '', 'OBJECTID,N': '', });
lyr_Sectioncommunalesection_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID_Com': 'no label', 'NAME_Sec': 'no label', 'ID_Dep': 'no label', 'NAME_Dep': 'no label', 'NAME_Com': 'no label', 'N_Section_': 'no label', 'Section_': 'no label', 'ID_Sec_COR': 'no label', 'No_Section': 'no label', 'ID_Arr': 'no label', 'NAME_Arr': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_Batis_points_2.set('fieldLabels', {'fid': 'no label', 'gid,N,10,0': 'no label', 'ID,N,24,15': 'no label', 'FLAG_DUPLI': 'no label', 'NGDC_DATE,': 'no label', 'TEMPORAL_A': 'no label', 'EQ_YEAR,N,': 'no label', 'EQ_MONTH,N': 'no label', 'EQ_DAY,N,1': 'no label', 'HOUR,N,10,': 'no label', 'MINUTE,N,1': 'no label', 'LATITUDE,N': 'no label', 'LONGITUDE,': 'no label', 'DEPTH_KM,N': 'no label', 'MAGNITUDE_': 'no label', 'Descriptio': 'no label', 'INTENSITY,': 'no label', 'DEATH_DESC': 'no label', 'NUMBER_OF_': 'no label', 'DAMAGE_DES': 'no label', 'DAMAGE_MIL': 'no label', 'FLAG_TSUNA': 'no label', 'LOCATION_D': 'no label', 'SLIDES_URL': 'no label', 'MAP_SLIDE_': 'no label', 'OBJECTID,N': 'no label', });
lyr_Batis_points_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});