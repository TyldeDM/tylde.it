$(document).ready(function () {

    // tbName
    var fillA = $('#tbName').val();

    $('#tbName')
    .on('focus', function () {
        $(this).val('');
    })
    .on('blur', function () {
        if ($('#tbName').val() == "") {
            $(this).val(fillA);
        }
    });


    // tbName
    var fillB = $('#tbMail').val();

    $('#tbMail')
    .on('focus', function () {
        $(this).val('');
    })
    .on('blur', function () {
        if ($('#tbMail').val() == "") {
            $(this).val(fillB);
        }
    });

    // tbMessage
    var fillC = $('#tbMessage').val();

    $('#tbMessage')
    .on('focus', function () {
        $(this).val('');
    })
    .on('blur', function () {
        if ($('#tbMessage').val() == "") {
            $(this).val(fillC);
        }
    });
});
