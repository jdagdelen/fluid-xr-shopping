const products = [
    {
        name: "Rivet Canton Deep Mid-Century Modern Loveseat Sofa Couch, 76.7\"W, White",
        url: "https://amazon.com/dp/B082TCDJCD",
        image_url: "https://amazon-berkeley-objects.s3.amazonaws.com/images/original/1c/1ce4d023.jpg"
    },
    {
        name: "Rivet Edgewest Low Back Modern Left U-Sectional, 117\"W, Rouge Red",
        url: "https://amazon.com/dp/B07B4MYQMC",
        image_url: "https://amazon-berkeley-objects.s3.amazonaws.com/images/original/d2/d2c0ebe5.jpg"
    },
    {
        name: "Stone & Beam Andover Slipcover Right-Facing L-Shaped Sectional, 124\"W, Stone Fabric",
        url: "https://amazon.com/dp/B07BW8VJ5G",
        image_url: "https://amazon-berkeley-objects.s3.amazonaws.com/images/original/15/1514b778.jpg"
    },
    {
        name: "Stone & Beam Esme Memory-Swivel Barstool, 43.3\"H, Hemp",
        url: "https://amazon.com/dp/B084W2VXYK",
        image_url: "https://amazon-berkeley-objects.s3.amazonaws.com/images/original/05/05c79712.jpg"
    },
    {
        name: "AmazonBasics Leaning Garment Rack, Silver",
        url: "https://amazon.com/dp/B07TWQSZL4",
        image_url: "https://amazon-berkeley-objects.s3.amazonaws.com/images/original/08/08dcf907.jpg"
    },
    {
        name: "Stone & Beam Canfield Traditional Recliner, 30\"W, Espresso",
        url: "https://amazon.com/dp/B07B4GXWZZ",
        image_url: "https://amazon-berkeley-objects.s3.amazonaws.com/images/original/45/45300db1.jpg"
    },
    {
        name: "Stone & Beam Medium Floral-Embossed Planter, 6\"H, Arabesque Coral Pink",
        url: "https://amazon.com/dp/B083YG3JN3",
        image_url: "https://amazon-berkeley-objects.s3.amazonaws.com/images/original/67/671a7f15.jpg"
    },
    {
        name: "Stone & Beam Bridgewater Scalloped Queen Headboard, 71\"W, Curious Pearl",
        url: "https://amazon.com/dp/B07B5127YK",
        image_url: "https://amazon-berkeley-objects.s3.amazonaws.com/images/original/9b/9b4a1d72.jpg"
    },
    {
        name: "Stone & Beam Andover Leather Loveseat Sofa, 67\"W, Saddle Brown",
        url: "https://amazon.com/dp/B07B4L6C7R",
        image_url: "https://amazon-berkeley-objects.s3.amazonaws.com/images/original/87/874e87ba.jpg"
    },
    {
        name: "AmazonBasics Folding Step Ladder - 3-Step, Aluminum with Wide Pedal, Silver and Black",
        url: "https://amazon.com/dp/B07WGNT4GG",
        image_url: "https://amazon-berkeley-objects.s3.amazonaws.com/images/original/0c/0cce9c4d.jpg"
    }
];

  
// Select the containing element that holds all the search result cards
let searchResultsContainer = document.querySelector('#search > div.s-desktop-width-max.s-desktop-content.s-opposite-dir.s-wide-grid-style.s-left-column-overlay-style.sg-row > div.sg-col-20-of-20.s-matching-dir.sg-col.sg-col-24-of-24.sg-col-16-of-16.sg-col-8-of-12 > div > span.rush-component.s-latency-cf-section > div.s-main-slot.s-result-list.s-search-results.sg-row');

// Loop through all the child elements (which are the individual result cards)
let resultCards = searchResultsContainer.children;
for (let i = 0; i < resultCards.length; i++) {
    let card = resultCards[i];
    if (i >= products.length) {
        break; // Break if we run out of products
    }
    let productData = products[i];

    // Replace the image
    let imageElement = card.querySelector('.s-image');
    if (imageElement) {
        imageElement.src = productData.image_url; // Replace with the image URL from the JSON
        imageElement.srcset = ''; // Clear srcset if needed
        imageElement.alt = productData.name; // Replace the alt text with the product name
    }

    // Replace the name
    let nameElement = card.querySelector('h2.a-size-mini a.a-link-normal span.a-size-medium');
    if (nameElement) {
        nameElement.textContent = productData.name; // Replace with the product name from the JSON
    }

    // Replace the link
    let linkElement = card.querySelector('h2.a-size-mini a.a-link-normal');
    if (linkElement) {
        linkElement.href = productData.url; // Replace with the product URL from the JSON
    }
}

// Optionally log to verify
console.log('All search result cards modified:', resultCards);
  