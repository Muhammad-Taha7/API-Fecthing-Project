 async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products?limit=19");
        const data = await res.json();

        const container = document.getElementById("products");
        container.innerHTML = ""; 

        data.forEach(product => {
          const card = document.createElement("div");
          card.className = "bg-white shadow-lg rounded-xl p-4 flex flex-col hover:scale-105 transition-transform";

          card.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="h-40 mx-auto object-contain mb-4">
            <h3 class="text-md font-semibold line-clamp-2 mb-2">${product.title}</h3>
            <p class="text-gray-600 text-sm mb-2 line-clamp-3">${product.description}</p>
            <p class="font-bold text-lg mb-2">$${product.price}</p>
            <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Add to Cart</button>
          `;

          container.appendChild(card);
        });
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();