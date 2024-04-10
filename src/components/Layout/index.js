import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';
import ParticlesComponent from '../Particles';

const Layout = () => {

    return (
        <div className="App" >
        <ParticlesComponent />
        <Sidebar />
        <div className='page'>
            {/* <span className='tags top-tags'>{'</body>'}</span> */}

            <Outlet />

            {/* <span className='tags bottom-tags'>{'</body>'}
            <br/>
            <span className='bottom-tag-html'> {'</html>'}</span>
            </span> */}
        </div>
        </div>
    );
    }

export default Layout;