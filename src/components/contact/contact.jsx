import './contact.scss';

export default function Contact() {
    return (
        <section className="contact">
            <div className="title">
                <div className="overlay">
                    <h1>Transformez votre vision en une présence</h1>
                </div>
                <div className="overlay">
                    <h1>digitale d’exception.</h1>
                </div>
                <div className="overlay">
                    <p>Votre site n’est pas juste une vitrine : c’est votre premier moteur de croissance.</p>
                </div>
            </div>
            <div className="cta">
                <span>Réponse en moins de 24h</span>
                <a href="mailto:contact.mugdi@gmail.com?subject=Demande de projet">Commencer mon projet</a>
            </div>
        </section>
    );
}