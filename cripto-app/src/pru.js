// import React from 'react';

// export const pru = () => {
//   return(
//   <div class="container-fluid">
//     <div class="row flex-nowrap">
//         <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
//             <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
//                 <a href="https://www.codeply.com/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
//                     <span class="fs-5 d-none d-sm-inline">Menu</span>
//                 </a>
//                 <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
//                     <li class="nav-item">
//                         <a href="https://www.codeply.com/p/Z8pS1bOTFB#" class="nav-link align-middle px-0">
//                             <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
//                         </a>
//                     </li>
//                     <li>
//                         <a href="https://www.codeply.com/p/Z8pS1bOTFB#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
//                             <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Dashboard</span> </a>
//                         <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
//                             <li class="w-100">
//                                 <a href="https://www.codeply.com/p/Z8pS1bOTFB#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 1 </a>
//                             </li>
//                             <li>
//                                 <a href="https://www.codeply.com/p/Z8pS1bOTFB#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 2 </a>
//                             </li>
//                         </ul>
//                     </li>
//                     <li>
//                         <a href="https://www.codeply.com/p/Z8pS1bOTFB#" class="nav-link px-0 align-middle">
//                             <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Orders</span></a>
//                     </li>
//                     <li>
//                         <a href="https://www.codeply.com/p/Z8pS1bOTFB#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
//                             <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline">Bootstrap</span></a>
//                         <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
//                             <li class="w-100">
//                                 <a href="https://www.codeply.com/p/Z8pS1bOTFB#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 1</a>
//                             </li>
//                             <li>
//                                 <a href="https://www.codeply.com/p/Z8pS1bOTFB#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 2</a>
//                             </li>
//                         </ul>
//                     </li>
//                     <li>
//                         <a href="https://www.codeply.com/p/Z8pS1bOTFB#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
//                             <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Products</span> </a>
//                             <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
//                             <li class="w-100">
//                                 <a href="https://www.codeply.com/p/Z8pS1bOTFB#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 1</a>
//                             </li>
//                             <li>
//                                 <a href="https://www.codeply.com/p/Z8pS1bOTFB#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 2</a>
//                             </li>
//                             <li>
//                                 <a href="https://www.codeply.com/p/Z8pS1bOTFB#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 3</a>
//                             </li>
//                             <li>
//                                 <a href="https://www.codeply.com/p/Z8pS1bOTFB#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 4</a>
//                             </li>
//                         </ul>
//                     </li>
//                     <li>
//                         <a href="https://www.codeply.com/p/Z8pS1bOTFB#" class="nav-link px-0 align-middle">
//                             <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Customers</span> </a>
//                     </li>
//                 </ul>
//                 <hr>
//                 <div class="dropdown pb-4">
//                     <a href="https://www.codeply.com/p/Z8pS1bOTFB#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
//                         <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle">
//                         <span class="d-none d-sm-inline mx-1">loser</span>
//                     </a>
//                     <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1" style="">
//                         <li><a class="dropdown-item" href="https://www.codeply.com/p/Z8pS1bOTFB#">New project...</a></li>
//                         <li><a class="dropdown-item" href="https://www.codeply.com/p/Z8pS1bOTFB#">Settings</a></li>
//                         <li><a class="dropdown-item" href="https://www.codeply.com/p/Z8pS1bOTFB#">Profile</a></li>
//                         <li>
//                             <hr class="dropdown-divider">
//                         </li>
//                         <li><a class="dropdown-item" href="https://www.codeply.com/p/Z8pS1bOTFB#">Sign out</a></li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//         <div class="col py-3">
//             <h3>Left Sidebar with Submenus</h3>
//             <p class="lead">
//                 An example 2-level sidebar with collasible menu items. The menu functions like an "accordion" where only a single
//                 menu is be open at a time. While the sidebar itself is not toggle-able, it does responsively shrink in width on smaller screens.</p>
//             <ul class="list-unstyled">
//                 <li><h5>Responsive</h5> shrinks in width, hides text labels and collapses to icons only on mobile</li>
//             </ul>
//         </div>
//     </div>
// </div>

//   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"></script>

//   <script src="https://www.codeply.com/p/Z8pS1bOTFB"></script>

//   <script>

//   </script>
//   <script>
//     // prevent navigation
//     document.addEventListener("DOMContentLoaded", function() {
//       var links = document.getElementsByTagName("A");
//       for(var i=0; i < links.length; i++) {
//         links[i].addEventListener("click", function(e) {
//           var href = this.getAttribute("href")

//           if (!href) {
//             return
//           }

//           if (href === '#') {
//             // hash only ('#')
//             console.debug('Internal nav allowed by Codeply');
//             e.preventDefault()
//           }
//           else if (this.hash) {
//             // hash with tag ('#foo')
//             var element = null
//             try {
//               element = document.querySelector(this.hash)
//             }
//             catch(e) {
//               console.debug('Codeply internal nav querySelector failed')
//             }
//             if (element) {
//               // scroll to anchor
//               e.preventDefault();
//               const top = element.getBoundingClientRect().top + window.pageYOffset
//               //window.scrollTo({top, behavior: 'smooth'})
//               window.scrollTo(0,top)
//               console.debug('Internal anchor controlled by Codeply to element:' + this.hash)
//             }
//             else {
//               // allow javascript routing
//               console.debug('Internal nav route allowed by Codeply');
//             }
//           }
//           else if (href.indexOf("/p/")===0 || href.indexOf("/v/")===0) {
//             // special multi-page routing
//             console.debug('Special internal page route: ' + href)

//             var l = href.replace('/p/','/v/')

//             // reroute
//             e.preventDefault()
//             var newLoc = l + '?from=internal'
//             console.debug('Internal view will reroute to ' + newLoc)
//             location.href = newLoc
//           }
//           else if (href.indexOf("./")===0) {
//             // special multi-page routing
//             console.debug('Special internal ./ route: ' + href)

//             var u = parent.document.URL.split("/")
//             var pn = href.split("/")[1]
//             var plyId = u[u.length-1]

//             if (plyId.indexOf('?from')>-1) {
//               // already rerouted this
//               console.debug('already rerouted')
//               plyId = u[u.length-2]
//             }

//             var l = plyId + '/' + pn

//             console.debug(u)
//             console.debug(pn)
//             console.debug('l',l)

//             // reroute
//             e.preventDefault()
//             var newLoc = '/v/' + l + '?from=internal'
//             console.debug('Internal page will reroute to ' + newLoc)
//             location.href = newLoc
//           }
//           else {
//             // no external links
//             e.preventDefault();
//             console.debug('External nav prevented by Codeply');
//           }
//           //return false;
//         })
//       }
//     }, null);
//   </script>

//   )
// }
