import CardContent from "./components/CardContent";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
// import CardContent from "./components/CardContent";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container px-lg-5">
        {" "}
        <div className=" row  gx-lg-5">
          <CardContent
            icon=" fa-bars"
            title="Fresh new layout"
            description="With Bootstrap 5, we've created a fresh new layout for this template!"
          />
          <CardContent
            icon=" fa-bars"
            title="Fresh new layout"
            description="With Bootstrap 5, we've created a fresh new layout for this template!"
          />
          <CardContent
            icon=" fa-bars"
            title="Fresh new layout"
            description="With Bootstrap 5, we've created a fresh new layout for this template!"
          />
          <CardContent
            icon=" fa-bars"
            title="Fresh new layout"
            description="With Bootstrap 5, we've created a fresh new layout for this template!"
          />
          <CardContent
            icon=" fa-bars"
            title="Fresh new layout"
            description="With Bootstrap 5, we've created a fresh new layout for this template!"
          />
          <CardContent
            icon=" fa-bars"
            title="Fresh new layout"
            description="With Bootstrap 5, we've created a fresh new layout for this template!"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
