import { useRef} from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

function RevealOnScroll() {
  const ref = useRef(null);
  const onScreen = useIntersectionObserver(ref, {threshold: 0.5});

  return (
    <div className="Appp">
      <header>This is the Header</header>
      <main ref={ref}>{onScreen?(
        <>
            <div className="child-one">Child One</div>
            <div className="child-two">Child Two</div>
        </>
      ):null}
      </main>
      <footer>This is the Footer</footer>
    </div>
  );
}

export default RevealOnScroll;