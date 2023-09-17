'use strict';

class TableTemplate {
    static fillIn(id, dic, columnName) {
        var table = document.getElementById(id);
        table.style = "visibility:visible;";
        if (columnName != null) {
            var colIndex = TableTemplate.#parseTableHeader(id, dic, columnName);
            this.#fillInTableBody(id, dic, colIndex);
        }
        else {
            TableTemplate.#fillInAllTableBody(id, dic);
        }

    }
    static #parseTableHeader(id, dic, columnName) {
        var tb = document.getElementById(id).querySelector("tbody");
        var col = tb.firstChild.querySelectorAll("td");
        var index;
        for (var i = 0; i < col.length; i++) {

            var tp = new Cs142TemplateProcessor(col[i].innerHTML);
            col[i].innerHTML = tp.fillIn(dic);
            if (col[i].innerHTML == columnName) {
                index = i;
            }
        }
        return index;
    }
    static #fillInTableBody(id, dic, colIndex) {
        //better version: take table as a argument and : let cell = table.rows[i].querySelectorAll("td")[columnIndex];
        var tb = document.getElementById(id).querySelector("tbody");
        var col = tb.querySelectorAll("tr");
        for (var i = 1; i < col.length; i++) {
            var node = col[i].querySelectorAll("td")[colIndex];
            var tp = new Cs142TemplateProcessor(node.innerHTML);
            node.innerHTML = tp.fillIn(dic);

        }
    }
    static #fillInAllTableBody(id, dic) {
        var tb = document.getElementById(id).querySelector("tbody");
        var tp = new Cs142TemplateProcessor(tb.innerHTML);
        tb.innerHTML = tp.fillIn(dic);
    }

}