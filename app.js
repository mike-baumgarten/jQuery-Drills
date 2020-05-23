

$(document).ready(function () {
    let $div = $("<div>", { class: "textBox" });
    $('body').append($div);
    $('#btnSubmit').click(function (e) {
        e.preventDefault()
        let $text = $('#textSubmit').val();
        // let $header2 = $("<h2>" + $text + "</h2>").addClass("header2");
        // $('div.textBox').append($header2)
        // $(".header2").mouseover(function () {
        //     $(this).css({"background-color": "red", "border-radius": "10px"})
        //     console.log('test')
        // })
    })
    $('#textSubmit').on('input', function () {
        if ($('#textSubmit').val() === '') {
            $('#btnSubmit').attr('disabled', 'disabled')
        } else {
            $('#btnSubmit').removeAttr('disabled')
        }
    });



});

