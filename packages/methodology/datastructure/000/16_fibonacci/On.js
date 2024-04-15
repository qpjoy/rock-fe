function fibonacci(index) {
    let cur = 0;
    let acc = 1;
    if(index <= 2) { return 1 }
    for(let i=0; i<index; i++) {
        [cur, acc] = [acc, cur + acc];
    }
    return cur;
}

fibonacci(6)