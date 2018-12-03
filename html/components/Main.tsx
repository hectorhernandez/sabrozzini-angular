import * as React from 'react';
import Footer from "./footer/Footer";
import NavMenu from './navmenu/NavMenu';
import Sidebar from './sidebar/Sidebar';

// tslint:disable-next-line:interface-name
export interface MainProps {
    children?: React.ReactNode;
}

class Main extends React.Component < MainProps, {} > {
    public render() {
        return (
            <div className='container-fluid'>
                <NavMenu/>
                <div className='container-fluid'>
                    <div className='row'>
                        {this.props.children}
                        <Sidebar/>
                    </div>                    
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Main;