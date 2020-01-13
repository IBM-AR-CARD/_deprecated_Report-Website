<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/home">
        <md-icon>dashboard</md-icon>
        <p>Home</p>
      </sidebar-link>
      <sidebar-link to="/requirements">
        <md-icon>person</md-icon>
        <p>Requirements</p>
      </sidebar-link>
      <sidebar-link to="/research">
        <md-icon>content_paste</md-icon>
        <p>Research</p>
      </sidebar-link>
      <sidebar-link to="/hci">
        <md-icon>library_books</md-icon>
        <p>HCI</p>
      </sidebar-link>
      <sidebar-link to="/design">
        <md-icon>bubble_chart</md-icon>
        <p>Design</p>
      </sidebar-link>
      <sidebar-link to="/testing">
        <md-icon>location_on</md-icon>
        <p>Testing</p>
      </sidebar-link>
      <sidebar-link to="/evaluation">
        <md-icon>notifications</md-icon>
        <p>Evaluation</p>
      </sidebar-link>
      <sidebar-link to="/appendices" class="active-pro">
        <md-icon>unarchive</md-icon>
        <p>Appendices</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu
  }
};
</script>
