"use strict";
let myStr = "Aaron";
console.log(myStr);
let num = 123;
let isBoolean = true;
let n = null;
let u = undefined;
// 容易混淆的類型
let test;
test = 1;
test = "A";
test = false;
test = undefined;
let arr = ["a", "b"];
let arr2 = [
    ["a", "b"],
    ["1", "2"],
];
let tuple = ["a", 1, false];
let tuple2 = [
    ["a", 1],
    ["1", 2],
];
var LiveStatus;
(function (LiveStatus) {
    LiveStatus[LiveStatus["SUCCESS"] = 0] = "SUCCESS";
    LiveStatus[LiveStatus["FAIL"] = -1] = "FAIL";
    LiveStatus[LiveStatus["STREAMING"] = 1] = "STREAMING";
})(LiveStatus || (LiveStatus = {}));
const streamStatus = LiveStatus.SUCCESS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUksS0FBSyxHQUFXLE9BQU8sQ0FBQztBQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRW5CLElBQUksR0FBRyxHQUFXLEdBQUcsQ0FBQztBQUN0QixJQUFJLFNBQVMsR0FBWSxJQUFJLENBQUM7QUFDOUIsSUFBSSxDQUFDLEdBQVMsSUFBSSxDQUFDO0FBQ25CLElBQUksQ0FBQyxHQUFjLFNBQVMsQ0FBQztBQUU3QixVQUFVO0FBQ1YsSUFBSSxJQUFTLENBQUM7QUFDZCxJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBQ1QsSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUNYLElBQUksR0FBRyxLQUFLLENBQUM7QUFDYixJQUFJLEdBQUcsU0FBUyxDQUFDO0FBRWpCLElBQUksR0FBRyxHQUFhLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQy9CLElBQUksSUFBSSxHQUFlO0lBQ3JCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztDQUNYLENBQUM7QUFFRixJQUFJLEtBQUssR0FBOEIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3ZELElBQUksTUFBTSxHQUF1QjtJQUMvQixDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDUixDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7Q0FDVCxDQUFDO0FBRUYsSUFBSyxVQUlKO0FBSkQsV0FBSyxVQUFVO0lBQ2IsaURBQVcsQ0FBQTtJQUNYLDRDQUFTLENBQUE7SUFDVCxxREFBYSxDQUFBO0FBQ2YsQ0FBQyxFQUpJLFVBQVUsS0FBVixVQUFVLFFBSWQ7QUFDRCxNQUFNLFlBQVksR0FBZSxVQUFVLENBQUMsT0FBTyxDQUFDIn0=