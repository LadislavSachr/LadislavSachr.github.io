class Key{
    constructor(value, flex=1){
        this._value = value;
        this._flex = flex;
    }

    get value(){
        return this._value;
    }

    get flex(){
        return this._flex;
    }

    set value(value){
        this._value = value;
    }

    set flex(flex){
        this._flex = flex;
    }
}

export const keyboard = [
    [new Key('Esc'), new Key('1'), new Key('2'), new Key('3'), new Key('4'), new Key('5'), new Key('6'), new Key('7'), new Key('8'), new Key('9'), new Key('0'), new Key('-'), new Key('='), new Key('Delete', 2)],
    [new Key('Tab', 1.5), new Key('Q'), new Key('W'), new Key('E'), new Key('R'), new Key('T'), new Key('Y'), new Key('U'), new Key('I'), new Key('O'), new Key('P'), new Key('['), new Key(']'), new Key('\\', 1.5)],
    [new Key('Caps', 2), new Key('A'), new Key('S'), new Key('D'), new Key('F'), new Key('G'), new Key('H'), new Key('J'), new Key('K'), new Key('L'), new Key(';'), new Key('\''), new Key('Enter', 3)],
    [new Key('Shift', 2.5), new Key('Z'), new Key('X'), new Key('C'), new Key('V'), new Key('B'), new Key('N'), new Key('M'), new Key(','), new Key('.'), new Key('!'), new Key('Shift', 3.5)],
    [new Key('Ctrl', 1.5), new Key('Win', 1.5), new Key('Alt', 1.5), new Key(' ', 8), new Key('Alt', 1.5), new Key('Menu', 1.5), new Key('Ctrl', 1.5), new Key('Fn', 1.5)]
]
