function solution(bridge_length, weight, truck_weights) {
  let bridge = Array.from({ length: bridge_length }, () => 0);
  let time = 0;
  while (bridge.length) {
    bridge.shift();
    time += 1;
    if (truck_weights.length) {
      let sum = bridge.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      );
      if (sum + truck_weights[0] <= weight) {
        bridge.push(truck_weights.shift());
      } else {
        bridge.push(0);
      }
    }
  }
  return time;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
