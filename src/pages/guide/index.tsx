import { Fade } from "react-awesome-reveal";
import { SMILESExamples, SMILESBonds } from "../../utils/SMILESHelpers";

const Guide = () => {
  return (
    <div className="flex-1 flex flex-col justify-start items-center">
      <div className="w-full">
        <Fade triggerOnce>
          <h2
            style={{ direction: "rtl" }}
            className="text-right text-lg mb-2 mx-auto"
          >
            راهنمای رسم ترکیبات شیمیایی:
          </h2>
          <p style={{ direction: "rtl" }} className="mb-14 font-[500]">
            برای رسم ترکیبات، از{" "}
            <a
              target="_blank"
              href="https://en.wikipedia.org/wiki/Simplified_molecular-input_line-entry_system"
              className="en-font"
            >
              <strong> SMILES </strong>
            </a>{" "}
            استفاده میشه.
            <br /> در این بخش مثال‌هایی برای آشنایی با این روش و همچنین لینک به
            صفحاتی برای آموزش این روش قرار داده شده.
          </p>

          <div className="my-10">
            <div className="overflow-x-auto">
              <table className="table table-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="en-font pl-0 border-r-2 border-gray-200">
                      <h6 className="text-[15px]"> Bond </h6>
                    </th>
                    <th className="en-font pl-2">
                      <h6 className="text-[15px]"> Structure </h6>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {SMILESBonds.map((exp: any) => (
                    <tr key={exp.name}>
                      <th className="en-font pl-0 w-1/2 border-r-2 border-gray-200">
                        {exp.name}
                      </th>
                      <th className="en-font pl-2 w-1/2">{exp.structure}</th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h6 className="en-font">Element Symbols:</h6>
            <p className="mb-3 en-font text-xs">
              Upper case letters refer to non-aromatic atoms
            </p>
            <p className="en-font">
              H | He | Li | Be | B | C | N | O | F | Ne | Na | Mg | Al | Si | P
              | S | Cl | Ar | K | Ca | Sc | Ti | V | Cr | Mn | Fe | Co | Ni | Cu
              | Zn | Ga | Ge | As | Se | Br | Kr | Rb | Sr | Y | Zr | Nb | Mo |
              Tc | Ru | Rh | Pd | Ag | Cd | In | Sn | Sb | Te | I | Xe | Cs | Ba
              | Hf | Ta | W | Re | Os | Ir | Pt | Au | Hg | Tl | Pb | Bi | Po |
              At | Rn | Fr | Ra | Rf | Db | Sg | Bh | Hs | Mt | Ds | Rg | Cn |
              Fl | Lv | La | Ce | Pr | Nd | Pm | Sm | Eu | Gd | Tb | Dy | Ho |
              Er | Tm | Yb | Lu | Ac | Th | Pa | U | Np | Pu | Am | Cm | Bk | Cf
              | Es | Fm | Md | No | Lr
            </p>
          </div>
          <div className="mt-10">
            <h6 className="en-font">Aromatic Organic:</h6>
            <p className="mb-3 en-font text-xs">
              Lower case letters refer to aromatic atoms
            </p>
            <p className="en-font">b | c | n | o | s | p | se | as</p>
          </div>

          <div className="mt-10">
            <div className="overflow-x-auto">
              <table className="table table-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="en-font pl-0 border-r-2 border-gray-200">
                      <h6 className="text-[15px]"> Name </h6>
                    </th>
                    <th className="en-font pl-2">
                      <h6 className="text-[15px]"> Structure </h6>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {SMILESExamples.map((exp: any) => (
                    <tr key={exp.name}>
                      <th className="en-font pl-0 w-1/2 border-r-2 border-gray-200">
                        {exp.name}
                      </th>
                      <th className="en-font pl-2 w-1/2">{exp.structure}</th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <p style={{ direction: "rtl" }} className="mt-16 text-center">
              لینک آموزش:
            </p>
          </div>
          <div className="flex justify-center items-center gap-3 mt-4">
            <a
              href="https://www.daylight.com/meetings/summerschool98/course/dave/smiles-intro.html"
              target="_blank"
              className="h-[100px] w-1/2 max-w-xs py-2 px-10 rounded-xl flex flex-col justify-center items-center bg-[#E2E8F0] hover:-translate-y-1 duration-300"
            >
              <h3 className="mt-2 en-font">Daylight</h3>
            </a>
            <a
              href="http://opensmiles.org/opensmiles.html"
              target="_blank"
              className="h-[100px] w-1/2 max-w-xs py-2 px-10 rounded-xl flex flex-col justify-center items-center bg-[#E2E8F0] hover:-translate-y-1 duration-300"
            >
              <h3 className="mt-2 en-font">Opensmiles</h3>
            </a>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Guide;
