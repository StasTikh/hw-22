function inMaBo() {

    let height = +getHeight.value;

    if (height > 2.72) { 
        height = height / 100;
    } //According to Wikipedia, such a height has Robert Wadlow, known as tallest person in history

    let mass = +getWeight.value;


    let checkBox = getMeaning.checked;

    
    function showCheckBox() {
        if (getWeight.value != 0 && getHeight.value != 0) {
            document.getElementById('meaningCheckBox').style.display = "block";
        } else {
            document.getElementById('meaningCheckBox').style.display = "none";
        }
    }

    

    let index = mass / (height * height);

    index = Math.round (index * 100) / 100;

    indexAnswer.innerHTML = index;
    if (checkBox) {
        if (index <= 16) {
            document.getElementById('outputInfoParagraph').classList.add('text-danger')
            document.getElementById('outputInfoParagraph').style.visibility = "visible"
            placeForInfo.innerHTML = ("Very severely underweight (You need to eat much more!)"); //According to Wikipedia
        } else if (index > 16 && index < 18.5) {
            document.getElementById('outputInfoParagraph').classList.add('text-warning')
            document.getElementById('outputInfoParagraph').style.visibility = "visible"
            placeForInfo.innerHTML = ("Severely underweight (You need to eat a bit more)"); //According to Wikipedia
        } else if (index > 18.5 && index <= 25) {
            document.getElementById('outputInfoParagraph').classList.add('text-success')
            document.getElementById('outputInfoParagraph').style.visibility = "visible"
            placeForInfo.innerHTML = ("Normal (healthy weight)"); //According to Wikipedia
        } else if (index > 25 && index <= 30) {
            document.getElementById('outputInfoParagraph').classList.add('text-warning')
            document.getElementById('outputInfoParagraph').style.visibility = "visible"
            placeForInfo.innerHTML = ("Overweight (You need to go gym)"); //According to Wikipedia
        } else if (index > 30 && index <= 35) {
            document.getElementById('outputInfoParagraph').classList.add('text-warning')
            document.getElementById('outputInfoParagraph').style.visibility = "visible"
            placeForInfo.innerHTML = ("Obese Class I (Moderately obese, stop eating unhealty food)"); //According to Wikipedia
        } else if (index > 35 && index <= 40) {
            document.getElementById('outputInfoParagraph').classList.add('text-danger')
            document.getElementById('outputInfoParagraph').style.visibility = "visible"
            placeForInfo.innerHTML = ("Obese Class II (Severely obese, stop eating unhealthy food and o to gym)"); //According to Wikipedia
        } else if (index > 40) {
            document.getElementById('outputInfoParagraph').classList.add('text-danger')
            document.getElementById('outputInfoParagraph').style.visibility = "visible"
            placeForInfo.innerHTML = ("Obese Class III (Very severely obese, stop eating immediately!!!)"); //According to Wikipedia
        }
    }

    return showCheckBox;
}


