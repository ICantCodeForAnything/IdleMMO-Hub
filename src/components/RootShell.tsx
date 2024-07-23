import { AppShell } from "@mantine/core"
import { Link, Outlet } from "react-router-dom"


export const RootShell = () => {
    return (
    <AppShell
        navbar={{
          width: 150,
          breakpoint: 'sm',
        }}
        padding="md"
    >
        <AppShell.Navbar p="md">
            <Link to='/'>Home</Link>
            <Link to='/monster-drops'>Monster Drops</Link>
        </AppShell.Navbar>
        <AppShell.Main>
            <Outlet />
        </AppShell.Main>
      </AppShell>
    )
}