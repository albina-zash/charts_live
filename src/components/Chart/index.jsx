import { useEffect, useRef } from "react";
import 'chartjs-adapter-moment';
import Chart from "chart.js/auto";
import moment from "moment/moment";

const ChartBar = ({ dataset }) => {
    const ref = useRef(null);

    useEffect(() => {
        let chart = null;

        if (ref?.current) {
            chart = new Chart(ref.current, {
                type: "bar",
                data: {
                    datasets: dataset?.map((dataset) => ({
                        label: `${dataset.label} at ${moment(dataset.time).format("h:mm:ss a")}`,
                        data: [dataset],
                        backgroundColor: dataset.color,
                        parsing: {
                            xAxisKey: "time",
                            yAxisKey: "number",
                        },
                    })),
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        xAxis: {
                            stacked: true,
                            type: "time",
                            time: {
                                displayFormats: {
                                    second: "h:mm:ss a",
                                    minute: "h:mm:ss a",
                                    hour: "HH:mm",
                                    day: "dd MMM",
                                    week: "dd MMM",
                                    month: "MMM",
                                    quarter: "QQQ - yyyy",
                                    year: "yyyy",
                                },
                                unit: "second",
                                stepSize: 4,
                                tooltipFormat: "MMMM Do YYYY, h:mm:ss",
                            },

                        },
                    },

                    plugins: {
                        legend: {
                            display: false,
                            labels: {
                                usePointStyle: false,
                                boxWidth: 20,
                                boxHeight: 20,
                            },
                        },
                    },
                },
            });
        }

        return () => {
            chart.destroy();
        };
    }, [dataset, ref]);

return(
    <div style={{height: "600px", width: "1000px" }}>
        <canvas ref={ref} />
    </div>
)
}

export default ChartBar;