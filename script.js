
$(document).ready(function () {
    const btn = $("#submitDay");

    btn.on('click', function () {
        const selectedDay = $("#dayInput");

        
        $.ajax({
            url: `https://api.npoint.io/b13a50d34ac534a5970e`,
            method: 'GET',
            success: function (data) {
                const schedule = data.schedule
                console.log(schedule);
    
            },
            error: function () {
                alert("Theres a connection error");
            }
        });
    })
})