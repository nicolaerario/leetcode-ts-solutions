// 242 - Valid Anagram

const isAnagram = (s: string, t: string): boolean => {
  const isEqual: boolean = [...s].sort().join('') === [...t].sort().join('');

  return isEqual;
};
