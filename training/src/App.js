import "./App.css";
// import Profile from "./components/Profile/Profile";
// import Panel from "./components/Panels/Panel";
// import Product from "./components/Products/Product";
import Box from "./components/Box/Box";

// function App() {
//   return (
//     <>
//       <Product
//         productPrice="10.99"
//         title="Tacos With Lime"
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//       />
//       <Product
//         productPrice="3.15"
//         title=""
//         imgUrl="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       />
//       <Product
//         productPrice="15.90"
//         title=""
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       />
//       ;
//     </>
//   );
// }

// function App() {
//   return (
//     <>
//       <Panel title="Marta Profile">
//         <Profile name="Marta" email="marta@gmail.com" />
//       </Panel>
//       <Panel title="Agnieszka Profile">
//         <Profile name="Agnieszka" email="agnieszka@gmail.com" />
//       </Panel>
//       <Panel title="Krzysiek Profile">
//         <Profile name="Krzysiek" email="Krzysiek@gmail.com" />
//       </Panel>
//     </>
//   );
// }

function App() {
  const boxNo = 10;
  const boxArr = new Array(boxNo)
    .fill()
    .map((el, index) => <Box key={`box-${index}`} />);
  return <>{boxArr}</>;
}
export default App;
