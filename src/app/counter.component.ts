import { Component, Input } from "@angular/core";
import {
  BooleanInputType,
  OfTypeBoolean,
} from "./decorators/of-type-boolean.decorator";
import {
  NumberInputType,
  OfTypeNumber,
} from "./decorators/of-type-number.decorator";

@Component({
  selector: "my-counter",
  template: `
    <button (click)="decrement()" [disabled]="disabled">-</button>
    <span>{{ count }}</span>
    <button (click)="increment()" [disabled]="disabled">+</button>
  `,
})
export class CounterComponent {
  static ngAcceptInputType_disabled: BooleanInputType;
  static ngAcceptInputType_count: NumberInputType;

  @OfTypeBoolean()
  @Input()
  disabled = false;

  @OfTypeNumber()
  @Input()
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
