function writeToHtml() {
    document.write(<p>5 + 6</p>);
}

function writeToHtmlElements() {
    document.getElementById('recjs1').innerHTML = "11";
}

function writeToAlert() {
    window.alert(11)
}

function writeToConsole() {
    console.log(11);
}

var developer = {              //開発者を記録するクラス
    firstName: "Haojie",
    lastName: "Li",
    fullName: function () {
        return this.lastName + " " + this.firstName;
    },
    stamp: function () {
        console.log(" 　　　∧,,∧");
        console.log(" 　　 (・ω・｀) /|　");
        console.log(" 　／くＴ￣￣二=二] 三二─");
        console.log(" 　￣￣￣＼二＼");
        console.log("Developede  By " + this.fullName());
    }
    // 　　　∧,,∧
    // 　　 (・ω・｀) /|　
    // 　／くＴ￣￣二=二] 三二─
    // 　￣￣￣＼二＼
}