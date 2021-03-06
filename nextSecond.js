/*
Given some time output the time after one second.

Example

For currentTime = [23, 59, 59], the output should be
nextSecond(currentTime) = [0, 0, 0].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer currentTime

Current time represented by array of three integers as follows: [hours, minutes, second].

The time is guaranteed to be valid, i.e.:
0 ≤ hours ≤ 23,
0 ≤ minutes, seconds ≤ 59.

[output] array.integer

Time after one second in the same format.
*/

function nextSecond(currentTime) {
  return [(currentTime[0]%23 !==0 && currentTime[1]%59 === 0) ? currentTime[0]+1: currentTime[0]%23,
          (currentTime[1]%59 !==0 && currentTime[2]%59 === 0) ? currentTime[1]+1: currentTime[1]%59,
          currentTime[2]%59 !==0 ? currentTime[2]+1: currentTime[2]%59];
}
