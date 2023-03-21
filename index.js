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
let table = document.getElementById('a1');
let nitin = `<tr><th>Category</th> <th>Subcategory</th> <th>ID</th>  <th>Name</th> <th>Brand</th></tr>`;
table.innerHTML = nitin;
let tel = products.Electronics.Television;
for (let i = 0; i < tel.length; i++) {
    let row = document.createElement('tr');
    row.innerHTML = `<td>Electronics</td> <td>Television</td><td>${tel[i].id}</td> <td>${tel[i].name}</td><td>${tel[i].brand}</td>`;

    table.appendChild(row);

}

let mob = products.Electronics.Mobile;
for (let i = 0; i < mob.length; i++) {
    let row1 = document.createElement('tr');
    row1.innerHTML = `<td>Electronics</td> <td>Mobile</td> <td>${mob[i].id}</td> <td>${mob[i].name}</td> <td>${mob[i].brand}</td>`
    table.appendChild(row1);
}
let mob = products.Electronics.Mobile;
for (let i = 0; i < mob.length; i++) {
    let row1 = document.createElement('tr');
    row1.innerHTML = `<td>Electronics</td> <td>Mobile</td> <td>${mob[i].id}</td> <td>${mob[i].name}</td> <td>${mob[i].brand}</td>`
    table.appendChild(row1);
}
 
let sam1 = products.Electronics.Mobile;
for (let i = 0; i < sam1.length; i++) {
    let row3 = document.createElement("tr");
    if (sam1[i].brand == "Samsung") {
        row3.innerHTML = `  <td>${sam1[i].id}</td>`;
        row3.innerHTML = `<tr><td>${sam1[i].name}</td></tr>`;
        row3.innerHTML = `<tr><td> Mobile</td></tr>`;

        row3.innerHTML = `<tr><td>Electronics</td></tr>`;
        row3.innerHTML = `<tr> <td>${sam1[i].brand}</td> </tr>`;

        //table3.appendChild(row3);
    }
    table3.appendChild(row3);
    table3.appendChild(row3);
    table3.appendChild(row3);
    table3.appendChild(row3);
    table3.appendChild(row3);
}