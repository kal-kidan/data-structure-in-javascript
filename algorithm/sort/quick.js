function pivot(arr, start = 0, end = arr.length - 1) {
    let swapIdx = start;
    let pivot = arr[start];
    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIdx = pivot(arr, left, right);
        quickSort(arr, left, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, right);
    }
    return arr;
}

console.log(quickSort([5, 2, 3, -1, -33, 88, 6, 6, 4, 9]));

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}