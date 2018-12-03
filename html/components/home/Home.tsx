import * as React from 'react';

export default class Home extends React.Component {
    public render() {
        return (
            <div>
                <div className="header-landing ">
                    <div className="container">
                        <div className="row">
                            <div className="header-container text-center">
                                <h1 className="greetings">Bienvenido</h1>
                                <p>
                                    En Sabrozzini encontrar&aacute;s
                                    <br/>recetas deliciosas, f&aacute;ciles y divertidas para toda ocasi&oacute;n
                                </p>
                                <a className="btn btn-alt" href="/recipe.html">Ver Recetas</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-content col-12 col-sm-12 col-md-12 col-lg-9"/>
            </div>
        );
    }
}