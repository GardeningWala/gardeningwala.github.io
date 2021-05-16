$(document).ready(function (){
    $('.btn').click(function (event) {

        var email = $('.email').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()

        if (email.length > 5 && email.includes('@') && email.includes('.')){
            console.log('Email Is Valid')
        }
        else {
            event.preventDefault()
            statusElm.append('<div>Email Is Not Valid</div>')
        }

        if (message.length < 5){
            event.preventDefault()
            statusElm.append('<div>Message Is Not Valid</div>')  
        }
    })
})