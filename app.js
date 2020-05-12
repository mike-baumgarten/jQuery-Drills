
// Waits for page to load before running
$(document).ready(function () {
    
    // Adds click function to id btnSubmit
    $('#btnSubmit').click(function () {
        // Grabs value from id textSubmit and alerts on it
        alert($('#textSubmit').val());
    })
    $('#textSubmit').on('input', function () {
        if ($('#textSubmit').val() === '') {
            $('#btnSubmit').attr('disabled', 'disabled')
        } else {
            $('#btnSubmit').removeAttr('disabled')
        }
    });
});
