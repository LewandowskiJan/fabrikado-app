import { Pipe, PipeTransform } from '@angular/core';

enum NumberEnum {
  KILO = 'K',
  MILLION = 'M',
  BILLION = 'B',
  TRILLION = 'T',
  QUADRILLION = 'Q',
}

const thousands: number[] = [
  1_000_000_000_000_000, 1_000_000_000_000, 1_000_000_000, 1_000_000, 1_000,
].sort((a: number, b: number) => (a > b ? a : b));

const numberConfigurationMap: Map<number, NumberEnum> = new Map([
  [1_000, NumberEnum.KILO],
  [1_000_000, NumberEnum.MILLION],
  [1_000_000_000, NumberEnum.BILLION],
  [1_000_000_000_000, NumberEnum.TRILLION],
  [1_000_000_000_000_000, NumberEnum.QUADRILLION],
]);

@Pipe({
  name: 'numberDisplay',
})
export class NumberDisplayPipe implements PipeTransform {
  transform(value: number, args?: string | undefined): string | number {
    const thousandValue: number | undefined = thousands.find(
      (thousandValue: number) => thousandValue && value >= thousandValue
    );

    if (thousandValue) {
      let suffix: string =
        (thousandValue && numberConfigurationMap.get(thousandValue)) || '';

      if (args === 'bold-suffix') suffix = `<b>${suffix}</b>`;

      return Math.floor(value / thousandValue) + `${suffix}`;
    } else {
      return value;
    }
  }
}
