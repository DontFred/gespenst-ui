import Icon from "@gespenst/icon";
import { Accessibility } from "@gespenst/icon/accessibility";

export default function Home() {
  return (
    <div className="animate-in fade-in zoom-in p-10">
      <button className="inner-border text-secondary-light">Hello</button>
      <Icon className="text-primary" name="arrow-right" />
      <Accessibility className="text-red-700" />
      <Icon className="text-primary" name="data-point-medium" />
    </div>
  );
}
