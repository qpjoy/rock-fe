class ISet {
    constructor() {}

    static diffSet(set1: Set<object>, set2: Set<object>) {
        const targetSet = new Set(set2);
        for(const item of set1) {
            if(set2.has(item)) {
                targetSet.delete(item)
            }else {
                targetSet.add(item)
            }
        }
        return targetSet
    }

    static combineSet(set1: Set<object>, set2: Set<object>) {
        return new Set([...set1, ...set2])
    }
}