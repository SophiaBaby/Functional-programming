// Effect :: Function -> Effect
function Effect(f) {
    return {
        map(g) {
            return Effect(x => g(f(x)));
        },
        runEffects(x) {
            return f(x);
        }
    };
}
// zero :: () -> Number
function fZero() {
    console.log("Starting with nothing");
    // 绝对不会在这里发动核打击。
    // 但是这个函数仍然不纯
    return 0;
}

const zero = Effect(fZero);
const increment = x => x + 1; // 一个普通的函数。
const one = zero.map(increment);
const double = x => x * 2;
const cube = x => Math.pow(x, 3);

const eight = Effect(fZero)
    .map(increment)
    .map(double)
    .map(cube);

eight.runEffects();

