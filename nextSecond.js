function nextSecond(currentTime) {
  return [(currentTime[0]%23 !==0 && currentTime[1]%59 === 0) ? currentTime[0]+1: currentTime[0]%23,
          (currentTime[1]%59 !==0 && currentTime[2]%59 === 0) ? currentTime[1]+1: currentTime[1]%59,
          currentTime[2]%59 !==0 ? currentTime[2]+1: currentTime[2]%59];
}
