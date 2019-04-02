$(function () {
    $('#highchart-sample-uiKit-1').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Chart Title'
        },
        xAxis: {
            categories: ['1', '2', '3', '4', '5', '6', '7']
        },
        yAxis: {
            title: {
                text: 'yAxis title'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: false
                },
                enableMouseTracking: true
            }
        },
        series: [{
            name: 'total',
            data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9]
        }, {
            name: 'mgoon',
            data: [2.9, 3.2, 4.7, 7.5, 10.9, 14.2, 16.0, 15.6, 13.2, 9.3, 7.6]
        }, {
            name: 'youtube',
            data: [5.9, 6.2, 8.7, 9.5, 13.9, 16.2, 19.0, 19.6, 17.2, 13.3, 9.6]
        }]
    });
});	