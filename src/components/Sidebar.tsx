import { NavLink } from "./NavLink";
import { Logo } from "./icons/Logo";

export function Sidebar() {
  return (
    <aside className="border-r border-white/10 w-80 fixed left-0 top-0 bottom-0 p-6 hidden lg:block">
      <Logo className="text-white h-4 w-auto" />

      <nav className="mt-10 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <strong className="text-zinc-100 font-medium text-sm">
            Guides
          </strong>

          <div className="text-sm flex flex-col pl-2">
            <NavLink href="/teste/a">Introduction</NavLink>
            <NavLink href="/teste/b">Quickstart</NavLink>
            <NavLink href="/teste/c">SDKs</NavLink>vLink
            <NavLink href="/teste/d">Authentication</NavLink>
            <NavLink href="/teste/e">Pagination</NavLink>
            <NavLink href="/teste/f">Errors</NavLink>
            <NavLink href="/teste/g">Webhooks</NavLink>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <strong className="text-zinc-100 font-medium text-sm">
            Resources
          </strong>

          <div className="text-sm flex flex-col pl-2">
            <NavLink href="/teste/h">Contacts</NavLink>
            <NavLink href="/teste/i">Conversations</NavLink>
            <NavLink href="/teste/j">Messages</NavLink>
            <NavLink href="/teste/l">Groups</NavLink>
            <NavLink href="/teste/m">Attachments</NavLink>
          </div>
        </div>
      </nav>
    </aside>
  )
}