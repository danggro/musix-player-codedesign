import Bookmark from "./icon/Bookmark";
import Loop from "./icon/Loop";
import Next from "./icon/Next";
import Pause from "./icon/Pause";
import Previous from "./icon/Previous";
import Speaker from "./icon/Speaker";
import Suffle from "./icon/Suffle";

export default function Controls() {
  return (
    <div className="flex items-center justify-between">
      <Bookmark />
      <div className="flex items-center space-x-6">
        <Suffle />
        <Previous />
        <Pause />
        <Next />
        <Loop />
      </div>
      <Speaker />
    </div>
  );
}
