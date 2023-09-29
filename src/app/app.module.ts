import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { MainCategoryComponent } from './components/main-category/main-category.component';
import { BestsellingComponent } from './components/bestselling/bestselling.component';
import { IndexComponent } from './components/index/index.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CartComponent } from './components/cart/cart.component';
import { CardComponent } from './components/card/card.component';
import { PlantCategoryComponent } from './components/plant-category/plant-category.component';
import { DiscountFlowerComponent } from './components/discount-flower/discount-flower.component';
import { DiscountPlantComponent } from './components/discount-plant/discount-plant.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    MainCategoryComponent,
    BestsellingComponent,
    IndexComponent,
    PageNotFoundComponent,
    CartComponent,
    CardComponent,
    PlantCategoryComponent,
    DiscountFlowerComponent,
    DiscountPlantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
