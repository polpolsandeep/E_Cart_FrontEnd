import { category } from "./category"

export interface MainCategory{
    maincatId:number,
    catName:string,
    catDesc:string,
    status:string
    categoryList:category[],
    isCollapse:boolean
}