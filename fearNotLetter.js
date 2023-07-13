function fearNotLetter(str) {
    //Second solution with using ASCII and String method;
    let started = str.charCodeAt(0);
    let end = str.charCodeAt(str.length - 1);
    let fear = '';
    while (started <= end) {
        let char = String.fromCharCode(started);
        if (str.indexOf(char) == -1) fear += char;
        started++;
    }
    return fear != '' ? fear : undefined;
    // let all = "abcdefghijklmnopqrstuvwxyz".split('').sort();
    // let started = all.indexOf(str[0]);
    // // let end = all.indexOf(str[str.length - 1]);
    // let arr = [];
    // while (started <= end) {
    //     if (str.indexOf(all[started]) == -1) { arr.push(all[started]); }
    //     started++;
    // }
    // return arr.length == 0 ? undefined : arr.join('');
}

let result = fearNotLetter("bcdf")

console.log(result);