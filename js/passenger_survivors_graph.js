  "use strict";
  var margin = 75,
      width = 1400 - margin,
      height = 600 - margin;

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

    // Remove people without Age. We will lose some data, but still
    // we will have more data points than with the original dataset
    // and graph will be easier to understand.
    for(var i in data){
    if(data[i]["Age"]=='No data'){
        delete data[i];;
        }
    }
    // Specifying the axis.
    var myChart = new dimple.chart(svg, data);
    var y = myChart.addMeasureAxis("y", "Survived");
    var x = myChart.addCategoryAxis("x","Age");
    var z = myChart.addPctAxis("z", "Survived");

    var bar = myChart.addSeries(null, dimple.plot.bar);
    var bubble = myChart.addSeries("Sex", dimple.plot.line);

    // Change style, sizes and order of the axis.
    y.overrideMax = 1;
    y.tickFormat = "%";
    x.addOrderRule("Age", false);
    y.fontSize="20px";
    x.fontSize="20px";
    y.title="";
    x.title="";

    bar.aggregate = dimple.aggregateMethod.avg;
    bubble.aggregate = dimple.aggregateMethod.avg;


    // Following Andrew Moore's tip, I make the bar's tooltip useful.
    bar.getTooltipText = function (e) {
          var tooltip = e;
          return [
            "Survived: " + String(e.yCount)
          ];
      };

    // Storyboard from dimple.js so the user can choose between three classes
    // by cliking on the buttons.
    var story = myChart.setStoryboard("Pclass");
    story.fontSize = "20px";
    story.autoplay = false;
    myChart.assignColor("Female", "#FB8072");
    myChart.assignColor("Male", "rgb(96,125,138)");

    var categories = [ "First-class", "Second-class", "Third-class"];
		var cat_buttons = d3.select(".buttons")
				.selectAll("input")
				.data(categories)
				.enter()
				.append("input")
				.attr("type", "button")
				.attr("class", "button")
				.attr("value", function(d) {
					return d;
				}).attr("id", function(d) {
					return d;
				});
    d3.select("#First-class").on("click", function() {
        story.goToFrame("1st Class");
        story.storyLabel.attr("x", 0);
      });
    d3.select("#Second-class").on("click", function() {
        story.goToFrame("2nd Class");
      });
    d3.select("#Third-class").on("click", function() {
        story.goToFrame("3rd Class");
      });

    myChart.draw();

    // Removing the stacked bar with the count of non-survivors.
    d3.selectAll(".dimple-0").remove();

    // Some customizations using d3.
    d3.select("body").select("svg").style("display", "block");
    d3.select("body").select("svg").style("margin", "auto");
    d3.selectAll(".dimple-bar").attr("opacity", "0.5");
    d3.selectAll(".button").style("background-color", "white");
    d3.selectAll(".button").style("color", "black");
    d3.selectAll(".button").style("border", "2px solid #555555");
    d3.selectAll(".button").style("border-radius", "8px");
    });
