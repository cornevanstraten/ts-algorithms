/* POST ORDER: go left, then go right, then visit the node. */

function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    //base case
    if (!curr) {
        return path;
    }

    //pre

    //recurse
    walk(curr.left, path);
    walk(curr.right, path);

    //post
    path.push(curr.value);
    return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
