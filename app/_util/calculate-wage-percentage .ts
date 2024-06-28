import { MINIMUM_HOURLY_WAGE } from "../_constants/hourly-wage";

/**
 * 주어진 시급이 최저시급 대비 몇 퍼센트인지를 계산합니다.
 *
 * @param {number} hourlyWage - 계산하려는 시급
 * @returns {number} 최저시급 대비 퍼센트 값 (반올림됨)
 * @throws {Error} 주어진 시급이 최저시급보다 낮을 때 에러를 발생시킴
 * @author 김보미
 */

export const calculateWagePercentage = (hourlyWage: number) => {
  if (hourlyWage < MINIMUM_HOURLY_WAGE) {
    throw new Error("최저시급보다 낮게 금액을 설정할 수 없습니다.");
  }
  return Math.round(
    ((hourlyWage - MINIMUM_HOURLY_WAGE) / MINIMUM_HOURLY_WAGE) * 100,
  );
};
