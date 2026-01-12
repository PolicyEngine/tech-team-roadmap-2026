import { Slideshow } from "./components/Slideshow";
import {
  TitleSlide,
  Q1SlideA,
  Q1SlideB,
  Q2Slide,
  Q3Slide,
} from "./components/Slides";

function App() {
  return (
    <Slideshow>
      <TitleSlide />
      <Q1SlideA />
      <Q1SlideB />
      <Q2Slide />
      <Q3Slide />
    </Slideshow>
  );
}

export default App;
