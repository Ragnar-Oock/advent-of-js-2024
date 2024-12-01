import {input} from "./input";
import {accumulateCallback, countCallback} from "../../src/utils.ts";

export function part1() {
    const leftList: number[] = [],
        rightList: number[] = [];
    input
        .split('\n')
        .forEach(line => {
            const [left, right] = line.split(/\s+/).map(Number);
            leftList.push(left);
            rightList.push(right);
        })

    leftList.sort();
    return rightList
        .sort()
        .map((rightId, index) => Math.abs(leftList[index] - rightId))
        .reduce(accumulateCallback, 0);
}
export function part2() {
    const leftList: number[] = [],
        rightList: number[] = [];
    input
        .split('\n')
        .forEach(line => {
            const [left, right] = line.split(/\s+/).map(Number);
            leftList.push(left);
            rightList.push(right);
        })

    return leftList
        .map(id => id * rightList.reduce(countCallback(id), 0))
        .reduce(accumulateCallback)
}