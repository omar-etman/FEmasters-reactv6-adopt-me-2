import './style.css'
import Pet from "./Pet";
import SearchParams from "./SearchParams";

//this how jsx is translated to js to the browser

//JS

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "dog",
//       breed: "havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Dojo",
//       animal: "dog",
//       breed: "labrador",
//     }),
//     React.createElement(Pet, {
//       name: "Rocky",
//       animal: "dog",
//       breed: "german shepherd",
//     }),
//   ]);
// };

//JSX

function App() {
  return (
    <div>
      <h1 id="my-brand">Adopt Me</h1>
      {/* <Pet name="Luna" animal="dog" breed="havanese" />
      <Pet name="Dojo" animal="dog" breed="labrador" />
      <Pet name="Rocky" animal="dog" breed="german shepherd" /> */}
      <SearchParams />
    </div>
  );
}

export default App;
