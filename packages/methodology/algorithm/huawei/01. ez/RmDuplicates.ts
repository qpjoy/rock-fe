function RmDuplicates(tokens: number[]) {
    const _set = Array.from(new Set(tokens.sort((a,b) => a-b)))
    _set.map((num) => {
        console.log(num)
    })
}

const sortedNonDuplicates = RmDuplicates([3,555,31,32,22]);
console.log(`[Sorted Duplicates]: `, sortedNonDuplicates);

