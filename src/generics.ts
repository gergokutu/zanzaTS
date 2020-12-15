function identity<T>(arg: T): T {
	return arg;
}

// Set manually the T to string
const idStringV1 = identity<string>('Hohohhooo');
console.log('Str 1:', idStringV1);

// Let the interface set the T to string by the passed argument
const idStringV2 = identity('Hohohhooo');
console.log('Str 2:', idStringV2);

// Arrow function version
const identityArrow = <T>(arg: T): T => arg;
const idNumberV1 = identityArrow<number>(123);
const idNumberV2 = identityArrow(123);
console.log('Num 1:', idNumberV1);
console.log('Num 1:', idNumberV2);

// Generic typechecker
const createTypeArray = <T>(arr: T[]): string[] => {
	return arr.map((item: T) => typeof item);
};

const testArray: number[] = [1, 2, 3];
const testTypeArray = createTypeArray(testArray);
console.log('Test1:', testTypeArray);

const testArray2: (number | string)[] = [1, '2', 3];
const testTypeArray2 = createTypeArray(testArray2);
console.log('Test2:', testTypeArray2);

const testArray3: any[] = [
	true,
	'2',
	3,
	undefined,
	null,
	[1, 2, 's'],
	[{ hm: 234 }, { hm: [2, 3, 4] }],
];
const testTypeArray3 = createTypeArray(testArray3);
console.log('Test2:', testTypeArray3);
