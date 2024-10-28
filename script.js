$(document).ready(function () {
    const btn = $("#submitDay");    //set btn to the button

    btn.on('click', function () {   //on click, run function

       
        const selectedDay = $("#dayInput"); // the selected day

        
        $.ajax({ 
            url: `https://api.npoint.io/b13a50d34ac534a5970e`, // ajax file
            method: 'GET', //gets the file
            success: function (data) {
                const schedule = data.schedule
                console.log(schedule);
    
            },
            error: function () { //error alert if file doesnt work
                alert("Theres a connection error");
            }
        });







    })
})