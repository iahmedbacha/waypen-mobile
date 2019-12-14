function Recognizer(language, version) {
    this.language = (typeof (language) === "undefined" || !language) ? "en-US" : language;
    this.version = (typeof (version) === "undefined" || !version) ? 1 : version;

    this.strokes = [];

    Recognizer.prototype.addStroke = function (id, data) {
        this.strokes.push({
            "id": id,
            "points": data
        });
    };

    Recognizer.prototype.data = function () {
        var cloudIAFormat = {
            version: this.version,
            language: this.language,
            strokes: this.strokes
        };
        return JSON.stringify(cloudIAFormat);
    };
}