var request = "";
var inkRecognzier;
var inkCanvas;
var words;
var strokes = [];
var count = 0;

document.addEventListener("message", function(data) {
    alert(data);
});

function init() {
    inkRecognizer = new Recognizer();
    inkCanvas = new InkCanvas('inkCanvas');
    count = 0;

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

function next() {
    inkCanvas.strokes.map(stroke => {
        stroke.points.map(point => {
            point.x += inkCanvas.width*count;
        });
        strokes.push(stroke);
    });
    inkCanvas.clear();
    count++;
    if (count === words.length) {
        document.getElementById('nextButton').style.display = 'none';
        document.getElementById('finishButton').style.display = 'inline-block';
    }
}

function postMessage(request) {
    window.ReactNativeWebView.postMessage(request);
}

function finish() {
    inkRecognizer = new Recognizer();

    strokes.map(function (stroke) {
        var strokeString = stroke.toJsonString(PIXEL_TO_MILLIMETERS);
        inkRecognizer.addStroke(stroke.id, strokeString);
    });

    request = JSON.stringify(JSON.parse(inkRecognizer.data()), null, 2);
    postMessage(request);
}