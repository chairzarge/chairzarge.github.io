

let table = [   [null,null,null,null,null],
                [null,null,null,null,null],
                [null,null,"Free",null,null],
                [null,null,null,null,null],
                [null,null,null,null,null], ];



for (let col = 0; col < table[0].length; col++) {

    for (let row = 0; row < table.length; row++) {

        if (table[row][col] == "Free") {
            continue;
        }

        let newNum;
        outer: 
        while (true) {

            newNum = Math.floor(Math.random()*(15)) + 1 + (col)*15;

            for (let i = 0; i < table[0].length; i++) {

                if (table[i][col] == newNum) {
                    continue outer;
                }
            }
            
            table[row][col] = newNum;
            break;
        }
    }
}

let html = "<thead> <td>B</td> <td>I</td> <td>N</td> <td>G</td> <td>O</td> </thead> \n";

for (let row = 0; row < table.length; row++) {
    html += "<tr>";
    for (let col = 0; col < table[row].length; col++) {
        html += "<td>" + table[row][col] + "</td>";
    }
    html += "</tr> \n";
}

document.getElementsByTagName("table")[0].innerHTML = html;