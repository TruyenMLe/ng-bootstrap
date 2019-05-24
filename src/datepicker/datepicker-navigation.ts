import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core';
import {NavigationEvent, MonthViewModel} from './datepicker-view-model';
import {NgbDate} from './ngb-date';
import {NgbDatepickerI18n} from './datepicker-i18n';

@Component({
  selector: 'tr[ngbDatepickerNavigation]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./datepicker-navigation.scss'],
  template: `
    <th>
      <button type="button" class="btn btn-default btn-sm pull-left uib-left" (click)="navigate.emit(navigation.PREV)"
              [disabled]="prevDisabled"
              i18n-aria-label="@@ngb.datepicker.previous-month" aria-label="Previous month"
              i18n-title="@@ngb.datepicker.previous-month" title="Previous month">
        <i aria-hidden="true" class="glyphicon glyphicon-chevron-left"></i>
        <span class="sr-only">previous</span>
      </button>
    </th>
    <th colspan="6">
      <ngb-datepicker-navigation-select
        *ngIf="showSelect" class="ngb-dp-navigation-select"
        [date]="date"
        [disabled] = "disabled"
        [months]="selectBoxes.months"
        [years]="selectBoxes.years"
        (select)="select.emit($event)">
      </ngb-datepicker-navigation-select>
      <ng-template *ngIf="!showSelect" ngFor let-month [ngForOf]="months" let-i="index">
        <div class="ngb-dp-arrow" *ngIf="i > 0"></div>
        <button type="button" class="btn btn-default btn-sm uib-title pull-left">
          {{ i18n.getMonthFullName(month.number, month.year) }} {{ i18n.getYearNumerals(month.year) }}
        </button>
        <div class="ngb-dp-arrow" *ngIf="i !== months.length - 1"></div>
      </ng-template>
    </th>
    <th>
      <button type="button" class="btn btn-default btn-sm pull-left uib-right" (click)="navigate.emit(navigation.NEXT)"
              [disabled]="nextDisabled"
              i18n-aria-label="@@ngb.datepicker.next-month" aria-label="Next month"
              i18n-title="@@ngb.datepicker.next-month" title="Next month">
        <i aria-hidden="true" class="glyphicon glyphicon-chevron-right"></i>
        <span class="sr-only">next</span>
      </button>
    </th>
    `
})
export class NgbDatepickerNavigation {
  navigation = NavigationEvent;

  @Input() date: NgbDate;
  @Input() disabled: boolean;
  @Input() months: MonthViewModel[] = [];
  @Input() showSelect: boolean;
  @Input() prevDisabled: boolean;
  @Input() nextDisabled: boolean;
  @Input() selectBoxes: {years: number[], months: number[]};

  @Output() navigate = new EventEmitter<NavigationEvent>();
  @Output() select = new EventEmitter<NgbDate>();

  constructor(public i18n: NgbDatepickerI18n) {}
}
