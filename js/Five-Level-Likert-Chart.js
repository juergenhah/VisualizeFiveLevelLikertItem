// pre defined position for rectangles for all options, max 10 per option
var stronglyAgree = [{
             x1: 10,
             x2: 20,
             y1: 10,
             y2: 20
         }, {
             x1: 10,
             x2: 20,
             y1: 21,
             y2: 31
         }, {
             x1: 10,
             x2: 20,
             y1: 32,
             y2: 42
         }, {
             x1: 10,
             x2: 20,
             y1: 43,
             y2: 53
         }, {
             x1: 10,
             x2: 20,
             y1: 54,
             y2: 64
         }, {
             x1: 10,
             x2: 20,
             y1: 65,
             y2: 75
         }, {
             x1: 10,
             x2: 20,
             y1: 76,
             y2: 86
         }, {
             x1: 10,
             x2: 20,
             y1: 87,
             y2: 97
         }, {
             x1: 10,
             x2: 20,
             y1: 98,
             y2: 108
         }, {
             x1: 10,
             x2: 20,
             y1: 109,
             y2: 119
         }];

         var agree = [{
             x1: 21,
             x2: 31,
             y1: 10,
             y2: 20
         }, {
             x1: 21,
             x2: 31,
             y1: 21,
             y2: 31
         }, {
             x1: 21,
             x2: 31,
             y1: 32,
             y2: 42
         }, {
             x1: 21,
             x2: 31,
             y1: 43,
             y2: 53
         }, {
             x1: 21,
             x2: 31,
             y1: 54,
             y2: 64
         }, {
             x1: 21,
             x2: 31,
             y1: 65,
             y2: 75
         }, {
             x1: 21,
             x2: 31,
             y1: 76,
             y2: 86
         }, {
             x1: 21,
             x2: 31,
             y1: 87,
             y2: 97
         }, {
             x1: 21,
             x2: 31,
             y1: 98,
             y2: 108
         }, {
             x1: 21,
             x2: 31,
             y1: 109,
             y2: 119
         }];



         var neitherAgreeNorDisagree = [{
             x1: 32,
             x2: 42,
             y1: 10,
             y2: 20
         }, {
             x1: 32,
             x2: 42,
             y1: 21,
             y2: 31
         }, {
             x1: 32,
             x2: 42,
             y1: 32,
             y2: 42
         }, {
             x1: 32,
             x2: 42,
             y1: 43,
             y2: 53
         }, {
             x1: 32,
             x2: 42,
             y1: 54,
             y2: 64
         }, {
             x1: 32,
             x2: 42,
             y1: 65,
             y2: 75
         }, {
             x1: 32,
             x2: 42,
             y1: 76,
             y2: 86
         }, {
             x1: 32,
             x2: 42,
             y1: 87,
             y2: 97
         }, {
             x1: 32,
             x2: 42,
             y1: 98,
             y2: 108
         }, {
             x1: 32,
             x2: 42,
             y1: 109,
             y2: 119
         }];


         var disagree = [{
             x1: 43,
             x2: 53,
             y1: 10,
             y2: 20
         }, {
             x1: 43,
             x2: 53,
             y1: 21,
             y2: 31
         }, {
             x1: 43,
             x2: 53,
             y1: 32,
             y2: 42
         }, {
             x1: 43,
             x2: 53,
             y1: 43,
             y2: 53
         }, {
             x1: 43,
             x2: 53,
             y1: 54,
             y2: 64
         }, {
             x1: 43,
             x2: 53,
             y1: 65,
             y2: 75
         }, {
             x1: 43,
             x2: 53,
             y1: 76,
             y2: 86
         }, {
             x1: 43,
             x2: 53,
             y1: 87,
             y2: 97
         }, {
             x1: 43,
             x2: 53,
             y1: 98,
             y2: 108
         }, {
             x1: 43,
             x2: 53,
             y1: 109,
             y2: 119
         }];



         var stronglyDisagree = [{
             x1: 54,
             x2: 64,
             y1: 10,
             y2: 20
         }, {
             x1: 54,
             x2: 64,
             y1: 21,
             y2: 31
         }, {
             x1: 54,
             x2: 64,
             y1: 32,
             y2: 42
         }, {
             x1: 54,
             x2: 64,
             y1: 43,
             y2: 53
         }, {
             x1: 54,
             x2: 64,
             y1: 54,
             y2: 64
         }, {
             x1: 54,
             x2: 64,
             y1: 65,
             y2: 75
         }, {
             x1: 54,
             x2: 64,
             y1: 76,
             y2: 86
         }, {
             x1: 54,
             x2: 64,
             y1: 87,
             y2: 97
         }, {
             x1: 54,
             x2: 64,
             y1: 98,
             y2: 108
         }, {
             x1: 54,
             x2: 64,
             y1: 109,
             y2: 119
         }];

//** svg represents the DOM element where the chart is appended  **/
function visualizeAnswers(svg, answersForQuestion, rectangleColorMaxAnswers, rectangleColorOtherAnswers){
//    console.log( answersForQuestion, rectangleColorMaxAnswers, rectangleColorOtherAnswers);

    var maxAnswers = Math.max.apply(null, answersForQuestion);
    for (var i = 0; i < answersForQuestion.length; i++) {
        var amountOfAnswers = answersForQuestion[i];
        console.log(amountOfAnswers + "   " + i);

        if (i == 0) { // strongly agree option

            if (amountOfAnswers == 0) { // no answers given for this option
                svg.append("line")
                    .attr("x1", "10")
                    .attr("y1", "119")
                    .attr("x2", "20")
                    .attr("y2", "119")
                    .attr("stroke-width", "2px")
                    .attr("stroke", "black");
            } else {
                var stronglyAgreerects = svg.selectAll("foo")
                    .data(stronglyAgree.slice(10 - amountOfAnswers, 10)) // select the amount of rectangles to draw
                    .enter()
                    .append("rect")
                    .attr("x", d => d.x1)
                    .attr("y", d => d.y1)
                    .attr("width", d => d.x2 - d.x1)
                    .attr("height", d => d.y2 - d.y1)
                    .attr("fill", amountOfAnswers == maxAnswers ? rectangleColorMaxAnswers : rectangleColorOtherAnswers) // which color should the rectangles have
                    .attr("opacity", 1);
            }

        } else if (i == 1) {// agree option
            if (amountOfAnswers == 0) {
                svg.append("line")
                    .attr("x1", "21")
                    .attr("y1", "119")
                    .attr("x2", "31")
                    .attr("y2", "119")
                    .attr("stroke-width", "2px")
                    .attr("stroke", "black");
            } else {
                var agreerects = svg.selectAll("foo")
                    .data(agree.slice(10 - amountOfAnswers, 10))
                    .enter()
                    .append("rect")
                    .attr("x", d => d.x1)
                    .attr("y", d => d.y1)
                    .attr("width", d => d.x2 - d.x1)
                    .attr("height", d => d.y2 - d.y1)
                    .attr("fill", amountOfAnswers == maxAnswers ? rectangleColorMaxAnswers : rectangleColorOtherAnswers)
                    .attr("opacity", 1);
            }

        } else if (i == 2) { // neither agree nor disagree option
            if (amountOfAnswers == 0) {
                svg.append("line")
                    .attr("x1", "32")
                    .attr("y1", "119")
                    .attr("x2", "42")
                    .attr("y2", "119")
                    .attr("stroke-width", "2px")
                    .attr("stroke", "black");
            } else {
                var neitherAgreeNorDisagreeRects = svg.selectAll("foo")
                    .data(neitherAgreeNorDisagree.slice(10 - amountOfAnswers, 10))
                    .enter()
                    .append("rect")
                    .attr("x", d => d.x1)
                    .attr("y", d => d.y1)
                    .attr("width", d => d.x2 - d.x1)
                    .attr("height", d => d.y2 - d.y1)
                    .attr("fill", amountOfAnswers == maxAnswers ? rectangleColorMaxAnswers : rectangleColorOtherAnswers)
                    .attr("opacity", 1);
            }
        } else if (i == 3) { // disagree option
            if (amountOfAnswers == 0) {
                svg.append("line")
                    .attr("x1", "43")
                    .attr("y1", "119")
                    .attr("x2", "53")
                    .attr("y2", "119")
                    .attr("stroke-width", "2px")
                    .attr("stroke", "black");
            } else {
                var disagreeRects = svg.selectAll("foo")
                    .data(disagree.slice(10 - amountOfAnswers, 10))
                    .enter()
                    .append("rect")
                    .attr("x", d => d.x1)
                    .attr("y", d => d.y1)
                    .attr("width", d => d.x2 - d.x1)
                    .attr("height", d => d.y2 - d.y1)
                    .attr("fill", amountOfAnswers == maxAnswers ? rectangleColorMaxAnswers : rectangleColorOtherAnswers)
                    .attr("opacity", 1);
            }

        } else { // strongly disagree option

            if (amountOfAnswers == 0) {
                svg.append("line")
                    .attr("x1", "54")
                    .attr("y1", "119")
                    .attr("x2", "64")
                    .attr("y2", "119")
                    .attr("stroke-width", "2px")
                    .attr("stroke", "black");
            } else {
                var stronglyDisagreeRects = svg.selectAll("foo")
                    .data(stronglyDisagree.slice(10-amountOfAnswers, 10))
                    .enter()
                    .append("rect")
                    .attr("x", d => d.x1)
                    .attr("y", d => d.y1)
                    .attr("width", d => d.x2 - d.x1)
                    .attr("height", d => d.y2 - d.y1)
                    .attr("fill", amountOfAnswers == maxAnswers ? rectangleColorMaxAnswers : rectangleColorOtherAnswers)
                    .attr("opacity", 1);
            }
        }
    }
    // label the options with ++, +, ~, - and --
    svg.append("text")
        .attr("x", "12")
        .attr("y", "125")
        .attr("text-anchor", "left")
        .style("font-size", "5px")
        .text("++");

    svg.append("text")
        .attr("x", "25")
        .attr("y", "125")
        .attr("text-anchor", "left")
        .style("font-size", "5px")
        .text("+");

    svg.append("text")
        .attr("x", "35")
        .attr("y", "125")
        .attr("text-anchor", "left")
        .style("font-size", "5px")
        .text("~");

    svg.append("text")
        .attr("x", "48")
        .attr("y", "125")
        .attr("text-anchor", "left")
        .style("font-size", "5px")
        .text("-");

    svg.append("text")
        .attr("x", "58")
        .attr("y", "125")
        .attr("text-anchor", "left")
        .style("font-size", "5px")
        .text("--");
}
