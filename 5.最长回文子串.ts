/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start


function longestPalindrome(s: string): string {
  let longAnswer: string = s.length === 1 ? s : '';
  const dataMap: Map<string, boolean> = new Map();
  const n = s.length;
  const isQ = n % 2 !== 0;
  let left: number;
  let right: number;

  if (isQ) {
    left = ((n - 1) / 2) + 1;
    right = ((n - 1) / 2) - 1;
  } else {
    left = Math.ceil((n - 1) / 2);
    right = Math.floor((n - 1) / 2);
  }

  const getPalindrome = (str: string, preStr: string): boolean => {
    const key = str;
    let val;
    if (dataMap.has(key)) {
      val = dataMap.get(key);
    }
    if (val !== undefined) {
      dataMap.set(preStr, val);
      return val;
    }
    if (str.length === 1 || str === '') {
      dataMap.set(preStr, true);
      return true;
    }
    if (str[0] === str[str.length - 1]) {
      return getPalindrome(str.slice(1, str.length - 1), preStr);
    } else {
      dataMap.set(preStr, false);
      return false;
    }
  }

  if (longAnswer) {
    return longAnswer;
  }

  for (let i = n-1; i >= 0; i--) {
    for (let j = 0; j < n; j++) {
      if (j < i) {
        continue;
      }
      if (i === j) {
        continue;
      }
      const tempStr = s.slice(i, j + 1);
      if (getPalindrome(tempStr, tempStr)) {
        longAnswer = tempStr.length > longAnswer.length ? tempStr : longAnswer;
      }
    }
  }

  if (!longAnswer) {
    longAnswer = s[0];
  }

  return longAnswer;
};

 //longestPalindrome("ajgiljtperkvubjmdsefcylksrxtftqrehoitdgdtttswwttmfuvwgwrruuqmxttzsbmuhgfaoueumvbhajqsaxkkihjwevzzedizmrsmpxqavyryklbotwzngxscvyuqjkkaotitddlhhnutmotupwuwyltebtsdfssbwayuxrbgihmtphshdslktvsjadaykyjivbzhwujcdvzdxxfiixnzrmusqvwujjmxhbqbdpauacnzojnzxxgrkmupadfcsujkcwajsgintahwgbjnvjqubcxajdyyapposrkpqtpqfjcvbhlmwfutgognqxgaukpmdyaxghgoqkqnigcllachmwzrazwhpppmsodvxilrccfqgpkmdqhoorxpyjsrtbeeidsinpeyxxpsjnymxkouskyhenzgieybwkgzrhhrzgkwbyeigznehyksuokxmynjspxxyepnisdieebtrsjypxroohqdmkpgqfccrlixvdosmppphwzarzwmhcallcginqkqoghgxaydmpkuagxqngogtufwmlhbvcjfqptqpkrsoppayydjaxcbuqjvnjbgwhatnigsjawckjuscfdapumkrgxxznjozncauapdbqbhxmjjuwvqsumrznxiifxxdzvdcjuwhzbvijykyadajsvtklsdhshptmhigbrxuyawbssfdstbetlywuwputomtunhhlddtitoakkjquyvcsxgnzwtoblkyryvaqxpmsrmzidezzvewjhikkxasqjahbvmueuoafghumbszttxmquurrwgwvufmttwwstttdgdtioherqtftxrsklycfesdmjbuvkreptjligja");
// @lc code=end

