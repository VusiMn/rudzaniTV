/*!

=========================================================
* Material Kit PRO React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import "assets/scss/material-kit-pro-react.scss?v=1.9.0";

// pages for this product
import AboutUsPage from "views/AboutUsPage/AboutUsPage.js";
import BlogPostPage from "views/BlogPostPage/BlogPostPage.js";
import BlogPostsPage from "views/BlogPostsPage/BlogPostsPage.js";
import ComponentsPage from "views/ComponentsPage/ComponentsPage.js";
import ContactUsPage from "views/ContactUsPage/ContactUsPage.js";
import EcommercePage from "views/EcommercePage/EcommercePage.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import PresentationPage from "views/PresentationPage/PresentationPage.js";
import PricingPage from "views/PricingPage/PricingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import ProductPage from "views/ProductPage/ProductPage.js";
import SectionsPage from "views/SectionsPage/SectionsPage.js";
import ShoppingCartPage from "views/ShoppingCartPage/ShoppingCartPage.js";
import SignupPage from "views/SignupPage/SignupPage.js";
import ErrorPage from "views/ErrorPage/ErrorPage.js";
import AboutUsRuPage from "rudzani/views/AboutUsPage/AboutUsPage.js";
import ServicesPage from "rudzani/views/ServicesPage/ServicesPage.js";
import iBioscopeBlogPostPage from "rudzani/views/iBioscopeBlogPostPage/iBioscopeBlogPostPage.js";
import TheTeamPage from "rudzani/views/TheTeamPage/TheTeamPage.js";
import RuBlogPostsPage from "rudzani/views/BlogsPostPage/BlogPostsPage.js";
import RuBlogPostPage from "rudzani/views/BlogPostPage/BlogPostPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/about-us" component={AboutUsRuPage} />
      <Route path="/ibioscope-page" component={iBioscopeBlogPostPage} />
      <Route path="/services-page" component={ServicesPage} />
      <Route path="/our-team-page" component={TheTeamPage} />
      <Route path="/blog" component={RuBlogPostPage} />
      <Route path="/ru-blog-posts" component={RuBlogPostsPage} />
      <Route path="/" component={AboutUsRuPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
