function generateCode() {
    var code = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$'

    for (i =1; i <=8; i++){
        var char = Math.random()* str.length;
        code +=str.charAt(char)
    }
    return code;
}

document.getElementById("codes").innerHTML = generateCode();

function disableButton() {
    document.getElementById("submit").disable = true;
}
disableButton();