var prompt = require("prompt-sync")();
const fs = require('fs')



var lang = {
    "titleQ": "cím: ",
    "bgcolorQ": "háttérszín: ",
    "fontcolorQ": "szöveg színe: ",
    "correctQ": "helyes válasz: ",
    "incorrectQ": "helytelen válasz: ",
    "endQ": "vége: ",
    "doneQ": "parancs lefuttatása miután vége a programnak [require('electron').ipcRenderer.send('close')]: ",
    "fontsizeQ": "szöveg mérete: ",
    "howManyQ": "mennyi kérdés legyen: ",
    "questionQ": "$count. kérdés: ",
    "Wanswer1Q": "első rossz válasz: ",
    "Wanswer2Q": "második rossz "
}

var template = `{
    "$title": [],
    "b": "$bgcolor",
    "f": "$fontcolor",

    "j": "$correct",
    "r": "$incorrect",
    "k": "$end",

    "a": "$done",

    "fs": "$fontsize"
}`

var templateQ = `{
    "k": "$question",
    "r": [
        "$incorrectanswer1",
        "$incorrectanswer2",
        "$incorrectanswer3"
    ],
    "j": "$correctanswer"
}`

var endObj = {}

var title = prompt(lang.titleQ);
var bgcolor = prompt(lang.bgcolorQ)
var fontcolor = prompt(lang.fontcolorQ)
var correct = prompt(lang.correctQ)
var incorrect = prompt(lang.incorrectQ)
var end = prompt(lang.endQ)
var fontsize = prompt(lang.fontsizeQ)
var done = prompt(lang.doneQ)
if (!done) {
    done = "require('electron').ipcRenderer.send('close')"
};

template = template
    .replace("$title", title)
    .replace("$bgcolor", bgcolor)
    .replace("$fontcolor", fontcolor)
    .replace("$correct", correct)
    .replace("$incorrect", incorrect)
    .replace("$end", end)
    .replace("$done", done)
    .replace("$fontsize", fontsize);

var Qcount = prompt(lang.howManyQ);



fs.writeFileSync("out.json", template);




