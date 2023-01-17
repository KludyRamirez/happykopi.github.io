function sendEmail(){
Email.send({
    Host : "smtp.elasticemail.com",
    Username : "ramirezkludy23@gmail.com",
    Password : "634D8094CCBA8D76254AF39BB80C7472582E",
    To : 'ramirezkludy23@gmail.com',
    From : 'ramirezkludy23@gmail.com',
    Subject : "New Contact Form Inquiry",
    Body : "Name: " + document.getElementById("name").value +
           "<br> Email: " + document.getElementById("email").value +
           "<br> Location: " + document.getElementById("country").value +
           "<br> Message: " + document.getElementById("subject").value,
}).then(
  message => alert("Message Sent Successfully!")
);
}