import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='here-title'>
          <h1>Contentful CMS</h1>
          <p>
            Tbh vegan freegan post-ironic, pork belly paleo tattooed kitsch
            waistcoat readymade bitters. Flannel la croix meh subway party jawn
            polaroid ethical. Street art roof party organic. Paleo ugh waistcoat
            dreamcatcher tumblr. Brooklyn vinyl man bun woke tilde raw denim.
            Leggings, pickled 90's wolf moon. Same edison bag microdosing roof
            party marxism wayfarers ennui hexagon fanny pack kombucha.
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='woman and the browser' className='img' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
