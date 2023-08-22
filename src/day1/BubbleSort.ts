export default function bubble_sort(arr: number[]): void {
    //loop over array from zero to arr.length - 2 (because we compare i to i + 1)
    //check if right element is greater than left
    //if so, swap left and right

    //outer for loop runs the whole way, inner loop gets progressively smaller
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j) {
            if (arr[j] > arr[(j = 1)]) {
                const tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
}

//My own code:
// for (let j = 0; j < arr.length - 1 - j; j++) {
//     for (let i = 0; i < arr.length - 1; ++i) {
//         if (arr[i] > arr[i + 1]) {
//             let tmp = arr[i];
//             arr[i] = arr[i + 1];
//             arr[i + 1] = tmp;
//         }
//     }
// }
