import {Link} from "react-router-dom";
import sidebar from './sidebar.module.scss'


export const Sidebar = () => {
    return (
        <div className={sidebar.layout}>
            <Link to={`blogs`}>Blogs</Link>
            <Link to={`posts`}>Posts</Link>
        </div>
    )
}
