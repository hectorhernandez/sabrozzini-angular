import * as React from 'react';

export default class SideBar extends React.Component {
    public render() {
        return (
            <div className="col-10 col-sm-8 col-md-8 col-lg-2 sidebar">
                <div className="about-section">
                    <img src="images/profile.jpg" className="border rounded-circle"/>
                    <p>Ground round pork loin t-bone, bacon turkey biltong drumstick alcatra doner
                        fatback burgdoggen ham hock. Tail leberkas sirloin, strip steak t-bone doner
                        beef ribs hamburger.</p>
                </div>
                <div className="social-networks">
                    <h5>S&iacute;guenos en
                    </h5>
                    <div className="addthis_inline_follow_toolbox"/>

                </div>
            </div>
        );
    }
}


