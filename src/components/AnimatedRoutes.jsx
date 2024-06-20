import { AnimatePresence } from "framer-motion";
import { paths } from "./Paths";
import { Route, Routes, useLocation } from "react-router";
import Header from "./Header";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Header />

        <Routes location={location} key={location.pathname}>
          {paths.map(({ id, path, element }) => {
            return <Route key={id} path={path} element={element} />;
          })}
        </Routes>
        {/* <p style={{ textAlign: 'center',
         backgroundColor:'#0b0c14',
          color:"aquamarine" }}>
      © 2024, Made with {'❤️'} by {' '}
      <a href="https://initializ.ai" style={{ color: '#7353e5' }}>initializ inc</a>
    </p> */}
      </AnimatePresence>

    </>
  );
};

export default AnimatedRoutes;
