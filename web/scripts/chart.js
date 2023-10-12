var ctx = document.getElementById('barChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgb(255, 99, 132, 0.2)',
                'rgb(54, 162, 235, 0.2)',
                'rgb(255, 206, 86, 0.2)',
                'rgb(75, 192, 192, 0.2)',
                'rgb(153, 102, 255, 0.2)',
                'rgb(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'red',
                'blue',
                'yellow',
                'green',
                'Purple',
                'orange'
            ],
            hoverBackgroundColor:[
                'red',
                'blue',
                'yellow',
                'green',
                'Purple',
                'orange'
            ],
            hoverBorderColor:'Magenta',
            hoverBorderWidth:2,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
var dtx = document.getElementById('piechart').getContext('2d');
var myChart = new Chart(dtx, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgb(255, 99, 132, 0.2)',
                'rgb(54, 162, 235, 0.2)',
                'rgb(255, 206, 86, 0.2)',
                'rgb(75, 192, 192, 0.2)',
                'rgb(153, 102, 255, 0.2)',
                'rgb(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'red',
                'blue',
                'yellow',
                'green',
                'Purple',
                'orange'
            ],
            hoverBackgroundColor:[
                'red',
                'blue',
                'yellow',
                'green',
                'Purple',
                'orange'
            ],
            hoverBorderColor:'Magenta',
            hoverBorderWidth:2,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});var dtx = document.getElementById('piechart').getContext('2d');
var myChart = new Chart(dtx, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgb(255, 99, 132, 0.2)',
                'rgb(54, 162, 235, 0.2)',
                'rgb(255, 206, 86, 0.2)',
                'rgb(75, 192, 192, 0.2)',
                'rgb(153, 102, 255, 0.2)',
                'rgb(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'red',
                'blue',
                'yellow',
                'green',
                'Purple',
                'orange'
            ],
            hoverBackgroundColor:[
                'red',
                'blue',
                'yellow',
                'green',
                'Purple',
                'orange'
            ],
            hoverBorderColor:'Magenta',
            hoverBorderWidth:2,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
var rtx = document.getElementById('radarchart').getContext('2d');
var myChart = new Chart(rtx, {
    type: 'radar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgb(255, 99, 132, 0.2)',
                'rgb(54, 162, 235, 0.2)',
                'rgb(255, 206, 86, 0.2)',
                'rgb(75, 192, 192, 0.2)',
                'rgb(153, 102, 255, 0.2)',
                'rgb(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'red',
                'blue',
                'yellow',
                'green',
                'Purple',
                'orange'
            ],
            hoverBackgroundColor:[
                'red',
                'blue',
                'yellow',
                'green',
                'Purple',
                'orange'
            ],
            hoverBorderColor:'Magenta',
            hoverBorderWidth:2,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
var ptx = document.getElementById('polarchart').getContext('2d');
var myChart = new Chart(ptx, {
    type: 'polarArea',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgb(255, 99, 132, 0.2)',
                'rgb(54, 162, 235, 0.2)',
                'rgb(255, 206, 86, 0.2)',
                'rgb(75, 192, 192, 0.2)',
                'rgb(153, 102, 255, 0.2)',
                'rgb(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'red',
                'blue',
                'yellow',
                'green',
                'Purple',
                'orange'
            ],
            hoverBackgroundColor:[
                'red',
                'blue',
                'yellow',
                'green',
                'Purple',
                'orange'
            ],
            hoverBorderColor:'Magenta',
            hoverBorderWidth:2,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
var ltx = document.getElementById('linechart').getContext('2d');
var myChart = new Chart(ltx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgb(255, 99, 132, 0.2)',
                'rgb(54, 162, 235, 0.2)',
                'rgb(255, 206, 86, 0.2)',
                'rgb(75, 192, 192, 0.2)',
                'rgb(153, 102, 255, 0.2)',
                'rgb(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'red',
                'blue',
                'yellow',
                'green',
                'Purple',
                'orange'
            ],
            hoverBackgroundColor:[
                'red',
                'blue',
                'yellow',
                'green',
                'Purple',
                'orange'
            ],
            hoverBorderColor:'Magenta',
            hoverBorderWidth:2,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
