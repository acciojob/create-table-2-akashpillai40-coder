function createTable() {
    //Write your code here
	let table = document.getElementById("myTable");

	//prompt
	let rn = prompt("Input number of rows");
	let cn = prompt("Input number of columns");
    cn = Number(cn);
	rn = Number(rn);

	//check the rn & cn are 'number' & '>0'
     if(isNaN(rn) || isNaN(cn)){
		 return;
	 }
	
	if(cn<0 || rn<0){
		alert("Please enter a positive value")
		return;
	}

	//creating table
	
    for(let i=0; i<rn; i++){
		let tr = document.createElement("tr");
		for(let j=0; j<cn; j++){
			let td = document.createElement("td");
			td.textContent = `Row-${i} Column-${j}`;
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
}
