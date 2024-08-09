import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import Intro from "./pages/intro";
import Notfound from "./pages/notfound";
import Layout from "./components/layout";
import Name from "./pages/name";
import Draw from "./pages/draw";
import Guide from "./pages/guide";
import Info from "./pages/info";
import { RoutesWrapper } from "./utils/RoutesWrapper";
import "./App.css";
interface Route {
  pathName: string;
  element: JSX.Element;
}
function App() {
  const domain = process.env.REACT_APP_DOMAIN;

  return (
    <div className="relative">
      <Fade>
        <img
          src={`${domain}assets/images/chemistry-icon.png`}
          alt="chemai"
          className="fixed right-14 top-20 opacity-[.05] hidden lg:block"
        />
      </Fade>
      <Fade>
        <img
          src={`${domain}assets/images/chemistry-icon.png`}
          alt="chemai"
          className="fixed left-14 bottom-36 opacity-[.05] hidden lg:block rotate-[180deg]"
        />
      </Fade>

      <div className="container mx-auto">
        <BrowserRouter>
          <RoutesWrapper>
            <Layout>
              <Routes>
                <Route element={<Intro />} path={`${domain}`} />
                <Route element={<Name />} path={`${domain}name`} />
                <Route element={<Draw />} path={`${domain}draw`} />
                <Route element={<Guide />} path={`${domain}guide`} />
                <Route element={<Info />} path={`${domain}info`} />
                <Route element={<Notfound />} path="*" />
              </Routes>
            </Layout>
          </RoutesWrapper>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
