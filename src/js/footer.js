const footerHtml = `
<!-- Footer Component -->
<footer class="bg-[#222222] dark:bg-background-dark text-[#EAEAEA] py-16 px-6 sm:px-8 lg:px-16 font-display">
<div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
<!-- Column 1: Logo and Company Info -->
<div class="flex flex-col gap-4">
<a class="inline-block" href="#">
<h2 class="text-2xl font-bold text-white">DISAVA</h2>
</a>
<p class="text-sm text-gray-400">Distribuciones Avendaño Valverde. Expertos en máquinas electrónicas para tu negocio.</p>
</div>
<!-- Column 2: Contacto -->
<div class="flex flex-col gap-4">
<h3 class="text-lg font-semibold text-white">Contacto</h3>
<ul class="space-y-3 text-sm">
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary mt-1 text-xl">location_on</span>
<span>Dirección de la empresa, Ciudad, País</span>
</li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary mt-1 text-xl">call</span>
<span>+593-99-845-1652</span>
</li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary mt-1 text-xl">mail</span>
<span>contacto@disava.com</span>
</li>
</ul>
</div>
<!-- Column 3: Navegación -->
<div class="flex flex-col gap-4">
<h3 class="text-lg font-semibold text-white">Navegación</h3>
<ul class="space-y-2 text-sm">
<li><a class="hover:text-primary transition-colors duration-300" href="#">Inicio</a></li>
<li><a class="hover:text-primary transition-colors duration-300" href="#">Productos</a></li>
<li><a class="hover:text-primary transition-colors duration-300" href="#">Sobre Nosotros</a></li>
<li><a class="hover:text-primary transition-colors duration-300" href="#">Contacto</a></li>
</ul>
</div>
<!-- Column 4: Síguenos -->
<div class="flex flex-col gap-4">
<h3 class="text-lg font-semibold text-white">Síguenos</h3>
<div class="flex items-center gap-4">
<a aria-label="Facebook" class="text-[#EAEAEA] hover:text-primary transition-colors duration-300" href="#">
<svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewbox="0 0 24 24"><path clip-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill-rule="evenodd"></path></svg>
</a>
<a aria-label="Instagram" class="text-[#EAEAEA] hover:text-primary transition-colors duration-300" href="#">
<svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewbox="0 0 24 24"><path clip-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 012.792 2.792c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-2.792 2.792c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-2.792-2.792c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 012.792-2.792c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 8.118a4.102 4.102 0 100 8.204 4.102 4.102 0 000-8.204zM12 14.896a2.896 2.896 0 110-5.792 2.896 2.896 0 010 5.792zm4.949-6.903a1.149 1.149 0 10-2.298 0 1.149 1.149 0 002.298 0z" fill-rule="evenodd"></path></svg>
</a>
</div>
</div>
</div>
<!-- Copyright Bar -->
<div class="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
<p>© 2024 Distribuciones Avendaño Valverde (DISAVA). Todos los derechos reservados.</p>
</div>
</footer>
<!-- FAB Component -->
<a class="group fixed bottom-6 right-6 z-50" href="https://wa.me/593998451652?text=Hola,%20estoy%20interesado%20en%20sus%20productos." rel="noopener noreferrer" target="_blank">
<button class="flex items-center justify-center rounded-full h-16 w-16 bg-[#25D366] text-white shadow-lg transform transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366] dark:focus:ring-offset-background-dark">
<svg aria-hidden="true" class="w-8 h-8" fill="currentColor" viewbox="0 0 24 24"><path d="M16.75 13.96c.25.13.42.3.52.49.1.19.1.42.06.68-.04.26-.16.5-.34.71-.18.21-.42.38-.72.5-.29.12-.64.18-1.04.18h-.1c-.48 0-.98-.1-1.49-.31s-1.02-.55-1.53-.99c-.52-.44-.98-.98-1.39-1.6s-.75-1.32-1.02-2.12c-.27-.8-.41-1.68-.41-2.61 0-1.02.21-1.9.64-2.66.43-.76 1.02-1.33 1.79-1.74s1.65-.61 2.65-.61c.1 0 .21.01.31.03.1.02.2.05.29.09.09.04.18.1.26.17.08.07.15.16.21.27s.11.23.15.37.06.29.06.46c0 .15-.02.29-.05.42s-.08.26-.15.38c-.07.12-.17.24-.29.35s-.28.22-.46.33c-.18.11-.38.22-.59.33s-.42.23-.62.33c-.2.1-.38.2-.52.31s-.25.24-.31.39c-.07.15-.09.32-.09.51 0 .21.04.4.12.58s.2.33.36.46.36.25.59.33c.23.08.49.12.78.12.32 0 .63-.07.92-.21s.55-.32.79-.53c.23-.21.42-.46.56-.75.14-.29.21-.61.21-.97 0-.19-.02-.38-.07-.57s-.13-.36-.22-.53c-.1-.17-.22-.32-.37-.45s-.32-.25-.51-.34c-.19-.09-.4-.14-.62-.14h-.3c-.22 0-.43.03-.63.09s-.39.15-.57.29c-.18.14-.33.3-.46.49s-.23.41-.29.65c-.06.24-.09.49-.09.76 0 .33.07.62.21.87s.32.46.54.63c.22.17.48.29.77.38.29.09.58.14.88.14.47 0 .9-.1 1.29-.3s.73-.55 1.01-.99c.28-.44.42-.95.42-1.54 0-.52-.12-1-.35-1.45s-.58-.8-1.02-1.05z"></path></svg>
<span class="sr-only">Contactar por WhatsApp</span>
</button>
</a>
</div>`;


document.body.insertAdjacentHTML("afterend", footerHtml);
