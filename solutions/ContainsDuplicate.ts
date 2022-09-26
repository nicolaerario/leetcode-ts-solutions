// 217 - Contains Duplicate

const containsDuplicate = (nums: number[]): boolean => {
  const setNums: Set<number> = new Set(nums);

  if (setNums.size !== nums.length) return true;
  return false;
};
