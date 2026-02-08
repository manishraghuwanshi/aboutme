import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

export default function App() {
  return (
    <>
      <Header
        name="Manish Raghuwanshi"
        role="React + Next.js Developer"
        avatar="/img1.jpg"
        links={{
          github: "https://github.com/manish",
          linkedin: "https://linkedin.com/in/manish",
          twitter: "https://twitter.com/manish",
        }}
      />
      <Home />
      <Footer
        text="© 2026 Manish Raghuwanshi"
        links={[
          { label: "GitHub", href: "https://github.com/" },
          { label: "LinkedIn", href: "https://linkedin.com/" },
          { label: "Instagram", href: "https://Instagram.com/" },
        ]}
      />
    </>
  );
}
