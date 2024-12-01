export function countCallback(target: number) : (acc: number, current: number) => number {
    return (acc, current) => acc + (target === current ? 1 : 0);
}

export function accumulateCallback(acc: number, current: number): number {
    return acc + current;
}