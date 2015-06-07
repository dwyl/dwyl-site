<script type="text/javascript" src="https://mandrillapp.com/api/docs/js/mandrill.js"></script>

var contact_form = (function (){
    var reveal = {
        sendMail:sendMail
    };
    /**
     *  Constructs the email for Mandrill
     *  which we will recieve
     */
    function createParams(email, location) { 
        var params = {
            "message": {
                "from_email":email,
                "to":[{"email":"hello@dwyl.io"}],
                "subject": email + "from" + location,
                "text": email
            }
        };
        return params;
    };
    /**
     *  TODO
     *  
     */
    m = new mandrill.Mandrill('qBeG3hIvdNoKYId0w6K-DQ');
     /**
     *  Send params with input value
     *  from contact form to Madrill
     */
    function sendMail() {
        var contactEmail = document.getElementById("email").value;
        var pathName = window.location.pathname;
        m.messages.send(createParams(contactEmail, pathName), function(res) {
            alert("You've signed up, thank you!")
        }, function(err) {
            alert('Error signing up, please email us at hello@dwyl.io');
        });
    }
    /**
     *  Returns object with the
     *  public methods
     */
    return reveal;
}());