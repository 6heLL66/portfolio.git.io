function test(){
	for(let h = 0;h < 100000;h++){
		let num = Math.round(Math.random() * (30 - 15) + 15)
		let state1 = [];
		state = [];
		let obj = {
			name : "king",
			pos : {x : Math.round(Math.random() * (8 - 1) + 1), y : Math.round(Math.random() * (8 - 1) + 1)},
			team : "black",
			steps : 0,
			img : "bK.png",
			func : rules.king
		}
		state.push(obj);
		obj = {
			name : "king",
			pos : randomCordsK(),
			team : "white",
			steps : 0,
			img : "wK.png",
			func : rules.king
		}
		state.push(obj);
		fillState(state1)
		for(let i = 0;i < num;i++){
			let n = Math.round(Math.random() * 28);
			obj = state1[n];
			if(checkAmount(obj.name, obj.team) >= 2 && obj.name != "pawn")continue
			else if(checkAmount(obj.name, obj.team) >= 5 && obj.name == "pawn")continue
			obj.pos = randomCords()
			state.push(obj);
		}
		console.log(state);
		//draw();
		if(checkMat("black")){
			console.log(state , "black");
			draw();
			break;
		}
		else if(checkMat("white")){
			console.log(state , "white");
			draw();
			break;
		}
	}
	

}

function checkAmount(name, team){
	let c =0;
	for(let i = 0;i < state.length;i++){
		if(state[i].name == name && state[i].team == team)c++
	}
	return c;
}
function randomCords(){
	let x = 0;
	let y = 0;
	while (x == 0 || y == 0){
		let x1 = Math.round(Math.random() * (8 - 1) + 1)
		let y1 = Math.round(Math.random() * (8 - 1) + 1)
			if(!findF(x1,y1)){
			x = x1;
			y = y1;
		}
	}
	return {x : x, y : y}
}
function randomCordsK(){
	let x = 0;
	let y = 0;
	let x1 = state[0].pos.x;
	let y1 = state[0].pos.y;
	while (x == 0 || y == 0){
		let x2 = Math.round(Math.random() * (8 - 1) + 1)
		let y2 = Math.round(Math.random() * (8 - 1) + 1)
			if(Math.abs(x2 - x1) > 1 || Math.abs(y2 - y1) > 1){
			x = x2;
			y = y2;
		}
	}
	return {x : x, y : y}
}
document.getElementById("next").onclick = test;