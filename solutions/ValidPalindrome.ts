// 125 - Valid Palindrome

const isPalindrome = (s: string): boolean => {
  if (!s.length) return true;

  const alphanumerics = filterAlphanums(s);
  const reversed = reverse(alphanumerics);
  return alphanumerics === reversed;
};

const filterAlphanums = (s: string, nonAlphanums = new RegExp('[^a-z0-9]', 'gi')): string =>
  s.toLowerCase().replace(nonAlphanums, '');

const reverse = (s: string): string => s.split('').reverse().join('');
