function check(puzName) {
    const puzzles = {
        dream: "LIVEALIE",
        rhizome : "POLLINATED",
        meta : "CRACKOPENACOLDONE",
        sleep: "THEMCRIBISBACK",
        walk: "STROLLER",
        cat: "INCOMPLETE",
        stir: "FROTHED",
    };
    // reset both correct and incorrect answers
    document.getElementById("result").innerHTML = "";
    document.getElementById("correctAnswer").innerHTML = "";
    var inp = document.getElementById("textBox").value;
    var x = convert(inp);
    if (x === puzzles[puzName]) {document.getElementById("correctAnswer").innerHTML = "YAYY ! ! ! THAT'S CORRECT";}
    else {document.getElementById("result").innerHTML = "that's wrong ,, keep thonkin! :0"}
  }

function convert(input) {
    // remove the spaces between letters
    noSpace = input.replace(/\s/g, "");
    // turn to all caps
    allCaps = noSpace.toUpperCase();
    return allCaps;
}