function myForm() {
    var myInput = document.getElementById("input1");
    if (myInput.checkValidity()) {
        document.getElementById("output1").innerHTML = "入力成功！";
        console.log(myInput.value);
    } else {
        document.getElementById("output1").innerHTML = myInput.validationMessage;
    }
}