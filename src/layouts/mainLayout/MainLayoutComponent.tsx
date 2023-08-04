import NavBar from "../../components/ui/navBar/NavBarComponent";

export function MainLayout({children}:any){
    return (
        <>
        <div>
            <NavBar/>
        </div>
        <main>{children}</main>
        </>
    );

}