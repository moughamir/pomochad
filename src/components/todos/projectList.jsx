import { Fire, FireSimple, Notepad } from "phosphor-react";
import { view } from "@risingstack/react-easy-state";

import { projects } from "../../store";
import Project from "./project";

export default view(() => (
  <div className="projectLists">
    <Project name="Today" icon={Notepad} color="blue" />
    <Project name="Important" icon={Fire} color="red" />
    <Project name="Low priority" icon={Fire} color="green" />

    {/* user added projects*/}
    {projects.list.map((item) => <Project name={item} icon={FireSimple} />)}
  </div>
));
