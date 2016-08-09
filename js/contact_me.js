$(function() {

    $(".contactForm input,.contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            $("[type=submit]").prop("disabled", true); //prevent submit behaviour
            // get values from FORM
            var name = $form.find("input[name=name]").val();
            var email = $form.find("input[name=email]").val();
            var phone = $form.find("input[name=phone]").val();
            var message = $form.find("input[name=message]").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "././mail/contact_me.php",
                type: "POST",
                data: {
                    name: name,
                    phone: phone,
                    email: email,  
                    message: message
                },
                cache: false,
                success: function() {
                    // Success message
                    $('.success').html("<div class='alert alert-success'>");
                    $('.success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('.success > .alert-success')
                        .append("<strong>Ваше сообщение успешно отправлено. В ближайшее время наши менеджеры свяжутся с вами! </strong>");
                    $('.success > .alert-success')
                        .append('</div>');

                    // remove prevent submit behaviour
                    $("[type=submit]").prop("disabled", false);  

                    //clear all fields
                    $('.contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('.success').html("<div class='alert alert-danger'>");
                    $('.success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('.success > .alert-danger').append("<strong>Приносим свои извинения, " + firstName + ", но наш почтовый сервер времено не работает. Попробуйте, отправить сообщение еще раз и сообщите нам о проблеме!");
                    $('.success > .alert-danger').append('</div>');

                    // remove prevent submit behaviour
                    $("[type=submit]").prop("disabled", false); 

                    //clear all fields
                    $('.contactForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('.success').html('');
});