  "use strict";
  var margin = 75,
      width = 1400 - margin,
      height = 500 - margin;

    d3.csv("./data/titanic_transformed_data.csv", function (error, data)
            {
            data.forEach(function(d) {
              return d;
            }
          );

    var svg = d3.select("body")
      .append("svg")
        .attr("width", width + margin)
        .attr("height", height + margin)
        .append('g')
        .attr('class','chart');

    // Specifying the axis.
    var myChart = new dimple.chart(svg, data);
    var y = myChart.addCategoryAxis("y", "Pclass");
    var x = myChart.addMeasureAxis("x","Count");
    var legend = myChart.addLegend("-23%", 10, 200, 0, null, null);

    // Change style, sizes and order of the axis.
    y.addOrderRule("Pclass", false);
    legend.fontSize="18px";
    y.fontSize="20px";
    x.fontSize="20px";
    y.title="";
    x.title="";
    
    myChart.addSeries("Sex", dimple.plot.bar);
    myChart.assignColor("Female", "#FB8072");
    myChart.assignColor("Male", "rgb(96,125,138)");
    myChart.draw();

    // Customization using d3
    d3.selectAll(".dimple-legend-key").attr("height","15");
    d3.select("body").select("svg").style("display", "block");
    d3.select("body").select("svg").style("margin", "auto");
    });
