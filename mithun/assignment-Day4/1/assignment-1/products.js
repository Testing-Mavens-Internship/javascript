export default class Products
{
    constructor(id,name,type)
    {
        this.id=id;
        this.name=name;
        this.type=type;
    }
    display()
    {
        return "${this.name} ${this.type}"
    }
}
