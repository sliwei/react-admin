import React from "react"
import { Route } from "react-router-dom"
import RouterGuard from "./guard"
import { CSSTransition } from "react-transition-group"
import "../assets/css/router.global.css"
// import routes from "./appRouterConfig"
import { complexMenu as routesList } from "./conf"
import loadable from "@loadable/component"

const routes = []
const loop = list => {
  list.map(item => {
    if (item.children && item.children.length) {
      loop(item.children)
    } else {
      routes.push(item)
    }
  })
}
loop(routesList)

console.log(routes)

/**
 * 子路由<动画>
 * @returns {*}
 */
export default () => {
  const AsyncPage = loadable(props => import(`../${props.component}`))

  return (
    <div className="router-container">
      {routes.map(({ path, component }, index) => (
        <Route key={index} path={path} exact>
          {props => (
            <CSSTransition
              in={props.match != null}
              timeout={400}
              classNames="router-transition"
              unmountOnExit
            >
              <div className="router-transition">
                {/*<AsyncPage {...props} component={component}/>*/}
                <RouterGuard component={component} path={path} {...props}/>
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}

    </div>
  )
}
