import NavBar from "../../components/ui/navBar/NavBarComponent";
import { NavigationItem } from "../../core/interfaces/ui/navigation.item.interface";

export function MainLayout({children}:any){
    let navigation : NavigationItem[] = [
        { name: 'Homes', href: '#', current: true },
        { name: 'Cities', href: '#', current: false },
      ]
    return (
        <>
        <div>
            <NavBar navigation={navigation} />
        </div>
        <main>{children}</main>
        </>
    );

}