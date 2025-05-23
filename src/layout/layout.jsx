import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "../component/header";
import SectionOne from "../component/sectionOne";
import SectionTwo from "../component/sectionTwo";
import SectionThree from "../component/sectionThree";
import SectionFour from "../component/sectionFour";
import SectionFive from "../component/sectionFive";
import SectionSix from "../component/sectionSix";
import Footer from "../component/footer.jsx";
const Layout = () => {
  return (
    <Box>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <Footer />
       
      <Box as="main" p={4} >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
