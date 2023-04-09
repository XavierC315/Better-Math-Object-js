Math.fact = function(n) {
    if (n < 0) return NaN;   
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
Math.parabolic = function(x, a, b, c) {
    if (a == 0) return NaN;
    return a * x * x + b * x + c;
}
Math.parabolic_alt = function(x, a, d, e) {
    if (a == 0) return NaN;
    return a * (x - d) * (x - d) + e;
}
Math.nroot = function(x, n) {
    if (n == 0) return NaN;
    return x ** (1 / n);
}
Math.lgates = {
    and: function(a, b) {
        if (typeof a == 'number' && typeof b == 'number') {
            if (a != 0 || a != 1) return NaN;
            if (b != 0 || b != 1) return NaN;
            return a && b;
        }
        if (typeof a != "boolean" || typeof b != "boolean") return NaN;
        return a && b;
    },
    or: function(a, b) {
        if (typeof a == 'number' && typeof b == 'number') {
            if (a != 0 || a != 1) return NaN;
            if (b != 0 || b != 1) return NaN;
            return a || b;
        }
        if (typeof a != "boolean" || typeof b != "boolean") return NaN;
        return a || b;
    },
    xor: function(a, b) {
        if (typeof a == 'number' && typeof b == 'number') {
            if (a != 0 || a != 1) return NaN;
            if (b != 0 || b != 1) return NaN;
            return a ^ b;
        }
        if (typeof a != "boolean" || typeof b != "boolean") return NaN;
        return a ^ b;
    },
    not: function(a) {
        if (typeof a == 'number') {
            if (a != 0 || a != 1) return NaN;
            return !a;
        }
        if (typeof a != "boolean") return NaN;
        return !a;
    },
    nand: function(a, b) {
        if (typeof a == 'number' && typeof b == 'number') {
            if (a != 0 || a != 1) return NaN;
            if (b != 0 || b != 1) return NaN;
            return !(a && b);
        }
        if (typeof a != "boolean" || typeof b != "boolean") return NaN;
        return !(a && b);
    },
    nor: function(a, b) {
        if (typeof a == 'number' && typeof b == 'number') {
            if (a != 0 || a != 1) return NaN;
            if (b != 0 || b != 1) return NaN;
            return !(a || b);
        }
        if (typeof a != "boolean" || typeof b != "boolean") return NaN;
        return !(a || b);
    },
    xnor: function(a, b) {
        if (typeof a == 'number' && typeof b == 'number') {
            if (a != 0 || a != 1) return NaN;
            if (b != 0 || b != 1) return NaN;
            return !(a ^ b);
        }
        if (typeof a != "boolean" || typeof b != "boolean") return NaN;
        return !(a ^ b);
    }
}