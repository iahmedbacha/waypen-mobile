var request = "";
var inkRecognzier;
var inkCanvas;
var words;
var strokes = [];
var count = 0;

function init() {
    inkRecognizer = new Recognizer();
    inkCanvas = new InkCanvas('inkCanvas');
    count = 0;

    setTimeout(() => {
        document.getElementById('wordSpan').innerHTML = words[0];
      }, 50);

    document.getElementById('clearButton').addEventListener("click", function () {
        clear();
    }, false);
    document.getElementById('nextButton').addEventListener("click", function () {
        next();
    }, false);
    document.getElementById('finishButton').addEventListener("click", function () {
        finish();
    }, false);
}

function clear() {
    inkCanvas.clear();
}

function addWord() {
    inkCanvas.strokes.map(stroke => {
        stroke.points.map(point => {
            point.x += inkCanvas.width*count;
        });
        strokes.push(stroke);
    });
}

function next() {
    addWord();
    inkCanvas.clear();
    count++;
    if (count === words.length - 1) {
        document.getElementById('nextButton').style.display = 'none';
        document.getElementById('finishButton').style.display = 'inline-block';
    }
    document.getElementById('wordSpan').innerHTML = words[count];
}

function finish() {
    addWord();

    inkRecognizer = new Recognizer();

    strokes.map(function (stroke) {
        var strokeString = stroke.toJsonString(PIXEL_TO_MILLIMETERS);
        inkRecognizer.addStroke(stroke.id, strokeString);
    });

    request = JSON.stringify(JSON.parse(inkRecognizer.data()), null, 2);
    showRequest();
}

function showRequest() {
    console.log(request.toString());
    alert(request.toString());
}