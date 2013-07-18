function diff_loo_fw(loo, key) {
    if (loo.length <= 1) {
	loo[loo.length-1][key + "_diff"] = 0;
    } else {
	var l = loo.length;
	loo[0][key + "_diff"] = loo[0][key] - loo[1][key];
	diff_loo_fw(loo.slice(1, l), key);
    }
}

function my_round(n, m) {
    if (Math.abs(n) >= 1) {
	return Math.round(n);
    } else {
	return Math.round(n * Math.pow(10, m)) / Math.pow(10, m);
    }
}
