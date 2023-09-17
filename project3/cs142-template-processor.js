"use strict";
class Cs142TemplateProcessor {
    constructor(template) {
        this.template = template;
        this.var_arr = template.split(" ");
    }
    fillIn(dictionary) {
        const regex = /{{(.*?)}}/g;

        // Use the replace method with a callback function to replace placeholders
        const replacedTemplate = this.template.replace(regex, (match, key) => {
            // Use the key to look up the value in the dictionary
            const value = dictionary[key.trim()];

            // If a value is found, replace the placeholder with the value, otherwise keep the placeholder
            return value !== undefined ? value : match;
        });
        return replacedTemplate;
    }
}

// var template = "My favorite month is {{month}} but not the day {{day}} or the year {{year}}";
// var dateTemplate = new Cs142TemplateProcessor(template);
// var dictionary = { month: "July", day: "1", year: "2016" };
// var str = dateTemplate.fillIn(dictionary);
// console.log(str);
