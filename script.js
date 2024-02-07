const parent = React.createElement("div", {id:'parent'}, [
    React.createElement("div", {id: 'child1'}, [
        React.createElement("h1", {id:"heading1"}, "This is H1 Tag in Child 1"),
        React.createElement("h2", {id:"heading2"},"This is h2 tag in Child 1")
    ]),
    React.createElement("div", {id:"child2"}, [
        React.createElement("h1", {id:"heading1"}, "This is H1 Tag in Child 2"),
        React.createElement("h2", {id: "heading2"}, "This is H2 Tag in Child 2")
    ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);