let arrayName= [
{
	name: `<strong>Ali</strong>`,
	contact: "03242335768",
	lastMsg: "blah blah blah blah blah bl...",
	lastSeen: "yesterday",
	Email: "ali.ahmed9@gmail.com",
	img: `<i class="fas fa-user-circle"></i>`,
	imgtick :  `<i class="fas fa-check-double"></i>`,
	qoute : "So many books, so little time"
},
{
	name: `<strong>Junaid</strong>`,
	contact: "03244987218",
	lastMsg: "blah blah blah blah blah bl...",
	lastSeen: "yesterday",
	Email: "mjunaid7843@gmail.com",
	img: `<i class="fas fa-user-circle"></i>`,
	imgtick : `<i class="fas fa-check-double"></i>`,
	qoute : "So many books, so little time"
},
{
	name: `<strong>Saeed</strong>`,
	contact: "03220576018",
	lastMsg: "blah blah blah blah blah bl...",
	lastSeen: "yesterday",
	Email: "s.ahmed00@gmail.com",
	img: `<i class="fas fa-user-circle"></i>`,
	imgtick : `<i class="fas fa-check-double"></i>`,
	qoute : "So many books, so little time"
},
{
	name: `<strong>Hamza</strong>`,
	contact: "03242965048",
	lastMsg: "blah blah blah blah blah bl...",
	lastSeen: "yesterday",
	Email: "hamza.siddiqi@gmail.com",
	img: `<i class="fas fa-user-circle"></i>`,
	imgtick : `<i class="fas fa-check-double"></i>`,
	qoute : "So many books, so little time"
},
{
	name: `<strong>Mustafa</strong>`,
	contact: "03242392208",
	lastMsg: "blah blah blah blah blah bl...",
	lastSeen: "yesterday",
	Email: "shah.mufi@gmail.com",
	img: `<i class="fas fa-user-circle"></i>`,
	imgtick : `<i class="fas fa-check-double"></i>`,
	qoute : "So many books, so little time"
},
{
	name: `<strong>Ibad</strong>`,
	contact: "03242409778",
	lastMsg: "blah blah blah blah blah bl...",
	lastSeen: "yesterday",
	Email: "i.b123@gmail.com",
	img: `<i class="fas fa-user-circle"></i>`,
	imgtick : `<i class="fas fa-check-double"></i>`,
	qoute : "So many books, so little time"
},
{
	name: `<strong>Hassan</strong>`,
	contact: "03242409988",
	lastMsg: "blah blah blah blah blah bl...",
	lastSeen: "yesterday",
	Email: "hassan-ali@gmail.com",
	img: `<i class="fas fa-user-circle"></i>`,
	imgtick : `<i class="fas fa-check-double"></i>`,
	qoute : "So many books, so little time"
},
{
	name: `<strong>Rafay</strong>`,
	contact: "03245466618",
	lastMsg: "blah blah blah blah blah bl...",
	lastSeen: "yesterday",
	Email: "raffy-abbas@gmail.com",
	img: `<i class="fas fa-user-circle"></i>`,
	imgtick : `<i class="fas fa-check-double"></i>`,
	qoute : "So many books, so little time"
},
{
	name: `<strong>Saif</strong>`,
	contact: "03242445618",
	lastMsg: "blah blah blah blah blah bl...",
	lastSeen: "yesterday",
	Email: "saif-bin-ali@gmail.com",
	img: `<i class="fas fa-user-circle"></i>`,
	imgtick : `<i class="fas fa-check-double"></i>`,
	qoute : "So many books, so little time"
},
{
	name: `<strong>Shehroz</strong>`,
	contact: "03242300018",
	lastMsg: "blah blah blah blah blah bl...",
	lastSeen: "yesterday",
	Email: "shezy-gaffar@gmail.com",
	img: `<i class="fas fa-user-circle"></i>`,
	imgtick : `<i class="fas fa-check-double imgee"></i>`,
	qoute : "So many books, so little time"
}
];



function initialize() {
	let userSec = document.querySelector(".name-list");
	for (let i=0; i<arrayName.length; i++) {
		userSec.innerHTML += 
		`<div class="list-item" onclick="show(${i})">
				 ${arrayName[i].img}
		    <div class="names-flex">
				 <span class="spans-1">
					 <span> ${arrayName[i].name}</span>
					 <span> ${arrayName[i].lastSeen}</span>
				 </span> 
				 <span class="spans">${arrayName[i].imgtick} ${arrayName[i].lastMsg}</span>
		 	</div>
		 </div>`;
	}


}
function show(details) {
	document.querySelector(".first-display-text").style.display = "none";
	document.querySelector(".image").innerHTML = arrayName[details].img; 
	document.querySelector(".name").innerHTML = arrayName[details].name; 
	document.querySelector(".number").innerHTML = "<i class='fas fa-phone'></i>"+arrayName[details].contact; 
	document.querySelector(".email").innerHTML = "<i class='fas fa-envelope'></i>"+arrayName[details].Email; 
	document.querySelector(".para").innerHTML = arrayName[details].qoute; 
	document.querySelector(".button-div").innerHTML = `<button  class="accept" onclick="call(${details})">call</button><button class="accept" >message</button>`; 
	
}









