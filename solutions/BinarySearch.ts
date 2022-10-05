// 704 - Binary Search

const search = (nums: number[], target: number): number => {
  let [left, right]: number[] = [0, nums.length - 1];

  while (left <= right) {
    const mid: number = (left + right) >> 1;
    const guess: number = nums[mid];

    const isTarget: boolean = guess === target;
    if (isTarget) return mid;

    const isTargetGreater: boolean = guess < target;
    if (isTargetGreater) left = mid + 1;

    const isTargetSmaller: boolean = guess > target;
    if (isTargetSmaller) right = mid - 1;
  }
  return -1;
};
