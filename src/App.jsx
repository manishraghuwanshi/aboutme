import Header from "./components/Header";

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
    </>
  );
}
