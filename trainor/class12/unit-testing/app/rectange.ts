export class Rectangle{


    public getArea(length: number, height: number): number{
        return length * height;
    }

    public getParameter(length: number, height: number): number{
        return 2 * (length + height)
    }


}