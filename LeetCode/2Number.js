/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let num1 = "";
    let num2 = "";
    for (let i = l1.length - 1; i >= 0; i--) {
        num1 += l1[i];
    }
    for (let j = l2.length - 1; j >= 0; j--) {
        num2 += l2[j];
    }
    let resO = (BigInt(num1) + BigInt(num2));
    let res = String(resO);
    console.log(res);
    // let resArr = [];
    // for (let k = res.length - 1; k >= 0; k--){
    //     resArr.push(res[k]);
    // }
    return res.split("").reverse();
};

console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]));