import FlyoutContent from "@/ui/Navbar/FlyoutContent";
import AboutData from "./aboutData";
import programmeData from "./programmeData";
import pharmacyData from "./pharmacyData";
import studentZone from "./studentZone";
import researchData from "./researchData";
import admission from "./admission";

const HangingNavData = [
  {name: "Industry Collaboration", link: "/#",},
  // {name: "Industry Collaboration", link: "/industry-collaboration",},
  {name: "PCI" ,link: "https://www.pci.nic.in",  target: "_blank"},
  {name: "BCI" ,link: "https://www.barcouncilofindia.org/home",  target: "_blank"},
  {name: "AYUSH" ,link: "https://ayush.gov.in/",  target: "_blank"},
  {name: "INC" ,link: "https://www.indiannursingcouncil.org/",  target: "_blank"},
  {name: "RTI" ,link: "/rti"},
];

const MainNavData = [
  {
    title: "Home",
    href: "/",
    flyout: null,
    flyoutData: null,
    align: "center",
  },
  {
    title: "About ABVSU",
    href: "/aboutABVSU",
    flyout: () => <FlyoutContent data={AboutData} />,
    flyoutData: AboutData,
    align: "center",
  },
  {
    title: "Recognition",
    href: "/recognition",
    flyout: null,
    flyoutData: null,
    align: "center",
  },
  {
    title: "Appreciation",
    href: "/appreciation",
    flyout: null,
    flyoutData: null,
    align: "center",
  },
  {
    title: "Programmes",
    href: "#",
    flyout: ()=> <FlyoutContent data={programmeData}/>,
    flyoutData: programmeData,
    align: "center",
  },
  {
    title: "Research",
    href: "/research",
    flyout: ()=> <FlyoutContent data={researchData}/>,
    flyoutData: researchData,
    align: "center",
  },
  // {
  //   title: "Pharmacy",
  //   href: "#",
  //   flyout: ()=> <FlyoutContent data={pharmacyData}/>,
  //   flyoutData: pharmacyData,
  //   align: "center",
  // },
  {
    title: "Student Zone",
    href: "#",
    flyout: ()=> <FlyoutContent data={studentZone}/>,
    flyoutData: studentZone,
    align: "center",
  },
  {
    title: "Admission 2025",
    href: "/docs/Admission-Form.pdf",
    flyout: ()=> <FlyoutContent data={admission}/>,
    flyoutData: admission,
    align: "right", // 👈 align flyout to the right
  },
  // {
  //   title: "Contact",
  //   href: "/contact",
  //   flyout: null,
  //   flyout: null,
  // },
];

export { HangingNavData, MainNavData };
