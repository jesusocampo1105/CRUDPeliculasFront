import '../styles/Footer.css';
import Logo1 from '../assets/marca1.png';
import Logo2 from '../assets/marca2.png';
import Logo3 from '../assets/marca3.png';
import Logo4 from '../assets/marca4.png';
import Logo5 from '../assets/marca5.png';


export const Footer = () => {
    return (
        <div className="Footer">
            <div className="footer-up">
                <div className="footer-p">

                    <p>DESCARGO DE RESPONSABILIDAD IMPORTANTE: todo el contenido disponible en nuestro sitio web, en los sitios web hipervinculados,
                        y en las aplicaciones, foros, blogs, cuentas de redes sociales y otras plataformas asociados ("Sitio") tienen como único
                        objetivo proporcionarle información general procedente de fuentes externas.</p>
                </div>
                <div className="footer-c">
                    <p>Movie+</p>
                    <p>© 2023</p>
                </div>
            </div>
            <div className="footer-down">
                <p>Developed by</p>
                <div>
                    <img src={Logo1} alt="Logo Angela" />
                    <img src={Logo2} alt="logo Andres" />
                    <img src={Logo3} alt="logo Brayan" />
                    <img src={Logo4} alt="logo Camila" />
                    <img src={Logo5} alt="logo Jesus" />
                </div>
            </div>
        </div>
    );
}
