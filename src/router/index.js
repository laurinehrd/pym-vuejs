import Vue from 'vue'
import Router from 'vue-router'
import IngredientSection from '@/components/IngredientSection'
import CategorySection from '@/components/CategorySection'
import MealSection from '@/components/MealSection'
import NewIngredient from '@/components/NewIngredient'
import NewCategory from '@/components/NewCategory'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/ingredients',
      name: 'IngredientSection',
      component: IngredientSection
    },
    {
      path: '/categories',
      name: 'CategorySection',
      component: CategorySection
    },
    {
      path: '/',
      name: 'MealSection',
      component: MealSection
    },
    {
      path: '/newingredient',
      name: 'NewIngredient',
      component: NewIngredient
    },
    {
      path: '/newcategory',
      name: 'NewCategory',
      component: NewCategory
    }
  ]
})
