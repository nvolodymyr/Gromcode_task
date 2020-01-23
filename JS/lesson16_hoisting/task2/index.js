var arr = [];

for (var i = 0; i < 10; i++) {
    arr[i] = function(a) {
        return function() {
            return a;
        }

    }(i);
}
export { arr };