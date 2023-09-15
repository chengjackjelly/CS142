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
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}
class DatePicker {
    constructor(divId, callback) {
        this.divId = divId;
        this.callback = callback;

        this.datapicker = document.createElement("div");
        this.datapicker.className = "datapicker";
        this.year_month = document.createElement("div");
        this.year_month.className = "year-month";
        this.bt_left = document.createElement("button");
        this.bt_left.className = "bt";
        this.bt_left.textContent = "<";
        this.year_month_text = document.createElement("p");
        this.year_month_text.className = "year-month-text";
        this.bt_right = document.createElement("button");
        this.bt_right.textContent = ">";
        this.bt_right.className = "bt";
        this.year_month.appendChild(this.bt_left);
        this.year_month.appendChild(this.year_month_text);
        this.year_month.appendChild(this.bt_right);
        this.datapicker.appendChild(this.year_month);

        this.grid_calendar = document.createElement("div");
        this.grid_calendar.className = "grid-calendar";
        var map_arr = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
        for (var i = 0; i < 7; i++) {
            this.abbreviations = document.createElement("div");
            this.abbreviations.className = "abbreviations";
            this.abbreviations.textContent = map_arr[i];
            this.grid_calendar.appendChild(this.abbreviations);
        }
        this.datapicker.appendChild(this.grid_calendar);

    }

    render(date) {
        var content = document.getElementById(this.divId);
        content.appendChild(this.datapicker);

        var month = date.getMonth() + 1;
        var thedate = date.getDate();
        var year = date.getFullYear();
        var year_month_text = content.querySelector("div.datapicker").querySelector("div.year-month").querySelector("p.year-month-text")
        var txt = document.createTextNode(month + " " + year);
        year_month_text.appendChild(txt);

        var firstDay = new Date(year, month - 1, 1).getDay();
        var lastDay = new Date(year, month, 0).getDate();
        var daysNum = new Date(year, month - 1, 0).getDate();
        var parent = content.querySelector("div.datapicker").querySelector("div.grid-calendar");
        for (var i = daysNum - (firstDay) + 1; i <= daysNum; i++) {

            var element = document.createElement("div");
            element.className = "grid-day-dimmed";
            element.textContent = i;
            parent.append(element);
        }
        for (var i = 1; i <= lastDay; i++) {
            var element = document.createElement("div");
            element.className = "grid-day";
            element.textContent = i;
            parent.append(element);
        }

    }
}