
/* Current windows width */
function winW() {
    return window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
}
/* Current windows height */
function winH() {
    return window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
}
/* Current windows minimum width or height */
function minWinSize() {
    if (winW() < winH()) {
        return winW();
    } else {
        return winH();
    }
}
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function minSize(el){
    w = el.clientWidth;
    w = el.offsetWidth;
    w = el.scrollWidth;
    h = el.clientHeight;
    h = el.offsetHeight;
    h = el.scrollHeight;
    if (w < h) {
        return w;
    } else {
        return h;
    }
}

function trans(e, v) {
    e.style.webkitTransform = v;
    e.style.mozTransform = v;
    e.style.msTransform = v;
    e.style.oTransform = v;
    e.style.transform = v;
}

function perS(s,p){
    return (p*s)/100;
}


var threeDTextCont = document.querySelectorAll(".letterCan");

for(var v = 0; v < threeDTextCont.length; v++){
    var threeDText = threeDTextCont[v].innerHTML;
    threeDTextCont[v].innerHTML = "";
    char = threeDText.charAt(0).toUpperCase();
    threeDTextCont[v].style.width = threeDTextCont[v].style.height = perS(minWinSize(),40)+'px';
    print(threeDTextCont[v],char);
}


//window.onresize = function() {
//    canvas.style.width = canvas.style.height = perS(minWinSize(),70)+'px';
//    print(canvas);
//};

function print(canvas,char){
        lettersOut = {};
        lettersIn = {};

        lettersOut['A'] = [];
        lettersIn['A'] = [];
        lettersOut['B'] = [];
        lettersIn['B'] = [];
        lettersOut['C'] = [];
        lettersIn['C'] = [];

        lettersOut['D'] = [
            [20,80,20,50,10,-50,-50,0,0,0],[20,80,20,50,-10,-50,-50,0,0,0],[20,80,10,50,0,-50,-50,0,90,0],[20,40,30,50,0,-50,-50,0,90,0],
            [40,20,50,20,10,-50,-50,0,0,0],[40,20,50,20,-10,-50,-50,0,0,0],[28,20,44,30,0,-50,-50,90,0,0],[60,20,40,10,0,-50,-50,90,0,0],
            [40,20,50,80,10,-50,-50,0,0,0],[40,20,50,80,-10,-50,-50,0,0,0],[28,20,44,70,0,-50,-50,90,0,0],[60,20,40,90,0,-50,-50,90,0,0],
            [20,40,80,50,10,-50,-50,0,0,0],[20,40,80,50,-10,-50,-50,0,0,0],[20,16,70,50,0,-50,-50,0,90,0],[20,40,90,50,0,-50,-50,0,90,0],
            [22.5,28,72.05,28,10,-50,-50,0,0,-45],[22.5,28,72.05,28,-10,-50,-50,0,0,-45],[20,28,80,20,0,-50,-50,90,45,270],[20,28,64,36,0,-50,-50,90,45,270],
            [22.5,28,72.05,72,10,-50,-50,0,0,45],[22.5,28,72.05,72,-10,-50,-50,0,0,45],[20,28,80,80,0,-50,-50,90,-45,90],[20,28,63.9,63.9,0,-50,-50,90,-45,90]
        ];
        lettersIn['D'] = [
            [10,70,20,50,5,-50,-50,0,0,0],[10,70,20,50,-5,-50,-50,0,0,0], [10,70,15,50,0,-50,-50,0,90,0],[10,50,25,50,0,-50,-50,0,90,0],
            [42,10,46,20,5,-50,-50,0,0,0],[42,10,46,20,-5,-50,-50,0,0,0],[52,10,41,10,-5,-50,-50,90,0,0],[36,10,43,20,-5,-50,-50,90,0,0],
            [42,10,46,80,5,-50,-50,0,0,0],[42,10,46,80,-5,-50,-50,0,0,0],[36,10,43,70,-5,-50,-50,90,0,0],[52,10,41,80,-5,-50,-50,90,0,0],
            [10,34,80,50,5,-50,-50,0,0,0],[10,34,80,50,-5,-50,-50,0,0,0],[10,34,85,50,0,-50,-50,0,90,0],[10,22,75,50,0,-50,-50,0,90,0],
            [11.2,25.5,72,28,5,-50,-50,0,0,-45],[11.2,25.5,72,28,-5,-50,-50,0,0,-45],[10,25.5,76,24,0,-50,-50,90,45,270],[10,20.4,68,32,0,-50,-50,90,45,270],
            [11.2,25.5,72,72,5,-50,-50,0,0,45],[11.2,25.5,72,72,-5,-50,-50,0,0,45],[10,25.5,76,76,0,-50,-50,90,-45,90],[10,20.4,68,68,0,-50,-50,90,-45,90],
        ];
        lettersOut['E'] = [
            [20,80,30,50,10,-50,-50,0,0,0],[20,80,30,50,-10,-50,-50,0,0,0],[20,80,20,50,0,-50,-50,0,90,0],[20,10,40,35,0,-50,-50,0,90,0],[20,10,40,65,0,-50,-50,0,90,0],
            [40,20,60,20,10,-50,-50,0,0,0],[40,20,60,20,-10,-50,-50,0,0,0],[40,20,60,30,0,-50,-50,90,0,0],[60,20,50,10,0,-50,-50,90,0,0],[20,20,80,20,0,-50,-50,0,90,0],
            [40,20,60,50,10,-50,-50,0,0,0],[40,20,60,50,-10,-50,-50,0,0,0],[40,20,60,40,0,-50,-50,90,0,0],[40,20,60,60,0,-50,-50,90,0,0],[20,20,80,50,0,-50,-50,0,90,0],
            [40,20,60,80,10,-50,-50,0,0,0],[40,20,60,80,-10,-50,-50,0,0,0],[40,20,60,70,0,-50,-50,90,0,0],[60,20,50,90,0,-50,-50,90,0,0],[20,20,80,80,0,-50,-50,0,90,0],
        ];
        lettersIn['E'] = [
            [10,70,30,50,5,-50,-50,0,0,0],[10,70,30,50,-5,-50,-50,0,0,0],[10,70,25,50,0,-50,-50,0,90,0],[10,20,35,35,0,-50,-50,0,90,0],[10,20,35,65,0,-50,-50,0,90,0],
            [40,10,55,20,5,-50,-50,0,0,0],[40,10,55,20,-5,-50,-50,0,0,0],[40,10,55,25,0,-50,-50,90,0,0],[50,10,50,15,0,-50,-50,90,0,0],[10,10,75,20,0,-50,-50,0,90,0],
            [40,10,55,50,5,-50,-50,0,0,0],[40,10,55,50,-5,-50,-50,0,0,0],[40,10,55,55,0,-50,-50,90,0,0],[40,10,55,45,0,-50,-50,90,0,0],[10,10,75,50,0,-50,-50,0,90,0],
            [40,10,55,80,5,-50,-50,0,0,0],[40,10,55,80,-5,-50,-50,0,0,0],[40,10,55,75,0,-50,-50,90,0,0],[50,10,50,85,0,-50,-50,90,0,0],[10,10,75,80,0,-50,-50,0,90,0],
        ];

        
        lettersOut['F'] = [];
        lettersIn['F'] = [];
        lettersOut['G'] = [];
        lettersIn['G'] = [];
        lettersOut['H'] = [];
        lettersIn['H'] = [];
        lettersOut['I'] = [];
        lettersIn['I'] = [];
        lettersOut['J'] = [];
        lettersIn['J'] = [];
        lettersOut['K'] = [];
        lettersIn['K'] = [];
        lettersOut['L'] = [];
        lettersIn['L'] = [];
        lettersOut['M'] = [];
        lettersIn['M'] = [];
        lettersOut['N'] = [];
        lettersIn['N'] = [];
        lettersOut['O'] = [];
        lettersIn['O'] = [];

        lettersOut['P']  = [
            [20,80,35,50,10,-50,-50,0,0,0],[20,80,35,50,-10,-50,-50,0,0,0],[20,80,25,50,0,-50,-50,0,90,0],[20,10,45,35,0,-50,-50,0,90,0],[20,30,45,75,0,-50,-50,0,90,0],
            [20,20,35,90,0,-50,-50,90,0,0],[10,20,50,20,10,-50,-50,0,0,0],[10,20,50,20,-10,-50,-50,0,0,0],[10,20,50,30,0,-50,-50,90,0,0],[50,20,50,10,0,-50,-50,90,0,0],
            [20,50,65,35,10,-50,-50,0,0,0],[20,50,65,35,-10,-50,-50,0,0,0],[20,50,75,35,0,-50,-50,0,90,0],[20,10,55,35,0,-50,-50,0,90,0],[10,20,50,50,10,-50,-50,0,0,0],
            [10,20,50,50,-10,-50,-50,0,0,0],[10,20,50,40,0,-50,-50,90,0,0],[30,20,60,60,0,-50,-50,90,0,0],

        ];
        lettersIn['P'] = [
            [10,70,35,50,5,-50,-50,0,0,0],[10,70,35,50,-5,-50,-50,0,0,0],[10,70,30,50,0,-50,-50,0,90,0],[10,20,40,35,0,-50,-50,0,90,0],[10,30,40,70,0,-50,-50,0,90,0],
            [10,30,40,70,0,-50,-50,0,90,0],[10,10,35,85,0,-50,-50,90,0,0],[20,10,50,20,5,-50,-50,0,0,0],[20,10,50,20,-5,-50,-50,0,0,0],[20,10,50,25,0,-50,-50,90,0,0],
            [40,10,50,15,0,-50,-50,90,0,0],[10,40,65,35,5,-50,-50,0,0,0],[10,40,65,35,-5,-50,-50,0,0,0],[10,40,70,35,0,-50,-50,0,90,0],[10,20,60,35,0,-50,-50,0,90,0],
            [20,10,50,50,5,-50,-50,0,0,0],[20,10,50,50,-5,-50,-50,0,0,0],[20,10,50,45,0,-50,-50,90,0,0],[30,10,55,55,0,-50,-50,90,0,0],
        ];

        
        lettersOut['Q'] = [];
        lettersIn['Q'] = [];
        lettersOut['R'] = [];
        lettersIn['R'] = [];
        lettersOut['S'] = [];
        lettersIn['S'] = [];
        lettersOut['T'] = [];
        lettersIn['T'] = [];
        lettersOut['U'] = [];
        lettersIn['U'] = [];
        lettersOut['V'] = [];
        lettersIn['V'] = [];
        lettersOut['W'] = [];
        lettersIn['W'] = [];
        lettersOut['X'] = [];
        lettersIn['X'] = [];
        lettersOut['Y'] = [];
        lettersIn['Y'] = [];
        lettersOut['Z'] = [];
        lettersIn['Z'] = [];
        lettersOut['0'] = [];
        lettersIn['0'] = [];
        lettersOut['1'] = [];
        lettersIn['1'] = [];
        lettersOut['2'] = [];
        lettersIn['2'] = [];
        lettersOut['3'] = [];
        lettersIn['3'] = [];
        lettersOut['4'] = [];
        lettersIn['4'] = [];
        lettersOut['5'] = [];
        lettersIn['5'] = [];
        lettersOut['6'] = [];
        lettersIn['6'] = [];
        lettersOut['7'] = [];
        lettersIn['7'] = [];
        lettersOut['8'] = [];
        lettersIn['8'] = [];
        lettersOut['9'] = [];
        lettersIn['9'] = [];
        lettersOut[' '] = [];
        lettersIn[' '] = [];

    letterOut = lettersOut[char];
    for(var i=0; i < letterOut.length; i++){
        printPlate(canvas,'outSide',i,letterOut[i][0],letterOut[i][1],letterOut[i][2],letterOut[i][3],letterOut[i][4],letterOut[i][5],letterOut[i][6],letterOut[i][7],letterOut[i][8],letterOut[i][9]);
    }
    letterIn = lettersIn[char];
    for(var i=0; i < letterIn.length; i++){
        printPlate(canvas,'inSide',i+letterOut.length,letterIn[i][0],letterIn[i][1],letterIn[i][2],letterIn[i][3],letterIn[i][4],letterIn[i][5],letterIn[i][6],letterIn[i][7],letterIn[i][8],letterIn[i][9]);
    }
}

function printPlate(canvas,style,elementNum,sizeW,sizeH,posX,posY,posZ,offPosX,offPosY,rotateX,rotateY,rotateZ){
    plate = canvas.querySelectorAll("div")[elementNum];
    if (typeof(plate) == 'undefined' && plate == null){
        plate = document.createElement("div");
        canvas.appendChild(plate);
    }
    plate.setAttribute("class", style);
    plate.style.width = perS(minSize(canvas),sizeW)+'px';
    plate.style.height = perS(minSize(canvas),sizeH)+'px';
    plate.style.top = posY+'%';
    plate.style.left = posX+'%';
    trans(plate,  'translate('+offPosY+'%, '+offPosX+'%) rotateX('+rotateX+'deg) rotateY('+rotateY+'deg) rotateZ('+rotateZ+'deg) translateZ('+perS(minSize(canvas),posZ)+'px)');
}

document.onmousemove = function(e) {
    var ax = -(winW() / 2 - e.pageX) / 15;
    var ay = (winH() / 2 - e.pageY) / 15;
    for(var v = 0; v < threeDTextCont.length; v++){
        trans(threeDTextCont[v], 'rotateY(' + ax + 'deg) rotateX(' + ay + 'deg) translateZ(0)');
    }
};