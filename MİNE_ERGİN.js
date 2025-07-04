(() => {
    const HOMEPAGE_PATHS = ['/', '/anasayfa'];
    const isHomepage = HOMEPAGE_PATHS.includes(window.location.pathname);
    if (!isHomepage) {
      console.log("wrong page");
      return;
    }
  
    const STORAGE_KEY = 'productCarouselData';
    let products = JSON.parse(localStorage.getItem(STORAGE_KEY));
  
    const productData = [
        {
            "id": 1,
            "brand": "HelloBaby",
            "name": " Yenidoğan 6lı Ağız Mendili 24x24cm Unisex ",
            "url": "https://www.e-bebek.com/hellobaby-yenidogan-6li-agiz-mendili-24x24cm-unisex-p-24ghlbumnd007001",
            "img": "https://cdn05.e-bebek.com/mnresize/300/300/media/p/organik-6li-agiz-mendili-24x24-cm_8682766103779_01.jpg",
            "price": 89.99,
            "original_price": 89.99
        },
        {
            "id": 2,
            "brand": "HelloBaby",
            "name": " Unisex Beyaz Body Ribana Kumaş Çıtçıtlı Zıbın Zarf Yaka Kısa Kol",
            "url": "https://www.e-bebek.com/hellobaby-unisex-beyaz-body-ribana-kumas-citcitli-zibin-zarf-yaka-kisa-kol-beyaz-p-24ghlbubdy010002",
            "img": "https://cdn05.e-bebek.com/mnresize/300/300/media/p/a_8682766438970_01.jpg",
            "price": 69.99,
            "original_price": 69.99
        },
        {
            "id": 3,
            "brand": "HelloBaby",
            "name": "Unisex Beyaz Body Ribana Kumaş Çıtçıtlı Zıbın Bisiklet Yaka Atlet Kol",
            "url": "https://www.e-bebek.com/hellobaby-unisex-beyaz-body-ribana-kumas-citcitli-zibin-bisiklet-yaka-atlet-kol-beyaz-p-24ghlbubdy002008",
            "img": "https://cdn05.e-bebek.com/mnresize/300/300/media/p/abcdeefff_8682766439298_01.jpg",
            "price": 69.99,
            "original_price": 69.99
        },
        {
            "id": 4,
            "brand": "HelloBaby",
            "name": "Yenidoğan Müslin Ağız Mendili Unisex",
            "url": "https://www.e-bebek.com/hellobaby-yenidogan-muslin-agiz-mendili-unisex-p-24ghlbumnd003003",
            "img": "https://cdn05.e-bebek.com/mnresize/300/300/media/p/yenidogan-muslin-agiz-mendili-unisex_8682766728736_01.jpg",
            "price": 89.99,
            "original_price": 89.99
        },
        {
            "id": 5,
            "brand": "Aziz Bebe",
            "name": "Yenidoğan Süzene Nakışlı 5li Askı Hastane Çıkışı",
            "url": "https://www.e-bebek.com/aziz-bebe-yenidogan-suzene-nakisli-5li-aski-hastane-cikisi-p-24yazzeset001001",
            "img": "https://cdn05.e-bebek.com/mnresize/300/300/media/p/24y-little-life-yenidogan-suzene-nakisli-5li-aski-hastane-cikisi-erkek-bebek_8682766693195_01.jpg",
            "price": 399.99,
            "original_price": 479.99
        },
        {
            "id": 6,
            "brand": "HelloBaby",
            "name": "Kız Bebek Sweatshirt Şardonlu Çiçek Desenli Bisiklet Yaka Uzun Kol",
            "url": "https://www.e-bebek.com/hellobaby-kiz-bebek-sweatshirt-sardonlu-cicek-desenli-bisiklet-yaka-uzun-kol-desenli-p-24khlbkswt008004",
            "img": "https://cdn05.e-bebek.com/mnresize/300/300/media/p/basic-az-sardonlu-cicek-desenli-sweatshirt-kiz-bebek_8682766731644_01.jpg",
            "price": 99.99,
            "original_price": 199.99
        },
        {
            "id": 7,
            "brand": "HelloBaby",
            "name": "Unisex Beyaz Body Ribana Kumaş Çıtçıtlı Zıbın Bisiket Yaka İp Askılı",
            "url": "https://www.e-bebek.com/hellobaby-unisex-beyaz-body-ribana-kumas-citcitli-zibin-bisiket-yaka-ip-askili-beyaz-p-24ghlbubdy009008",
            "img": "https://cdn05.e-bebek.com/mnresize/300/300/media/p/a_8682766616361_01.jpg",
            "price": 69.99,
            "original_price": 69.99
        },
        {
            "id": 8,
            "brand": "Little Dreams",
            "name": "Kız Müslin Battaniye Bebek",
            "url": "https://www.e-bebek.com/little-dreams-kiz-muslin-battaniye-kiz-bebek-p-24kltlkmsl002001",
            "img": "https://cdn05.e-bebek.com/mnresize/300/300/media/p/kiz-muslin-battaniye-kiz-bebek_8682766812732_01.jpg",
            "price": 269.99,
            "original_price": 169.99
        }
    ];
  
    if (!products) 
    {
      products = productData;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    }
  
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
    const container = document.createElement('section');
    container.className = 'custom-carousel';
    container.innerHTML = `
      <h2>Beğenebileceğinizi düşündüklerimiz</h2>
      <div class="carousel-wrapper"></div>
      <button class="carousel-left">&lt;</button>
      <button class="carousel-right">&gt;</button>
    `;
  
    products.forEach(product => {
      const has_discount = product.price !== product.original_price;
      const discountAmount = has_discount ? (product.original_price - product.price).toFixed(2) : null;
  
      const priceHTML = has_discount ?
        `<div class="prices">
           <span class="original-price">${product.original_price.toFixed(2)} TL</span>
           <span class="discounted-price">${product.price.toFixed(2)} TL</span>
           <span class="discount">-${discountAmount} TL</span>
         </div>` :
        `<div class="prices"><span class="discounted-price">${product.price.toFixed(2)} TL</span></div>`;
  
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <div class="heart ${favorites.includes(product.id) ? 'filled' : ''}"></div>
        <img src="${product.img}" alt="${product.name}" />
        <div class="info">
          <h4>${product.brand}</h4>
          <p>${product.name}</p>
          ${priceHTML}
        </div>
      `;
  
      card.addEventListener('click', () => 
        window.open(product.url, '_blank'));
  
      card.querySelector('.heart').addEventListener('click', (e) => {
        e.stopPropagation();
        const id = product.id;
        const index = favorites.indexOf(id);
        if (index >= 0) 
        {
          favorites.splice(index, 1);
        } 
        else 
        {
          favorites.push(id);
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
        e.currentTarget.classList.toggle('filled', favorites.includes(id));
      });
  
      container.querySelector('.carousel-wrapper').appendChild(card);
    });
  
    const style = document.createElement('style');
    style.textContent = `
      .custom-carousel { margin: 30px auto; width: fit-content; position: relative; }
      .custom-carousel h2 {
        font-size: 26px;
        margin-bottom: 20px;
        color: #f7941d;
        background-color: #fff5ea;
        font-weight: bold;
        padding: 20px 25px;
        border-radius: 15px;
        font-family: "Quicksand-Bold", sans-serif;
      }
      .carousel-wrapper {
        display: flex;
        overflow-x: auto;
        gap: 15px;
        scroll-behavior: smooth;
        width: 960px; /* En fazla 5 kart görünür */
      }
      .product-card {
        flex: 0 0 auto;
        width: 180px;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 8px;
        cursor: pointer;
        position: relative;
        transition: border-color 0.3s;
      }
      .product-card:hover { border-color: #f7941d; }
      .product-card img { width: 100%; border-radius: 8px; }
      .info h4 { margin: 5px 0 0; font-size: 14px; }
      .info p { font-size: 12px; color: #333; }
      .prices { margin-top: 5px; }
      .original-price { text-decoration: line-through; color: #999; margin-right: 5px; }
      .discounted-price { color: #333; font-size: 18px; font-weight: 600; }
      .discount { color: green; font-size: 12px; }
      .heart { position: absolute; top: 8px; right: 8px; font-size: 20px; cursor: pointer; }
      .heart::before { content: "♡"; color: #ddd; }
      .heart.filled::before { content: "♥"; color: #f7941d; }
      .carousel-left, .carousel-right {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: #fff;
        border: 1px solid #f7941d;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        font-size: 20px;
        cursor: pointer;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .carousel-left { left: 5px; }
      .carousel-right { right: 5px; }
    `;
    document.head.appendChild(style);
  
    const target = document.querySelector('eb-product-carousel');
    if (target) 
    {
      target.parentNode.insertBefore(container, target.nextSibling);
      console.log("Carousel successfully added");
    } 
    else 
    {
      console.log("carousel  not added.");
    }
  
    container.querySelector('.carousel-left').addEventListener('click', () => {
      container.querySelector('.carousel-wrapper').scrollBy({left: -600, behavior: 'smooth'});
    });
    container.querySelector('.carousel-right').addEventListener('click', () => {
      container.querySelector('.carousel-wrapper').scrollBy({left: 600, behavior: 'smooth'});
    });
  })();
  