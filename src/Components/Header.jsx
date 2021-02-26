const Header = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logos">
          <img
            src="./images/ironhack-logo.svg"
            className="Ironhack-logo"
            alt="logo"
          />
          <img src="./images/menu-top.svg" className="App-logo" alt="logo" />
        </div>
        <div className="headline-and-copytext">
          <h1 className="hello-react-headline">
            Say hello to <br /> ReactJS
          </h1>
          <p>
            You will learn a Frontend
            <br />
            framework from scratch, to <br />
            become a Ninja Developer.
          </p>
          <form>
            <button className="awesome">Awesome!</button>
          </form>
        </div>
      </header>
    </div>
  );
};

export default Header;
