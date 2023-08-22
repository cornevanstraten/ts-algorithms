export default function two_crystal_balls(breaks: boolean[]): number {
    //jump sqrt of n with first crystal ball
    //once ball breaks, walk from last known false point step by step

    let jumpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jumpAmount;

    for (; i < breaks.length; i += jumpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    i -= jumpAmount;

    for (let j = 0; j < jumpAmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}

//My code:
// let sqrtB = Math.floor(Math.sqrt(breaks.length));
// let pointer = sqrtB;
// while (breaks[pointer] === false) {
//     pointer += sqrtB;
// }

// for (let i = pointer - sqrtB; i <= pointer; i++) {
//     if (breaks[i]) {
//         return i;
//     }
// }
// return -1;
