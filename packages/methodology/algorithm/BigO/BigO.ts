class BigO {
    static O_1_accessElement(arr: [], index): unknown {
        return arr[index]
    }

    static O_N_sumArray(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }

    static O_XX2_sumArray(arr) {
        let sum = 0;
        let sum2 = 0;
        for (let i = 0; i < arr.length; i++) {
          sum += arr[i];
          for (let j = 0; j < arr.length; j++) {
            sum2 += arr[j];
          }
        }
        return sum + sum2;
    }

    static O_logarithmic(base, exponent) {
        if(exponent === 0) {
            return 1;
        }
        if(exponent % 2 === 0) {
            const halfPower = this.O_logarithmic(base, exponent / 2);
            return halfPower * halfPower
        }else {
            const halfPower = this.O_logarithmic(base, (exponent - 1) / 2);
            return base * halfPower * halfPower
        }
    }

    static O_space() {
        
    }
}

export default BigO;