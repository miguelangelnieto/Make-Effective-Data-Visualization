  "use strict";
  var margin = 75,
      width = 1400 - margin,
      height = 600 - margin;

d3.csv("./data/titanic_transformed_data.csv", function (error, data)
    {
          data.forEach(function(d) {
          return d;
          });

    var svg = d3.select("body")
      .append("svg")
        .attr("width", width + margin)
        .attr("height", height + margin)
        .append('g')
        .attr('class','chart');

    var myChart = new dimple.chart(svg, data);
    var y = myChart.addMeasureAxis("y", "Count");
    var x = myChart.addCategoryAxis("x","Age");
    myChart.addSeries("Sex", dimple.plot.bar);
    myChart.assignColor("Female", "#FB8072");
    myChart.assignColor("Male", "rgb(96,125,138)");

    x.addOrderRule("Age", false);
    y.fontSize="20px";
    x.fontSize="20px";
    y.title="";
    x.title="Age Range";

    myChart.draw();

    // Customization using d3
    d3.selectAll(".dimple-legend-key").attr("height","15");
    d3.select("body").select("svg").style("display", "block");
    d3.select("body").select("svg").style("margin", "auto");
    d3.selectAll(".dimple-no-data").attr("opacity", "0.2");
});
