import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsDirective } from 'ngx-echarts';


@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [CommonModule, NgxEchartsDirective], // Import NgxEchartsModule
  template: `
    <div echarts [options]="chartOptions" class="demo-chart"></div>
  `,
  styles: `
    .demo-chart {
      height: 400px;
      width: 100%;
    }
  `
})
export class LineChartComponent {
  chartOptions: any;

  constructor() {
    // Sample data with datetime stamps and gaps
    const data = [
      ['2023-10-01 08:00', 120],
      ['2023-10-01 10:00', 120],
      ['2023-10-01 10:00', null], // Gap
      ['2023-10-01 10:00', 120],
      ['2023-10-01 14:00', 120],
      ['2023-10-01 14:00', null], // Gap
      ['2023-10-01 18:00', 200],
      ['2023-10-01 20:00', 150],
      ['2023-10-01 22:00', 100]
    ];

    this.chartOptions = {
      tooltip: {
        trigger: 'axis',

      },
      xAxis: {
        type: 'time', // Use 'time' type for datetime stamps
        axisLabel: {
          formatter: (value: number) => {
            return new Date(value).toLocaleTimeString(); // Format datetime
          }
        }
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: data,
        type: 'line',
        connectNulls: false // Show gaps
      }]
    };
  }
}