function testFormat(formatType) {
    var format = null;
    
    if (formatType === 'zipcode') {
        //French zipcode format
      format = /^(?:[0-8]\d|9[0-8])\d{3}$/;
    }
    else if (formatType === 'mail') {
        //Email format
      format = /\S+@\S+\.\S+/;
    }
    else if (formatType === 'phone') {
        //French phone format
      format = /^(?:(?:\+|00)?\d{0,4}[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?)[\s|\d][1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/;
    }

    if (!format.test(document.getElementsByName(formatType)[0].value)) {
        //Displays the error message if format is incorrect
        document.getElementById(formatType + "Format").style.display = "block";
    }
    else if (format.test(document.getElementsByName(formatType)[0].value)) {
        //Removes the error message if format is correct
        document.getElementById(formatType + "Format").style.display = "none";
    }
  }