import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
  const activepage = props.activepage;
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
