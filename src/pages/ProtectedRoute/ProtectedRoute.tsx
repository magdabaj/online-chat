import {Component, FC, useContext} from "react";
import React from "react";
import {Route, Redirect, RouteProps} from "react-router-dom";

export interface ProtectedRouteProps extends RouteProps {
    isAuthenticated: boolean;
    authenticationPath: string;
}

// export class ProtectedRoute extends Route<ProtectedRouteProps>{
//     public render() {
//         let redirectPath: string = ''
//         if (!this.props.isAuthenticated) redirectPath = this.props.authenticationPath
//
//         if (redirectPath) {
//             const redirectComponent = () => (<Redirect to={{pathname: redirectPath}}/>)
//             return <Route {...this.props} component={renderComponent} render={undefined}/>
//         } else return <Route {...this.props}/>
//     }
// }

// const ProtectedRoute: FC = ({component: Component, ...rest}: any) => {
//     const { state } = useContext({isAuth: false})
//
//     return(
//         <Route render={props =>
//             !state.isAuth ? <Redirect to={'/'}/> : <Component {...props}/>
//         }
//             {...rest}/>
//     )
// }