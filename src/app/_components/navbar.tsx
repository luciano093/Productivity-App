import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "../../n/components/ui/navigation-menu"
  
  export default function Navbar(){
    return(
        <>
        <div className="nav1">
        <NavigationMenu>
        <NavigationMenuList>
        <NavigationMenuItem>
        <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
        <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
        </NavigationMenuContent>
        </NavigationMenuItem>
        </NavigationMenuList>
        </NavigationMenu>
        </div>
        </>
    )
  }