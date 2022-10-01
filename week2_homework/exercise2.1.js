const factorial = (n) => {
    let ans = 1;
    for (let i = 1; i <= n; i++) {
        ans *= i;
    }
    return ans;
};

const combination = (n, r) => {
    return factorial(n) / (factorial(n - r) * factorial(r));
};
const multiCombination = (n, r) => {
    return combination(n + r - 1, r);
};
const permutation = (n, r) => {
    return factorial(n) / factorial(n - r);
};
const multiPermutation = (n, r) => {
    let ans = 1;
    for (let i = 0; i < r; i++) {
        ans *= n;
    }
    return ans;
};
module.exports = {
    combination,
    multiCombination,
    permutation,
    multiPermutation,
};
