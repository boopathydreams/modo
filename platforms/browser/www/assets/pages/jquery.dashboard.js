
/**
* Theme: Adminto Admin Template
* Author: Coderthemes
* Dashboard
*/

!function($) {
    "use strict";

    var Dashboard1 = function() {
    	this.$realData = []
    };

    //creates Bar chart
    Dashboard1.prototype.createBarChart  = function(element, data, xkey, ykeys, labels, lineColors) {
        Morris.Bar({
            element: element,
            data: data,
            xkey: xkey,
            ykeys: ykeys,
            labels: labels,
            hideHover: 'auto',
            resize: true, //defaulted to true
            gridLineColor: '#eeeeee',
            barSizeRatio: 0.2,
            barColors: lineColors
        });
    },

    //creates line chart
    Dashboard1.prototype.createLineChart = function(element, data, xkey, ykeys, labels, opacity, Pfillcolor, Pstockcolor, lineColors) {
        Morris.Line({
          element: element,
          data: data,
          xkey: xkey,
          ykeys: ykeys,
          labels: labels,
          fillOpacity: opacity,
          pointFillColors: Pfillcolor,
          pointStrokeColors: Pstockcolor,
          behaveLikeLine: true,
          gridLineColor: '#eef0f2',
          hideHover: 'auto',
          resize: true, //defaulted to true
          pointSize: 0,
          lineColors: lineColors
        });
    },

    //creates Donut chart
    Dashboard1.prototype.createDonutChart = function(element, data, colors) {
        Morris.Donut({
            element: element,
            data: data,
            resize: true, //defaulted to true
            colors: colors
        });
    },
    
    
    Dashboard1.prototype.init = function() {

        //creating bar chart
        var $barData  = [
            { y: 'Mar', a: 75 },
            { y: 'Apr', a: 42 },
            { y: 'May', a: 75 },
            { y: 'Jun', a: 38 },
            { y: 'Jul', a: 57 },
            { y: 'Aug', a: 93 }
        ];
        this.createBarChart('morris-bar-example', $barData, 'y', ['a'], ['COP/Ton'], ['#188ae2']);

        //create line chart
        var $data  = [
            { y: '2012', Cash: 35, Credit:65 },
            { y: '2013', Cash: 60, Credit: 30 },
            { y: '2014', Cash: 40, Credit: 50 },
            { y: '2015', Cash: 55, Credit: 35 },
            { y: '2016', Cash: 40, Credit: 70 },
            { y: '2017', Cash: 50, Credit: 80 }
        ];
        this.createLineChart('morris-line-example', $data, 'y', ['Cash','Credit'], ['Cash','Credit'],['0.9'],['#ffffff'],['#999999'], ['#10c469','#188ae2']);
    },
    //init
    $.Dashboard1 = new Dashboard1, $.Dashboard1.Constructor = Dashboard1
}(window.jQuery),

//initializing 
function($) {
    "use strict";
    $.Dashboard1.init();
}(window.jQuery);