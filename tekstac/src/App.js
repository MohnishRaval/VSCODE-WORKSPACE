import React from "react";
//import logo from "./logo.svg";
//import "./App.css";
import axios from "axios";

var data = [
  { id: "1", name: "mohnish", title: "Ahmedabad", color: "red" },
  { id: "2", name: "raj", title: "ranchi", color: "blue" },
  { id: "3", name: "ram", title: "lucknow", color: "green" },
];

const styles = {
  article: {
    paddingBottom: 10,
    borderBottomStyle: "solid",
    borderBottomColor: "#aaa",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
  },
};

class Article extends React.Component {
  state = {
    array: data,
  };

  render() {
    return (
      <div>
        {this.state.array.map((y) => {
          return <Display key={y.id} array={y} />;
        })}
      </div>
    );

    // const {pr} = this.props.data.map((item) => (
    //     <li key={item.id}>
    //       <p>{item.id}</p>
    //       <p>{item.name}</p>
    //       <p>{item.title}</p>
    //       <p>{item.color}</p>
    //     </li>
    //   ))
  }
    //return();
}

class Display extends React.Component {
  render() {
    return (
      <div style={styles.article}>
        <div>{this.props.array.id}</div>
        <div>{this.props.array.name}</div>
        <div>{this.props.array.id}</div>
        <div>{this.props.array.id}</div>
      </div>
    );
  }
}

// class Display extends React.Component {
//   render() {
//     var cityList = [
//       "Dallas",
//       "Austin",
//       "Seatle",
//       "Memphis",
//       "Detroit",
//       "Miami",
//     ];
//     var city = this.props.city;
//     console.log("city", city);
//     var c1 = cityList.indexOf(city);
//     if (c1 > -1) {
//       return <div>{this.props.city}</div>;
//     } else {
//       return <div>Not found</div>;
//     }
//   }
// }

// class Article extends React.Component {
//   constructor(props) {
//     super();
//     this.state = {
//       articleList: [],
//     };
//     this.componentDidMount = this.componentDidMount.bind(this);
//   }
//   async componentDidMount() {
//     let abc = require("./abc.json");
//     axios.get(abc).then((data) => {
//       // const articleList = data.data;
//       this.setState({ articleList: data.data });
//     });
//   }

//   render() {
//     console.log("try", this.state.articleList);
//     let abc = require("./abc.json");
//     // console.log(abc[0].title);
//     return (
//       <div>
//         {this.state.articleList.map((a1) => (
//           <p>
//             {a1.id}
//             {a1.title}
//           </p>
//         ))}
//       </div>
//     );
//   }
// }
// render() {

//   return (
//      <div className="container">
//       <div className="col-xs-8">
//       <h1>React Axios Example</h1>
//       {this.state.users.map((user) => (
//         <div className="card">
//          <div className="card-body">
//              <h5 className="card-title">{user.name}</h5>
//             <h6 className="card-subtitle mb-2 text-muted">
//             {user.email}
//             </h6>
//           </div>
//         </div>
//       ))}
//       </div>
//      </div>
//   );
// }
//export default App;
export default Article;
export { Display };
//export { Display }
