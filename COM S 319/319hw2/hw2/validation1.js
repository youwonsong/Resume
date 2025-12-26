function validate1() {
    
    valCheck1 = false;
    valCheck2 = false;
    valCheck3 = false;
    valCheck4 = false;
    
    var resultfnameCheck = fnameCheck(document.getElementById("fname").value);
    var resultlnameCheck = lnameCheck(document.getElementById("lname").value);
    var resultgenderCheck = genderCheck(document.getElementById("gender").value);
    var resultstateCheck = stateCheck(document.getElementById("state").value);

    var image1 = getImage(Boolean(resultfnameCheck), "fname");
    var image2 = getImage(Boolean(resultlnameCheck), "lname");
    var image3 = getImage(Boolean(resultgenderCheck), "gender");
    var image4 = getImage(Boolean(resultstateCheck), "state");

    var labelNotifyfname=getNotificationfname(Boolean(resultfnameCheck), "fname") ;
    var labelNotifylname=getNotificationlname(Boolean(resultlnameCheck), "lname") ;
    var labelNotifygender=getNotificationgender(Boolean(resultgenderCheck), "gender") ;
    var labelNotifystate=getNotificationstate(Boolean(resultstateCheck), "state") ;

    document.getElementById("i1").appendChild(image1);
    document.getElementById("i1").appendChild(labelNotifyfname);

    document.getElementById("i2").appendChild(image2);
    document.getElementById("i2").appendChild(labelNotifylname);

    document.getElementById("i3").appendChild(image3);
    document.getElementById("i3").appendChild(labelNotifygender);

    document.getElementById("i4").appendChild(image4);
    document.getElementById("i4").appendChild(labelNotifystate);


    if (valCheck1 && valCheck2 && valCheck3 && valCheck4) {

        alert('Validation Success.');
        document.getElementById("myForm").submit();
    
        document.location.href = "validation2.html";
    
    }
}


function getNotificationfname(bool, ID) {
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        // label.className = "errorMessage";
        label.setAttribute( 'class', 'errorMessage' );
      }

    label.innerHTML = bool ? "" : "Must contain only alphabetic or numeric characters";
    return label;
}


function getNotificationlname(bool, ID) {
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        // label.className = "errorMessage";
        label.setAttribute( 'class', 'errorMessage' );
      }

    label.innerHTML = bool ? "" : "Must contain only alphabetic or numeric characters";
    return label;
}


function getNotificationgender(bool, ID) {
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        // label.className = "errorMessage";
        label.setAttribute( 'class', 'errorMessage' );
      }

    label.innerHTML = bool ? "" : "Select from given list";
    return label;
}


function getNotificationstate(bool, ID) {
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        // label.className = "errorMessage";
        label.setAttribute( 'class', 'errorMessage' );
      }

    label.innerHTML = bool ? "" : "Select from given list";
    return label;
}


function fnameCheck(fname) {
    if (alphaNumCheck(fname)) {
        valCheck1=true;
        return true;
    }
    valCheck1 = false;
    return false;
}


function lnameCheck(lname) {
    if (alphaNumCheck(lname)) {
        valCheck2=true;
        return true;
    }
    valCheck2 = false;
    return false;
}


function genderCheck(gender) {
    var ddl = document.getElementById("gender");
    if (ddl.selectedIndex != 0) {
        valCheck3=true;
        return true;
    }
    valCheck3 = false;
    return false;
}


function stateCheck(state) {
    var ddl = document.getElementById("state");
    if (ddl.selectedIndex != 0) {
        valCheck4=true;
        return true;
    }
    valCheck4 = false;
    return false;
}

function getImage(bool, ID) {
    var image = document.getElementById("image" + ID);
    if (image == null) {
        image = new Image(15, 15);
        image.id = "image" + ID;
    }
    image.src = bool ? 'correct.png' : 'wrong.png';
    return image;
}

function alphaNumCheck(entry) {
    let regex = /^[a-z0-9]+$/i;
    if (entry != null && entry.match(regex)) {
        return true;
    } else {
        return false;
    }
}

function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}