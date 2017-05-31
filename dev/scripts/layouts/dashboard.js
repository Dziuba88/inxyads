$(document).ready(function() {
  $(".bar.success").peity("bar", {fill: ['#006064'], width: 64, height: 32,});
  $(".bar.danger").peity("bar", {fill: ['#c62828'], width: 64, height: 32,});
  $(".line").peity("line", {fill: ["#ff9900"], stroke: ["#00ff99"]});
  $('.donut').peity('donut', {fill: ["#ff9900", "#00ff99"]});

			AmCharts.makeChart("chartdiv1",{
					"type": "serial",
					"categoryField": "date",
					"dataDateFormat": "YYYY",
					"marginBottom": 5,
					"marginLeft": 10,
					"marginRight": 10,
					"marginTop": 10,
					"plotAreaBorderColor": "#888888",
					"colors": ["#67b7dc","#006064","#006064","#006064","#006064","#006064","#006064","#006064","#006064","#006064","#006064"],
					"startDuration": 1,
					"borderColor": "#888888",
					"color": "#006064",
					"fontSize": 10,
					"theme": "light",
					"categoryAxis": {
						"minPeriod": "YYYY",
						"parseDates": true
					},
					"chartCursor": {
						"enabled": true,
						"animationDuration": 0,
						"categoryBalloonDateFormat": "YYYY"
					},
					"trendLines": [],
					"graphs": [
						{
							"bullet": "round",
							"fillAlphas": 0.31,
							"id": "AmGraph-1",
							"title": "graph 1",
							"type": "smoothedLine",
							"valueField": "column-1"
						},
						{
							"bullet": "square",
							"fillAlphas": 0.35,
							"fontSize": -2,
							"id": "AmGraph-2",
							"title": "graph 2",
							"type": "smoothedLine",
							"valueField": "column-2"
						}
					],
					"guides": [],
					"valueAxes": [
						{
							"id": "ValueAxis-1",
							"title": ""
						}
					],
					"allLabels": [],
					"balloon": {},
					"titles": [],
					"dataProvider": [
						{
							"date": "2001",
							"column-1": 8,
							"column-2": 5
						},
						{
							"date": "2002",
							"column-1": 6,
							"column-2": 7
						},
						{
							"date": "2003",
							"column-1": 2,
							"column-2": 3
						},
						{
							"date": "2004",
							"column-1": 4,
							"column-2": 3
						},
						{
							"date": "2005",
							"column-1": 2,
							"column-2": 1
						},
						{
							"date": "2006",
							"column-1": 3,
							"column-2": 2
						},
						{
							"date": "2007",
							"column-1": 4,
							"column-2": 8
						}
					]
				}
			);


  AmCharts.makeChart("chartdiv2", {
					"startDuration": 1,
    "type": "serial",
    "theme": "light",
    "dataDateFormat": "YYYY-MM-DD",
    "precision": 2,
    "valueAxes": [{
      "id": "v1",
      "title": "",
      "position": "left",
      "autoGridCount": false,
      "labelFunction": function(value) {
        return "$" + Math.round(value) + "M";
      }
    }, {
      "id": "v2",
      "title": "",
      "gridAlpha": 0,
      "position": "right",
      "autoGridCount": false
    }],
    "graphs": [{
      "id": "g3",
      "valueAxis": "v1",
      "lineColor": "#e1ede9",
      "fillColors": "#e1ede9",
      "fillAlphas": 1,
      "type": "column",
      "title": "Actual Sales",
      "valueField": "sales2",
      "clustered": false,
      "columnWidth": 0.5,
      "legendValueText": "$[[value]]M",
      "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
    }, {
      "id": "g4",
      "valueAxis": "v1",
      "lineColor": "#689f38",
      "fillColors": "#689f38",
      "fillAlphas": 1,
      "type": "column",
      "title": "Target Sales",
      "valueField": "sales1",
      "clustered": false,
      "columnWidth": 0.3,
      "legendValueText": "$[[value]]M",
      "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
    }, {
      "id": "g1",
      "valueAxis": "v2",
      "bullet": "round",
      "bulletBorderAlpha": 1,
      "bulletColor": "#FFFFFF",
      "bulletSize": 5,
      "hideBulletsCount": 50,
      "lineThickness": 2,
      "lineColor": "#20acd4",
      "type": "smoothedLine",
      "title": "Market Days",
      "useLineColorForBulletBorder": true,
      "valueField": "market1",
      "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
    }, {
      "id": "g2",
      "valueAxis": "v2",
      "bullet": "round",
      "bulletBorderAlpha": 1,
      "bulletColor": "#FFFFFF",
      "bulletSize": 5,
      "hideBulletsCount": 50,
      "lineThickness": 2,
      "lineColor": "#e1ede9",
      "type": "smoothedLine",
      "dashLength": 5,
      "title": "Market Days ALL",
      "useLineColorForBulletBorder": true,
      "valueField": "market2",
      "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
    }],
    "categoryField": "date",
    "categoryAxis": {
      "parseDates": true,
      "dashLength": 1,
      "minorGridEnabled": true
    },
    "balloon": {
      "borderThickness": 1,
      "shadowAlpha": 0
    },
    "export": {
    "enabled": true
    },
    "dataProvider": [{
      "date": "2013-01-16",
      "market1": 71,
      "market2": 75,
      "sales1": 5,
      "sales2": 8
    }, {
      "date": "2013-01-17",
      "market1": 74,
      "market2": 78,
      "sales1": 4,
      "sales2": 6
    }, {
      "date": "2013-01-18",
      "market1": 78,
      "market2": 88,
      "sales1": 5,
      "sales2": 2
    }, {
      "date": "2013-01-19",
      "market1": 85,
      "market2": 89,
      "sales1": 8,
      "sales2": 9
    }, {
      "date": "2013-01-20",
      "market1": 82,
      "market2": 89,
      "sales1": 9,
      "sales2": 6
    }, {
      "date": "2013-01-21",
      "market1": 83,
      "market2": 85,
      "sales1": 3,
      "sales2": 5
    }, {
      "date": "2013-01-22",
      "market1": 88,
      "market2": 92,
      "sales1": 5,
      "sales2": 7
    }, {
      "date": "2013-01-23",
      "market1": 85,
      "market2": 90,
      "sales1": 7,
      "sales2": 6
    }, {
      "date": "2013-01-24",
      "market1": 85,
      "market2": 91,
      "sales1": 9,
      "sales2": 5
    }, {
      "date": "2013-01-25",
      "market1": 80,
      "market2": 84,
      "sales1": 5,
      "sales2": 8
    }, {
      "date": "2013-01-26",
      "market1": 87,
      "market2": 92,
      "sales1": 4,
      "sales2": 8
    }, {
      "date": "2013-01-27",
      "market1": 84,
      "market2": 87,
      "sales1": 3,
      "sales2": 4
    }, {
      "date": "2013-01-28",
      "market1": 83,
      "market2": 88,
      "sales1": 5,
      "sales2": 7
    }, {
      "date": "2013-01-29",
      "market1": 84,
      "market2": 87,
      "sales1": 5,
      "sales2": 8
    }, {
      "date": "2013-01-30",
      "market1": 81,
      "market2": 85,
      "sales1": 4,
      "sales2": 7
    }]
  });

  

  $('#daterange').daterangepicker({
      "parentEl" : ".filters-custom",
      "showCustomRangeLabel": false,
      "startDate": "05/23/2017",
      "endDate": "05/29/2017",
      "opens": "right"
  }, function(start, end, label) {
    console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
  });

  // Change STATUS Filter ... 
  if($('.filters-nav')[0]) {
      $('.filters-nav li a').click(function() {
          var $container = $(this).closest('.filters-nav');
          if($(this).closest('li').hasClass('active') == false){
              $container.find('li').removeClass('active');
              $(this).closest('li').addClass('active');
          };
      });
  };







});

