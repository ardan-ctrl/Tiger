import type { ReactNode } from "react";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { ArtAsset } from "@/components/ui/ArtAsset";
import { ContactForm } from "@/components/ui/ContactForm";
import { offerCards } from "@/data/site-content";
import { attentionAssets, heroAssets, priceNotifications, watchingAssets } from "@/lib/asset-map";

function SplitHeadline({ children, eyebrow }: { children: ReactNode; eyebrow?: string }) {
  return (
    <div className="split-headline">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{children}</h2>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="section hero" id="top">
      <div className="hero__stage">
        {heroAssets.map((asset) => (
          <ArtAsset key={asset.src} {...asset} />
        ))}
        <div className="hero__copy">
          <h1>
            <AnimatedTitle text="Paper Tiger" />
          </h1>
          <p>Make your brand impossible to scroll past</p>
        </div>
      </div>
    </section>
  );
}

export function OfferStatementSection() {
  return (
    <section className="section statement statement--services" id="offers">
      <ArtAsset src="/images/services/paw-pencil-top.webp" className="statement__paw statement__paw--services" />
      <h2>
        Sponsored episodes,
        <br /> brand integrations
        <br /> and custom animated ads.
      </h2>
      <ArtAsset src="/images/services/services-tiger-thinking.webp" className="services__tiger" />
      <ArtAsset src="/images/services/services-thought-bubble.webp" className="services__bubble" />
    </section>
  );
}

export function WatchingSection() {
  return (
    <section className="section watching">
      {watchingAssets.map((asset) => (
        <ArtAsset key={asset.src} {...asset} />
      ))}
      <h2>
        Ads people
        <br /> actually watch
      </h2>
    </section>
  );
}

export function ScrollingSection() {
  return (
    <section className="section statement statement--scrolling">
      <ArtAsset src="/images/scrolling/paw-pencil-top-small.webp" className="statement__paw statement__paw--small" />
      <h2>
        Your audience scrolls
        <br /> before most ads even begin.
      </h2>
      <ArtAsset src="/images/scrolling/scrolls-tiger.webp" className="scrolling__tiger" />
      <ArtAsset src="/images/scrolling/scrolls-thought-bubble.webp" className="scrolling__bubble" />
    </section>
  );
}

export function AttentionSection() {
  return (
    <section className="section attention">
      <SplitHeadline>
        This attention
        <br /> could belong
        <br /> to your brand
      </SplitHeadline>
      <div className="attention__scene">
        {attentionAssets.map((asset) => (
          <ArtAsset key={asset.src} {...asset} />
        ))}
      </div>
    </section>
  );
}

export function StatementRunSection() {
  return (
    <section className="statement-run">
      <article className="section statement-panel statement-panel--knows">
        <div className="statement-panel__icons">
          <ArtAsset src="/images/statements/knows-icons.webp" className="statement-panel__icon-art" />
          <span>Clinics · Sneakers · Apps</span>
        </div>
        <h2>
          Paper Tiger
          <br /> knows what to do.
        </h2>
        <ArtAsset src="/images/statements/knows-what-to-do-tiger-chair.webp" className="statement-panel__art statement-panel__art--chair" />
      </article>
      <article className="section statement-panel statement-panel--watch">
        <h2>
          I give people
          <br /> a reason
          <br /> to watch.
        </h2>
        <ArtAsset src="/images/statements/reason-to-watch-tiger-chair-close.webp" className="statement-panel__art statement-panel__art--watch" />
      </article>
      <article className="section statement-panel statement-panel--desire">
        <h2>
          So they want
          <br /> what you sell.
        </h2>
        <ArtAsset src="/images/statements/desire-tiger-standing.webp" className="statement-panel__art statement-panel__art--desire" />
        <ArtAsset src="/images/statements/desire-product-sketch-left.webp" className="statement-panel__sketch statement-panel__sketch--product" />
        <ArtAsset src="/images/statements/desire-building-sketch-right.webp" className="statement-panel__sketch statement-panel__sketch--building" />
        <ArtAsset src="/images/statements/desire-phone-sketch-right.webp" className="statement-panel__sketch statement-panel__sketch--phone" />
      </article>
    </section>
  );
}

export function FormatsSection() {
  return (
    <section className="section formats" id="formats">
      <div className="formats__intro">
        <h2>
          Choose
          <br /> what you want
          <br /> Paper Tiger to do.
        </h2>
        <ArtAsset src="/images/formats/formats-tiger-peeking-right.webp" className="formats__peek" />
      </div>
      <div className="offer-cards" aria-label="Commercial offer choices">
        {offerCards.map((card) => (
          <article className="offer-card" key={card.number}>
            <span className="offer-card__number">{card.number}</span>
            <h3>{card.title}</h3>
            <p>{card.body}</p>
            <div className="offer-card__columns">
              <div>
                <h4>You get</h4>
                <ul>
                  {card.youGet.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>We handle</h4>
                <ul>
                  {card.weHandle.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <ArtAsset src={card.asset} className={`offer-card__art ${card.assetClassName}`} />
          </article>
        ))}
      </div>
    </section>
  );
}

export function MidFormSection() {
  return (
    <section className="section form-section" id="contact">
      <div className="form-section__copy">
        <h2>
          Not sure
          <br /> which one fits?
        </h2>
        <p>Send your brand. We’ll tell you.</p>
      </div>
      <div className="form-section__card">
        <ContactForm id="mid-page-form" compact />
        <ArtAsset src="/images/forms/form-tiger-paw.webp" className="form-section__paw" />
      </div>
    </section>
  );
}

export function PriceSection() {
  return (
    <section className="section price">
      <div className="price__copy">
        <h2>
          The reach is
          <br /> already big.
          <br />
          <br /> The price is not.
        </h2>
        <p>Paper Tiger collaborations currently start from £400.</p>
      </div>
      <div className="price__scene">
        <ArtAsset src="/images/price/price-tiger-phone.webp" className="price__tiger" />
        {priceNotifications.map((asset) => (
          <ArtAsset key={asset.src} {...asset} />
        ))}
      </div>
    </section>
  );
}

export function FinalCtaSection() {
  return (
    <section className="section final-cta">
      <div className="final-cta__copy">
        <p>Drop your link.</p>
        <h2>
          Get Paper Tiger
          <br /> working for your brand
        </h2>
      </div>
      <div className="form-section__card final-cta__form">
        <ContactForm id="final-contact-form" buttonLabel="Send link" />
        <ArtAsset src="/images/forms/final-form-tiger-paw.webp" className="form-section__paw form-section__paw--final" />
      </div>
    </section>
  );
}
