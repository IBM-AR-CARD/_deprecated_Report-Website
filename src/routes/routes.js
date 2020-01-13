import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Home from "@/pages/Home.vue";
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
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "Home",
        component: Home
      },
      {
        path: "requirements",
        name: "Requirements",
        component: UserProfile
      },
      {
        path: "research",
        name: "Research",
        component: TableList
      },
      {
        path: "hci",
        name: "HCI",
        component: Typography
      },
      {
        path: "design",
        name: "Design",
        component: Icons
      },
      {
        path: "testing",
        name: "Testing",
        meta: {
          hideFooter: true
        },
        component: Maps
      },
      {
        path: "evaluation",
        name: "Evaluation",
        component: Notifications
      },
      {
        path: "appendices",
        name: "Appendices",
        component: UpgradeToPRO
      }
    ]
  }
];

export default routes;
