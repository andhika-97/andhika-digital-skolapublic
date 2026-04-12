// Nama : Andhika Fajar Achmad Shodiq
// Homework 

let rows = 4

for(let i=1;i<=rows;i++){
	let piramida =''
	for(let j=0;j<=rows-1-i;j++){
		piramida +=''
	}
	for(let j=0;j<i;j++){
		piramida +='*'
	}
    console.log(piramida);
}