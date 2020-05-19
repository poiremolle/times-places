function setup() {


var canvas = createCanvas(500, 500);
    canvas.parent('canvasp');
    
    background(255);
    
button = select('#button');
    button.mousePressed(updateValue);
    
 
} //END SETUP



/* CREATES THE ART: called by button 'submit'. Takes the values input in each form and passes them into corresponding variables which are then used to place and size each shape */
function wavyLine(x, y, w, h, strWeight) {
    noFill();
    stroke(255)
     strokeWeight(strWeight);
        arc(x*5, y*5, w*2, h*2, PI, TWO_PI);
        arc(x*5+w*2, y*4.9, w*2, h*2, TWO_PI, PI);
        arc(x*5+w*4, y*5, w*2, h*2, PI, TWO_PI);
        arc(x*5+w*6, y*4.9, w*2, h*2, TWO_PI, PI);
        arc(x*5+w*8, y*5, w*2, h*2, PI, PI+HALF_PI);
    
}


function updateValue() {
 
    let latDeg = parseInt(select('#latdeg').value(), 10); // 0-90
    let latMin = parseInt(select('#latmin').value(), 10); // 0-60
    let latSec = parseInt(select('#latsec').value(), 10); // 0-60

    let lonDeg = parseInt(select('#londeg').value(), 10);// 0-180
    let lonMin = parseInt(select('#lonmin').value(), 10); // 0-60
    let lonSec = parseInt(select('#lonsec').value(), 10); // 0 -60
    
    let numDay = parseInt(select('#numday').value(), 10); // 1-31
    let numMonth = parseInt(select('#nummonth').value(), 10); // 1-12
    let numYear = parseInt(select('#numyear').value(), 10); // 0-99 (last 2 digits)
    let numHour = parseInt(select('#numhour').value(), 10); // 0-23
    let numMin = parseInt(select('#nummin').value(), 10); // 0-60
    let numSec = parseInt(select('#numsec').value(), 10); // 0-60
    
    if (latDeg < 6) {
        background(240 + latDeg, 222,  202);
   } else if (latDeg < 30) {
        background(235 + latDeg / 2, 222,  222 + latDeg / 3);
   } else if (latDeg < 60) {
        background(235, 222,  222 + latDeg / 3);
   } else { 
        background(205, 222, 222 + latDeg / 3)
   }

// LONGITUDE DEGREE
noStroke();   
fill(200, 240, 220);
    beginShape();
    curveVertex(220, 100);
    
    curveVertex(250, 50);
    curveVertex(450, 100);
    curveVertex(500, 300);
    curveVertex(250, 400);
    
    curveVertex(210, 150);
    endShape();

// LATITUDE DEGREE
    
fill(200, 180, 230, 150);
    beginShape();
    curveVertex(60, 500);
    curveVertex(50, 450);
    curveVertex(120, 300);
    curveVertex(300, 280);
    curveVertex(400, 450);
    curveVertex(390, 500);
    endShape();
    
    
    
    
    
    
//    fill(0)
//    
//    ellipse(100, 100, 100, 100); //test ellipse
//    
//    rect (100, 100, 200, 200); //text rectangle
//    
//    ellipse(100, 200, 300, 300); //test oval 
//    
//    fill(100)
//    ellipse(400, 400, 100, 100); // ima have nightmares about this git github thing tonight holy crap
//    
//            // LON DEGREE big ellipse
//    noStroke();
//    fill(155 + lonDeg, 100 + lonDeg, 155 + lonDeg);
//        ellipse(lonDeg + 200, lonDeg + 200, lonDeg * 3 ,lonDeg * 3);
//    
//    
//    // LAT DEGREE small ellipse
//    
//    fill(155 + latDeg, 100 + latDeg, 155 + latDeg);
//        ellipse(latDeg + 100, latDeg + 50, latDeg * 2 ,latDeg * 2);
//     
//
//    
//    
//    // LAT MINUTE the wave
//      if (latMin < 11) {   
//        
//        wavyLine(latMin + 10, latMin + 10, latMin + 10, latMin + 10, 30);
//        
//    } else {
//        
//        wavyLine(latMin, latMin, latMin, latMin, 30);
//           
//           }
//    
//
//    // LON MINUTE the wave thin
//  if (lonMin < 11) {   
//        
//        wavyLine(lonMin + 10, lonMin + 10, lonMin + 10, lonMin + 10, 1);
//        
//    } else {
//        
//        wavyLine(lonMin, lonMin, lonMin, lonMin, 1);
//           
//           }
//    
//    
//    
//    // LAT SECOND arc outline thick
//    
//    noFill();
//    stroke(18);
//    strokeWeight(18);
//                  arc(80 + latSec * 2, 230 + latSec * 2, 20 + latSec * 2, 20 + latSec * 2, TWO_PI, PI);
//  
//    
//    // LON SECOND arc outline thin closed
//        noFill();
//    stroke(1);
//    strokeWeight(1);
//                  arc(20 + lonSec * 2, 200 + lonSec * 2, 20 + lonSec * 2, 20 + lonSec * 2, TWO_PI, PI, CHORD);
//   
//    
//    // NUM DAY single arc
//         if (numDay < 45){
//               noStroke();
//             arc(150 + numDay * 2, 10 + numDay * 2, numDay * 2, numDay * 2, PI, TWO_PI);
//              } else {
//                    noStroke();
//                  arc(numDay * 2, 10 + numDay * 2, numDay * 2, numDay * 2, PI, TWO_PI);
//                     }
//
//    
//    // NUM MONTH arc line
//    
//    for (var i = 0; i < numMonth; i++){
//        noStroke(); 
//        fill(175 + numMonth * 4, 50 + numMonth * 10, 110 + numMonth * 3); 
//             arc(30 + 30 * i, 400, 30, 35, PI, TWO_PI);
//           
//    }
//    
//    
//    
//    
//    // NUM YEAR single black dotted line
//
//    for (var i = 0; i < numYear; i++) {
//        stroke(0);
//        strokeWeight(2);
//        if (numMonth > 0) {
//            point(13 + numMonth * 10, 13.5 + 4.8 * i); 
//        } else {
//            point(25, 13.5 + 4.8 * i); 
//        }
//    
//    }
//    
//    
//    // NUM HOUR thin circle
//    noFill();
//    stroke(1 + numHour * 10.625, 110 + numHour * 6, 110 + numHour * 6);
//    strokeWeight(1);
//        ellipse(width - 150, height - 150, numHour * 4, numHour * 4);
//    
//    
//    // NUM MINUTES thin line
//    
//    stroke(1 + numMin * 10.625);
//        line(width - numMin - 15, height - 15, width - 15, height - 15);
//    
//    // NUM SECONDS
//
//      stroke(1 + numSec * 10.625);
//        line(width - numSec - 15, height - 30, width - 15, height - 30);
//    
//    
//    
//    
//    // VARIOUS - day+month dotted grid
//if (numMonth > 0 && numDay > 0) { 
//    
//    for (var i = 0; i < numMonth; i++) {
//        for (var j = 0; j < numDay; j++) {
//          
//             stroke(224 + numDay, 243 + numMonth, 156 + numYear);
//             strokeWeight(2);
//                 point(15 + 10 * i, 15 + 10 * j);      
//        }   // end for loop j
//    } // end for loop i
//    
//} else { for (var i = 0; i < numMonth; i++) {
//    strokeWeight(2);
//            point(15 + 10 * i, 15); 
//        } // end first for loop
//        
//        for (var i = 0; i < numDay; i++) {
//       strokeWeight(2);
//            point(15, 15 + 10 * i); 
//            
//        } // end second for loop
//    
//        } // end else
    
   
  
           
    // make one for month and year ****
         
         
//  console.log(latDeg);
//     console.log(latMin);
//     console.log(latSec);
//    
//      
//         
//  console.log(lonDeg);
//     console.log(lonMin);
//      console.log(lonMin+=5);
//     console.log(lonSec);
//    
//      
//         
//  console.log(numDay);
//     console.log(numMonth);
//     console.log(numYear);
//    
//             
//  console.log(numHour);
//     console.log(numMin);
//     console.log(numSec);
//  
  
    
}  // end updateValue function

