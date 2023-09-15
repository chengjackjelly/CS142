"use strict";
function cs142MakeMultiFilter(originalArray) {
    var currentArray = originalArray;
    function filter(filterCriteria, callback) {

        if (typeof filterCriteria === 'undefined') {
            return currentArray;
        }
        if (typeof filterCriteria === "function") {
            currentArray = currentArray.filter(item => filterCriteria(item))
        }
        else {
            return currentArray;
        }

        if (typeof callback === "function") {
            callback = callback.bind(originalArray);
            callback(currentArray);
        }
        return filter;
    }
    return filter;
}


// var arrayFilterer1 = cs142MakeMultiFilter([1, 2, 3]);
// arrayFilterer1(function (elem) {
//     return elem !== 2; // check if element is not equal to 2
// }, function (currentArray) {
//     // 'this' within the callback function should refer to originalArray which is [1, 2, 3]
//     console.log(this); // prints [1, 2, 3]
//     console.log(currentArray); // prints [1, 3]
// });