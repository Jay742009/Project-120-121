console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('MobileNet', modelloaded);

function modelloaded() {
    console.log('modelloaded');
}

image_1 = document.getElementById("img_1");
classifier.classify(image_1, gotresult_1);

function gotresult_1(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("sp_1").innerHTML = results[0].label;
        document.getElementById("heading_1").innerHTML = "Google lens is more accurate than MobileNet model";
    }
}



image_2 = document.getElementById("img_2");
classifier.classify(image_2, gotresult_2);

function gotresult_2(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("sp_2").innerHTML = results[0].label;
        document.getElementById("heading_2").innerHTML = "Google lens is more accurate than MobileNet model";
    }
}



image_3 = document.getElementById("img_3");
classifier.classify(image_3, gotresult_3);

function gotresult_3(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("sp_3").innerHTML = results[0].label;
        document.getElementById("heading_3").innerHTML = "Google lens is more accurate than MobileNet model";
    }
}



image_4 = document.getElementById("img_4");
classifier.classify(image_4, gotresult_4);

function gotresult_4(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("sp_4").innerHTML = results[0].label;
        document.getElementById("heading_4").innerHTML = "Google lens is more accurate than MobileNet model";
    }
}



image_5 = document.getElementById("img_5");
classifier.classify(image_5, gotresult_5);

function gotresult_5(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("sp_5").innerHTML = results[0].label;
        document.getElementById("heading_5").innerHTML = "Google lens is more accurate than MobileNet model";
    }
}