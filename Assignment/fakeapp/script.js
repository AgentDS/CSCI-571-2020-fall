const TextArea = document.getElementsByName('ticker_name')[0];
const SubmitButton = document.getElementById('submit_but');
const ResetButton = document.getElementById('reset_but');
const urlArrowDown = "https://csci571.com/hw/hw6/images/RedArrowDown.jpg";
const urlArrowUp = "https://csci571.com/hw/hw6/images/GreenArrowUp.jpg";

//var searchResult = document.getElementById("search_result");
//var searchErrorResult = document.getElementById("error_search_result");
//var outlookContent = document.getElementById("outlook-content");
//var summaryContent = document.getElementById("summary-content");
//var chartsContent = document.getElementById("charts-content");
//var newsContent = document.getElementById("news-content");


//function search(event) {
//    let tickerName = TextArea.value.trim();
//    let tickerNameLen = tickerName.length;
//    if (tickerNameLen >= 1) {
//        event.preventDefault();
//        get_company_outlook(tickerName);
//        get_stock_summary(tickerName);
//        get_charts(tickerName);
//        get_news(tickerName);
//
//    }
//}

function reset(event) {
    showResult("off");
    showErrorResult("off");
}

// write and show outlook at first
//function writeCompanyOutlook(response) {
//    showErrorResult("off");
//    showResult("off");
//    if (Object.keys(response).length === 0) {
//        console.log("Empty outlook JSON, no such stock");
//        showErrorResult("on");
//    } else {
//        showOutlook("on");
//        let outlookTable = "<table>";
//        outlookTable += "<tr><th>Company Name</th><td>" + response["name"] + "</td></tr>";
//        outlookTable += "<tr><th>Stock Ticker Symbol</th><td>" + response["ticker"] + "</td></tr>";
//        outlookTable += "<tr><th>Stock Exchange Code</th><td>" + response["exchangeCode"] + "</td></tr>";
//        outlookTable += "<tr><th>Company Start Date</th><td>" + response["startDate"] + "</td></tr>";
//        outlookTable += "<tr><th rowspan=\'5\'>Description</th><td rowspan=\'5\'><p>" + response["description"] + "</p></td></tr>";
//        outlookTable += "<tr></tr><tr></tr><tr></tr><tr></tr></table>";
//        outlookContent.innerHTML = outlookTable;
//
//        resetTabLinks();
//        showResult("on");
//    }
//}


// write but not show summary at first
//function writeStockSummary(response) {
//    if (Object.keys(response).length === 0) {
//        console.log("Empty summary JSON, no such stock");
//    } else {
//        showSummary("off");
//        let summaryTable = "<table>";
//        summaryTable += "<tr><th>Stock Ticker Symbol</th><td>" + response["ticker"] + "</td></tr>";
//        summaryTable += "<tr><th>Trading Day</th><td>" + response["timestamp"] + "</td></tr>";
//        summaryTable += "<tr><th>Previous Closing Price</th><td>" + response["prevClose"] + "</td></tr>";
//        summaryTable += "<tr><th>Opening Price</th><td>" + response["open"] + "</td></tr>";
//        summaryTable += "<tr><th>High Price</th><td>" + response["high"] + "</td></tr>";
//        summaryTable += "<tr><th>Low Price</th><td>" + response["low"] + "</td></tr>";
//        summaryTable += "<tr><th>Last Price</th><td>" + response["last"] + "</td></tr>";
//        summaryTable += "<tr><th>Change</th><td>" + response["change"];
//        if (response["change"][0] === "-") {
//            summaryTable += "<img src=\'" + urlArrowDown + "\' alt=\'ArrowDown\' ";
//        } else {
//            summaryTable += "<img src=\'" + urlArrowUp + "\' alt=\'ArrowUp\' ";
//        }
//        summaryTable += "class=\'table-img\'></td></tr>";
//        summaryTable += "<tr><th>Change Percent</th><td>" + response["changePercent"];
//        if (response["changePercent"][0] === "-") {
//            summaryTable += "<img src=\'" + urlArrowDown + "\' alt=\'ArrowDown\' ";
//        } else {
//            summaryTable += "<img src=\'" + urlArrowUp + "\' alt=\'ArrowUp\' ";
//        }
//        summaryTable += "class=\'table-img\'></td></tr>";
//        summaryTable += "<tr><th>Number of Shared Traded</th><td>" + response["volume"] + "</td></tr>";
//        summaryTable += "</table>";
//        summaryContent.innerHTML = summaryTable;
//    }
//}

// write but not show news at first
//function writeLatestNews(response) {
//    let newsArray = response["latest_news"];
//    showNews("off");
//    let latestNews = "";
//    let newsNum = newsArray.length;
//    let i;
//    console.log("news number: " + newsNum);
//    for (i = 0; i < newsNum; i++) {
//        latestNews += "<div class=\'news-box\'><div class=\'center-crop-img\'>";
//        latestNews += "<img class=\'news-img\' alt=\'urlImage\' src=\'" + newsArray[i]["urlToImage"] + "\'/></div>";
//        latestNews += "<div class=\'news-text\'><p><b>" + newsArray[i]["title"] + "</b></p>";
//        latestNews += "<p>Published Date: <span>" + newsArray[i]["publishedAt"] + "</span></p>";
//        latestNews += "<p><a href=\'" + newsArray[i]["url"] + "\' target=\"_blank\">See Original Post</a></p>";
//        latestNews += "</div></div>";
//    }
//    newsContent.innerHTML = latestNews;
//}

function writeCharts(response) {
    console.log("response type: " + typeof (response));

    showCharts("off");

    let charts = "";


    // chartsContent.innerHTML = response;
}


// Highcharts.setOptions({
//     chart: {
//         backgroundColor: {
//             linearGradient: [0, 0, 500, 500],
//             stops: [
//                 [0, 'rgb(255, 255, 255)'],
//                 [1, 'rgb(240, 240, 255)']
//             ]
//         },
//         borderWidth: 2,
//         plotBackgroundColor: 'rgba(255, 255, 255, .9)',
//         plotShadow: true,
//         plotBorderWidth: 1
//     }
// });

// var chart1 = new Highcharts.Chart({
//     chart: {
//         renderTo: 'charts_area1',
//     },
//     xAxis: {
//         type: 'datetime'
//     },
//     series: [{
//         data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
//         pointStart: Date.UTC(2010, 0, 1),
//         pointInterval: 3600 * 1000 // one hour
//     }]
// });

// var chart2 = new Highcharts.Chart({
//     chart: {
//         renderTo: 'charts_area2',
//         type: 'column'
//     },
//     xAxis: {
//         type: 'datetime'
//     },
//     subtitle: {
//         text: '<a href="https://api.tiingo.com/" target="_blank">Sourse: Tiingo</a>',
//         useHTML: true
//     },
//
//     series: [{
//         data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
//         pointStart: Date.UTC(2010, 0, 1),
//         pointInterval: 3600 * 1000 // one hour
//     }]
// });

// TODO: highcharts area
 Highcharts.stockChart('container', {
    navigation: {
      bindingsClassName: 'tools-container' // informs Stock Tools where to look for HTML elements for adding technical indicators, annotations etc.
    },

    stockTools: {
      gui: {
        enabled: false // disable the built-in toolbar
      }
    },

    series: [{
      id: 'aapl',
      name: 'AAPL',
      data: [],
      tooltip: {
        valueDecimals: 2
      }
    }]
  });





//function serverRequest(url, reqType, writeFunc) {
//    let xhr = new XMLHttpRequest();
//    console.log(reqType + " URL: " + url);
//    xhr.onreadystatechange = function () {
//        if (xhr.readyState === 4 && xhr.status === 200) {
//            console.log(reqType + " response received");
//            // console.log(reqType + " response type: " + typeof (xhr.responseText));
//            // console.log(reqType + " response length: " + xhr.responseText.length);
//            writeFunc(JSON.parse(xhr.responseText));
//        } else {
//            console.error(xhr.statusText);
//        }
//    };
//    xhr.open("GET", url, true);
//    xhr.send();
//}


//function get_news(tickerName) {
//    serverRequest("/api/v1.0/news/" + tickerName, "news", writeLatestNews);
//}

//function get_company_outlook(tickerName) {
//    serverRequest("/api/v1.0/outlook/" + tickerName, "outlook", writeCompanyOutlook);
//}


//function get_stock_summary(tickerName) {
//    serverRequest("/api/v1.0/summary/" + tickerName, "summary", writeStockSummary);
//}

function get_charts(tickerName) {
    writeCharts(null);  // TODO: need to replace with serverRequest
}

//function showErrorResult(state) {
//    if (state === "on") {
//        searchErrorResult.style.display = "block";
//    } else if (state === "off") {
//        searchErrorResult.style.display = "none";
//    } else {
//        throw new Error("searchErrorResult state \'on\' or \'off\'");
//    }
//}

//function showResult(state) {
//    if (state === "on") {
//        searchResult.style.display = "block";
//    } else if (state === "off") {
//        searchResult.style.display = "none";
//    } else {
//        throw new Error("searchResult state \'on\' or \'off\'");
//    }
//}

//function showSummary(state) {
//    if (state === "on") {
//        summaryContent.style.display = "block";
//    } else if (state === "off") {
//        summaryContent.style.display = "none";
//    } else {
//        throw new Error("summaryContent state \'on\' or \'off\'");
//    }
//}

//function showNews(state) {
//    if (state === "on") {
//        newsContent.style.display = "block";
//    } else if (state === "off") {
//        newsContent.style.display = "none";
//    } else {
//        throw new Error("newsContent state \'on\' or \'off\'");
//    }
//}

//function showOutlook(state) {
//    if (state === "on") {
//        outlookContent.style.display = "block";
//    } else if (state === "off") {
//        outlookContent.style.display = "none";
//    } else {
//        throw new Error("outlookContent state \'on\' or \'off\'");
//    }
//}


function showCharts(state) {
    if (state === "on") {
        chartsContent.style.display = "block";
    } else if (state === "off") {
        chartsContent.style.display = "none";
    } else {
        throw new Error("chartsContent state \'on\' or \'off\'");
    }
}

function checkErrorResultDisplay() {
    if (searchErrorResult.style.display === "block") {
        return "on";
    } else if (searchErrorResult.style.display === "none") {
        return "off";
    } else {
        throw new Error("Invalid searchErrorResult.style.display=" + searchErrorResult.style.display + ", should be \'none\' or \'block\'")
    }
}

//function openTab(evt, tabName) {
//    let i, tabcontent, tablinks;
//    tabcontent = document.getElementsByClassName("tabcontent");
//
//    if (checkErrorResultDisplay() === "off") {
//        for (i = 0; i < tabcontent.length; i++) {
//            tabcontent[i].style.display = "none";
//        }
//
//        tablinks = document.getElementsByClassName("tablinks");
//        for (i = 0; i < tablinks.length; i++) {
//            tablinks[i].className = tablinks[i].className.replace(" active", "");
//        }
//        document.getElementById(tabName).style.display = "block";
//        evt.currentTarget.className += " active";
//    }
//}

//function resetTabLinks() {
//    let tablinks, i, outlookLink;
//    tablinks = document.getElementsByClassName("tablinks");
//    for (i = 0; i < tablinks.length; i++) {
//        tablinks[i].className = tablinks[i].className.replace(" active", "");
//    }
//    outlookLink = document.getElementsByClassName("tablinks")[0];
//    outlookLink.className = "tablinks active";
//}


SubmitButton.addEventListener("click", search, false)
ResetButton.addEventListener('click', reset, false)



