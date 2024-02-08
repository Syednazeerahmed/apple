import {Link} from "react-router-dom";
export const Navbar = () => {
    return (
      <div>
        <Link to="/">Home</Link>
        {/* <Link to="menu">Menu</Link> linked to Class7.js file */}
         <Link to="profile">Profile</Link> {/* linked to Class8.js file */}
        <Link to="contact">Contact</Link>
      </div>
    );
}