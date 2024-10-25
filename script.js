$(function () {
const btn = $("#submitDay")

btn.on('click', function() {
    $.ajax({
        url: `https://api.npoint.io/b13a50d34ac534a5970e`,
        method: 'GET',
    })
})



});