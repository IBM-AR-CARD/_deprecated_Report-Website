import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Home from "@/pages/Home.vue";
import Requirements from "@/pages/Requirements.vue";
import Research from "@/pages/Research.vue";
import Hci from "@/pages/Hci.vue";
import Design from "@/pages/Design.vue";
import Testing from "@/pages/Testing.vue";
import Evaluation from "@/pages/Evaluation.vue";
import Appendices from "@/pages/Appendices.vue";

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
        component: Requirements
      },
      {
        path: "research",
        name: "Research",
        component: Research
      },
      {
        path: "hci",
        name: "HCI",
        component: Hci
      },
      {
        path: "design",
        name: "Design",
        component: Design
      },
      {
        path: "testing",
        name: "Testing",
        meta: {
          hideFooter: true
        },
        component: Testing
      },
      {
        path: "evaluation",
        name: "Evaluation",
        component: Evaluation
      },
      {
        path: "appendices",
        name: "Appendices",
        component: Appendices
      }
    ]
  }
];

export default routes;
