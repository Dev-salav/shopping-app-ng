import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { RecipeService } from './recipes/recipe.service';
import { recipesResolverService } from './recipes/recipes-resolver.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';

@NgModule({
  providers: [
    ShoppingListService,
    RecipeService,
    recipesResolverService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
})
export class CoreModule {}
