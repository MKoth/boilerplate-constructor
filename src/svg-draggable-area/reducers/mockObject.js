export default {
	draggedId: null,
	offset: {x:0, y:0},
	blocks:[
		{
			x:5,
			y:5,
			inputs: [
				{name: "test input"},
				{name: "test input2"}
			],
			outputs: [
				{name: "test output"}
			],
		},
		{
			x:45,
			y:10,
			inputs: [
				{name: "test input2"}
			],
			outputs: [
				{name: "test output"},
				{name: "test output2"}
			],
		}
	]
};