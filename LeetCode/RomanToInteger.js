//Write Function Roman to Integer in Javascript

var romanToInt = function(s) {
    var map = {"M":1000, "D":500, "C":100, "L":50, "X":10, "V":5, "I":1};
    var res = 0;
    for (var i = 0; i < s.length;){
        if (i > 0 && map[s.charAt(i)] > map[s.charAt(i - 1)]){
            res += map[s.charAt(i++)];
        }else{
            res += map[s.charAt(i)];
            i++;
        }
    }
    return res;
};
console.log(romanToInt("MCMXCIV"));// Output: 