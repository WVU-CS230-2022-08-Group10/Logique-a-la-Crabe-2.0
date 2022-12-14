export const gate_info_card = [
    {
        gate_image: "/assets/logic-gates/AND_gate.svg",
        gate_name: "AND",
        gate_description: "The output of the AND gate will be true only if the inputs A and B are also true. Any other combination of true and false will be false.",
        truth_table: "/assets/logic-truth/AND-table.png"
    },
    {
        gate_image: "/assets/logic-gates/OR_gate.svg",
        gate_name: "OR",
        gate_description: "The output of the OR gate is true if either or both of the inputs are true. The OR is only false when both inputs are false.",
        truth_table: "/assets/logic-truth/OR_table.png"
    },
    {
        gate_image: "/assets/logic-gates/NOT_gate.svg",
        gate_name: "NOT",
        gate_description: "The NOT gate takes one input and outputs the opposite of it, so true becomes false and false becomes true.",
        truth_table: "/assets/logic-truth/NOT_table.png"
    },
    {
        gate_image: "/assets/logic-gates/NAND_gate.svg",
        gate_name: "NAND",
        gate_description: "The NAND gate is the reverse of the AND gate. The output is false if both inputs are true. All other input combinations are true.",
        truth_table: "/assets/logic-truth/NAND_table.png"
    },
    {
        gate_image: "/assets/logic-gates/NOR_gate.svg",
        gate_name: "NOR",
        gate_description: "The NOR gate is the reverse of the OR gate. The output is true when both inputs are false. All other other input combinations are false.",
        truth_table: "/assets/logic-truth/NOR_table.png"
    },
    {
        gate_image: "/assets/logic-gates/Buffer_gate.svg",
        gate_name: "BUF",
        gate_description: "The BUF gate takes one input and repeats it as the output. It's purpose is to boost a weak signal so it can travel further.",
        truth_table: "/assets/logic-truth/BUF_table.png"
    },
    {
        gate_image: "/assets/logic-gates/XOR_gate.svg",
        gate_name: "XOR",
        gate_description: "The XOR (exclusive-OR) gate is only true if the inputs are different values and false when the inputs are the same values.",
        truth_table: "/assets/logic-truth/XOR_table.png"
    },
    {
        gate_image: "/assets/logic-gates/XNOR.png",
        gate_name: "XNOR",
        gate_description: "The XNOR gate is the reverse of the XOR gate. The output is true when the inputs are the same values and false when the inputs are different values.",
        truth_table: "/assets/logic-truth/XNOR_table.png"
    }
]