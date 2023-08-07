function Footer() {
    return (
        <footer className=" lex flex-col min-h-screen max-w-screen">
            <div className=" bottom-0 w-full text-center my-2">

                <hr className="my-2" />
                <p>&copy; {new Date().getFullYear()} <span><a href="https://www.linkedin.com/in/pablo-sandoval-838553216/" target="_blank">Sandoval Pablo</a></span>. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
