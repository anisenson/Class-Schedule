$(document).ready(function () {
    // Button to submit what day it is
    const btn = $("#submitDay");


    // Bell Times
    const bellSchedule = {
        1: { start: '8:24 AM', end: '9:31 AM' },
        2: { start: '9:36 AM', end: '10:43 AM' },
        3: { start: '10:48 AM', end: '11:55 AM' },
        lunch: { start: '11:55 AM', end: '12:35 PM' },
        4: { start: '12:41 PM', end: '1:48 PM' },
        5: { start: '1:53 PM', end: '3:00 PM' }
    };


    // This shows what periods meet on each day (A to G)
    const dailyPeriods = {
        A: [1, 2, 3, "Lunch", 5, 6],
        B: [4, 1, 2, "Lunch", 7, 5],
        C: [3, 4, 1, "Lunch", 6, 7],
        D: [2, 3, 4, "Lunch", 5, 6],
        E: [1, 2, 3, "Lunch", 7, 5],
        F: [4, 1, 2, "Lunch", 6, 7],
        G: [3, 4, 7, "Lunch", 5, 6]
    };


    // When the button is clicked
    btn.on("click", function () {


        // Get the day input
        const selectedDay = $('#dayInput').val();

        $.ajax({
            url: `https://api.npoint.io/b13a50d34ac534a5970e`, // The npoint URL
            method: "GET",
            success: function (data) {
                const schedule = data.schedule; // Get the schedule from the response
                const daySchedule = dailyPeriods[selectedDay]; // Get the schedule for the selected day
                $('#scheduleList').empty(); // Clear the list before adding new items


                let bellIndex = 1; // Start with the first bell time


                // Go through each period in the day's schedule
                daySchedule.forEach(function (period) {
                    if (period === "Lunch") {//if it is lunch
                        const lunchTime = bellSchedule.lunch; // Get lunch time
                        $('#scheduleList').append(`
                            <tr>
                                <td>Lunch</td>
                                <td>${lunchTime.start} - ${lunchTime.end}</td>
                                <td colspan="3">Lunch Break</td>
                            </tr>
                        `);//adding lunch to the list
                    } else {
                        // Find the information for the current period
                        const periodData = schedule.find(function (item) {
                            return item.period === period && item.days.includes(selectedDay);
                        });
                        if (periodData) {
                            const time = bellSchedule[bellIndex]; // Get the bell time for this period
                            $('#scheduleList').append(`
                                <tr>
                                    <td>${period}</td>
                                    <td>${time.start} - ${time.end}</td>
                                    <td>${periodData.class}</td>
                                    <td>${periodData.teacher}</td>
                                    <td>${periodData.room}</td>
                                </tr>
                            `);//adding to the list
                            bellIndex++; //move to the next bell time
                        }
                    }
                });
            },
            error: function () {
                console.log("Connection Error"); // Log an error if the request fails
            },
        });
    });
});



