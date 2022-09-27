// 1 - Two Sum

const twoSum = (nums: number[], target: number): number[] => {
  const map: Map<number, number> = new Map();
  for (let index in nums) {
    const num = nums[index];
    const complement = target - num;
    const sumIndex = map.get(complement);

    const isTarget = map.has(complement);
    if (isTarget) return [+index, sumIndex!];

    map.set(num, +index);
  }

  return [-1, -1];
};
