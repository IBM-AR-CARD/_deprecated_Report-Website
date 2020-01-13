import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Home",
        component: Dashboard
      },
      {
        path: "user",
        name: "Requirements",
        component: UserProfile
      },
      {
        path: "table",
        name: "Research",
        component: TableList
      },
      {
        path: "typography",
        name: "HCI",
        component: Typography
      },
      {
        path: "icons",
        name: "Design",
        component: Icons
      },
      {
        path: "maps",
        name: "Testing",
        meta: {
          hideFooter: true
        },
        component: Maps
      },
      {
        path: "notifications",
        name: "Evaluation",
        component: Notifications
      },
      {
        path: "upgrade",
        name: "Appendices",
        component: UpgradeToPRO
      }
    ]
  }
];

export default routes;
