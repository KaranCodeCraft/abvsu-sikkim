import FlyoutContent from "@/ui/Navbar/FlyoutContent";

export const boardNav = [
  {
    title: "Recognition and Approvals",
    path: "/Government of Sikkim Gazzete Notification.pdf",
    target: "_self",
  },
  { title: "Awards and Achievements", path: "#" },
  { title: "COBSE", path: "https://www.cobse.org.in/" },
  { title: "Accredited Institutions", path: "/ssceducation/AccreditedInstitution" },
];

export const boardMainNav = [
  {
    title: "Home",
    path: "/ssceducation",
    flyout: null,
    flyoutData: null,
  },
  {
    title: "About Us",
    path: "#",
    flyout: () => <FlyoutContent data={aboutBoard} />,
    flyoutData: null,
  },
  {
    title: "Programmes",
    path: "#",
    flyout: () => <FlyoutContent data={programmeBoard} />,
    flyoutData: null,
  },
  {
    title: "Student Zone",
    path: "#",
    flyout: () => <FlyoutContent data={stuZoneBoard} />,
    flyoutData: null,
  },
  {
    title: "Course Material",
    path: "/ssceducation/CourseMaterial",
    flyout: null,
    flyoutData: null,
  },
  {
    title: "Contact Us",
    path: "/ssceducation/contactus",
    flyout: null,
    flyoutData: null,
  },
];

const aboutBoard = [
  {
    title: "About Us",
    items: [
      {
        name: "Vision & Mission",
        link: "/ssceducation/Vision&Mission",
      },
      {
        name: "Why Us",
        link: "/ssceducation/WhyUs",
      },
      {
        name: "Our Inspiration",
        link: "/ssceducation/ourinspiration",
      },
      /* {
        name: "Board of Management",
        link: "/ssceducation/boardofmanagement",
      }, */
    ],
  },
];

const programmeBoard = [
  {
    title: "Programmes",
    items: [
      {
        name: "Secondary Level",
        link: "/ssceducation/SecondaryLevel",
      },
      {
        name: "Sr-Secondary Level",
        link: "/ssceducation/Sr-SecondaryLevel",
      },
      {
        name: "Skill Education",
        link: "/ssceducation/SkillEducation",
      }
    ],
  },
];

const stuZoneBoard = [
  {
    title: "Student Zone",
    items: [
      {
        name: "Admission",
        link: "/ssceducation/Admission",
      },
      {
        name: "Faculty Login",
        link: "https://www.erp.abvsu.ac.in/centersignin",
      },
      {
        name: "Prospectus",
        link: "/ssceducation/#",
      },
      // {
      //   name: "Fees Structure",
      //   link: "/ssceducation/FeesStructure",
      // },
      {
        name: "Examination",
        link: "/ssceducation/Examination",
      },
      {
        name: "Verification",
        link: "/ssceducation/Verification",
      },
      {
        name: "Transfer of Credits",
        link: "/ssceducation/TransferofCredits",
      },
      {
        name: "Passing Criteria",
        link: "/ssceducation/PassingCriteria",
      },
      {
        name: "Results",
        link: "/ssceducation/results",
      },
      {
        name: "Certification Eligibility",
        link: "/ssceducation/CertificationEligibility"
      }
    ],
  },
];

/* const courseBoard = [
  {
    title: "Courses",
    items: [
      {
        name: "Online Course Material",
        link: "/ssceducation/#",
      },
      {
        name: "Open Educational Resources",
        link: "/ssceducation/#",
      },
    ],
  },
]; */