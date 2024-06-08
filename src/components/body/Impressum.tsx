import './Impressum.css'

export default function Impressum() {

    return <div className="impressumContentContainer">
        <h1>Impressum (Legal Notice)</h1>
        <div className="sectionContanier">
            <h2>Information in accordance with Section 5 TMG (Telemedia Act):</h2>
            <p>Book Store</p>
            <p>Am Street, 1. Berlin, 11002</p>
        </div>
        <div className="sectionContanier">
            <h2>Contact Information:</h2>
            <p>Phone: 015222000000</p>
            <p>Email: contact@bookspot.com</p>
        </div>
        <div className="sectionContanier">
            <h2>VAT ID:</h2>
            <p>VAT Identification Number according to §27 a Umsatzsteuergesetz (UStG): XXXXXXXXXXXXXXX</p>
        </div>
        <div className="sectionContanier">
            <h2>Dispute Resolution:</h2>
            <p>The European Commission provides a platform for online dispute resolution (ODR). We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.</p>
        </div>
        <div className="sectionContanier">
            <h2>Liability for Content:</h2>
            <p>As service providers, we are liable for own contents of these websites according to § 7, paragraph 1 German TMG (Telemedia Act). However, according to §§ 8 to 10 German TMG, service providers are not obligated to permanently monitor submitted or stored information or to search for evidences that indicate illegal activities.</p>
            <p>Legal obligations to removing information or to blocking the use of information remain unchallenged. In this case, liability is only possible at the time of knowledge about a specific violation of law. Illegal contents will be removed immediately at the time we get knowledge of them.</p>
        </div>
        <div className="sectionContanier">
            <h2>Liability for Links:</h2>
            <p>Our offer includes links to external third party websites. We have no influence on the contents of those websites, therefore we cannot guarantee for those contents. Providers or administrators of linked websites are always responsible for their own contents.</p>
            <p>The linked websites had been checked for possible violations of law at the time of the establishment of the link. Illegal contents were not detected at the time of the linking. A permanent monitoring of the contents of linked websites cannot be imposed without reasonable indications that there has been a violation of law. Illegal links will be removed immediately at the time we get knowledge of them.</p>
        </div>
        <div className="sectionContanier">
            <h2>Copyright:</h2>
            <p>Contents and compilations published on these websites by the providers are subject to German copyright laws. Reproduction, editing, distribution as well as the use of any kind outside the scope of the copyright law require a written permission of the author or originator. Downloads and copies of these websites are permitted for private use only.</p>
            <p>The commercial use of our contents without permission of the originator is prohibited.</p>
            <p>Copyright laws of third parties are respected as long as the contents on these websites do not originate from the provider. Contributions of third parties on this site are indicated as such. However, if you notice any violations of copyright law, please inform us. Such contents will be removed immediately.</p>
        </div>
    </div>
}