import { Component, OnInit } from '@angular/core';
import { category } from 'src/app/model/category';
import { MainCategory } from 'src/app/model/maincategory';
import { Product } from 'src/app/model/product';
import { CategoryService } from 'src/app/service/category.service';
import { MaincategoryService } from 'src/app/service/maincategory.service';
import { SubcategoryService } from 'src/app/service/subcategory.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private mainCatService:MaincategoryService,private categoryService:CategoryService,private subCategoryService:SubcategoryService){}

  mainCategories:MainCategory[]=[];

  // arrowName:string ='fa-solid fa-caret-right';

  isCollapse='false';

   products:Product[]=[
    {
      "productName":"shirt",
      "prodDesc":"This is Half Sleeves",
      "prodPrice":"800",
      "status":"active",
      "catId":5
    },
    {
      "productName":"T-shirt",
      "prodDesc":"This is Half Sleeve T-shirt",
      "prodPrice":"700",
      "status":"active",
      "catId":5
    },
    {
      "productName":"Top",
      "prodDesc":"This is Top",
      "prodPrice":"600",
      "status":"active",
      "catId":5
    },
    {
      "productName":"Kurti",
      "prodDesc":"This is Kurti",
      "prodPrice":"500",
      "status":"active",
      "catId":5
    },
    {
      "productName":"Kurti-Set",
      "prodDesc":"This is Kurti Set",
      "prodPrice":"400",
      "status":"active",
      "catId":5
    },
    {
      "productName":"Half-Paint",
      "prodDesc":"This is Half-Paint",
      "prodPrice":"300",
      "status":"active",
      "catId":5
    },{
      "productName":"Gown",
      "prodDesc":"This is Gown",
      "prodPrice":"200",
      "status":"active",
      "catId":5
    }
   ];
  ngOnInit(): void {
    this.getMainCategory();
  }
  getMainCategory():void{
    this.mainCatService.getMainCategory().subscribe((response:any)=>{
      if(response.success === true){
         this.mainCategories=response.data;
         this.mainCategories.filter((mainCategory:MainCategory)=>{
          this.getCategoryByMainCatId(mainCategory);
         })
      }
    })
  }
  getCategoryByMainCatId(mainCategory:MainCategory){
    this.categoryService.getCategoryByMainCatId(mainCategory.maincatId).subscribe((response:any)=>{
      if(response.success === true){
        mainCategory.categoryList = response.data;
        mainCategory.categoryList.filter((category:category)=>{
          category.cssClass='list-group collapse hide';
          this.getSubCategoryByCatId(category);
        })
      }
    });
  }
  getSubCategoryByCatId(category: category){
    this.subCategoryService.getSubCategoriesByCatId(category.catId).subscribe((response:any)=>{
      if(response.success === true){
        category.subCatList=response.data;
      }
    })
  }
  changeArrow(mainCat:MainCategory){
    // this.arrowName=(mainCat.isCollapse===true)?'fa-solid fa-caret-down':'fa-solid fa-caret-right';
    mainCat.isCollapse = !this.isCollapse;
  }
  changeCatArrow(cat:category){
    cat.isCollapse=!cat.isCollapse;
    cat.cssClass=cat.isCollapse?'list-group collapse show':'list-group collapse hide';

  }

}
