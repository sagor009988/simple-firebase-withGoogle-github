import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div>
            <Link to={'/'}>Home</Link> <br />
            <Link to={'/login'}>Login</Link>
        </div>
    );
};

export default Home;