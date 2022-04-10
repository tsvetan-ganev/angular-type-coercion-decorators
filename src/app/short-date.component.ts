import { Component, Input } from "@angular/core";
import { DateInputType, OfTypeDate } from "./decorators/of-type-date.decorator";

@Component({
  selector: "my-short-date",
  template: `{{ date | date: "shortDate" }}`,
})
export class ShortDateComponent {
  static ngAcceptInputType_date: DateInputType;

  @OfTypeDate()
  @Input()
  date: Date | undefined;
}
