// import React from 'react'

// function Carousel() {
//   (function(){
//     ('.carousel-item').eq(0).addClass('active');
//     var total = ('.carousel-item').length;
//     var current = 0;
//     ('#moveRight').on('click', function(){
//       var next=current;
//       current= current+1;
//       setSlide(next, current);
//     });
//     ('#moveLeft').on('click', function(){
//       var prev=current;
//       current = current- 1;
//       setSlide(prev, current);
//     });
//     function setSlide(prev, next){
//       var slide= current;
//       if(next>total-1){
//        slide=0;
//         current=0;
//       }
//       if(next<0){
//         slide=total - 1;
//         current=total - 1;
//       }
//              ('.carousel-item').eq(prev).removeClass('active');
//              ('.carousel-item').eq(slide).addClass('active');
//         setTimeout(function(){
  
//         },800);
      
  
      
//       console.log('current '+current);
//       console.log('prev '+prev);
//     }
//   });



//   return (
//     <div>
//       <body>
//       <div class="carousel">
//         <div class="carousel__nav">
//         <span id="moveLeft" class="carousel__arrow">
//               <svg class="carousel__icon" width="24" height="24" viewBox="0 0 24 24">
//           <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path>
//       </svg>
//           </span>
//           <span id="moveRight" class="carousel__arrow" >
//             <svg class="carousel__icon"  width="24" height="24" viewBox="0 0 24 24">
//         <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
//       </svg>    
//           </span>
//         </div>
//         <div class="carousel-item carousel-item--1">
//           <div class="carousel-item__image"></div>
//           <div class="carousel-item__info">
//             <div class="carousel-item__container">
//             <h2 class="carousel-item__subtitle">The grand moment </h2>
//             <h1 class="carousel-item__title">Le tour</h1>
//             <p class="carousel-item__description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
//             <a href="#" class="carousel-item__btn">Explore the tour</a>
//               </div>
//           </div>
//         </div>
//         <div class="carousel-item carousel-item--2">
//           <div class="carousel-item__image"></div>
//           <div class="carousel-item__info">
//             <div class="carousel-item__container">
//             <h2 class="carousel-item__subtitle">The big window </h2>
//             <h1 class="carousel-item__title">Minimal window</h1>
//             <p class="carousel-item__description">Clear Glass Window With Brown and White Wooden Frame iste natus error sit voluptatem accusantium doloremque laudantium.</p>
//             <a href="#" class="carousel-item__btn">Read the article</a>
//               </div>
//           </div>
//         </div>
//           <div class="carousel-item carousel-item--3">
//           <div class="carousel-item__image"></div>
//           <div class="carousel-item__info">
//             <div class="carousel-item__container">
//             <h2 class="carousel-item__subtitle">Tropical palms </h2>
//             <h1 class="carousel-item__title">Palms</h1>
//             <p class="carousel-item__description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
//             <a href="#" class="carousel-item__btn">Explore the palms</a>
//               </div>
//           </div>
//         </div>
        
//         <div class="carousel-item carousel-item--4">
//           <div class="carousel-item__image"></div>
//           <div class="carousel-item__info">
//             <div class="carousel-item__container">
//             <h2 class="carousel-item__subtitle">Beach </h2>
//             <h1 class="carousel-item__title">The beach </h1>
//             <p class="carousel-item__description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
//             <a href="#" class="carousel-item__btn">Explore the beach</a>
//               </div>
//           </div>
//         </div>
        
//       <div class="carousel-item carousel-item--5">
//           <div class="carousel-item__image"></div>
//           <div class="carousel-item__info">
//             <div class="carousel-item__container">
//             <h2 class="carousel-item__subtitle">The white building </h2>
//             <h1 class="carousel-item__title">White building</h1>
//             <p class="carousel-item__description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
//             <a href="#" class="carousel-item__btn">Read the article</a>
//               </div>
//           </div>
//         </div>
        
//       </div>
//       </body>
//     </div>
    
//   )
// }

// export default Carousel