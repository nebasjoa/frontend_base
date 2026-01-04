import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from "@/layouts/MainLayout.vue";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import RegistrationView from '@/views/RegistrationView.vue'
import LogoutView from '@/views/LogoutView.vue'

const routes = [
  {
    path: "/", component: MainLayout,
    children: [
      { path: "", name: "Home", component: HomeView },
    //   { path: 'search', component: MainLayout, name: 'SearchResults', component: SearchResultsView },
    //   { path: 'insert', component: MainLayout, name: 'InsertArticle', component: InsertArticleView, meta: { requiresAuth: true } },
    //   { path: 'insertsucess', component: MainLayout, name: 'InsertSucess', component: InsertSuccessView, meta: { requiresAuth: true } },
    //   { path: 'details', component: MainLayout, name: 'ArticleDetails', component: ArticleDetailsView },
    //   { path: 'wishlist', component: MainLayout, name: 'Wishlist', component: WishlistView, meta: { requiresAuth: true } },
    //   { path: 'my_articles', component: MainLayout, name: 'MyArticles', component: MyArticlesView, meta: { requiresAuth: true } },
    //   { path: 'my_messages', component: MainLayout, name: 'MyMessages', component: MyMessagesView, meta: { requiresAuth: true } },
    //   { path: 'my_inquiries', component: MainLayout, name: 'MyInquiries', component: MyInquiriesView, meta: { requiresAuth: true } },
    //   { path: 'inquiry_details/:id', component: MainLayout, props: true, name: 'InquiryDetails', component: InquiryDetailsView, meta: { requiresAuth: true } },
    //   { path: 'settings', component: MainLayout, name: 'Settings', component: SettingsView, meta: { requiresAuth: true } },
    ]
  },
  { path: "/login", name: "Login", component: LoginView },
  { path: "/registration", name: "Registration", component: RegistrationView },
  { path: "/logout", name: "Logout", component: LogoutView },
  // { path: "/successfulregistration", name: "SuccessfulRegistration", component: SuccessfulRegistrationView },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
