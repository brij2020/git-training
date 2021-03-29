function SayHello () {
	console.log("hello, world");
}
function xtRay(...rest) {

	console.log("here is the fucntion name ");;
	console.log(rest.reduce((acc,el)=>acc+el,0));
}
