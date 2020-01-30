export default {
	draggedId: null,
	offset: {x:0, y:0},

	draggedConId: null,
	draggedConBlockId: null,
	draggedConBlockType: null,
	conStartPos: {x:0, y:0},
	conEndPos: {x:0, y:0},

	blocks:[
		{
			x:5,
			y:5,
			inputs: [
				{name: "test input"}
			],
			outputs: [
				{name: "test output"}
			]
		},
		{
			x:45,
			y:10,
			inputs: [
				{name: "test input1"},
				{name: "test input2"}
			],
			outputs: [
				{name: "test output"}
			],
		}
	],
	connections:[
		{
			from:{block:0, output:0},
			to:{block:1, input:1},
		}
	]
};