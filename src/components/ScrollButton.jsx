import { Link } from "react-scroll";

export default function ScrollButton({ target, label }) {
  return (
    <>
      <Link to={target} smooth={true} duration={5500}>
        <button style={{ padding: "10px 20px", cursor: "pointer" }}>
          {label}
        </button>
      </Link>
    </>
  );
}
