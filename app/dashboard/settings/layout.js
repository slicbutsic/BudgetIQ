import SideNav from "./components/side-nav"

export default function Latyout({children}) {
  return (
    <div className="grid grid-cols-4 gap-8">
      <aside>
        <SideNav />
      </aside>
      <div className="col-span-3">

      </div>
      {children}
    </div>
  )
}
