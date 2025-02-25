import Avatar from "@components/home/Avatar";
import Introduction from "@components/home/Introduction";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-between mb-12 md:flex-row"
    >
      <Avatar />
      <Introduction />
    </section>
  );
}
