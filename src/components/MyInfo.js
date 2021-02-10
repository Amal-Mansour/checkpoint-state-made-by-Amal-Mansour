import React, { Component } from 'react';

class MyInfo extends Component {
    person = {
        fullName: "Amal Mansour",
        profession: " I'm a Full Stack web developer",
        bio: "Full Stack web development is an exciting career because it's always evolving and constantly changing. This means you'll always have the opportunity to interact with new tools and learn new skills.",
        skills: "HTML/XML    CSS /CSS LAYOUT    JS and JSX",
        libraryAndFrame: "REACT JS  AND  BOOTSTRAP"
    }

    render() {
        return (
            <div className="myDiv">
                <br />

                <h2 style={{ color: "white", fontSize: "25px" }}>{this.person.fullName}</h2>
                <p style={{ color: "white", fontSize: "20px" }}>{this.person.profession}</p>
                <p style={{ color: "white", fontSize: "20px" }}>{this.person.bio}</p> <br />
                <span style={{ color: "white", fontSize: "20px" }}>My Skills :<br />
                    <p style={{ color: "#cc0000", fontSize: "25px", fontStyle: "oblique", fontWeight: "bold" }}>{this.person.skills}</p> </span> <br /><br />
                <span style={{ color: "white", fontSize: "20px" }}>Library and Framework :<br />
                    <p style={{ color: "#cc0000", fontSize: "25px", fontStyle: "oblique", fontWeight: "bold" }}>{this.person.libraryAndFrame}</p> </span>
            </div>


        );
    }
}

export default MyInfo;

