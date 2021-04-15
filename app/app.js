var CHART_WIDTH = 400;
var CHART_HEIGHT = 200;

var MAX_BAR_HEIGHT = 100;

var playersByDistance = [];
var playersByZone = [];

var playerSelectOne = document.getElementById("player-select-one");
var playerSelectTwo = document.getElementById("player-select-two");


var court1 = document.getElementById("court-one");
var court2 = document.getElementById("court-two");
var court3 = document.getElementById("court-three");
var court4 = document.getElementById("court-four");

function showZones() {
    court1.style.display = 'flex';
    court3.style.display = 'none';
    court2.style.display = 'flex';
    court4.style.display = 'none';
}

function showDistances() {
    court1.style.display = 'none';
    court3.style.display = 'flex';
    court2.style.display = 'none';
    court4.style.display = 'flex';
}


d3.csv('data/data.csv', function(data) {
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
    if (courtNum < 3) {
        drawCourtWithZones(courtNum, playersByZone[val]);
    }
    else {
        drawCourtWithDistances(courtNum, playersByDistance[val])
    }
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

    //select the zone elements of court 3
    var zone301 = d3.select('#court-three').select('#zone301');
    var zone302 = d3.select('#court-three').select('#zone302');
    var zone303 = d3.select('#court-three').select('#zone303');
    var zone304 = d3.select('#court-three').select('#zone304');
    var zone305 = d3.select('#court-three').select('#zone305');
    var zone306 = d3.select('#court-three').select('#zone306');

    //select the zone elements of court 4
    var zone401 = d3.select('#court-four').select('#zone401');
    var zone402 = d3.select('#court-four').select('#zone402');
    var zone403 = d3.select('#court-four').select('#zone403');
    var zone404 = d3.select('#court-four').select('#zone404');
    var zone405 = d3.select('#court-four').select('#zone405');
    var zone406 = d3.select('#court-four').select('#zone406');


    if (courtNum == 1) {

        // ZONES

        //set zone01 color
        zone101.attr('fill', getZoneFillColor('zone', 1, player.Z_FGP01, player.Z_FGA01));
        
        //set zone02 color
        zone102.attr('fill', getZoneFillColor('zone', 2, player.Z_FGP02, player.Z_FGA02));  

        //set zone03 color
        zone103.attr('fill', getZoneFillColor('zone', 3, player.Z_FGP03, player.Z_FGA03));  

        //set zone04 color
        zone104.attr('fill', getZoneFillColor('zone', 4, player.Z_FGP04, player.Z_FGA04));  

        //set zone05 color
        zone105.attr('fill', getZoneFillColor('zone', 5, player.Z_FGP05, player.Z_FGA05));  

        //set zone07 color
        zone107.attr('fill', getZoneFillColor('zone', 7, player.Z_FGP07, player.Z_FGA07)); 

        // DISTANCES

        //set zone01 color
        zone301.attr('fill', getZoneFillColor('distance', 1, player.D_FGP00, player.D_FGA00));
        
        //set zone02 color
        zone302.attr('fill', getZoneFillColor('distance', 2, player.D_FGP05, player.D_FGA05));  

        //set zone03 color
        zone303.attr('fill', getZoneFillColor('distance', 3, player.D_FGP10, player.D_FGA10));  

        //set zone04 color
        zone304.attr('fill', getZoneFillColor('distance', 4, player.D_FGP15, player.D_FGA15));  

        //set zone05 color
        zone305.attr('fill', getZoneFillColor('distance', 5, player.D_FGP20, player.D_FGA20));  

        //set zone06 color
        zone306.attr('fill', getZoneFillColor('distance', 6, player.D_FGP25, player.D_FGA25));
    }
    else if (courtNum == 2) {

        // ZONES

        //set zone01 color
        zone201.attr('fill', getZoneFillColor('zone', 1, player.Z_FGP01, player.Z_FGA01));
        
        //set zone02 color
        zone202.attr('fill', getZoneFillColor('zone', 2, player.Z_FGP02, player.Z_FGA02));  

        //set zone03 color
        zone203.attr('fill', getZoneFillColor('zone', 3, player.Z_FGP03, player.Z_FGA03));  

        //set zone04 color
        zone204.attr('fill', getZoneFillColor('zone', 4, player.Z_FGP04, player.Z_FGA04));  

        //set zone05 color
        zone205.attr('fill', getZoneFillColor('zone', 5, player.Z_FGP05, player.Z_FGA05));  

        //set zone07 color
        zone207.attr('fill', getZoneFillColor('zone', 7, player.Z_FGP07, player.Z_FGA07)); 

        // DISTANCES

        //set zone01 color
        zone401.attr('fill', getZoneFillColor('distance', 1, player.D_FGP00, player.D_FGA00));
        
        //set zone02 color
        zone402.attr('fill', getZoneFillColor('distance', 2, player.D_FGP05, player.D_FGA05));  

        //set zone03 color
        zone403.attr('fill', getZoneFillColor('distance', 3, player.D_FGP10, player.D_FGA10));  

        //set zone04 color
        zone404.attr('fill', getZoneFillColor('distance', 4, player.D_FGP15, player.D_FGA15));  

        //set zone05 color
        zone405.attr('fill', getZoneFillColor('distance', 5, player.D_FGP20, player.D_FGA20));  

        //set zone06 color
        zone406.attr('fill', getZoneFillColor('distance', 6, player.D_FGP25, player.D_FGA25)); 
    }
    
   
      
}

function drawCourtWithDistances(courtNum, player) {

    //select the zone elements of court 3
    var zone301 = d3.select('#court-three').select('#zone301');
    var zone302 = d3.select('#court-three').select('#zone302');
    var zone303 = d3.select('#court-three').select('#zone303');
    var zone304 = d3.select('#court-three').select('#zone304');
    var zone305 = d3.select('#court-three').select('#zone305');
    var zone306 = d3.select('#court-three').select('#zone306');

    //select the zone elements of court 4
    var zone401 = d3.select('#court-four').select('#zone401');
    var zone402 = d3.select('#court-four').select('#zone402');
    var zone403 = d3.select('#court-four').select('#zone403');
    var zone404 = d3.select('#court-four').select('#zone404');
    var zone405 = d3.select('#court-four').select('#zone405');
    var zone406 = d3.select('#court-four').select('#zone406');

    if (courtNum == 3) {
        //set zone01 color
        zone301.attr('fill', getDistanceFillColor(1, player.FGP01, player.FGA01));
        
        //set zone02 color
        zone302.attr('fill', getDistanceFillColor(2, player.FGP02, player.FGA02));  

        //set zone03 color
        zone303.attr('fill', getDistanceFillColor(3, player.FGP03, player.FGA03));  

        //set zone04 color
        zone304.attr('fill', getDistanceFillColor(4, player.FGP04, player.FGA04));  

        //set zone05 color
        zone305.attr('fill', getDistanceFillColor(5, player.FGP05, player.FGA05));  

        //set zone07 color
        zone306.attr('fill', getDistanceFillColor(6, player.FGP06, player.FGA06)); 
    }
    else if (courtNum == 4) {
        //set zone01 color
        zone401.attr('fill', getDistanceFillColor(1, player.FGP01, player.FGA01));
        
        //set zone02 color
        zone402.attr('fill', getDistanceFillColor(2, player.FGP02, player.FGA02));  

        //set zone03 color
        zone403.attr('fill', getDistanceFillColor(3, player.FGP03, player.FGA03));  

        //set zone04 color
        zone404.attr('fill', getDistanceFillColor(4, player.FGP04, player.FGA04));  

        //set zone05 color
        zone405.attr('fill', getDistanceFillColor(5, player.FGP05, player.FGA05));  

        //set zone07 color
        zone406.attr('fill', getDistanceFillColor(6, player.FGP06, player.FGA06)); 
    }
      
}

function getZoneFillColor(zone_dist, zone, percentage, attempts) {
    let alpha = attempts/250;

    
    if (zone_dist == "zone" && (zone == 4 || zone == 5)) {
        alpha *= 2.5;
    }

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

    if (zone_dist == "zone") {
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
    else if (zone_dist == "distance") {
        if (zone == 1) {
            if (percentage <= 50.12) {
                return color1;
            }
            else if (percentage <= 54.42) {
                return color2;
            }
            else if (percentage <= 56.76){
                return color3;
            }
            else if (percentage <= 58.58){
                return color4;
            }
            else if (percentage <= 60.3) {
                return color5;
            }
            else if (percentage <= 62.8){
                return color6;
            }
            else if (percentage <= 65.02){
                return color7;
            }
            else if (percentage <= 66.9){
                return color8;
            }
            else if (percentage <= 70.5){
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
            if (percentage <= 26.96) {
                return color1;
            }
            else if (percentage <= 32.6) {
                return color2;
            }
            else if (percentage <= 35.64){
                return color3;
            }
            else if (percentage <= 39.34){
                return color4;
            }
            else if (percentage <= 40.9) {
                return color5;
            }
            else if (percentage <= 43.72){
                return color6;
            }
            else if (percentage <= 46.7){
                return color7;
            }
            else if (percentage <= 50.72){
                return color8;
            }
            else if (percentage <= 54.5){
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
            if (percentage <= 23.02) {
                return color1;
            }
            else if (percentage <= 29.52) {
                return color2;
            }
            else if (percentage <= 33.8){
                return color3;
            }
            else if (percentage <= 38.14){
                return color4;
            }
            else if (percentage <= 40.5) {
                return color5;
            }
            else if (percentage <= 43.86){
                return color6;
            }
            else if (percentage <= 47.14){
                return color7;
            }
            else if (percentage <= 50){
                return color8;
            }
            else if (percentage <= 55.6){
                return color9;
            }
            else if (percentage <= 100){
                return color10;
            }
            else {
                return "#bbb";
            }
        }
        else if (zone == 4) {
            if (percentage <= 11.5) {
                return color1;
            }
            else if (percentage <= 25) {
                return color2;
            }
            else if (percentage <= 32.68){
                return color3;
            }
            else if (percentage <= 35.7){
                return color4;
            }
            else if (percentage <= 39.6) {
                return color5;
            }
            else if (percentage <= 43.02){
                return color6;
            }
            else if (percentage <= 46.24){
                return color7;
            }
            else if (percentage <= 48.74){
                return color8;
            }
            else if (percentage <= 52.76){
                return color9;
            }
            else if (percentage <= 100){
                return color10;
            }
            else {
                return "#bbb";
            }
        }
        else if (zone == 5) {
            if (percentage <= 27.46) {
                return color1;
            }
            else if (percentage <= 31.84) {
                return color2;
            }
            else if (percentage <= 34.28){
                return color3;
            }
            else if (percentage <= 36.14){
                return color4;
            }
            else if (percentage <= 39.1) {
                return color5;
            }
            else if (percentage <= 40.46){
                return color6;
            }
            else if (percentage <= 42.9){
                return color7;
            }
            else if (percentage <= 44.76){
                return color8;
            }
            else if (percentage <= 49.24){
                return color9;
            }
            else if (percentage <= 100){
                return color10;
            }
            else {
                return "#bbb";
            }
        }
        else if (zone == 6) {
            if (percentage <= 23.1) {
                return color1;
            }
            else if (percentage <= 29.26) {
                return color2;
            }
            else if (percentage <= 31.8){
                return color3;
            }
            else if (percentage <= 34.24){
                return color4;
            }
            else if (percentage <= 35.8) {
                return color5;
            }
            else if (percentage <= 37.3){
                return color6;
            }
            else if (percentage <= 38.6){
                return color7;
            }
            else if (percentage <= 40){
                return color8;
            }
            else if (percentage <= 42.4){
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
    
    
}
