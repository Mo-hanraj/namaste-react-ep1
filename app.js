     
        //const heading= React.createElement("h1",{ id:"head"},"hello world" );
        ///console.log(heading);

        //const root= ReactDOM.createRoot(document.getElementById("root"));

        //root.render(heading);
        

        const heading= React.createElement("div",{id:"parent"},
         React.createElement("div",{id:"child"},
         [
         React.createElement("h1",{},"hello child 1"),
         React.createElement("h2",{},"hello child 2"),
        ])
        );

        console.log(heading);

        const root= ReactDOM.createRoot(document.getElementById("root"));

        root.render(heading);
    