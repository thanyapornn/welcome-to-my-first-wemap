var wms_layers = [];


        var lyr_Bingmaps_0 = new ol.layer.Tile({
            'title': 'Bing maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://ecn.dynamic.t0.tiles.virtualearth.net/comp/CompositionHandler/{q}?mkt=en-us&it=G,VE,BX,L,LA&shading=hill'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_amphoe_2 = new ol.format.GeoJSON();
var features_amphoe_2 = format_amphoe_2.readFeatures(json_amphoe_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_amphoe_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_amphoe_2.addFeatures(features_amphoe_2);
var lyr_amphoe_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_amphoe_2, 
                style: style_amphoe_2,
                interactive: true,
                title: '<img src="styles/legend/amphoe_2.png" /> amphoe'
            });
var format_water_way_3 = new ol.format.GeoJSON();
var features_water_way_3 = format_water_way_3.readFeatures(json_water_way_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_water_way_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_water_way_3.addFeatures(features_water_way_3);
var lyr_water_way_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_water_way_3, 
                style: style_water_way_3,
                interactive: true,
                title: '<img src="styles/legend/water_way_3.png" /> water_way'
            });
var format_village_4 = new ol.format.GeoJSON();
var features_village_4 = format_village_4.readFeatures(json_village_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_village_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_village_4.addFeatures(features_village_4);
var lyr_village_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_village_4, 
                style: style_village_4,
                interactive: true,
                title: '<img src="styles/legend/village_4.png" /> village'
            });

lyr_Bingmaps_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_amphoe_2.setVisible(true);lyr_water_way_3.setVisible(true);lyr_village_4.setVisible(true);
var layersList = [lyr_Bingmaps_0,lyr_GoogleSatellite_1,lyr_amphoe_2,lyr_water_way_3,lyr_village_4];
lyr_amphoe_2.set('fieldAliases', {'ID': 'ID', 'AMP_CODE': 'AMP_CODE', 'AMP_TH': 'AMP_TH', 'AMP_EN': 'AMP_EN', 'PROV_CODE': 'PROV_CODE', 'PROV_TH': 'PROV_TH', 'PROV_EN': 'PROV_EN', 'REG_NESDB': 'REG_NESDB', 'REG_ROYIN': 'REG_ROYIN', 'AREA': 'AREA', 'ADMIN_TYPE': 'ADMIN_TYPE', });
lyr_water_way_3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'width': 'width', 'name': 'name', });
lyr_village_4.set('fieldAliases', {'NRD_CODE': 'NRD_CODE', 'VILL_CODE': 'VILL_CODE', 'VILL_NAM_T': 'VILL_NAM_T', 'PROV_CODE': 'PROV_CODE', });
lyr_amphoe_2.set('fieldImages', {'ID': 'TextEdit', 'AMP_CODE': 'TextEdit', 'AMP_TH': 'TextEdit', 'AMP_EN': 'TextEdit', 'PROV_CODE': 'TextEdit', 'PROV_TH': 'TextEdit', 'PROV_EN': 'TextEdit', 'REG_NESDB': 'TextEdit', 'REG_ROYIN': 'TextEdit', 'AREA': 'TextEdit', 'ADMIN_TYPE': 'Range', });
lyr_water_way_3.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'width': 'Range', 'name': 'TextEdit', });
lyr_village_4.set('fieldImages', {'NRD_CODE': 'TextEdit', 'VILL_CODE': 'TextEdit', 'VILL_NAM_T': 'TextEdit', 'PROV_CODE': 'TextEdit', });
lyr_amphoe_2.set('fieldLabels', {'ID': 'no label', 'AMP_CODE': 'no label', 'AMP_TH': 'no label', 'AMP_EN': 'no label', 'PROV_CODE': 'no label', 'PROV_TH': 'no label', 'PROV_EN': 'no label', 'REG_NESDB': 'no label', 'REG_ROYIN': 'no label', 'AREA': 'no label', 'ADMIN_TYPE': 'no label', });
lyr_water_way_3.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'width': 'no label', 'name': 'no label', });
lyr_village_4.set('fieldLabels', {'NRD_CODE': 'no label', 'VILL_CODE': 'no label', 'VILL_NAM_T': 'no label', 'PROV_CODE': 'no label', });
lyr_village_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});