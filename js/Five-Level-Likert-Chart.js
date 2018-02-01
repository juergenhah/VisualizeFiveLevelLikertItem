
         var trifftzu = [{
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

         var trifftEherZu = [{
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



         var teilsTeils = [{
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


         var trifftEherNichtZu = [{
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



         var trifftNichtZu = [{
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



function visualizeAnswers(svg, amountOfAnswers, rectangleColorMaxAnswers, rectangleColorOtherAnswers){
    console.log( amountOfAnswers, rectangleColorMaxAnswers, rectangleColorOtherAnswers);

             var maxAnswers = Math.max.apply(null, amountOfAnswers);
             for (var i = 0; i < amountOfAnswers.length; i++) {
                 var a = amountOfAnswers[i];
                 console.log(a + "   " + i);

                 if (i == 0) {
                     if (a == 0) {
                         svg.append("line")
                            .attr("x1", "10")
                            .attr("y1", "119")
                            .attr("x2", "20")
                            .attr("y2", "119")
                            .attr("stroke-width", "2px")
                            .attr("stroke", "black");
                     } else {
                         var trifftzu1 = trifftzu.slice(10 - a, 10); // reduct the amount of recs
                         var trifftZurects = svg.selectAll("foo")
                                                .data(trifftzu1) //here how many to select?
                                                .enter()
                                                .append("rect")
                                                .attr("x", d => d.x1)
                                                .attr("y", d => d.y1)
                                                .attr("width", d => d.x2 - d.x1)
                                                .attr("height", d => d.y2 - d.y1)
                                                .attr("fill", a == maxAnswers ? rectangleColorMaxAnswers : rectangleColorOtherAnswers)
                                                .attr("opacity", 1);
                     }
                 } else if (i == 1) {
                     if (a == 0) {
                         svg.append("line")
                            .attr("x1", "21")
                            .attr("y1", "119")
                            .attr("x2", "31")
                            .attr("y2", "119")
                            .attr("stroke-width", "2px")
                            .attr("stroke", "black");
                     } else {
                         var trifftEherZu1 = trifftEherZu.slice(10 - a, 10); // reduct the amount of recs
                         var trifftEherZurects = svg.selectAll("foo")
                                                    .data(trifftEherZu1)
                                                    .enter()
                                                    .append("rect")
                                                    .attr("x", d => d.x1)
                                                    .attr("y", d => d.y1)
                                                    .attr("width", d => d.x2 - d.x1)
                                                    .attr("height", d => d.y2 - d.y1)
                                                    .attr("fill", a == maxAnswers ? rectangleColorMaxAnswers : rectangleColorOtherAnswers)
                                                    .attr("opacity", 1);
                     }

                 } else if (i == 2) {
                     if (a == 0) {
                         svg.append("line")
                            .attr("x1", "32")
                            .attr("y1", "119")
                            .attr("x2", "42")
                            .attr("y2", "119")
                            .attr("stroke-width", "2px")
                            .attr("stroke", "black");
                     } else {
                         var teilsTeils1 = teilsTeils.slice(10 - a, 10); // reduct the amount of recs
                         var teilsTeilsRects = svg.selectAll("foo")
                                                  .data(teilsTeils1)
                                                  .enter()
                                                  .append("rect")
                                                  .attr("x", d => d.x1)
                                                  .attr("y", d => d.y1)
                                                  .attr("width", d => d.x2 - d.x1)
                                                  .attr("height", d => d.y2 - d.y1)
                                                  .attr("fill", a == maxAnswers ? rectangleColorMaxAnswers : rectangleColorOtherAnswers)
                                                  .attr("opacity", 1);
                     }
                 } else if (i == 3) {
                     if (a == 0) {
                         svg.append("line")
                            .attr("x1", "43")
                            .attr("y1", "119")
                            .attr("x2", "53")
                            .attr("y2", "119")
                            .attr("stroke-width", "2px")
                            .attr("stroke", "black");
                     } else {
                         var trifftEherNichtZu1 = trifftEherNichtZu.slice(10 - a, 10); // reduct the amount of recs
                         var trifftEherNichtZuRects = svg.selectAll("foo")
                                                         .data(trifftEherNichtZu1)
                                                         .enter()
                                                         .append("rect")
                                                         .attr("x", d => d.x1)
                                                         .attr("y", d => d.y1)
                                                         .attr("width", d => d.x2 - d.x1)
                                                         .attr("height", d => d.y2 - d.y1)
                                                         .attr("fill", a == maxAnswers ? rectangleColorMaxAnswers : rectangleColorOtherAnswers)
                                                         .attr("opacity", 1);
                     }
                 } else {
                     if (a == 0) {

                         svg.append("line")
                            .attr("x1", "54")
                            .attr("y1", "119")
                            .attr("x2", "64")
                            .attr("y2", "119")
                            .attr("stroke-width", "2px")
                            .attr("stroke", "black");
                     } else {
                         var trifftNichtZu1 = trifftNichtZu.slice(10-a, 10); // reduct the amount of recs
                         var trifftNichtZuRects = svg.selectAll("foo")
                                                     .data(trifftNichtZu1)
                                                     .enter()
                                                     .append("rect")
                                                     .attr("x", d => d.x1)
                                                     .attr("y", d => d.y1)
                                                     .attr("width", d => d.x2 - d.x1)
                                                     .attr("height", d => d.y2 - d.y1)
                                                     .attr("fill", a == maxAnswers ? rectangleColorMaxAnswers : rectangleColorOtherAnswers)
                                                     .attr("opacity", 1);
                     }
                 }
             }

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
