// 121 - Best time to buy and sell stock

// Input: prices = [7,1,5,3,6,4]
// Output: 5

const maxProfit = (prices: number[]): number => {
  let [left, right, max]: number[] = [0, 1, 0];

  while (right < prices.length) {
    const canSlide: boolean = prices[right] < prices[left];
    if (canSlide) left = right;

    const window: number = prices[right] - prices[left];

    max = Math.max(max, window);
    right++;
  }

  return max;
};
