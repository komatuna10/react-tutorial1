import Welcom from "./Welcom";
import Imside from "./Imsidebar"

export default function Main() {
  return (
    <main>
      <Welcom/>
      <aside>
        <Imside/>
      </aside>
    </main>
  );
}