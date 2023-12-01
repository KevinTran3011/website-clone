
const ctx3 = document.querySelector('.bar-chart').getContext('2d');

const bar_chart_data = {
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6', 'Label 7', 'Label 8', 'Label 9'],
    data: [6, 7, 7, 10, 8, 6, 4, 9, 5],
};

const bar_chart = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: bar_chart_data.labels,
        datasets: [{
            data: bar_chart_data.data,
            backgroundColor: ['#49BEFF', '#49BEFF', '#49BEFF', '#49BEFF', '#49BEFF', '#49BEFF', '#49BEFF', '#49BEFF', '#49BEFF'],
            borderColor: ['#49BEFF', '#49BEFF', '#49BEFF', '#49BEFF', '#49BEFF', '#49BEFF', '#49BEFF', '#49BEFF', '#49BEFF'],
            borderSkipped: false,
            borderRadius: 10,
            barPercentage: 0.6,
        }],
    },
    options: {
        plugins: {
            legend: {
                display: false,
            },
        },
        scales:{
            y:{
                display: false,
            },
            x:{
                display: false,
            },
        }
    },
});

