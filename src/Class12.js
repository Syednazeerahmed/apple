import {Person} from "./components/Person";
// import { prop} from "prop-type";

function Class12 () {
    // const friends = ["syed, mohammed, mifzal];
    return(
        <div>
            <Person
                name="nazeer"
                email="naz@gmail.com"
                age={22}
                isMarried={false}
                friends={["syed", "mohammed", "mifzal"]}
            />
        </div>
    );
}

export default Class12;