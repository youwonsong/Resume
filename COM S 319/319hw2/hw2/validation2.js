function validate2() {
    valCheck1 = false;
    valCheck2 = false;
    valCheck3 = false;

    var resultemailCheck = emailCheck(document.getElementById("email").value);
    var resultphoneCheck = phoneCheck(document.getElementById("phone").value);
    var resultaddressCheck = addressCheck(document.getElementById("address").value);

    var image1 = getImage(Boolean(resultemailCheck), "email");
    var image2 = getImage(Boolean(resultphoneCheck), "phone");
    var image3 = getImage(Boolean(resultaddressCheck), "address");

    var labelNotifyemail = getNotificationemail(Boolean(resultemailCheck), "email");
    var labelNotifyphone = getNotificationphone(Boolean(resultphoneCheck), "phone");
    var labelNotifyaddress = getNotificationaddress(Boolean(resultaddressCheck), "address");

    document.getElementById("i1").appendChild(image1);
    document.getElementById("i1").appendChild(labelNotifyemail);

    document.getElementById("i2").appendChild(image2);
    document.getElementById("i2").appendChild(labelNotifyphone);

    document.getElementById("i3").appendChild(image3);
    document.getElementById("i3").appendChild(labelNotifyaddress);


    if (valCheck1 && valCheck2 && valCheck3) {

        alert('Validation Success.');
        document.getElementById("myForm").submit();

        document.location.href = "validation1.html";

    }
}

function getNotificationemail(bool, ID) {
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        // label.className = "errorMessage";
        label.setAttribute('class', 'errorMessage');
    }

    label.innerHTML = bool ? "" : "Email should be in form xxx@xxx.xxx, which x should be alphanumeric!";
    return label;
}

function getNotificationphone(bool, ID) {
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        // label.className = "errorMessage";
        label.setAttribute('class', 'errorMessage');
    }

    label.innerHTML = bool ? "" : "Must be in the form xxx-xxx-xxxx or xxxxxxxxxx. x should be numeric";
    return label;
}

function getNotificationaddress(bool, ID) {
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        // label.className = "errorMessage";
        label.setAttribute('class', 'errorMessage');
    }

    label.innerHTML = bool ? "" : "Must be in the form of city & state. example: Ames,IA";
    return label;
}

function getImage(bool, ID) {
    var image = document.getElementById("image" + ID);
    if (image == null) {
        image = new Image(15, 15);
        image.id = "image" + ID;
    }
    image.src = bool ? './correct.png' : './wrong.png';
    return image;
}

function emailCheck(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        valCheck1 = true;
        return true;
    }
    valCheck1 = false;
    return false;
}

function phoneCheck(phone) {
    var phoneRule = /^\(?([0-9]{3})\)?[- ]?([0-9]{3})[- ]?([0-9]{4})$/;
    if (phone.match(phoneRule)) {
        valCheck2 = true;
        return true;
    }
    valCheck2 = false;
    return false;
}

function addressCheck(address) {
    if (/^\w+(, \w+)*$/.test(address)){
        valCheck3 = true;
        return true;
    }
    valCheck3 = false;
    return false;
}

function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
