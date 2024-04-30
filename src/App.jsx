import { useState } from "react";
import "./App.css";
import { teams } from "./assets/teams";
import Team from "./components/Team";
import cloneDeep from "lodash/cloneDeep";
// import _ from "lodash";

function App() {
  const [data, setData] = useState(teams);
  // const [formData, setFormData] = useState({
  //   name: "",
  //   last: "",
  //   email: "",
  // });

  const voteFn = (id) => {
    // data.forEach((d) => {
    //   if (d.id == id) {
    //     d.count = d.count + 1;
    //   }
    // });
    // console.log(data);
    // lodash
    // JSON.stringify
    // .map() --> shallow copy

    // const newData = data.map((d) => {
    //   if (d.id === id) {
    //     return { ...d, count: d.count + 1 };

    //     // {count: 10, id: 1, name: "aaa"}
    //   }

    //   return { ...d };
    // });

    // const newData = JSON.parse(JSON.stringify(data));

    // newData.forEach((d) => {
    //   if (d.id === id) {
    //     d.count = d.count + 1;
    //   }
    // });

    const newData = cloneDeep(data);
    // const newData = _.cloneDeep(data);

    newData.forEach((d) => {
      if (d.id === id) {
        d.count = d.count + 1;
      }
    });

    // console.log("newData", newData);
    // console.log("data", data);

    setData(newData);
  };

  return (
    <div className="container">
      {data.map((team) => {
        // return <Team key={team.id} {...team} />;
        return <Team key={team.id} team={team} voteFn={voteFn} />;
      })}
      {/* <Team key={teams[0].id} team={teams[0]} />
      <Team key={teams[1].id} team={teams[1]} />
      <Team key={teams[2].id} team={teams[2]} /> */}
    </div>
  );
}

// props = {
//   team: {
//     id: 1,
//     count: 0,
//     name: "Text",
//   },
//   name: "Alex",
// };

// team = {
//   id: 1,
//   count: 0,
//   name: "Text"
// }

// props = {...team}

// props = {
//   id: 1,
//   count: 0,
//   name: "Text"
// }

export default App;
