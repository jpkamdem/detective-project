import ScrollButton from "./ScrollButton";

export default function Section1() {
  return (
    <>
      <div
        id="section1"
        style={{
          height: "100vh",
          backgroundColor: "#f4a261",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2>Section 1 : Enquêtez sur la citrouille</h2>
        <ScrollButton label="Section numéro TWO" target="section2" />
      </div>
    </>
  );
}
