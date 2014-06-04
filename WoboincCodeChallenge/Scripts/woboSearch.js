
var index = 0;

var searchObject = {
    searchItems: []
};

$("#searchForm").submit(function (event) {
    event.preventDefault();

    var url = "https://www.googleapis.com/books/v1/volumes?q=" + $("#searchBox").val().replace(' ', '\+') + '&startIndex=' + index;

    searchObject.searchItems = [];

    var searchData = $.getJSON(url, function (data) {
        for (var i = 0; i < data.items.length; i++) {
            var item = data.items[i];

            var subtitle = "";
            var thumbnailLink = "";
            var listPrice;
            var retailPrice;

            try {
                subtitle = item.volumeInfo.subtitle;
                thumbnailLink = item.volumeInfo.imageLinks.thumbnail;
                listPrice = (item.saleInfo.listPrice.amount).toFixed(2);
                retailPrice = (item.saleInfo.retailPrice.amount).toFixed(2);
            }
            catch (err) {
                console.log(err.message);
            }

            searchObject.searchItems.push({
                "title": item.volumeInfo.title,
                "subtitle": subtitle,
                "authors": item.volumeInfo.authors,
                "publisher": item.volumeInfo.publisher,
                "publicationDate": item.volumeInfo.publishedDate,
                "listPrice": listPrice,
                "retailPrice": retailPrice,
                "isEbook": item.saleInfo.isEbook,
                "thumbnail": thumbnailLink,
                "description": item.volumeInfo.description,
                "infoLink": item.volumeInfo.infoLink
            });
        }
    }).done(function () {
        $.ajax({
            url: '/Home/SearchResults',
            type: 'POST',
            data: JSON.stringify(searchObject),
            dataType: 'html',
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                $("#content").html(data);
                if (index == 0) {
                    $("#previousPage").hide();
                }
                else {
                    $("#previousPage").show();
                }

                $(".comment").shorten({
                    "showChars": 500
                });
                         
                $("#searchResultsPanel").show();
            }
        });
    });
    console.log(searchData);
});

$("#previousPage").click(function () {
    if (index > 0) {
        index -= 10;
        $("#searchSubmit").click();
    }
});

$("#nextPage").click(function () {
    index += 10;
    $("#searchSubmit").click();
});

$("#searchBox").on('change keyup paste', function () {
    index = 0;
});

$(document).ready(function () {
    $(".comment").shorten({
        "showChars": 50,
        "moreText": "See More",
        "lessText": "Less",
    });
});