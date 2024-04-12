// @ts-nocheck
class ReverseStr {
    constructor() {}
    static reverse(str: string) {
        return str.split('').reverse().join('')
    }
}

const str = ReverseStr.reverse('I am a student');
console.log(`[Reverse]: `, str)