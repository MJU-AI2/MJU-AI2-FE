import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import relativeTime from 'dayjs/plugin/relativeTime'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(relativeTime)
dayjs.extend(utc)
dayjs.extend(timezone)

dayjs.locale('ko')

// 날짜 입력에 대한 타입 정의
type DateInput = Date | string | number | dayjs.Dayjs | null | undefined
// 시간 단위에 대한 타입 정의
type TimeUnit = 'years' | 'months' | 'days' | 'hours' | 'minutes' | 'seconds'
// 시작/끝 단위에 대한 타입 정의
type StartEndUnit =
  | 'year'
  | 'month'
  | 'week'
  | 'day'
  | 'hour'
  | 'minute'
  | 'second'

export class DateUtils {
  /**
   * 날짜를 지정된 포맷으로 변환
   * @param date - 변환할 날짜
   * @param format - 출력 포맷 (기본값: YYYY-MM-DD)
   */
  static format(date: DateInput, format: string = 'YYYY-MM-DD'): string {
    return dayjs(date).format(format)
  }

  /**
   * 현재 날짜/시간 반환
   * @param format - 출력 포맷
   */
  static now(format: string = 'YYYY-MM-DD HH:mm:ss'): string {
    return dayjs().format(format)
  }

  /**
   * 상대적 시간 표시 (예: '3시간 전', '2일 전')
   */
  static fromNow(date: DateInput): string {
    return dayjs(date).fromNow()
  }

  /**
   * 두 날짜 사이의 차이 계산
   * @param unit - 차이를 계산할 단위 (years, months, days, hours, minutes, seconds)
   */
  static diff(
    date1: DateInput,
    date2: DateInput,
    unit: TimeUnit = 'days'
  ): number {
    return dayjs(date1).diff(dayjs(date2), unit)
  }

  /**
   * 날짜에 시간 추가
   * @param amount - 추가할 양
   * @param unit - 단위 (years, months, days, hours, minutes, seconds)
   */
  static add(date: DateInput, amount: number, unit: TimeUnit): string {
    return dayjs(date).add(amount, unit).format('YYYY-MM-DD HH:mm:ss')
  }

  /**
   * 날짜에 시간 빼기
   * @param amount - 뺄 양
   * @param unit - 단위 (years, months, days, hours, minutes, seconds)
   */
  static subtract(date: DateInput, amount: number, unit: TimeUnit): string {
    return dayjs(date).subtract(amount, unit).format('YYYY-MM-DD HH:mm:ss')
  }

  /**
   * 날짜가 유효한지 확인
   */
  static isValid(date: DateInput): boolean {
    return dayjs(date).isValid()
  }

  /**
   * 특정 날짜가 다른 날짜보다 이전인지 확인
   */
  static isBefore(date1: DateInput, date2: DateInput): boolean {
    return dayjs(date1).isBefore(date2)
  }

  /**
   * 특정 날짜가 다른 날짜보다 이후인지 확인
   */
  static isAfter(date1: DateInput, date2: DateInput): boolean {
    return dayjs(date1).isAfter(date2)
  }

  /**
   * 날짜를 타임스탬프로 변환
   */
  static toTimestamp(date: DateInput): number {
    return dayjs(date).valueOf()
  }

  /**
   * 시작일과 종료일 사이의 날짜 배열 반환
   */
  static getDateRange(startDate: DateInput, endDate: DateInput): string[] {
    const dates: string[] = []
    let currentDate = dayjs(startDate)
    const lastDate = dayjs(endDate)

    while (
      currentDate.isBefore(lastDate) ||
      currentDate.isSame(lastDate, 'day')
    ) {
      dates.push(currentDate.format('YYYY-MM-DD'))
      currentDate = currentDate.add(1, 'day')
    }

    return dates
  }

  /**
   * 날짜의 시작과 끝 시간 설정
   */
  static startOf(date: DateInput, unit: StartEndUnit): string {
    return dayjs(date).startOf(unit).format('YYYY-MM-DD HH:mm:ss')
  }

  static endOf(date: DateInput, unit: StartEndUnit): string {
    return dayjs(date).endOf(unit).format('YYYY-MM-DD HH:mm:ss')
  }
}
