import { CarProps } from "@/types";

export function partition(array: CarProps[], low: number, high: number): number {
    const pivotIndex = high;
    const pivot = array[pivotIndex];

    let i = low - 1;

    for (let j = low; j < array.length; j++) {
        if (array[j].make < pivot.make) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    [array[i + 1], array[pivotIndex]] = [array[pivotIndex], array[i + 1]];

    return i + 1;
}