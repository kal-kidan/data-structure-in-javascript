function sort(a) {
    let min = 0,
        temp;
    for (let k = 0; k < a.length; k++) {
        min = k;
        for (let i = k + 1; i < a.length; i++) {
            if (a[min] > a[i]) {
                min = i;
            }
        }
        temp = a[k];
        a[k] = a[min];
        a[min] = temp;
    }
    return a;
}

console.log(sort([23, 4, 7, 1, 39]));