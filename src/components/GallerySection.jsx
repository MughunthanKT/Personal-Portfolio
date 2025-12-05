import React from "react";
import "./Gallery.css";


export const GallerySection = () => {
 return (
   <section className="gallery-section" id="gallery">
     <header className="gallery-header">
       <h1>My Gallery</h1>
       <p>A glimpse of my Professionalism, Aesthetics and Passion.</p>
     </header>


  
     <section className="gallery-row">
       <div className="gallery-row-inner">
         <div className="gallery-photo">
           <img src="/projects/professional photo.jpg" alt="Professional" />
         </div>


         <div className="gallery-text">
           <h2>Professional Headshot</h2>


           <h3 className="sub-heading">Technical Specifications</h3>
           <ul className="detail-list">
             <li>Camera: iPhone 15 Pro Max</li>
             <li>Focal Length: 24mm</li>
             <li>Aperture: f/1.78</li>
             <li>Shutter Speed: 1/60s</li>
             <li>ISO: 320</li>
           </ul>


           <h3 className="sub-heading">Editing Specifications</h3>
           <ul className="detail-list">
             <li>Brightened slightly for smoother skin and balance.</li>
             <li>Enhanced contrast for a crisp professional appearance.</li>
             <li>Added mild saturation + warmth for natural tone.</li>
             <li>Softened background to keep focus on the subject.</li>
           </ul>


           <h3 className="sub-heading">What the Picture Depicts</h3>
           <p className="description">
             This professional headshot is designed to highlight an approachable
             yet polished look. Indoor natural lighting was used to maintain
             clarity and focus. It is suited for portfolios, LinkedIn profiles,
             and other formal uses.
           </p>
         </div>
       </div>
     </section>


  
     <section className="gallery-row">
       <div className="gallery-row-inner">
         <div className="gallery-photo">
           <img src="/projects/Aesthetic.jpg" alt="Aesthetic" />
         </div>


         <div className="gallery-text">
           <h2>Aesthetic Photo</h2>


           <h3 className="sub-heading">Technical Specifications</h3>
           <ul className="detail-list">
             <li>Camera: iPhone 15 Pro Max</li>
             <li>Focal Length: 45mm</li>
             <li>Aperture: f/1.78</li>
             <li>Shutter Speed: 1/33s</li>
             <li>ISO: 800</li>
           </ul>


           <h3 className="sub-heading">Editing Specifications</h3>
           <ul className="detail-list">
             <li>
               Slight exposure lift to brighten the swans while preserving
               nighttime ambience.
             </li>
             <li>
               Increased contrast to separate the subjects from the dark water.
             </li>
             <li>
               A subtle cool tint was likely added to preserve the foggy mood.
             </li>
             <li>
               Mild clarity or sharpness boost to enhance water ripples and
               details in the feathers.
             </li>
           </ul>


           <h3 className="sub-heading">Description</h3>
           <p className="description">
             This aesthetic photograph represents creativity, soft tones, and
             personal expression. It captures mood, ambiance, and visual
             harmony.
           </p>
         </div>
       </div>
     </section>


  
     <section className="gallery-row">
       <div className="gallery-row-inner">
         <div className="gallery-photo">
           <img src="/projects/passion-2.jpg" alt="Passionate" />
         </div>


         <div className="gallery-text">
           <h2>Passionate Photo</h2>


           <h3 className="sub-heading">Technical Specifications</h3>
           <ul className="detail-list">
             <li>Camera: iPhone 15 Pro Max</li>
             <li>Focal Length: 24mm</li>
             <li>Aperture: f/1.78</li>
             <li>Shutter Speed: 1/582s</li>
             <li>ISO: 80</li>
           </ul>


           <h3 className="sub-heading">Description</h3>
           <p className="description">
             This image reflects my passion and the sense of freedom driving
             brings.
           </p>
         </div>
       </div>
     </section>


  
     <section className="gallery-video-row">
       <div className="gallery-video-inner">
         <h2 className="gallery-video-title">The Story Behind the Video 
          "COFFEE"</h2>


         <div className="gallery-video-player">
           <video
             src="/projects/COFFEE.MP4"
             controls   
             preload="metadata"
           />
         </div>


         <div className="gallery-video-text">
           <p>
             Introduction:  
             Our team produced a short coffee advertisement that captures the everyday struggles students face while handling academic pressure, and how a simple cup of coffee becomes a source of motivation. In this blog, I share the experience from my perspective as the actor, focusing on emotional expression, scene execution, and how I brought the character’s journey to life.
             
            </p> <br></br>
             <p> Concept: We observed that coffee is not just a caffeine source for students—it provides mental clarity during overwhelming moments. With the tagline, “COFFEE solves all your problems,” the storyline follows a stressed student
             My Role as the Actor: My role was to portray the emotional transformation of a student shifting from burnout to refreshed energy. I focused on expressing stress, frustration, and fatigue in early scenes, then transitioning to a relaxed, confident, and focused state after having coffee.
            </p> <br></br>
             <p>Team Work: Although I acted in the video, the production was highly collaborative. I followed direction from the videographer on posture, emotion, and timing. We worked as a team in planning scenes, maintaining continuity, and ensuring that every shot reflected the intended emotional arc.


           </p>
         </div>
       </div>
     </section>
   </section>
 );
};
