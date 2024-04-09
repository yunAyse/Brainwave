import ButtonGradient from "./assets/svg/ButtonGradient";

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <div className="pt-[4.75rem] lg:pt overflow-hidden">
        <Button className="mt-10" href="#login">
          Something
        </Button>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
