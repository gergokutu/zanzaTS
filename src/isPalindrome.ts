const isPalindrome = (word: string): boolean => {
	let index: number = 0;
	let char: string = word[index];
	const length: number = word.length;

	for (let i: number = length - 1; i > 0; i--) {
		if (word[i] !== char) return false;
		char = word[++index];
	}

	return true;
};

console.log(isPalindrome('faafaaf'));
