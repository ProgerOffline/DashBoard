function reDraw() {
  setTimeout(function() {
    $.each(charts, function(i, chart) {
      chart.update();  
    });
  }, 200);
}

$('.stage').on('click', function() {
  var $this = $(this);
  
  $this.addClass('active');
  $this.siblings().each(function(){
    $(this).removeClass('active') ;
  });

  reDraw();
});

$('.button.graph').on('click', function() {
  $('.stage').removeClass('active');
  $('.row .stage:first-of-type').addClass('active');
  reDraw();
});

$('.button.desktop').on('click', function() {
  $('.stage').removeClass('active');
  $('.row .stage:last-of-type').addClass('active');
  reDraw();
});

var weekNo = $('span.week');
weekNo.text($('input[type=range]').val());

$('input[type=range]').on('change', function() {
  var $this = $(this);
  weekNo.text($this.val());
});

var barData = {
      labels: ['January',	'February',	'March',	'April',	'May',	'June',	'July',	'August',	'September',	'October',	'November',	'December'],
      series: [
        { 'name': 'returned', 'data': [1000,	1500,	2000	,2500,	500,	1100,	1200,	1300,	1400]},
        { 'name': 'incomplete', 'data': [500,	600,700	,800,	900,1000,	1100,	1000,	1200,	1100,	1300,	1400]},
        { 'name': 'appointed', 'data': [600,	200,	300	,400,	500,600,	700,800,	900,	1000,	1500,1200]},
        { 'name': 'sent', 'data': [100,	200,	300	,400,	500, 2000,	700,	800,	900,	1000,	1100,	1200] },
        { 'name': 'mailed', 'data': [1000,	1500,	2000	, 1500, 2500,	1100,	1200,	1300,	1400]},
        { 'name': 'suspended', 'data': [500,	600,700	,800,	900, 1000,	1100,	1000,	1200,	1100,	1300,	1400]},
        { 'name': 'terminated', 'data': [600,	200,	300	,400,	500, 600,	2500, 2000,	900,	1000,	1500, 1200]},
        { 'name': 'lost', 'data': [100,	200,	300	,400,	500,	600,	700,	800, 2000,	1000,	1100,	2200]} 
      ]
    },
    lineData = {
      labels: ['January',	'February',	'March',	'April',	'May',	'June',	'July',	'August',	'September',	'October',	'November',	'December'],
      series: [
        { 'name': 'incomplete', 'data': [500,	600,700	,800,	900,1000,	1100,	1000,	1200,	1100,	1300,	1400]},
        { 'name': 'appointed', 'data': [600,	200,	300	,400,	500,600,	700,800,	900,	1000,	1500,1200]},
        { 'name': 'terminated', 'data': [600,	200,	300	,400,	500, 600,	2500, 2000,	900,	1000,	1500, 1200]},
        { 'name': 'lost', 'data': [100,	200,	300	,400,	500,	600,	700,	800, 2000,	1000,	1100,	2200]} 
      ]
    },
    barOptions = {
      width: '100%',
      height: '200px',
      fullWidth: true,
      chartPadding: {
        bottom: 20,
        left: 20,
        right: 20,
        top: 20
      },
      seriesBarDistance: 10,
      reverseData: false,
      horizontalBars: false,
      axisY: {
        offset: 40
      },
      plugins: [
        Chartist.plugins.legend()
      ]
    },
    lineOptions = {
      low: 0,
      showArea: true,
      width: '100%',
      height: '200px',
      fullWidth: true,
      chartPadding: {
        bottom: 20,
        right: 20,
        top: 20        
      },
      axisY: {
        offset: 40
      },
      plugins: [
        Chartist.plugins.legend()
      ]
    };  

var ct = [], 
    app = [], 
    charts = [
  ct = new Chartist.Bar('.ct.chart', barData, barOptions),
  app = new Chartist.Line('.app.chart', lineData, lineOptions)
];
