// 20 - Valid Parentheses

const isValid = (s: string, stack: Array<string> = []): boolean => {
  for (const bracket of s.split('')) {
    const isParenthesis: boolean = bracket === '(';
    if (isParenthesis) stack.push(')');

    const isSquareBracket: boolean = bracket === '[';
    if (isSquareBracket) stack.push(']');

    const isCurlyBrace: boolean = bracket === '{';
    if (isCurlyBrace) stack.push('}');

    const isOpenBracket: boolean = isParenthesis || isSquareBracket || isCurlyBrace;
    if (isOpenBracket) continue;

    const isEmpty: boolean = !stack.length;
    const isWrongPair: boolean = stack.pop() !== bracket;
    const isInvalid: boolean = isEmpty || isWrongPair;

    if (isInvalid) return false;
  }

  return stack.length === 0;
};
