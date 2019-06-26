function getEvent(page) {
    $.ajax({
        type:"GET",
        url:"https://api.stubhub.com/sellers/search/events/v3"
    })
}