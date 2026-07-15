import FullWidthWrapper from "@components/full-width-wrapper";
import ColorsSection from "./colors";
import ComponentsShowcaseSection from "./components-showcase";
import MotionSection from "./motion";
import ShapeSection from "./shape";
import SpacingSection from "./spacing";
import TypographySection from "./typography";
import ZIndexSection from "./z-index";

export const metadata = {
  title: "Design System — Cranbakery",
  description:
    "Internal, at-a-glance reference for every design token in this project.",
  robots: { index: false, follow: false },
};

const SECTIONS = [
  { id: "colors", Component: ColorsSection },
  { id: "typography", Component: TypographySection },
  { id: "spacing", Component: SpacingSection },
  { id: "shape", Component: ShapeSection },
  { id: "motion", Component: MotionSection },
  { id: "z-index", Component: ZIndexSection },
  { id: "components", Component: ComponentsShowcaseSection },
];

const DesignPage = () => {
  return (
    <main>
      <FullWidthWrapper
        element="header"
        wrapperProps={{ style: { background: "var(--color-grey-200)" } }}
      >
        <div className="flex flex-col gap-4 py-20">
          <span className="font-mono text-[0.7rem] tracking-[0.15em] text-primary-600 uppercase">
            Internal · not indexed
          </span>
          <h1
            className="font-display"
            style={{
              fontSize: "var(--fs-2xl)",
              color: "var(--color-text)",
              margin: 0,
            }}
          >
            Design System
          </h1>
          <p
            className="max-w-[60ch] text-grey-700"
            style={{ fontSize: "var(--fs-2xs)" }}
          >
            Every color, font, space, shape, and motion token that makes up the
            Cranbakery UI — in one place, so nobody has to reverse-engineer
            globals.css. Click any token chip to copy it.
          </p>
        </div>
      </FullWidthWrapper>

      {SECTIONS.map(({ id, Component }, i) => {
        return (
          <FullWidthWrapper
            key={id}
            wrapperProps={{
              style: {
                background:
                  i % 2 === 1 ? "var(--color-grey-100)" : "transparent",
              },
            }}
          >
            <div className="py-16">
              <Component />
            </div>
          </FullWidthWrapper>
        );
      })}
    </main>
  );
};

export default DesignPage;
