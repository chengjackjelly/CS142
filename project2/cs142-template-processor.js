"use strict";
class Cs142TemplateProcessor {
    constructor(template) {
        this.template = template;
        this.var_arr = template.split(" ");
    }
    fillIn(dictionary) {
        var result = String("");
        //separate the word in template and get the word that contained the
        // stray brackets , and remove the outside {{}} then compare it with the key of the dict
        for (var i = 0; i < this.var_arr.length; i++) {
            var tmp = this.var_arr[i];
            if (tmp.includes("{") || tmp.includes("}")) {
                if (tmp.length <= 4) {
                    result += " ";
                }
                else {
                    var replace = tmp.substring(2, tmp.length - 2);
                    if (replace in dictionary) {
                        result += dictionary[replace];
                        result += " ";
                    }
                }
            }
            else {
                result += tmp;
                result += " ";
            }
        }
        return result.substring(0, result.length - 1);
    }
}

// var template = "My favorite month is {{month}} but not the day {{day}} or the year {{year}}";
// var dateTemplate = new Cs142TemplateProcessor(template);
// var dictionary = { month: "July", day: "1", year: "2016" };
// var str = dateTemplate.fillIn(dictionary);
// console.log(str);
