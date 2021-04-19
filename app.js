const button = document.getElementById("showButton");
let state = 0;
let guide;
button.addEventListener("click", (event) => {
   if (state == 1) {
      state = 0;
   } else {
      state += 1;
   }

   if (state == 1) {
      document.getElementById("cont").classList.remove("h-full");
      guide = document.getElementById("content").innerHTML;
      document.getElementById(
         "content"
      ).innerHTML = `<div><p class="mx-7 mb-4 text-white font-medium">Happy Birthday Motherfucking Eulan huhu tanginamo parin lol. I'm proud of what you've achieved for yourself na kahit sobrang unfair ng environment mo, you still stood your ground (kahit possibly shaking na). I'm happy that your twitter environment and moots assists you with many things, and you've made it that way. Grabe 21 years old ka na, dami mo nang experience siszt and marami ka pang maeexperience. Please wag mo pagkait yung sarili mo ng mga good experiences na deserve mo for yourself. Yung love mo for your own crafts, it shows sa personality. Tbh you are an embodiment sa isa sa mga fav Taylor's songs ko, and its 'Mean' (sorry not a dedicated TSWIFT fan eh). Well then, here;s to another year of struggles, happiness, and many more. </p></div><hr class="mx-10"><div class="text-center"><p class="mt-4 mx-7 text-white font-medium">TANGINAMO HAPPY BORTDAY</p></div>`;
      document
         .getElementById("content")
         .classList.remove(
            "text-center",
            "from-green-300",
            "via-blue-500",
            "to-purple-600"
         );
      document.getElementById("content").classList.add("bg-gray-900");
      document.getElementById("showButton").innerHTML = "Hide Message";
   } else {
      document.getElementById("cont").classList.add("h-full");
      document
         .getElementById("content")
         .classList.add(
            "text-center",
            "from-green-300",
            "via-blue-500",
            "to-purple-600"
         );
      document.getElementById("content").classList.remove("bg-gray-900");
      document.getElementById("content").innerHTML = guide;

      document.getElementById("showButton").innerHTML = "Show Message";
   }
});
