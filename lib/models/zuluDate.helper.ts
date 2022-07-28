export class ZuluDateHelper {
  public static getZuluDate(inputDate: Date): Date | null {
    if (!inputDate) {
      return null;
    }
    return new Date(
      Date.UTC(
        inputDate.getUTCFullYear(),
        inputDate.getUTCMonth(),
        inputDate.getUTCDate(),
        inputDate.getUTCHours(),
        inputDate.getUTCMinutes(),
        inputDate.getUTCSeconds()
      )
    );
  }

  public static getGMTDate(inputDate: Date): Date | null {
    if (!inputDate) {
      return null;
    }
    const _userOffset = inputDate.getTimezoneOffset() * 60 * 1000;
    return new Date(inputDate.getTime() + _userOffset);
  }

  public static setGMTDate(inputDate: Date): Date | null {
    if (!inputDate) {
      return null;
    }
    const _userOffset = inputDate.getTimezoneOffset() * 60 * 1000;
    return new Date(inputDate.getTime() - _userOffset);
  }

  public static getSQLDate(inputDate: Date): string {
    if (inputDate) {
      // eslint-disable-next-line max-len
      return `${inputDate.getUTCFullYear()}-${inputDate.getUTCMonth()}-${inputDate.getUTCDate()} ${inputDate.getUTCHours()}:${inputDate.getUTCMinutes()}:${inputDate.getUTCSeconds()}`;
    } else {
      inputDate = new Date();
      // eslint-disable-next-line max-len
      return `${inputDate.getUTCFullYear()}-${inputDate.getUTCMonth()}-${inputDate.getUTCDate()} ${inputDate.getUTCHours()}:${inputDate.getUTCMinutes()}:${inputDate.getUTCSeconds()}`;
    }
  }

  public static datesAreOnSameDay(first: Date, second: Date): boolean {
    return (
        first.getFullYear() === second.getFullYear() &&
        first.getMonth() === second.getMonth() &&
        first.getDate() === second.getDate()
    );
}
}
