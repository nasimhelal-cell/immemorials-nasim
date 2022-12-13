import { useRef } from "react";
import {
  useGsapImageDropping,
  useGsapImageParalax,
  useGsapShutterUnveil,
} from "../hooks/gsap";

const Hero = () => {
  const shutter1 = useRef(null);
  const shutter2 = useRef(null);
  const heroRef = useRef(null);

  const image1ref = useRef(null);
  const image2ref = useRef(null);
  const image3ref = useRef(null);
  const image4ref = useRef(null);
  const image5ref = useRef(null);

  const imagesArr = [image1ref, image2ref, image3ref, image4ref, image5ref];

  useGsapShutterUnveil(shutter1, undefined, heroRef);
  useGsapShutterUnveil(shutter2, 0.2, heroRef);
  useGsapImageDropping(imagesArr);
  useGsapImageParalax(imagesArr, heroRef);

  return (
    <div className="hero wrapper" ref={heroRef}>
      <h2 className="ethereal">
        Ethereal <span ref={shutter1}></span>{" "}
      </h2>
      <h2 className="canvas">
        Canvas <span ref={shutter2}></span>{" "}
      </h2>

      <div className="photos-hero">
        <div
          className="photo one"
          ref={image1ref}
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/10046283/pexels-photo-10046283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        ></div>
        <div
          className="photo two"
          ref={image2ref}
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/6577903/pexels-photo-6577903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        ></div>
        <div
          className="photo three"
          ref={image3ref}
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/4019766/pexels-photo-4019766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        ></div>
        <div
          className="photo four"
          ref={image4ref}
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/7584538/pexels-photo-7584538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        ></div>
        <div
          className="photo five"
          ref={image5ref}
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/4836368/pexels-photo-4836368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
