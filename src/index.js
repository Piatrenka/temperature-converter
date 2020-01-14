exports.cToF = function(c) {
    if (Number.isInteger(c)) {
        return Math.round(((c * 9) / 5 + 32) * 100) / 100;
    } else {
        return NaN;
    }
};

exports.fToC = function(f) {
    if (Number.isInteger(f)) {
        return Math.round((f - 32) * (5 / 9) * 100) / 100;
    } else {
        return NaN;
    }
};
