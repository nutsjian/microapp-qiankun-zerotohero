import { HTMLAttributes } from "react";

export interface LayoutProps extends Pick<HTMLAttributes<HTMLDivElement>, "children"> {

}

function Layout(props: LayoutProps) {
  return (
    <div className="modulex-layout">
      {props.children}
    </div>
  )
}

export default Layout;