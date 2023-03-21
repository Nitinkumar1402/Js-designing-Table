var products = {
    Electronics: {
        Television: [{
                id: "PR001",
                name: "MAX-001",
                brand: "Samsung",
            },
            {
                id: "PR002",
                name: "BIG-301",
                brand: "Bravia",
            },
            {
                id: "PR003",
                name: "APL-02",
                brand: "Apple",
            },
        ],
        Mobile: [{
                id: "PR004",
                name: "GT-1980",
                brand: "Samsung",
            },
            {
                id: "PR005",
                name: "IG-5467",
                brand: "Motorola",
            },
            {
                id: "PR006",
                name: "IP-8930",
                brand: "Apple",
            },
        ],
    },
    Jewelry: {
        Earrings: [{
                id: "PR007",
                name: "ER-001",
                brand: "Chopard",
            },
            {
                id: "PR008",
                name: "ER-002",
                brand: "Mikimoto",
            },
            {
                id: "PR009",
                name: "ER-003",
                brand: "Bvlgari",
            },
        ],
        Necklaces: [{
                id: "PR010",
                name: "NK-001",
                brand: "Piaget",
            },
            {
                id: "PR011",
                name: "NK-002",
                brand: "Graff",
            },
            {
                id: "PR012",
                name: "NK-003",
                brand: "Tiffany",
            },
        ],
    },
};
// console.log("1233562");
// let div = document.getElementById("box");




// let row = document.createElement("tr");
//table.appendChild(row);

// let head = document.createElement("td");
// let foot = document.createElement("td");
// foot.innerText = "Electronics";
// head.innerText = "Jewelry";
// row.appendChild(head);
// row.appendChild(foot);


// for (var i = 0; i < products.length; i++) {

//     let foot = document.createElement("td");
//     head.innerText = products.Electronics;


// }
let table = document.getElementById("a1");
table.innerHTML = `<tr><th>Category</th> <th>Subcategory</th> <th>ID</th> <th>Name</th> <th>Brand</th>  </tr>`;

for (i in products) {
    for (j in products[i]) {
        for (k in products[i][j]) {
            let row = document.createElement("tr");
            row.innerHTML = `<td>${i}</td> <td>${j}</td> <td>${products[i][j][k].id}</td><td>${products[i][j][k].name}</td><td>${products[i][j][k].brand}</td> `;
            table.appendChild(row);


        }
    }


}



//all mobile subcategaries...





// let table2 = document.getElementById("a2");
// table2.innerHTML = `<tr><th>Subcategory</th> <th>ID</th> <th>Name</th> <th>Brand</th>  </tr>`;
// let mob2 = products.Electronics.Mobile;
// for (let i = 0; i < mob2.length; i++) {
//     let row1 = document.createElement("tr");
//     row1.innerHTML = ` <td> Mobile</td> <td>${mob2[i].id}</td><td>${mob2[i].name}</td><td>${mob2[i].brand}</td> `;
//     table2.appendChild(row1);

// }

let table2 = document.getElementById("a2");
table2.innerHTML = `<tr><th>Subcategory</th> <th>ID</th> <th>Name</th> <th>Brand</th>  </tr>`;

for (i in products) {
    for (j in products[i]) {
        if (j == "Mobile") {
            for (k in products[i][j]) {
                let row1 = document.createElement("tr");
                row1.innerHTML = ` <td>${j}</td> <td>${products[i][j][k].id}</td><td>${products[i][j][k].name}</td><td>${products[i][j][k].brand}</td> `;
                table2.appendChild(row1);

            }

        }
    }
}


//List all products with their id, name, subcategory and category with brand name = "Samsung" like this:

let table3 = document.getElementById("a3");
table3.innerHTML = `<tr>  <th>ID</th> <th>Name</th> <th>Subcategory</th> <th>Category</th>   </tr>`;
let sam = products.Electronics.Television;

for (let i = 0; i < sam.length; i++) {
    let row3 = document.createElement("tr");
    if (sam[i].brand == "Samsung") {
        row3.innerHTML = `  <td>${sam[i].id}</td><td>${sam[i].name}</td><td> Television</td><td>Electronics</td>   `;


        //table3.appendChild(row3);
    }
    table3.appendChild(row3);
}



// let sam1 = products.Electronics.Mobile;
// for (let i = 0; i < sam1.length; i++) {
//     let row3 = document.createElement("tr");
//     if (sam1[i].brand == "Samsung") {
//         row3.innerHTML = `  <td>${sam1[i].id}</td><td>${sam1[i].name}</td><td> Mobile</td><td>Electronics</td> <td>${sam1[i].brand}</td> `;



//     }
//table3.appendChild(row3);

let sam1 = products.Electronics.Mobile;

for (let i = 0; i < sam1.length; i++) {
    let row3 = document.createElement("tr");
    if (sam1[i].brand == "Samsung") {
        row3.innerHTML = `  <td>${sam1[i].id}</td><td>${sam1[i].name}</td><td> Mobile</td><td>Electronics</td>   `;


        //table3.appendChild(row3);
    }
    table3.appendChild(row3);
}


// delete product with id=pr003:----


// let table4 = document.getElementById("a4");

// table4.innerHTML = `<tr><th>Category</th> <th>Subcategory</th> <th>ID</th> <th>Name</th> <th>Brand</th>  </tr>`;
// let tel4 = products.Electronics.Television;
// for (let i = 0; i < tel4.length; i++) {
//     if (tel4[i].id != 'PR003') {
//         let row5 = document.createElement("tr");
//         row5.innerHTML = `<td>Electronics</td> <td>Television</td> <td>${tel4[i].id}</td><td>${tel4[i].name}</td><td>${tel4[i].brand}</td> `;
//         table4.appendChild(row5);
//     }


// }
// let mob4 = products.Electronics.Mobile;
// for (let i = 0; i < mob4.length; i++) {
//     if (tel4[i].id === 'PR004')
//         if (tel4[i].id == 'BIG-555') {
//             let row5 = document.createElement("tr");
//             row5.innerHTML = `<td>Electronics</td> <td> Mobile</td> <td>${mob4[i].id}</td><td>${mob4[i].name}</td><td>${mob4[i].brand}</td> `;
//             table4.appendChild(row5);
//         }

// }
// let ear4 = products.Jewelry.Earrings;
// for (let i = 0; i < ear4.length; i++) {
//     let row5 = document.createElement("tr");
//     row5.innerHTML = `<td>Jewelry</td> <td>Earrings</td> <td>${ear4[i].id}</td><td>${ear4[i].name}</td><td>${ear4[i].brand}</td> `;
//     table4.appendChild(row5);

// }
// let nack4 = products.Jewelry.Necklaces;
// for (let i = 0; i < nack4.length; i++) {
//     let row5 = document.createElement("tr");
//     row5.innerHTML = `<td>Jewelry</td> <td>Necklaces</td> <td>${nack4[i].id}</td><td>${nack4[i].name}</td><td>${nack4[i].brand}</td> `;
//     table4.appendChild(row5);
//     // if (sam1[i].brand == "Samsung") {
//     //     row3.innerHTML = `  <td>${sam1[i].id}</td><td>${sam1[i].name}</td><td> Mobile</td><td>Electronics</td> <td>${sam1[i].brand}</td> `;
//     //     delete nack4[i].PR001;

//     //     //table3.appendChild(row3);
//     // }



// }
// //  if (sam1[i].brand == "Samsung") {
// //       row3.innerHTML = `  <td>${sam1[i].id}</td><td>${sam1[i].name}</td><td> Mobile</td><td>Electronics</td> <td>${sam1[i].brand}</td> `;
// //       delete nack4[i].PR001;}

let table4 = document.getElementById("a4");
table4.innerHTML = `<tr><th>Category</th> <th>Subcategory</th> <th>ID</th> <th>Name</th> <th>Brand</th>  </tr>`;

for (i in products) {

    for (j in products[i]) {


        for (k in products[i][j]) {
            if (products[i][j][k].id != "PR003") {

                let row10 = document.createElement("tr");
                row10.innerHTML = `<td>${i}</td> <td>${j}</td> <td>${products[i][j][k].id}</td><td>${products[i][j][k].name}</td><td>${products[i][j][k].brand}</td> `;
                table4.appendChild(row10);

            } else {
                delete products[i][j][k];
            }
        }

    }


}


//add -----------------
// let table5 = document.getElementById("a4");
// let row8 = table5.insertRow(-1);
// //console.log(row8);
// row8.insertCell(0).textContent = "HAAR";
// row8.insertCell(0).textContent = "NK-004";

// row8.insertCell(0).textContent = "PR0013";
// row8.insertCell(0).textContent = "nackless";
// row8.insertCell(0).textContent = "jwellory";








// 0
// let table5 = document.getElementById("a4");
// let row8 = table5.insertRow(0);
// //console.log(row8);
// row8.insertCell(0).textContent = "New Data";



// let table6 = document.getElementById("a4");
// //let row9 = table.deleteRow(3);

// console.log(delete products.Electronics.Television.id);

// let table10 = document.querySelector('a4');
// table10.deleteRow(2);
//let table4 = document.getElementById("a4").remove(2);
// let table4 = document.querySelector('a4');
// table4.deleteRow(1);
//del---------:

// function deleteRow(products) {
//     var del = products.Electronics.Television;
//     document.getElementById('a4').deleteRow(3);
//     console.log(deleteRow);
// }

// function deleteRow(products) {
//     document.getElementById('a4').deleteRow(PR003);
//     row5.parentNode.removeChild(row5);
// }
//////////update-------------
let table5 = document.getElementById("a5");
table5.innerHTML = `<tr><th>Category</th> <th>Subcategory</th> <th>ID</th> <th>Name</th> <th>Brand</th>  </tr>`;

for (i in products) {

    for (j in products[i]) {


        for (k in products[i][j]) {
            if (products[i][j][k].id == "PR002") {
                products[i][j][k].name = "BIG-555";
            }


            let row11 = document.createElement("tr");
            row11.innerHTML = `<td>${i}</td> <td>${j}</td> <td>${products[i][j][k].id}</td><td>${products[i][j][k].name}</td><td>${products[i][j][k].brand}</td> `;
            table5.appendChild(row11);


        }

    }


}