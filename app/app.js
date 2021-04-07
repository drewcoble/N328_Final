var CHART_WIDTH = 400;
var CHART_HEIGHT = 200;

var MAX_BAR_HEIGHT = 100;

var playersByDistance = [];
var playersByZone = [];

var playerSelectOne = document.getElementById("player-select-one");
var playerSelectTwo = document.getElementById("player-select-two");

// d3.csv('../data/data_distance.csv', function(data) 
//     {
//         for (let i=0; i<data.length; i++)
//         {
//             // console.log(data[i]);

//             let playerRow = data[i];
//             playersByDistance.push(playerRow);
            
//             // // loop through all players
//             // for (let y=1980; y<=2012; y++) 
//             // {
//             // 	let value = record[y];
//             // 	let object = {
//             // 		year: y,
//             // 		production: +value
//             // 	};
                
//             // 	energyProduction.push(object);
//             // }


//         }
//         console.log(playersByDistance);
//         // drawScatterPlot();
// });

d3.csv('data/data_zone.csv', function(data) {
        for (let i=0; i<data.length; i++){
            // console.log(data[i]);
            let playerRow = data[i];
            playersByZone.push(playerRow);

            //add the player to the select
            let opt1 = document.createElement("option");
            opt1.value = i;
            opt1.innerHTML = playerRow.PLAYER;
            playerSelectOne.appendChild(opt1);
            let opt2 = document.createElement("option");
            opt2.value = i;
            opt2.innerHTML = playerRow.PLAYER;
            playerSelectTwo.appendChild(opt2);
        }
        console.log(playersByZone);
        // drawCourtWithZones(playersByZone[9]);
});

function displayPlayer(courtNum, val) {
    // console.log(val);
    drawCourtWithZones(courtNum, playersByZone[val])
}

function drawCourtWithZones(courtNum, player) {

    //select the zone elements of court 1
    var zone101 = d3.select('#court-one').select('#zone101');
    var zone102 = d3.select('#court-one').select('#zone102');
    var zone103 = d3.select('#court-one').select('#zone103');
    var zone104 = d3.select('#court-one').select('#zone104');
    var zone105 = d3.select('#court-one').select('#zone105');
    var zone107 = d3.select('#court-one').select('#zone107');

    //select the zone elements of court 2
    var zone201 = d3.select('#court-two').select('#zone201');
    var zone202 = d3.select('#court-two').select('#zone202');
    var zone203 = d3.select('#court-two').select('#zone203');
    var zone204 = d3.select('#court-two').select('#zone204');
    var zone205 = d3.select('#court-two').select('#zone205');
    var zone207 = d3.select('#court-two').select('#zone207');

    if (courtNum == 1) {
        //set zone01 color
        zone101.attr('fill', getZoneFillColor(1, player.FGP01, player.FGA01));
        
        //set zone02 color
        zone102.attr('fill', getZoneFillColor(2, player.FGP02, player.FGA02));  

        //set zone03 color
        zone103.attr('fill', getZoneFillColor(3, player.FGP03, player.FGA03));  

        //set zone04 color
        zone104.attr('fill', getZoneFillColor(4, player.FGP04, player.FGA04));  

        //set zone05 color
        zone105.attr('fill', getZoneFillColor(5, player.FGP05, player.FGA05));  

        //set zone07 color
        zone107.attr('fill', getZoneFillColor(7, player.FGP07, player.FGA07)); 
    }
    else if (courtNum == 2) {
        //set zone01 color
        zone201.attr('fill', getZoneFillColor(1, player.FGP01, player.FGA01));
        
        //set zone02 color
        zone202.attr('fill', getZoneFillColor(2, player.FGP02, player.FGA02));  

        //set zone03 color
        zone203.attr('fill', getZoneFillColor(3, player.FGP03, player.FGA03));  

        //set zone04 color
        zone204.attr('fill', getZoneFillColor(4, player.FGP04, player.FGA04));  

        //set zone05 color
        zone205.attr('fill', getZoneFillColor(5, player.FGP05, player.FGA05));  

        //set zone07 color
        zone207.attr('fill', getZoneFillColor(7, player.FGP07, player.FGA07)); 
    }
      
}

function getZoneFillColor(zone, percentage, attempts) {
    let alpha = attempts/200;

    let color1 = "rgba(49,54,149,"+alpha+")";
    let color2 = "rgba(69,117,180,"+alpha+")";
    let color3 = "rgba(116,173,209,"+alpha+")";
    let color4 = "rgba(171,217,233,"+alpha+")";
    let color5 = "rgba(224,243,248,"+alpha+")";
    let color6 = "rgba(254,224,144,"+alpha+")";
    let color7 = "rgba(253,174,97,"+alpha+")";
    let color8 = "rgba(244,109,67,"+alpha+")";
    let color9 = "rgba(215,48,39,"+alpha+")";
    let color10 = "rgba(165,0,38,"+alpha+")";


        if (zone == 1) {
            if (percentage <= 52.2) {
                return color1;
            }
            else if (percentage <= 56.1) {
                return color2;
            }
            else if (percentage <= 58.68){
                return color3;
            }
            else if (percentage <= 61){
                return color4;
            }
            else if (percentage <= 63.3) {
                return color5;
            }
            else if (percentage <= 65.26){
                return color6;
            }
            else if (percentage <= 67.32){
                return color7;
            }
            else if (percentage <= 69.28){
                return color8;
            }
            else if (percentage <= 73.18){
                return color9;
            }
            else if (percentage <= 100){
                return color10;
            }
            else {
                return "#bbb";
            }
        }
        else if (zone == 2) {
            if (percentage <= 28.78) {
                return color1;
            }
            else if (percentage <= 34.22) {
                return color2;
            }
            else if (percentage <= 37.7){
                return color3;
            }
            else if (percentage <= 40){
                return color4;
            }
            else if (percentage <= 41.7) {
                return color5;
            }
            else if (percentage <= 43.8){
                return color6;
            }
            else if (percentage <= 46.52){
                return color7;
            }
            else if (percentage <= 49.16){
                return color8;
            }
            else if (percentage <= 51.6){
                return color9;
            }
            else if (percentage <= 100){
                return color10;
            }
            else {
                return "#bbb";
            }
        }
        else if (zone == 3) {
            if (percentage <= 21.58) {
                return color1;
            }
            else if (percentage <= 29.64) {
                return color2;
            }
            else if (percentage <= 34.7){
                return color3;
            }
            else if (percentage <= 36.84){
                return color4;
            }
            else if (percentage <= 39.1) {
                return color5;
            }
            else if (percentage <= 41.9){
                return color6;
            }
            else if (percentage <= 44.2){
                return color7;
            }
            else if (percentage <= 46.48){
                return color8;
            }
            else if (percentage <= 50){
                return color9;
            }
            else if (percentage <= 100){
                return color10;
            }
            else {
                return "#bbb";
            }
        }
        else if (zone == 4 || zone == 5) {
            if (percentage <= 24.4) {
                return color1;
            }
            else if (percentage <= 29.44) {
                return color2;
            }
            else if (percentage <= 33.3){
                return color3;
            }
            else if (percentage <= 35.64){
                return color4;
            }
            else if (percentage <= 38.9) {
                return color5;
            }
            else if (percentage <= 41.7){
                return color6;
            }
            else if (percentage <= 44.7){
                return color7;
            }
            else if (percentage <= 47.76){
                return color8;
            }
            else if (percentage <= 53.1){
                return color9;
            }
            else if (percentage <= 100){
                return color10;
            }
            else {
                return "#bbb";
            }
        }
        else if (zone == 7) {
            if (percentage <= 25.18) {
                return color1;
            }
            else if (percentage <= 30.04) {
                return color2;
            }
            else if (percentage <= 32.48){
                return color3;
            }
            else if (percentage <= 33.94){
                return color4;
            }
            else if (percentage <= 35.7) {
                return color5;
            }
            else if (percentage <= 36.7){
                return color6;
            }
            else if (percentage <= 38.5){
                return color7;
            }
            else if (percentage <= 39.5){
                return color8;
            }
            else if (percentage <= 41.4){
                return color9;
            }
            else if (percentage <= 100){
                return color10;
            }
            else {
                return "#bbb";
            }
        }
    
    
}
