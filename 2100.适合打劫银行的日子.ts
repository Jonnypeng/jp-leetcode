const getResult = (index: number, time: number, arr: number[],): boolean => {
  let r1: boolean = true;
  let r2: boolean = true;
  for (let i = (index - time) + 1; i <= index; i++) {
      if (i - 1  < 0) {
          r1 = false;
          break;
      }
      if (arr[i - 1] < arr[i]) {
          r1 = false;
          break;
      }
  }
  for (let j = index + 1; j <= index + time; j++) {
      if (!r1) {
          break;
      }
      if (j > arr.length - 1) {
          r2 = false;
          break;
      }
      if (arr[j - 1] > arr[j]) {
          r2 = false;
          break;
      }
  }
  return r1 && r2;
}
function goodDaysToRobBank(security: number[], time: number): number[] {
  const days: number[] = [];

  if (time > security.length - 1) {
      return days;
  }

  for (let i = 0; i < security.length; i++) {
      if (getResult(i, time, security)) {
          days.push(i);
      }
  }

  return days;
};