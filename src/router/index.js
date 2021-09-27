import Vue from 'vue'
import Router from 'vue-router'
import IngredientSection from '@/components/IngredientSection'
import CategorySection from '@/components/CategorySection'
import MealSection from '@/components/MealSection'

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
    }
  ]
})
