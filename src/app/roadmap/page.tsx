import { Slideshow } from '@/components/Slideshow';
import { Q1Slide, Q2Slide, Q3Slide } from '@/components/Slides';

export default function RoadmapPage() {
  return (
    <Slideshow>
      <Q1Slide />
      <Q2Slide />
      <Q3Slide />
    </Slideshow>
  );
}
