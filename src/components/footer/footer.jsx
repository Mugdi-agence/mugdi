import './footer.scss';
import logo from '../../assets/Logo_White.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export default function Footer() {
    return (
        <>
            <footer>
            <div className="top">
                <div className="left">
                    <div className="head">
                        <img src={logo} alt="logo" />
                        <span>Prêt à donner une nouvelle dimension à votre présence digitale ?</span>
                    </div>
                    <a href="mailto:contact.mugdi@gmail.com?subject=Demande de projet">Commencer mon projet</a>
                </div>
                <div className="middle">
                    <h4>Menu rapide</h4>
                    <div className="link">
                        <a href="#home">Accueil</a>
                        <a href="#expertise">Expertise</a>
                        <a href="#process">Process</a>
                        <a href="project">Projets</a>
                    </div>
                </div>

                <div className="right">
                    <div className="bubble">
                        <span>E-Mail:</span>
                        <div className="email">
                            <AlternateEmailIcon className='icon'/><span>contact.mugdi@gmail.com</span>
                        </div>
                        <div className="social">
                            <span>Suivez-nous:</span>
                            <div className="links">
                                <a target='_blank' href="https://www.instagram.com/mugdi_agence/" aria-label="Instagram"><InstagramIcon className='icon'/></a>
                                <a target='_blank' href="https://www.youtube.com/@Mugdi-0E9" aria-label="Youtube"><YouTubeIcon className='icon'/></a>
                                <a target='_blank' href="https://www.facebook.com/profile.php?id=61578299896288" aria-label="facebook"><FacebookIcon className='icon'/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div className="bottom">
            <span>© 2025 MUGDI — Agence Web Premium. Tous droits réservés.</span>
        </div>
        </>
    );
}