function diff(lst) {
    function diff_iter(lst, lst_acc) {
        if (lst.length <= 1) {
            return lst_acc;
        } else {
            var new_lst_acc = lst_acc.concat([lst[1] - lst[0]]);
            return diff_iter(lst.slice(1, lst.length), new_lst_acc);
        }
    }
    return diff_iter(lst, [0]);
}

function diff_loo_fw(loo, key) {
    if (loo.length <= 1) {
	loo[loo.length-1][key + "_diff"] = 0;
    } else {
	var l = loo.length;
	loo[0][key + "_diff"] = loo[0][key] - loo[1][key];
	diff_loo_fw(loo.slice(1, l), key);
    }
}

function diff_loo_fw(loo, key) {
    if (loo.length <= 1) {
        loo[loo.length-1][key + "_diff"] = 0;
    } else {
        var l = loo.length;
        loo[0][key + "_diff"] = loo[0][key] - loo[1][key];
        diff_loo_fw(loo.slice(1,l), key);
    }
}

function my_round(n, m) {
    // round number n if n is smaller than 1 round it to m floating point
    if (Math.abs(n) >= 1) {
	return Math.round(n);
    } else {
	return Math.round(n * Math.pow(10, m)) / Math.pow(10, m);
    }
}

function randint(s, e){
    // return random integer from s to e include both s and e
    return s + Math.floor(Math.random() * (e - s + 1));
}
