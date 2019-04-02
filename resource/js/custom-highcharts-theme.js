/**
 * theme for Highcharts JS
 * @author 
 */

Highcharts.theme = {
   chart: {
      backgroundColor: "#fff",
      borderColor: "#bbb",
      borderRadius: 5,
      borderWidth: 1,
      spacingTop: 15,
      spacingRight: 15,
      spacingBottom: 15,
      spacingLeft: 15,
      style: {
         fontFamily: 'Open Sans',
      }
   },
   title: {
      style: {
         fontSize: '1.25em',
         fontWeight: 'normal'
      }
   },
   legend: {
      itemStyle: {
         fontWeight: 'normal',
         fontSize: '1.0em'
      }
   },
   navigation: {
      buttonOptions: {
         theme: {
            fill: '#fff'
         }
      }
   },

};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);