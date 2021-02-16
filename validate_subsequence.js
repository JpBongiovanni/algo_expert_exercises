function isValidSubsequence(array, sequence){
    var arrIdx = 0;
    var seqIdx = 0;
    while (arrIdx < array.length && seqIdx < sequence.length) {
        if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
        arrIdx++;
    }
    return seqIdx === sequence.length;
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))

//OR

function isValidSubsequence(array, sequence){
    var seqIdx = 0;
    for (var i = 0; i < array.length; i++){ 
        if (seqIdx === sequence.length) break;
        if (sequence[seqIdx] === array[i]) seqIdx++;
    }
    return seqIdx === sequence.length;
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))