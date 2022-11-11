export default class Item{

    static lastId = 0;

    constructor(text){
        //criar id dinâmico
        this.id = Item.lastId++;
        this.text = text;
        this.done  = true;
    }
}