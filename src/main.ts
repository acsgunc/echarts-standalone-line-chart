import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './app/line-chart/line-chart.component';
import { provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';

import { LineChart } from 'echarts/charts'; // Import the chart type
import { CanvasRenderer } from 'echarts/renderers'; // Import the renderer
import { TooltipComponent, GridComponent } from 'echarts/components';

// Register the renderer
echarts.use([CanvasRenderer, LineChart, TooltipComponent, GridComponent]);

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <h1>Angular 19 ECharts Line Chart with Datetime X-Axis</h1>
    <app-line-chart></app-line-chart>

  `,
  imports: [CommonModule, LineChartComponent],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [
    provideEchartsCore({ echarts: echarts }), // Provide ECharts configuration
  ],
}).catch((err) => console.error(err));
