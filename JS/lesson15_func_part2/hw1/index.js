let createCalculator = () => {
        let memory = 0;
        return {
            add: a => {
                memory += a;
            },
            decrease: a => {
                memory -= a;
            },
            reset: () => {
                memory = 0;
            },
            getMemo: () => memory,
        }
    }
    // let a1 = createCalculator();
    // a1.add(24);
    // console.log(a1.getMemo());
export { createCalculator };