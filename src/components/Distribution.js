import {Doughnut} from 'vue-chartjs'
import * as Chart from "chart.js";

export default {
    extends: Doughnut,
    mounted () {
        this.$refs.canvas.getContext('2d');
        Chart.defaults.global.legend.display = false;
        this.renderChart({
            labels: [ "Token Sale 60%","Developing Team 18%","Business Development 10%", "Research 8%", "Advisors 4%" ],
            datasets: [{
                label: '1 billion tokens (1,000,000,000)',
                data: [60, 18, 10, 8, 4],
                backgroundColor: [
                    'rgba(230, 104, 66, 0.9)',
                    'rgba(220, 68, 91, 0.9)',
                    'rgba(219, 51, 140, 0.9)',
                    'rgba(87, 56, 206, 0.9)',
                    'rgba(31, 75, 214, 0.9)',
                ]
            }],
            options: {
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false,
                    callbacks: {
                        label: function(tooltipItem, data) {
                            console.log(tooltipItem)
                            return data.labels[tooltipItem.index];
                        }
                    }
                },
                legendCallback: function(chart) {
                    // Return the HTML string here.
                    console.log(chart);
                }
            }
        }, {responsive: true, maintainAspectRatio: false})

    }
}