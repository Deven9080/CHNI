Highcharts.chart('container', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'SMR 2019-2020'
    },
   /* subtitle: {
        text: 'Source: WorldClimate.com'
    },*/
    xAxis: {
        categories: ['Feb 019', 'Mar 019', 'Apr 019', 'May 019', 'Jun 019', 'Jul 019', 'Aug 019', 'Sep 019', 'Oct 019', 'Nov 019', 'Dec 019','Jan 020']
    },
    yAxis: {
        title: {
            text: 'Hours'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
       /* name: 'Tokyo',
        data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }, {*/
        name: 'title',
		color: '#ec2842',
        data: [500, 110, 800, 805, 119, 152, 100, 161, 102, 135, 666, 48]
    }]
}); 

//fuel

Highcharts.chart('fuel', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Fuel 2019-2020'
    },
   /* subtitle: {
        text: 'Source: WorldClimate.com'
    },*/
    xAxis: {
        categories: ['Feb 019', 'Mar 019', 'Apr 019', 'May 019', 'Jun 019', 'Jul 019', 'Aug 019', 'Sep 019', 'Oct 019', 'Nov 019', 'Dec 019','Jan 020']
    },
    yAxis: {
		max:100,
        title: {
            text: 'Fuel level',
			//max
        },
		labels: {
                    format: '{value}%',
                 }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
       /* name: 'Tokyo',
        data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }, {*/
        name: 'Fuel',
		color: '#ec2842',
        data: [10, 20, 30, 35, 50, 69, 70, 90, 100, 75, 20, 30]
    }]
});

//Machine
Highcharts.chart('machine', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Machine On Off Status'
    },
    xAxis: {
		title: {
            text: 'Days'
        },
        categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25','26', '27', '28', '29', '30', '31']
    },
    yAxis: {
        min: 0,
        max: 24,
        title: {
            text: '24 hours'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -20,
        verticalAlign: 'bottom',
        y: 25,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
          /*  dataLabels: {
                enabled: true
            }*/
        }
    },
    series: [{
        name: 'ON',
        color: '#4caf50',
        data: [2, 22, 3, 22, 10, 1, 7, 0, 9, 6, 1, 4, 2, 1, 2, 3, 9, 0, 12, 13, 15, 1, 14, 11, 2, 1, 1, 5, 3, 5, 4]
    }, {
        name: 'OFF',
        color: '#ec2842',
        data: [22, 2, 21, 2, 14, 23, 17, 24, 15, 18, 23, 20, 22, 21, 22, 19, 13, 12, 11, 10, 9, 15, 10, 13, 22, 23, 23, 19, 21, 19, 20 ]
    }]
});

//Temperature

Highcharts.chart('temperature', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Temperature'
    },
  plotOptions: {
        	column: {
            	zones: [{
                	value: 60, // Values up to 10 (not including) ...
                    color: '#4caf50' // ... have the green blue.
                },{
                	color: '#ec2842' // Values from 10 (including) and up have the color red
                }]
            }
        },
    series: [{
		data: [7.0, 6.9, 9.5, 10.0, 18.2, 21.5, 25.2, 26.5, 23.3, 68.3, 13.9, 9.6]
    }]
});



//EngineSpeed

Highcharts.chart('engineSpeed', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'SMR 2019-2020'
    },
   /* subtitle: {
        text: 'Source: WorldClimate.com'
    },*/
    xAxis: {
        categories: ['Feb 019', 'Mar 019', 'Apr 019', 'May 019', 'Jun 019', 'Jul 019', 'Aug 019', 'Sep 019', 'Oct 019', 'Nov 019', 'Dec 019','Jan 020']
    },
    yAxis: {
        title: {
            text: 'Hours'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
       /* name: 'Tokyo',
        data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }, {*/
        name: 'title',
		color: '#ec2842',
        data: [500, 110, 800, 805, 119, 152, 100, 161, 102, 135, 666, 48]
    }]
});

//Service 
Highcharts.chart('service', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Service History'
    },
    /*subtitle: {
        text: 'Irregular time data in Highcharts JS'
    },*/
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: { // don't display the dummy year
            month: '%e. %b',
            year: '%b'
        },
        title: {
            text: 'Date'
        }
    },
    yAxis: {
        title: {
            text: 'Service Number'
        },
        min: 1
    },
    tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x:%e. %b}: {point.y:.2f}'
    },

    plotOptions: {
        series: {
            marker: {
                enabled: true
            }
        }
    },

    colors: ['#6CF', '#39F', '#06C', '#036', '#000'],

    // Define the data points. All series have a dummy year
    // of 1970/71 in order to be compared on the same x axis. Note
    // that in JavaScript, months start at 0 for January, 1 for February etc.
    series: [{
        name: "Service History",
        data: [
            [Date.UTC(2017, 5, 25), 1],
            [Date.UTC(2017, 11,  6), 2],
            [Date.UTC(2018, 5, 20), 3],
            [Date.UTC(2018, 11, 25), 4],
            [Date.UTC(2019, 0,  4), 5],
            [Date.UTC(2020, 0, 2), 6]
        ]
    },],

    responsive: {
        rules: [{
           
            chartOptions: {
                plotOptions: {
                    series: {
                        marker: {
                            radius: 2.5
                        }
                    }
                }
            }
        }]
    }
});

// 