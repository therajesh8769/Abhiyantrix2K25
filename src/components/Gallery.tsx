// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { gsap } from 'gsap';

// export function Gallery() {
//   const images = [
//     "/images/IMG_1050.jpg",
//     "/images/IMG_1062.png",
//     "/images/IMG_1196.png",
//     "/images/IMG_1214.png",
//     "/images/IMG_1285.png",
//     "/images/IMG_1327.png",
//     "/images/IMG_1379.png",
//     "/images/IMG_1398.jpg",
//     "/images/IMG_1750.png",
//     "/images/IMG_1853.png",
//     "/images/IMG_1917.png",
//     "/images/IMG_2190.jpg",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   // Auto slide every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNextImage();
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const handleNextImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const handleImageClick = () => {
//     handleNextImage();
//   };

//   useEffect(() => {
//     const canvasElement = canvasRef.current;
//     if (!canvasElement) return;

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ canvas: canvasElement });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);

//     // Set background color
//     scene.background = new THREE.Color(0x000000);

//     // Create stars
//     const starGeometry = new THREE.SphereGeometry(0.2, 32, 32);
//     const starMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
//     const stars: any[] = [];

//     // Place stars randomly in space
//     images.forEach((image, index) => {
//       const star = new THREE.Mesh(starGeometry, starMaterial);
//       star.position.set(
//         Math.random() * 10 - 5,  // Random X
//         Math.random() * 10 - 5,  // Random Y
//         Math.random() * 10 - 5   // Random Z
//       );
//       star.userData = { image };  // Store image URL in userData
//       scene.add(star);
//       stars.push(star);
//     });

//     const raycaster = new THREE.Raycaster();
//     const mouse = new THREE.Vector2();

//     const onMouseMove = (event: MouseEvent) => {
//       mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//       mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
//     };

//     document.addEventListener('mousemove', onMouseMove, false);

//     const onMouseClick = (event: MouseEvent) => {
//       const intersects = raycaster.intersectObjects(stars);
//       if (intersects.length > 0) {
//         const imageUrl = intersects[0].object.userData.image;
//         gsap.to('.modal', { opacity: 1, duration: 1 });
//         document.querySelector('.modal img')!.setAttribute('src', imageUrl);
//       }
//     };

//     document.addEventListener('click', onMouseClick, false);

//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);
//       raycaster.setFromCamera(mouse, camera);
//       const intersects = raycaster.intersectObjects(stars);

//       // Glow effect on hover
//       stars.forEach((star) => {
//         star.material = star.material !== new THREE.MeshBasicMaterial({ color: 0x00FFFF, emissive: 0x00FFFF, emissiveIntensity: 0.5 }) 
//           ? new THREE.MeshBasicMaterial({ color: 0xFFFFFF }) 
//           : new THREE.MeshBasicMaterial({ color: 0x00FFFF, emissive: 0x00FFFF, emissiveIntensity: 0.5 });
//       });

//       renderer.render(scene, camera);
//     };

//     animate();

//     return () => {
//       window.removeEventListener('mousemove', onMouseMove);
//       window.removeEventListener('click', onMouseClick);
//     };
//   }, []);

//   return (
//     <>
//       <style jsx>{`
//         .gallery-container {
//           position: relative;
//           width: 100%;
//           max-width: 1200px;
//           height: 400px;
//           margin: 0 auto;
//           overflow: hidden;
//           background: black;
//         }

//         .image-track {
//           display: flex;
//           transform: translateX(calc(-100% * ${currentIndex}));
//           transition: transform 1s ease-in-out;
//         }

//         .gallery-img {
//           flex-shrink: 0;
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           aspect-ratio: 16 / 9;
//           cursor: pointer;
//           transition: transform 0.6s ease, opacity 0.6s ease;
//         }

//         .gallery-img:hover {
//           transform: scale(1.1);
//         }

//         .star-field {
//           position: absolute;
//           inset: 0;
//           background: black;
//           overflow: hidden;
//           z-index: -1;
//         }

//         .star-field::after {
//           content: "";
//           position: absolute;
//           width: 200%;
//           height: 200%;
//           background-image: radial-gradient(white, rgba(255, 255, 255, 0) 70%);
//           background-size: 3px 3px;
//           animation: starField 30s linear infinite;
//         }

//         @keyframes starField {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(-100%);
//           }
//         }

//         .modal {
//           position: fixed;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           background-color: rgba(0, 0, 0, 0.8);
//           padding: 20px;
//           border-radius: 10px;
//           display: none;
//           z-index: 10;
//         }

//         .modal img {
//           max-width: 80vw;
//           max-height: 80vh;
//           border-radius: 8px;
//         }

//         @media (min-width: 768px) {
//           .gallery-container {
//             height: 500px;
//           }
//         }

//         @media (min-width: 1200px) {
//           .gallery-container {
//             height: 600px;
//           }
//         }
//       `}</style>

//       <div className="gallery-container">
//         <div className="star-field"></div>

//         <div className="image-track">
//           {images.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={`Space Image ${index + 1}`}
//               className="gallery-img"
//               onClick={handleImageClick}
//             />
//           ))}
//         </div>
//       </div>

//       <div className="modal" style={{ opacity: 0 }}>
//         <img alt="Space Image" />
//       </div>
//     </>
//   );
// }
import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { Star } from 'lucide-react';

// interface StarObject extends THREE.Mesh {
//   originalScale: THREE.Vector3;
//   originalColor: THREE.Color;
//   orbitRadius: number;
//   orbitSpeed: number;
//   orbitAngle: number;
//   userData: {
//     image: string;
//   };
// }
interface StarObject extends THREE.Mesh<THREE.SphereGeometry, THREE.MeshPhongMaterial> {
  originalScale: THREE.Vector3;
  originalColor: THREE.Color;
  orbitRadius: number;
  orbitSpeed: number;
  orbitAngle: number;
  userData: {
    image: string;
  };
}


export function Gallery() {
  const images = [
    "/images/mehul.jpeg",
    "/images/abx.jpeg",
    "/images/grnd.jpeg",
    "/images/image copy 4.png",
    "/images/grp.jpeg",
    "/images/image.png",
    "/images/image copy.png",
    
    "/images/image copy 2.png",
    "/images/image copy 3.png",
   
    "/images/image copy 5.png",
  ];

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [hoveredImage, setHoveredImage] = useState<{ url: string; x: number; y: number } | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    camera.position.set(0, 15, 20);
    camera.lookAt(0, 0, 0);

    // Create Earth
    const earthGeometry = new THREE.SphereGeometry(2, 32, 32);
    const earthMaterial = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load('https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=512&h=512&fit=crop'),
      bumpMap: new THREE.TextureLoader().load('https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=512&h=512&fit=crop'),
      bumpScale: 0.05,
      specular: new THREE.Color(0x333333),
      shininess: 25
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earth);

    // Add atmosphere glow
    const atmosphereGeometry = new THREE.SphereGeometry(2.1, 32, 32);
    const atmosphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x0077ff,
      transparent: true,
      opacity: 0.2,
      side: THREE.BackSide
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphere);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x444444);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 1);
    sunLight.position.set(5, 3, 5);
    scene.add(sunLight);

    // Create image spheres
    const stars: StarObject[] = [];
    const sphereGeometry = new THREE.SphereGeometry(1.5, 32, 32);
    const textureLoader = new THREE.TextureLoader();

    images.forEach((image, index) => {
      const angle = (index / images.length) * Math.PI * 2;
      const verticalOffset = Math.sin(angle) * 2;
      
      const starMaterial = new THREE.MeshPhongMaterial({
        map: textureLoader.load(image + "?w=256&h=256&fit=crop&auto=format"),
        specular: new THREE.Color(0x333333),
        shininess: 25
      });

      const star = new THREE.Mesh(sphereGeometry, starMaterial) as StarObject;
      
      star.orbitRadius = 6 + index * 0.5;
      star.orbitSpeed = 0.001 / (1 + index * 0.1);
      star.orbitAngle = angle;
      
      star.position.set(
        Math.cos(angle) * star.orbitRadius,
        verticalOffset,
        Math.sin(angle) * star.orbitRadius
      );
      
      star.originalScale = star.scale.clone();
      star.originalColor = new THREE.Color(0xffffff);
      star.userData = { image };

      const glowGeometry = new THREE.SphereGeometry(1, 32, 32);
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: 0x0088ff,
        transparent: true,
        opacity: 0.1,
        side: THREE.BackSide
      });
      const glow = new THREE.Mesh(glowGeometry, glowMaterial);
      star.add(glow);
      
      stars.push(star);
      scene.add(star);
    });

    // Raycaster setup
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-1, -1);

    const onMouseMove = (event: MouseEvent) => {
      event.preventDefault();
      
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(stars);

      stars.forEach((star) => {
        gsap.to(star.scale, {
          x: star.originalScale.x,
          y: star.originalScale.y,
          z: star.originalScale.z,
          duration: 0.3
        });
      });

      if (intersects.length > 0) {
        const intersectedStar = intersects[0].object as StarObject;
        gsap.to(intersectedStar.scale, {
          x: intersectedStar.originalScale.x * 1.2,
          y: intersectedStar.originalScale.y * 1.2,
          z: intersectedStar.originalScale.z * 1.2,
          duration: 0.3
        });

        // Show preview
        const imageUrl = intersectedStar.userData.image;
        const vector = intersectedStar.position.clone();
        vector.project(camera);
        
        const x = (vector.x * 0.5 + 0.5) * rect.width + rect.left;
        const y = (-vector.y * 0.5 + 0.5) * rect.height + rect.top;
        
        setHoveredImage({ url: imageUrl, x, y });
      } else {
        setHoveredImage(null);
      }
    };

    const onMouseClick = (event: MouseEvent) => {
      event.preventDefault();
      
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(stars);

      if (intersects.length > 0) {
        const star = intersects[0].object as StarObject;
        const imageUrl = star.userData.image;
        setSelectedImage(imageUrl + "?w=1200&h=800&fit=crop&auto=format");
        
        if (modalRef.current) {
          modalRef.current.style.display = 'flex';
          gsap.fromTo(modalRef.current,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
          );
        }
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('click', onMouseClick);

    // Animation loop
    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);

      earth.rotation.y += 0.001;
      atmosphere.rotation.y += 0.001;

      stars.forEach((star) => {
        star.orbitAngle += star.orbitSpeed;
        const verticalOffset = Math.sin(star.orbitAngle) * 2;
        
        star.position.x = Math.cos(star.orbitAngle) * star.orbitRadius;
        star.position.y = verticalOffset;
        star.position.z = Math.sin(star.orbitAngle) * star.orbitRadius;
        
        star.rotation.y += 0.01;
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      camera.aspect = rect.width / rect.height;
      camera.updateProjectionMatrix();
      renderer.setSize(rect.width, rect.height, false);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('click', onMouseClick);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frame);
      renderer.dispose();
    };
  }, []);

  const closeModal = () => {
    if (modalRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          if (modalRef.current) {
            modalRef.current.style.display = 'none';
          }
          setSelectedImage(null);
        }
      });
    }
  };

  return (
    <div className="relative w-full h-screen text-center">
      <canvas
        ref={canvasRef}
        className="w-full h-full "
      />
      <div className="absolute top-4 left-0 right-0 text-white flex items-center justify-center space-x-2">
  <Star className="w-6 h-6" />
  <h1 className="text-2xl font-bold">Cosmic Gallery</h1>
</div>

      {/* Preview on hover */}
      {hoveredImage && (
        <div
          ref={previewRef}
          className="fixed pointer-events-none z-40"
          style={{
            left: hoveredImage.x + 20,
            top: hoveredImage.y + 20,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <img
            src={hoveredImage.url + "?w=200&h=200&fit=crop&auto=format"}
            alt="Preview"
            className="w-40 h-40 rounded-lg shadow-xl border-2 border-white/20"
          />
        </div>
      )}

      {/* Modal for full-size image */}
      <div
        ref={modalRef}
        className="fixed inset-0 bg-black/90 hidden items-center justify-center p-4 z-50"
        onClick={closeModal}
      >
        <div 
          className="relative max-w-6xl w-full max-h-[70vh] bg-black rounded-lg overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected cosmic image"
              className="w-full h-full object-contain"
              
            />
          )}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <span className="sr-only">Close</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}