var olympi;
var table = [['City','Teams','Athletes'],["Athens",14,241]];
var citiesNum = 1;
var addButton;
var prevButton;
var chart;
var summer;

function preload(){
  olympi = loadJSON("https://raw.githubusercontent.com/Book81able/corpora/master/data/sports/olympics.json");
}

google.charts.load('current', {
    'packages': ['geochart'],
    'mapsApiKey': 'AIzaSyBdPJqw_Exi0ILRRwsibtPaG3glvH4Kb24'
  });

function setup(){
  addButton = document.getElementById('add');
  prevButton = document.getElementById('prev');
  google.charts.setOnLoadCallback(drawMap);
  summer = olympi.olympics.summer
  addButton.onclick = function(){
      addCity();
  }
  prevButton.onclick = function(){
      takeCity();
  }
}

function drawMap(){
  addButton.disabled = true;
  prevButton.disabled = true;
  var reg = mapRegion();
  var options = {
    displayMode: 'markers',
    region: reg,
    colorAxis: {colors: ['yellow','red']}
  };
  chart = new google.visualization.GeoChart(document.getElementById('chart_div'));
  google.visualization.events.addListener(chart, 'ready',
          function() {
            addButton.disabled = citiesNum>=olympi.olympics.summer.length;
            prevButton.disabled = citiesNum<2
          });
  var data = google.visualization.arrayToDataTable(table);

  chart.draw(data, options);
}

function addCity(){
  var city = [summer[citiesNum].city,
              summer[citiesNum].countries,
              summer[citiesNum].athletes];
  document.getElementById('yearlabel').innerHTML = summer[citiesNum].city + " " + summer[citiesNum].year;
  document.getElementById('label-oly').innerHTML = summer[citiesNum].olympiad + ":";
  document.getElementById('date-label').innerHTML = summer[citiesNum].opening + " - " + summer[citiesNum].closing;
  table.push(city);
  citiesNum++;
  drawMap();
}

function takeCity(){
  table.pop();
  citiesNum--;
  document.getElementById('yearlabel').innerHTML = summer[citiesNum-1].city + " " + summer[citiesNum-1].year;
  document.getElementById('label-oly').innerHTML = summer[citiesNum-1].olympiad + ":";
  document.getElementById('date-label').innerHTML = summer[citiesNum-1].opening + " - " + summer[citiesNum-1].closing;
  drawMap();
}

function mapRegion(){
  var reg;
  if(citiesNum == 1){
    reg = "GR";
  }else if (citiesNum == 2){
    reg = "150"
  }else if(citiesNum == 3){
    reg = "021"
  }else if(citiesNum >= 4 && citiesNum<=8){
    reg = "150"
  }else if(citiesNum == 9){
    reg = "021"
  }else if(citiesNum>=10 && citiesNum <= 12){
    reg = "150"
  }else if(citiesNum == 13){
    reg = "053"
  }else if(citiesNum == 14){
    reg = "150"
  }else if(citiesNum == 15){
    reg = "030"
  }else if(citiesNum == 16){
    reg = "013"
  }else if(citiesNum == 17){
    reg = "150"
  }else if(citiesNum == 21){
    reg = "030"
  }
  return(reg);
}
