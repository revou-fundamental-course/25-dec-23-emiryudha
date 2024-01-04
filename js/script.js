var stateCalc = "Width"

const sectionWidthTitle = "Luas Segitiga"
const sectionWidthInput = "Hitung luas segitiga"
const textWidthFormula = "Rumus luas segitiga yaitu:"
const widthFormula = "L = <sup>1</sup>/<sub>2</sub> x a x t"
const legendWidthFormula = "<p>Di mana:</p><p>L = Luas</p><p>a = Alas</p><p>t = Tinggi</p>"
const widthButton = document.getElementById("width-btn")

const sectionAreaTitle = "Keliling Segitiga"
const sectionAreaInput = "Hitung keliling segitiga"
const textAreaFormula = "Rumus keliling segitiga yaitu:"
const areaFormula = "K = a + b + c"
const legendAreaFormula = "<p>Di mana:</p><p>K = Keliling</p><p>a = Sisi a</p><p>b = Sisi b</p><p>c = Sisi c</p>"
const areaButton = document.getElementById("area-btn")

document.getElementById("title-title").innerHTML=sectionWidthTitle
document.getElementById("text-formula").innerHTML=textWidthFormula
document.getElementById("the-formula").innerHTML= widthFormula
document.getElementById("legend-formula").innerHTML=legendWidthFormula
document.getElementById("input-title").innerHTML=sectionWidthInput

function displayWidth(){
    stateCalc = "Width";
    document.getElementById("title-title").innerHTML=sectionWidthTitle;
    document.getElementById("text-formula").innerHTML=textWidthFormula;
    document.getElementById("the-formula").innerHTML= widthFormula;
    document.getElementById("legend-formula").innerHTML=legendWidthFormula;
    document.getElementById("input-title").innerHTML=sectionWidthInput;

    if (document.getElementById("area-input").style.display === "flex") {
        document.getElementById("area-input").style.display = "none";
        document.getElementById("width-input").style.display = "flex";
    } else {
        document.getElementById("area-input").style.display = "none";
        document.getElementById("width-input").style.display = "flex";
    }

    areaButton.style.color="black";
    areaButton.style.backgroundColor = "rgba(255, 255, 255, 0)";
    widthButton.style.color="white";
    widthButton.style.backgroundColor = "#393E46";

    resetPage();
}

function displayArea(){
    stateCalc = "Area"
    document.getElementById("title-title").innerHTML=sectionAreaTitle;
    document.getElementById("text-formula").innerHTML=textAreaFormula;
    document.getElementById("the-formula").innerHTML= areaFormula;
    document.getElementById("legend-formula").innerHTML=legendAreaFormula;
    document.getElementById("input-title").innerHTML=sectionAreaInput;

    if (document.getElementById("width-input").style.display === "flex") {
        document.getElementById("width-input").style.display = "none";
        document.getElementById("area-input").style.display = "flex";
    } else {
        document.getElementById("width-input").style.display = "none";
        document.getElementById("area-input").style.display = "flex";
    }
    widthButton.style.color="black";
    widthButton.style.backgroundColor = "rgba(255, 255, 255, 0)";
    areaButton.style.color="white";
    areaButton.style.backgroundColor = "#393E46";

    resetPage();
}

function calculateTriangle(){
    var calcResult = document.getElementById("calc-result")
    var alas = document.getElementById("width-base").value;
    var tinggi = document.getElementById("width-height").value;
    var a = document.getElementById("side-a").value;
    var b = document.getElementById("side-b").value;
    var c = document.getElementById("side-c").value;

    if(stateCalc === "Width"){
        var result = 0.5 * parseFloat(alas) * parseFloat(tinggi);
        if(!isNaN(result)){
            var p1 = widthFormula;
            var p2 = "L = <sup>1</sup>/<sub>2</sub> x " + alas + " x " + tinggi;
            var p3 = "L = " + result;
            calcResult.style.display = "flex";
            calcResult.innerHTML = "<pre>" + p1 + "\n" + p2 + "\n"+ p3 + "</pre>";
        } else {
            calcResult.style.display = "flex";
            calcResult.innerHTML = "Please input only numeric characters!";
        }
        
    } else {
        var result = parseFloat(a) + parseFloat(b) + parseFloat(c)
        console.log(a,b,c,result)
        if(!isNaN(result)){
            var p1 = areaFormula;
            var p2 = "K = " + a + " + " + b + " + " + c;
            var p3 = "K = " + result;
            calcResult.style.display = "flex";
            calcResult.innerHTML = "<pre>" + p1 + "\n" + p2 + "\n"+ p3 + "</pre>";
        } else {
            calcResult.style.display = "flex";
            calcResult.innerHTML = "Please input only numeric characters!";
        }
    }
}

function resetPage(){
    document.getElementById("width-base").value = "";
    document.getElementById("width-height").value = "";
    document.getElementById("side-a").value = "";
    document.getElementById("side-b").value = "";
    document.getElementById("side-c").value = "";
    document.getElementById("calc-result").style.display = "none";
    document.getElementById("calc-result").innerHTML = "";
}