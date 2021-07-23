import React, { useEffect } from "react";

import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";

import { Card, Chart, Container} from '../../../Styles/chartStyles';

HighchartsMore(Highcharts);

export default function ColumnChart() {
  useEffect(() => {
    Highcharts.chart('ColumnChart', {
      chart: {
        type: "column",
        width: 280,
        height: 250
      },
      title: {
        text: ""
      }, 
      subtitle: {
        text: ""
      },
      credits:{
        enabled: false
      },
      xAxis: {
        categories: [
          "22/11/2020",
          "23/11/2020",
          "21/11/2020",
          "25/11/2020",
          "26/11/2020"
        ],
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: "Number of Covid cases"
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y}</b></td></tr>',
        footerFormat: "</table>",
        shared: true,
        useHTML: true
      },
      series: [
        {
          name: "Brazil",
          data: [4706, 4702, 3979, 2547, 3999],
          color: '#191816'
        },
        {
          name: "USA",
          data: [4000, 5000, 4800, 4000, 5100],
          color: '#FF8700'
        }
      ]
    });
  });

  return (
    <Container>
        <Card>
            <Chart id='ColumnChart' />
        </Card>
    </Container>
  );
}