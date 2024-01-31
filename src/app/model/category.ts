import { SubCategory } from "./subcategory";

export interface category{
    catId:number,
    catName:string,
    catDesc:string,
    catImage:string,
    imageName:string,
    status:string,
    mainCatId:number,
    subCatList:SubCategory[],
    cssClass:string,
    isCollapse:boolean
}