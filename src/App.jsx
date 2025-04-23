import NAVBAR from "./Navbar"
import WELCOME from "./Welcome"
import FOOTER from "./footer"
import LEARN from "./Learn"
import DISCOVER from "./Discover"
import EARN from "./Earn"
import SUPPORT  from "./Support"  

export default function App() {
  return (
    <div>
      <NAVBAR />
      <WELCOME />
      <LEARN />
      <DISCOVER />
      <EARN />
      <SUPPORT />
      <FOOTER />
    </div>
  );
}
