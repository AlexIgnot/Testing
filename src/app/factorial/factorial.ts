export function factorial(x : number) {
	
	if (x < 0 || x > 15){
		return 0;
	}
	else if(x == 0){
		return 1;
	}
	else{
	
	let result = 1;		
		for(let i = 1; i <= x; i++){

		 result *= i;			 
		}

		return result;

	}

}
