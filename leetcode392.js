/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    
    let sPos = 0;

    for (let car in t)
    {
        if (s[sPos] == t[car])
        {
            sPos++;
            s.substring()
        }
    }

    return sPos == s.length;
};

isSubsequence("abc", "ahbgdc");