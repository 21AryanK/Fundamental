function validateEmail(email) { //Validates the email address
    var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    console.log(emailRegex.test(email));
    return emailRegex.test(email);
}

function validatePhone(phone) { //Validates the phone number
    var phoneRegex = /^(\+91-|\+91|0)?\d{10}$/; // Change this regex based on requirement
    console.log(phoneRegex.test(phone));
    console.log(phone);

    return phoneRegex.test(phone);
}

export {validateEmail, validatePhone};