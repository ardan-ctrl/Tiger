import Image from "next/image";

const instagramUrl = "https://www.instagram.com/papertiger.animation";
const emailAddress = "papertigercollabs@gmail.com";

const assetPlan = [
  ["Hero", "small grouped set", "hero-left-composition.webp + hero-right-composition.webp"],
  ["Offer statement", "one bounded composition", "services-supporting-composition.webp"],
  ["Ads people actually watch", "small grouped set", "watching-left-cluster.webp + watching-right-cluster.webp"],
  ["Scroll problem", "one bounded composition", "scrolling-supporting-composition.webp"],
  ["Attention red carpet", "one bounded composition", "attention-red-carpet-scene.webp"],
  ["Capability", "one bounded composition", "capability-tiger-chair.webp; category row is HTML"],
  ["Reason to watch", "one bounded composition", "reason-to-watch-tiger.webp"],
  ["Desire", "one bounded composition", "desire-composition.webp"],
  ["Format choice", "one bounded composition", "formats-peeking-tiger.webp"],
  ["Offer cards", "rare isolated decorative elements", "offer-card-tiger.webp + offer-card-chair.webp; cards are HTML/CSS"],
  ["Mid form", "rare isolated element", "form-paw.webp; form is HTML/CSS"],
  ["Price", "small grouped set", "price-tiger-and-phone.webp + price-notifications-group.webp"],
  ["Final CTA", "rare isolated element", "final-form-paw.webp; form is HTML/CSS"],
] as const;

function Header() {
  return (
    <header className="site-header" aria-label="Paper Tiger header">
      <nav className="nav-left" aria-label="Section links">
        <a href="#offers">Offers</a>
        <a href="#contact">Collaborate</a>
        <a href={`mailto:${emailAddress}`}>Email</a>
      </nav>
      <a className="brand-mark" href="#top" aria-label="Paper Tiger home">Paper Tiger</a>
      <nav className="nav-right" aria-label="Social links">
        <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
        <a href={`mailto:${emailAddress}`}>Contact</a>
      </nav>
    </header>
  );
}

function LeadForm({ variant = "compact" }: { variant?: "compact" | "final" }) {
  const fields = variant === "final"
    ? [
        ["Your name", "Your Name", "text"],
        ["Brand / Instagram link", "@yourbrand or link here", "text"],
        ["What do you do?", "Skincare, fashion, wellness...", "text"],
      ]
    : [
        ["Brand name", "Your Brand", "text"],
        ["What you do", "Skincare", "text"],
      ];
  return (
    <form className={`lead-form ${variant}`} action={`mailto:${emailAddress}`} method="post" encType="text/plain">
      {fields.map(([label, placeholder, type]) => (
        <label key={label}>
          <span>{label}</span>
          <input name={label.toLowerCase().replaceAll(" ", "-")} type={type} placeholder={placeholder} />
        </label>
      ))}
      <label>
        <span>Anything else we should know?</span>
        <textarea name="message" placeholder={variant === "final" ? "Tell us more about your brand and goals." : "Looking for a fun, story-driven ad."} />
      </label>
      <div className="button-wrap">
        <button type="submit">Send</button>
        <Image className="paw mid-paw" src={variant === "final" ? "/images/forms/final-form-paw.webp" : "/images/forms/form-paw.webp"} width={variant === "final" ? 348 : 518} height={variant === "final" ? 240 : 280} alt="Tiger paw pressing the send button" />
      </div>
    </form>
  );
}

function OfferCards() {
  return (
    <section id="offers" className="section cards-section" aria-labelledby="offers-title">
      <h2 id="offers-title" className="sr-only">Paper Tiger commercial offers</h2>
      <article className="offer-card reveal">
        <div className="card-number">1</div>
        <Image className="card-art card-tiger" src="/images/formats/offer-card-tiger.webp" width={240} height={365} alt="Paper Tiger standing inside an offer card" />
        <h3>Put your brand<br />inside Paper Tiger.</h3>
        <p>We create an original Paper Tiger episode around your product, service or business — and publish it on the Paper Tiger account.</p>
        <p>Tiger can work in your salon, visit your clinic, wear your product, use your app or turn your offer into the whole scene.</p>
        <hr />
        <p className="label">You get</p>
        <p className="strong">A finished branded Reel<br />Paper Tiger’s audience watching it.</p>
        <hr />
        <p className="label">We handle</p>
        <p>The idea, the story, the script,<br />the animation and the final edit.</p>
      </article>
      <article className="offer-card reveal delay-1">
        <div className="card-number">2</div>
        <Image className="card-art card-chair" src="/images/formats/offer-card-chair.webp" width={250} height={240} alt="Director chair illustration" />
        <h3>Get a custom<br />animated ad<br />made just for you.</h3>
        <p>We create a standalone animated commercial built entirely around your brand — for your own channels, campaigns and ads.</p>
        <p>Your product or service becomes the centre of an original short story.<br />Your world. Your character, if needed.<br />Your own sharp animated asset.</p>
        <hr />
        <p className="label">You get</p>
        <p className="strong">A fully custom finished animation<br />made for your brand to use.</p>
        <hr />
        <p className="label">We handle</p>
        <p>The concept, story, visual direction,<br />character/world development if needed,<br />animation and delivery.</p>
      </article>
    </section>
  );
}

export default function Home() {
  return (
    <main id="top">
      <Header />

      <section className="hero section" aria-labelledby="hero-title">
        <Image className="hero-art hero-left" src="/images/hero/hero-left-composition.webp" width={610} height={775} priority alt="Paper Tiger with dental brand mini-scene" />
        <div className="hero-copy">
          <h1 id="hero-title" aria-label="Paper Tiger">
            {"Paper Tiger".split("").map((letter, index) => <span key={`${letter}-${index}`} style={{ "--i": index } as React.CSSProperties}>{letter === " " ? "\u00A0" : letter}</span>)}
          </h1>
          <p>Make your brand impossible to scroll past</p>
          <div className="hero-chips" aria-label="Example brand categories"><span className="active">All</span><span>Apparel</span><span>Art Supplies</span><span>Furniture</span></div>
        </div>
        <Image className="hero-art hero-right" src="/images/hero/hero-right-composition.webp" width={1000} height={640} priority alt="Paper Tiger product, shoe and cash-flow mini-scenes" />
      </section>

      <section className="section statement offer-statement reveal">
        <h2>Sponsored episodes,<br />brand integrations<br /><em>and</em> custom animated ads.</h2>
        <Image src="/images/services/services-supporting-composition.webp" width={660} height={370} alt="Paper Tiger thinking about ads that don't feel like ads" />
      </section>

      <section className="section watching reveal">
        <Image className="watch-left" src="/images/watching/watching-left-cluster.webp" width={775} height={875} alt="People watching a phone while walking and at a cafe" />
        <h2>Ads people<br />actually watch</h2>
        <Image className="watch-right" src="/images/watching/watching-right-cluster.webp" width={740} height={860} alt="People watching a phone on a bench and couch" />
      </section>

      <section className="section scroll-problem reveal">
        <h2>Your audience scrolls<br />before most ads even begin.</h2>
        <Image src="/images/scrolling/scrolling-supporting-composition.webp" width={625} height={360} alt="Paper Tiger thinking: rude but understandable" />
      </section>

      <section className="section attention reveal">
        <h2>This attention<br />could belong<br />to your brand</h2>
        <Image src="/images/attention/attention-red-carpet-scene.webp" width={1048} height={857} alt="Paper Tiger holding a branded can on a red carpet with cameras and microphones" />
      </section>

      <section className="section capability reveal">
        <div className="cap-copy">
          <div className="category-row" aria-label="Example integration categories"><span>🦷<b>A clinic.</b></span><span>👟<b>A sneaker.</b></span><span>▣<b>An app.</b></span></div>
          <h2>Paper Tiger<br />knows what to do.</h2>
        </div>
        <Image src="/images/statements/capability-tiger-chair.webp" width={655} height={600} alt="Paper Tiger seated confidently in a chair" />
      </section>

      <section className="section reason reveal">
        <h2>I give people<br />a reason<br />to watch.</h2>
        <Image src="/images/statements/reason-to-watch-tiger.webp" width={938} height={972} alt="Close-up of Paper Tiger leaning on a chair" />
      </section>

      <section className="section desire reveal">
        <h2>So they want<br />what you sell.</h2>
        <Image src="/images/statements/desire-composition.webp" width={780} height={820} alt="Paper Tiger in a spotlight with aspirational brand sketches" />
      </section>

      <section className="section format-choice reveal">
        <h2>Choose<br />what you want<br />Paper Tiger to do.</h2>
        <Image src="/images/formats/formats-peeking-tiger.webp" width={428} height={502} alt="Paper Tiger peeking in with folded arms" />
      </section>

      <OfferCards />

      <section className="section mid-form reveal" id="contact">
        <div className="form-panel">
          <div><h2>Not sure<br />which one fits?</h2><p>Send your brand. We’ll tell you.</p></div>
          <LeadForm />
        </div>
      </section>

      <section className="section price reveal">
        <div><h2>The reach is<br />already big.<br /><br />The price is not.</h2><p>Paper Tiger collaborations<br />currently start from £400.</p></div>
        <div className="price-art"><Image className="notifications" src="/images/price/price-notifications-group.webp" width={360} height={345} alt="Inbound collaboration notification messages" /><Image className="chair-tiger" src="/images/price/price-tiger-and-phone.webp" width={845} height={610} alt="Paper Tiger lounging with a phone" /></div>
      </section>

      <section className="section final-cta reveal">
        <div><h2>Drop your link.</h2><p>Get Paper Tiger<br />working for your brand</p></div>
        <LeadForm variant="final" />
      </section>

      <footer className="site-footer">
        <b>Paper Tiger</b>
        <span>Brand collaborations, sponsored episodes and custom animated ads.</span>
        <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
        <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
      </footer>

      <section className="implementation-notes" aria-labelledby="implementation-title">
        <h2 id="implementation-title">Implementation asset strategy</h2>
        <ul>{assetPlan.map(([section, strategy, files]) => <li key={section}><strong>{section}:</strong> {strategy} — {files}</li>)}</ul>
      </section>
    </main>
  );
}
