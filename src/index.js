function cal(...rest) {
	if(rest.length > 0) {
		rest.reduce((acc,el) => acc + el,0 )
	}
} 	
