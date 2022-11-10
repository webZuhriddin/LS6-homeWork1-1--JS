
// const user = {}


// for(let id = 1; id<=10;id++){
//     const userName = prompt('Ismingiz:')
//     const userAge = +prompt('Yoshingiz:')

//     user[id] = {
//         name:userName,
//         age:userAge
//     }
// }

// // console.info(user)

// for(const key in user){
//     // console.log(key,user[key].name,user[key].age);
//     console.info(`Foydalanuvchi:${key}\nIsmi:${user[key].name}\nYoshi:${user[key].age}`)
// }


// function receipt() {
//     const arrayReceipt = [{
//         'Lavash': {
//             info: 'Big Cheese',
//             price: 15000
//         }, 'Hot-dog': {
//             info: 'mini',
//             price: 8500
//         }, 'Cola': {
//             info: '1.5 L',
//             price: 9000
//         }
//     }, {
//         'Milk': {
//             info: '1 L',
//             price: 8500
//         },
//         'Sugar': {
//             info: '1 kg',
//             price: 7000
//         }
//     }, {
//         'Cola': {
//             info: '1 L',
//             price: 6500
//         },
//         'Fanta': {
//             info: '1.5 L',
//             price: 9000
//         },
//         'Lipton': {
//             info: '1.2 L',
//             price: 5000
//         }, 
//         'Nestle': {
//             info: '10 L',
//             price: 8500
//         }
//     }]
//     const count = Math.floor(Math.random() * arrayReceipt.length)
//     return arrayReceipt[count]
// }

// let data = receipt()
// let price = 9000
// let menu = `Sizning buyutmangiz\n`


// for(const kalit in data){
    // console.info(kalit,data[kalit].info,data[kalit].price)
//     price += data[kalit].price
//     menu += `${kalit} ${data[kalit].info} ${data[kalit].price}\n`
// }

// console.info(`${menu}---------------\nUmumiy narx\n${price}. Yetqazip berish bilan(9000sum)`)






// __________________________________________________________________________________________
/* object Parsing */
// const user ={
//     name:'diyor',
//     age: 18,
//     from: 'Ozbekistan,Tashkent Sh toxir zulfuyahonim kochasi'
// }

// function ParserUser(data){   /* destructurizatsiya */
//    const{name,age, from} = data /* metod! */
// 	  console.info(name,age, from)
// }
// ParserUser(user)
// __________________________________________________________________________________________

// const user ={
//     name:'diyor',
//     age: 18,
//     from: 'Ozbekistan,Tashkent Sh toxir zulfuyahonim kochasi'
// }

// function ParserUser(data){ 
	// const age = 20/                            /* myAge shu qatordan oladi malumotni */
//     const{name,age: myAge, from} = data 
// console.info(name,age, from)
// }
// ParserUser(user)
// _____________________________________________________________________________________________

// const user ={
//     name:'diyor',
//     age: 18,
//     from: 'Ozbekistan,Tashkent Sh toxir zulfuyahonim kochasi'
// }

// function ParserUser(data){ 
//     const{name,age: age, from} = data 

// }
// ParserUser(user)
// _____________________________________________________________________________________________

// function dior(data){
//     const age = 12
//     const{name,age:myAge,from} = data
//     const soat = new Date()/* kurilmaning soatini */
    // const yill =  soat.getFullYear()/* xozirgi yilni qaytaradi */
//     // console.log(soat,yill);
//     console.info(name,age,from,)


// }

// dior(user)

// const user ={
//     name:'diyor',
//     age: 18,
//     from: 'Ozbekistan,Tashkent Sh toxir zulfuyahonim kochasi',
//     info:{
//         a:1,
//         b:2,
//         last:900
//     }
// }

// -----------------------------------------------------------------------------------------------
// const user ={
//     name:'diyor',
//     age: 18,
//     from: 'Ozbekistan,Tashkent Sh toxir zulfuyahonim kochasi'
// }


// function parseruser(data){
//     const{name,age,from} = data
//     const soat =new Date()
//     const yill =soat.getFullYear()

//     const userName = `Sizning ismingiz ${name}`
//     const userAge = `Siz ${yill - age} yil siz yoshiz ${age} da`
//     const userFrom = `yashash joingiz ${from}`
//     const UserInfo = `${userName} \n ${userAge} \n ${userFrom}`
//     return UserInfo
// }
// console.info(Parseruser(user))

// function parserUser(data){
//     const  {name,age,from,info} = data/* 2 yoli  */
//     const {a,b,last} = data.info
//     console.info(from,info,a,b)
// }

// ParserUser(user)

/* localizatsiya_____________________________________________________________________________ */


// const local = {
// uz:{
// servises: 'Xizmatlar',
// price:   'Narxi'
// },
// ru:{
// servises:'uslugi',
// price: 'sena'
// },
// en:{
//     servises:'servises',
//     price: 'price'
//     },

//       getLang(lang){
//       const langStr = lang != 'uz'
//       &&lang != 'ru'
//       &&lang != 'en'
//       || lang === undefined
//       ? 'ru'
//       : lang

//     return this[langStr]
// }
// }
// const lng = local.getLang('')
// console.info(lng)



function dataUser() {
	const users = [{
		 name: "Leanne Graham",
		 username: "Bret",
		 email: "Sincere@april.biz",
		 address: {
			  street: "Kulas Light",
			  suite: "Apt. 556",
			  city: "Gwenborough",
			  zipcode: "92998-3874",
			  geo: {
					lat: "-37.3159",
					lng: "81.1496"
			  }
		 },
		 phone: "1-770-736-8031 x56442",
		 website: "hildegard.org",
		 company: {
			  name: "Romaguera-Crona",
			  catchPhrase: "Multi-layered client-server neural-net",
			  bs: "harness real-time e-markets"
		 }
	}, {
		 name: "Ervin Howell",
		 username: "Antonette",
		 email: "Shanna@melissa.tv",
		 address: {
			  street: "Victor Plains",
			  suite: "Suite 879",
			  city: "Wisokyburgh",
			  zipcode: "90566-7771",
			  geo: {
					lat: "-43.9509",
					lng: "-34.4618"
			  }
		 },
		 phone: "010-692-6593 x09125",
		 website: "anastasia.net",
		 company: {
			  name: "Deckow-Crist",
			  bs: "synergize scalable supply-chains"
		 }
	},{
		 name: "Clementine Bauch",
		 username: "Samantha",
		 email: "Nathan@yesenia.net",
		 address: {
			  street: "Douglas Extension",
			  suite: "Suite 847",
			  city: "McKenziehaven",
			  zipcode: "59590-4157",
			  geo: {
					lat: "-68.6102",
					lng: "-47.0653"
			  }
		 },
		 phone: "1-463-123-4447",
		 website: "ramiro.info",
		 company: {
			  name: "Romaguera-Jacobson",
			  catchPhrase: "Face to face bifurcated interface",
			  bs: "e-enable strategic applications"
		 }
	}, {
		 name: "Patricia Lebsack",
		 username: "Karianne",
		 email: "Julianne.OConner@kory.org",
		 address: {
			  street: "Hoeger Mall",
			  suite: "Apt. 692",
			  city: "South Elvis",
			  zipcode: "53919-4257",
			  geo: {
					lat: "29.4572",
					lng: "-164.2990"
			  }
		 },
		 phone: "493-170-9623 x156",
		 website: "kale.biz",
		 company: {
			  name: "Robel-Corkery",
			  catchPhrase: "Multi-tiered zero tolerance productivity",
			  bs: "transition cutting-edge web services"
		 }
	},{
		 name: "Chelsey Dietrich",
		 username: "Kamren",
		 email: "Lucio_Hettinger@annie.ca",
		 address: {
			  street: "Skiles Walks",
			  suite: "Suite 351",
			  city: "Roscoeview",
			  zipcode: "33263",
			  geo: {
					lat: "-31.8129",
					lng: "62.5342"
			  }
		 },
		 phone: "(254)954-1289",
		 website: "demarco.info",
		 company: {
			  name: "Keebler LLC",
			  catchPhrase: "User-centric fault-tolerant solution",
			  bs: "revolutionize end-to-end systems"
		 }
	},  {
		 name: "Mrs. Dennis Schulist",
		 username: "Leopoldo_Corkery",
		 email: "Karley_Dach@jasper.info",
		 address: {
			  street: "Norberto Crossing",
			  suite: "Apt. 950",
			  city: "South Christy",
			  zipcode: "23505-1337",
			  geo: {
					lat: "-71.4197",
					lng: "71.7478"
			  }
		 },
		 phone: "1-477-935-8478 x6430",
		 website: "ola.org",
		 company: {
			  catchPhrase: "Synchronised bottom-line interface",
			  bs: "e-enable innovative applications"
		 }
	}, {
		 name: "Kurtis Weissnat",
		 username: "Elwyn.Skiles",
		 email: "Telly.Hoeger@billy.biz",
		 address: {
			  street: "Rex Trail",
			  suite: "Suite 280",
			  city: "Howemouth",
			  zipcode: "58804-1099",
			  geo: {
					lat: "24.8918",
					lng: "21.8984"
			  }
		 },
		 phone: "210.067.6132",
		 website: "elvis.io",
		 company: {
			  name: "Johns Group",
			  catchPhrase: "Configurable multimedia task-force",
			  bs: "generate enterprise e-tailers"
		 }
	}, {
		 name: "Nicholas Runolfsdottir V",
		 username: "Maxime_Nienow",
		 email: "Sherwood@rosamond.me",
		 address: {
			  street: "Ellsworth Summit",
			  suite: "Suite 729",
			  city: "Aliyaview",
			  zipcode: "45169",
			  geo: {
					lat: "-14.3990",
					lng: "-120.7677"
			  }
		 },
		 phone: "586.493.6943 x140",
		 website: "jacynthe.com",
		 company: {
			  name: "Abernathy Group",
			  catchPhrase: "Implemented secondary concept",
			  bs: "e-enable extensible e-tailers"
		 }
	},{
		 name: "Glenna Reichert",
		 username: "Delphine",
		 email: "Chaim_McDermott@dana.io",
		 address: {
			  street: "Dayna Park",
			  suite: "Suite 449",
			  city: "Bartholomebury",
			  zipcode: "76495-3109",
			  geo: {
					lat: "24.6463",
					lng: "-168.8889"
			  }
		 },
		 phone: "(775)976-6794 x41206",
		 website: "conrad.com",
		 company: {
			  name: "Yost and Sons",
			  catchPhrase: "Switchable contextually-based project",
			  bs: "aggregate real-time technologies"
		 }
	},{
		 name: "Clementina DuBuque",
		 username: "Moriah.Stanton",
		 email: "Rey.Padberg@karina.biz",
		 address: {
			  street: "Kattie Turnpike",
			  suite: "Suite 198",
			  city: "Lebsackbury",
			  zipcode: "31428-2261",
			  geo: {
					lat: "-38.2386",
					lng: "57.2232"
			  }
		 },
		 phone: "024-648-3804",
		 website: "ambrose.net",
		 company: {
			  name: "Hoeger LLC",
			  catchPhrase: "Centralized empowering task-force",
			  bs: "target end-to-end models"
		 }
	}]
	const randUser = Math.floor(Math.random() * users.length + 1)

	const newUser = {}
	for(let i = 0; i < randUser; i++) {
		 const r = Math.floor(Math.random() * users.length + 0) + 1
		 newUser[r] = users[r - 1]
	}
	// console.log(newUser);
	parserUsers(newUser)
}
dataUser()

function parserUsers(data) {
	for(const key in data) {

	const {name, username, email, phone, website, company: {name:Myname, catchPhrase, bs}, address:{street,suite, city, zipcode, geo:{lat, lng}} } = data[key]
	console.info( `\nName: ${name}\nNik: ${username}\nMail: ${email}\nPhone: ${phone}\nWebsite: ${website}\nStreet: ${street}\nHome: ${suite}\nCyti: ${city}\nIndex: ${zipcode}\nKoordinate lat: ${lat}\nKoordinate lng: ${lng}\nCompany name: ${Myname}\nCatchPhrase: ${catchPhrase}\nBs: ${bs} `)
	}
}