/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start


function longestPalindrome(s: string): string {
  const store: string[][] = [];
  let longAnswer:string = s.length === 1 ? s : '';

  const getPalindrome = (str: string,l:number,r:number):boolean => {
    if(r<=l){
      return true;
    }
    if(str[l]===str[r]){
      return getPalindrome(str,l+1,r-1); 
    }else{
      return false;
    }
  }

  if(longAnswer){
      return longAnswer;
  }

  for (let i = 0; i < s.length; i++) {
    store[i] = [];
    for (let j = 0; j < s.length; j++) {
      if(j<i){
        store[i][j] = '';
        continue; 
      }
      if(i===j){
        store[i][j] = s[i]; 
        continue;
      }
      const tempStr = `${store[i][j-1]}${s[j]}`;
      store[i][j] = tempStr;
      if(getPalindrome(tempStr,0,tempStr.length-1)){
        longAnswer = tempStr.length > longAnswer.length ? tempStr : longAnswer;
      }
    }
  }

  if(!longAnswer){
    longAnswer = s[0]; 
  }

  return longAnswer;
};

// longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth");
// @lc code=end

