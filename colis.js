const colis = [
	{'id': 1,'poids': 223},
	{'id': 2,'poids': 253},
	{'id': 3,'poids': 77},
	{'id': 4,'poids': 334},
	{'id': 5,'poids': 255},
	{'id': 6,'poids': 86},
	{'id': 7,'poids': 419},
	{'id': 9,'poids': 143},
	{'id': 10,'poids': 315},
	{'id': 11,'poids': 11},
	{'id': 12,'poids': 111},
	{'id': 13,'poids': 465},
	{'id': 14,'poids': 103},
	{'id': 15,'poids': 135},
	{'id': 16,'poids': 220},
	{'id': 17,'poids': 415},
	{'id': 18,'poids': 486},
	{'id': 19,'poids': 152},
	{'id': 20,'poids': 338},
	{'id': 21,'poids': 339},
	{'id': 22,'poids': 273},
	{'id': 23,'poids': 203},
	{'id': 24,'poids': 439},
	{'id': 25,'poids': 437},
	{'id': 26,'poids': 76},
	{'id': 27,'poids': 245},
	{'id': 28,'poids': 304},
	{'id': 29,'poids': 48},
	{'id': 30,'poids': 401},
	{'id': 31,'poids': 310},
	{'id': 32,'poids': 254},
	{'id': 33,'poids': 160},
	{'id': 34,'poids': 4},
	{'id': 35,'poids': 390},
	{'id': 36,'poids': 297},
	{'id': 37,'poids': 268},
	{'id': 38,'poids': 232},
	{'id': 39,'poids': 23},
	{'id': 40,'poids': 415},
	{'id': 41,'poids': 33},
	{'id': 42,'poids': 252},
	{'id': 43,'poids': 48},
	{'id': 44,'poids': 91},
	{'id': 45,'poids': 102},
	{'id': 46,'poids': 13},
	{'id': 47,'poids': 415},
	{'id': 48,'poids': 256},
	{'id': 49,'poids': 413},
	{'id': 50,'poids': 373},
	{'id': 51,'poids': 2},
	{'id': 52,'poids': 449},
	{'id': 53,'poids': 403},
	{'id': 54,'poids': 479},
	{'id': 55,'poids': 449},
	{'id': 56,'poids': 14},
	{'id': 57,'poids': 86},
	{'id': 58,'poids': 365},
	{'id': 59,'poids': 181},
	{'id': 60,'poids': 92},
	{'id': 61,'poids': 481},
	{'id': 62,'poids': 265},
	{'id': 63,'poids': 209},
	{'id': 64,'poids': 271},
	{'id': 65,'poids': 251},
	{'id': 66,'poids': 32},
	{'id': 67,'poids': 319},
	{'id': 68,'poids': 42},
	{'id': 69,'poids': 120},
	{'id': 70,'poids': 33},
	{'id': 71,'poids': 9},
	{'id': 72,'poids': 155},
	{'id': 73,'poids': 74},
	{'id': 74,'poids': 409},
	{'id': 75,'poids': 470},
	{'id': 76,'poids': 43},
	{'id': 77,'poids': 73},
	{'id': 78,'poids': 311},
	{'id': 79,'poids': 319},
	{'id': 80,'poids': 198},
	{'id': 81,'poids': 378},
	{'id': 82,'poids': 208},
	{'id': 83,'poids': 363},
	{'id': 84,'poids': 129},
	{'id': 85,'poids': 69},
	{'id': 86,'poids': 74},
	{'id': 87,'poids': 424},
	{'id': 88,'poids': 63},
	{'id': 89,'poids': 125},
	{'id': 90,'poids': 141},
	{'id': 91,'poids': 200},
	{'id': 92,'poids': 13},
	{'id': 93,'poids': 214},
	{'id': 94,'poids': 374},
	{'id': 95,'poids': 339},
	{'id': 96,'poids': 467},
	{'id': 97,'poids': 159},
	{'id': 98,'poids': 240},
	{'id': 99,'poids': 232},
	{'id': 100,'poids': 126},
	{'id': 101,'poids': 244},
	{'id': 102,'poids': 114},
	{'id': 103,'poids': 327},
	{'id': 104,'poids': 326},
	{'id': 105,'poids': 285},
	{'id': 106,'poids': 97},
	{'id': 107,'poids': 169},
	{'id': 108,'poids': 321},
	{'id': 109,'poids': 326},
	{'id': 110,'poids': 167},
	{'id': 111,'poids': 366},
	{'id': 112,'poids': 38},
	{'id': 113,'poids': 315},
	{'id': 114,'poids': 94},
	{'id': 115,'poids': 319},
	{'id': 116,'poids': 428},
	{'id': 117,'poids': 265},
	{'id': 118,'poids': 389},
	{'id': 119,'poids': 95},
	{'id': 120,'poids': 95},
	{'id': 121,'poids': 213},
	{'id': 122,'poids': 44},
	{'id': 123,'poids': 142},
	{'id': 124,'poids': 452},
	{'id': 125,'poids': 59},
	{'id': 126,'poids': 115},
	{'id': 127,'poids': 197},
	{'id': 128,'poids': 463},
	{'id': 129,'poids': 12},
	{'id': 130,'poids': 58},
	{'id': 131,'poids': 376},
	{'id': 132,'poids': 51},
	{'id': 133,'poids': 195},
	{'id': 134,'poids': 12},
	{'id': 135,'poids': 26},
	{'id': 136,'poids': 230},
	{'id': 137,'poids': 316},
	{'id': 138,'poids': 305},
	{'id': 139,'poids': 90},
	{'id': 140,'poids': 316},
	{'id': 141,'poids': 253},
	{'id': 142,'poids': 195},
	{'id': 143,'poids': 203},
	{'id': 144,'poids': 146},
	{'id': 145,'poids': 228},
	{'id': 146,'poids': 320},
	{'id': 147,'poids': 132},
	{'id': 148,'poids': 228},
	{'id': 149,'poids': 173},
	{'id': 150,'poids': 434},
	{'id': 151,'poids': 256},
	{'id': 152,'poids': 477},
	{'id': 153,'poids': 336},
	{'id': 154,'poids': 133},
	{'id': 155,'poids': 313},
	{'id': 156,'poids': 3},
	{'id': 157,'poids': 426},
	{'id': 158,'poids': 112},
	{'id': 159,'poids': 320},
	{'id': 160,'poids': 221},
	{'id': 161,'poids': 9},
	{'id': 162,'poids': 138},
	{'id': 163,'poids': 491},
	{'id': 164,'poids': 288},
	{'id': 165,'poids': 343},
	{'id': 166,'poids': 184},
	{'id': 167,'poids': 399},
	{'id': 168,'poids': 384},
	{'id': 169,'poids': 376},
	{'id': 170,'poids': 346},
	{'id': 171,'poids': 314},
	{'id': 172,'poids': 220},
	{'id': 173,'poids': 73},
	{'id': 174,'poids': 369},
	{'id': 175,'poids': 275},
	{'id': 176,'poids': 464},
	{'id': 177,'poids': 430},
	{'id': 178,'poids': 319},
	{'id': 179,'poids': 238},
	{'id': 180,'poids': 313},
	{'id': 181,'poids': 10},
	{'id': 182,'poids': 209},
	{'id': 183,'poids': 463},
	{'id': 184,'poids': 61},
	{'id': 185,'poids': 26},
	{'id': 186,'poids': 46},
	{'id': 187,'poids': 409},
	{'id': 188,'poids': 148},
	{'id': 189,'poids': 357},
	{'id': 190,'poids': 28},
	{'id': 191,'poids': 258},
	{'id': 192,'poids': 257},
	{'id': 193,'poids': 390},
	{'id': 194,'poids': 479},
	{'id': 195,'poids': 484},
	{'id': 196,'poids': 462},
	{'id': 197,'poids': 463},
	{'id': 198,'poids': 326},
	{'id': 199,'poids': 57},
	{'id': 200,'poids': 305},
	{'id': 201,'poids': 290},
	{'id': 202,'poids': 127},
	{'id': 203,'poids': 335},
	{'id': 204,'poids': 301},
	{'id': 205,'poids': 24},
	{'id': 206,'poids': 14},
	{'id': 207,'poids': 386},
	{'id': 208,'poids': 340},
	{'id': 209,'poids': 213},
	{'id': 210,'poids': 38},
	{'id': 211,'poids': 419},
	{'id': 212,'poids': 396},
	{'id': 213,'poids': 6},
	{'id': 214,'poids': 292},
	{'id': 215,'poids': 259},
	{'id': 216,'poids': 34},
	{'id': 217,'poids': 7},
	{'id': 218,'poids': 431},
	{'id': 219,'poids': 413},
	{'id': 220,'poids': 214},
	{'id': 221,'poids': 371},
	{'id': 222,'poids': 87},
	{'id': 223,'poids': 147},
	{'id': 224,'poids': 177},
	{'id': 225,'poids': 131},
	{'id': 226,'poids': 491},
	{'id': 227,'poids': 89},
	{'id': 228,'poids': 115},
	{'id': 229,'poids': 303},
	{'id': 230,'poids': 191},
	{'id': 231,'poids': 99},
	{'id': 232,'poids': 445},
	{'id': 233,'poids': 1},
	{'id': 234,'poids': 119},
	{'id': 235,'poids': 191},
	{'id': 236,'poids': 411},
	{'id': 237,'poids': 220},
	{'id': 238,'poids': 420},
	{'id': 239,'poids': 103},
	{'id': 240,'poids': 280},
	{'id': 241,'poids': 177},
	{'id': 242,'poids': 231},
	{'id': 243,'poids': 240},
	{'id': 244,'poids': 415},
	{'id': 245,'poids': 466},
	{'id': 246,'poids': 409},
	{'id': 247,'poids': 6},
	{'id': 248,'poids': 437},
	{'id': 249,'poids': 16},
	{'id': 250,'poids': 207},
	{'id': 251,'poids': 119},
	{'id': 252,'poids': 13},
	{'id': 253,'poids': 177},
	{'id': 254,'poids': 148},
	{'id': 255,'poids': 2},
	{'id': 256,'poids': 150},
	{'id': 257,'poids': 84},
	{'id': 258,'poids': 369},
	{'id': 259,'poids': 221},
	{'id': 260,'poids': 168},
	{'id': 261,'poids': 228},
	{'id': 262,'poids': 415},
	{'id': 263,'poids': 268},
	{'id': 264,'poids': 494},
	{'id': 265,'poids': 221},
	{'id': 266,'poids': 406},
	{'id': 267,'poids': 410},
	{'id': 268,'poids': 71},
	{'id': 269,'poids': 470},
	{'id': 270,'poids': 440},
	{'id': 271,'poids': 86},
	{'id': 272,'poids': 388},
	{'id': 273,'poids': 28},
	{'id': 274,'poids': 55},
	{'id': 275,'poids': 381},
	{'id': 276,'poids': 340},
	{'id': 277,'poids': 12},
	{'id': 278,'poids': 235},
	{'id': 279,'poids': 144},
	{'id': 280,'poids': 65},
	{'id': 281,'poids': 36},
	{'id': 282,'poids': 225},
	{'id': 283,'poids': 74},
	{'id': 284,'poids': 92},
	{'id': 285,'poids': 14},
	{'id': 286,'poids': 497},
	{'id': 287,'poids': 487},
	{'id': 288,'poids': 405},
	{'id': 289,'poids': 143},
	{'id': 290,'poids': 367},
	{'id': 291,'poids': 268},
	{'id': 292,'poids': 242},
	{'id': 293,'poids': 425},
	{'id': 294,'poids': 480},
	{'id': 295,'poids': 437},
	{'id': 296,'poids': 321},
	{'id': 297,'poids': 44},
	{'id': 298,'poids': 57},
	{'id': 299,'poids': 276},
	{'id': 300,'poids': 319}
];

// On affiche tous les colis 1 par 1
/* 
for (i = 0; i < colis.length; i++) {
	console.log('Le colis n°' + colis[i].id + ' pèse ' + colis[i].poids + 'gr');
}
trier les colis du plus lourd au plus léger

prendre les plus lourds ajouter jusqua 5kg
prendre les plus léger ajouter pour completer
compte les résultats

for (let i = 0; i < colis.length; i++) {
	array.push(colis[i].poids)
}
console.log(array.sort())
for (let i = 0; i < colis.length; i++) {
	console.log(array[i])
}

*/

/*  ------ PrOG1 ! ------
let array = []

for (var value in colis) {
    array.push([value, colis[value].poids]);
}

array.sort(function(a, b) {
    return a[1] - b[1];
});

let total = 0

for (let i = 0; i < array.length; i++ ) {
	total = total + array[i][1]
}

let count = 0

let iterate = function () {
	
	while (total > 1000) {
		let a = 0

		for (let i = (array.length-1) ; i > 0; i--) {
			a = a + array[i][1]
			
			if (a > 1000) {
				a = a - array[i][1]
				
				break
			}	
			total = total - array[i][1]	
			array.splice(i, 1)
		} 

		for (let i = 0; i < array.length; i++) {
			a = a + array[i][1]
			
			if (a > 1000) {
				a = a - array[i][1]
				count++
				break
			}
			total = total - array[i][1]	
			array.splice(i, 1)	
		}

	}
	console.log(count);
} 
*/	

/*  ------- PROG 2 ------- */
/* 

-------- TEST --------
let array = []

for (var value in colis) {
    array.push([value, colis[value].poids]);
}

array.sort(function(a, b) {
    return a[1] - b[1];
});

let total = 0

for (let i = 0; i < array.length; i++ ) {
	total = total + array[i][1]
}

let count = 0
const lots = []

let iterate = function () {
	
	while (total > 1000) {
		let a = 0
		let lot = []

		for (let i = (array.length-1) ; i > 0; i--) {
			a = a + array[i][1]
			
			if (a > 1000) {
				a = a - array[i][1]
				
				break
			}	
			total = total - array[i][1]	
			lot.push(array.splice(i, 1))
		} 

		for (let i = (array.length-1) ; i > 0; i--) {
			if (a + array[i][1] < 1000) {
				total = total - array[i][1]	
				lot.push(array.splice(i, 1))
				lots.push(lot)
				count ++
				break
			}
		}

	}
	console.log(count + 1);
	console.log(total);

	let nb = 0;
	for(let i = 0; i < lots.length; i++) {
		for(let j = 0; j < lots[i].length; j++) {
			nb++;
		}	
	}
	console.log(nb + array.length, 'nb');
} 




let array = []

for (var value in colis) {
    array.push([value, colis[value].poids]);
}

array.sort(function(a, b) {
    return a[1] - b[1];
});

let total = 0

for (let u = 0; u < array.length; u++) {
	total = total + array[u][1]
}

console.log(total);

let count = 0
let a = 0

let iterate = function () {
	while (total > 1000) {
		for (let i = (array.length-1) ; i > 0; i--) {
			a = a + array[i][1]
			if (a > 1000) {
				a = a - array[i][1]
				count ++
				break
			}	
			array.splice(i, 1)	
			total = total - array[i][1]
		} 
	}
} 
	

/* 
		for (let i = 0; i < array.length; i++) {
			a = a + array[i][1]
			
			if (a > 1000) {
				a = a - array[i][1]
				count++
				break
			}
			array.splice(i, 1)	
		}
*/


/* Prog 3 

let array = []

for (var value in colis) {
    array.push([value, colis[value].poids]);
}

array.sort(function(a, b) {
    return a[1] - b[1];
});

let total = 0

for (let i = 0; i < array.length; i++ ) {
	total = total + array[i][1]
}
*/

let array1 = []

for (var value in colis) {
    array1.push([value, colis[value].poids]);
}

array1.sort(function(a, b) {
    return a[1] - b[1];
});

array = array1.reverse() 
let lot = []
let somme = 0
let ar = []

for (let i=0; i<array.length; i++) {
	ar.push(array[i][1])
	
}

let iterate = function () {

//	while (array.length) {	

	somme = 0

	for (let i=0; i<array.length; i++) {
		if (somme + array[i][1] <= 1000) {
			somme = somme + array[i][1]
			lot.push(array[i])
		}
	};
	console.log('lot', lot);
	console.log(array);

	lot.forEach(element => {
		console.log(element);
		array = array.filter(el => element[0] != el[0])
	});
	console.log(array);
}
//}

