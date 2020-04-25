import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material';

@Component({
  selector: 'app-flow-chart-mental-health',
  templateUrl: './flow-chart-mental-health.component.html',
  styleUrls: ['./flow-chart-mental-health.component.css']
})
export class FlowChartMentalHealthComponent implements OnInit {
  section1value = "";
  section2avalue = "";
  section2bvalue = "";

  constructor() { }

  onRadio1Change(mrChange: MatRadioChange) {
    this.section1value = mrChange.value
  }

  onRadio2aChange(mrChange: MatRadioChange) {
    this.section2avalue = mrChange.value
  }

  onRadio2bChange(mrChange: MatRadioChange) {
    this.section2bvalue = mrChange.value
  }
  ngOnInit() {
  }

}
