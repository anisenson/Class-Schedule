$(document).ready(function () {
    const btn = $("#submitDay");    //set btn to the button

    const bellSchedule = {
        1: { start: '8:24 AM', end: '9:31 AM' },
        2: { start: '9:36 AM', end: '10:43 AM' },
        3: { start: '10:48 AM', end: '11:55 AM' },
        lunch: { start: '12:00 PM', end: '12:35 PM' },
        4: { start: '12:41 PM', end: '1:48 PM' },
        5: { start: '1:53 PM', end: '3:00 PM' }
    };
    
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