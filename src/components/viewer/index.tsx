//@ts-nocheck
import { useEffect } from "react";
import SmilesDrawer from "smiles-drawer";

const Viewer = ({ compound, size }: { compound: string; size: number }) => {
  const SETTINGS = {
    width: size,
    height: size,
  };
  let drawer = new SmilesDrawer.SvgDrawer(SETTINGS);

  useEffect(() => {
    SmilesDrawer.parse(compound, function (tree: any) {
      drawer.draw(tree, "structure-svg", "light");
    });
  }, [compound, size]);

  return (
    <div
      style={{
        width: SETTINGS.width,
        height: SETTINGS.height,
        margin: "0 auto",
      }}
    >
      <svg id="structure-svg"></svg>
    </div>
  );
};

export default Viewer;
