export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;

    //remember: hi is exclusive, lo is inclusive

    do {
        const m = Math.floor((lo + hi) / 2);
        const v = haystack[m];

        if (v === needle) {
            hi = lo;
            return true;
        } else if (v > needle) {
            hi = m;
        } else {
            lo = m + 1;
        }
    } while (lo < hi);
    return false;
}
