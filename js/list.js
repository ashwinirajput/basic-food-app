const $rowElement = document.querySelector("#list-row");
const menuList = [
  {
    imageUrl: "images/1.png",
    title: "Barbeque Nation Gi",
    subTitle: "pan India",
    subHeading: "Food Voucher",
    description:
      "Buy a gift voucher worth Rs 1800 and get two compliementry mocktail /Beer",
    offer: "1 more Offer(s)",
    rating: "4.4",
    buyNow: true
  },
  {
    imageUrl: "images/2.png",
    title: "Fassos",
    subTitle: "Mumbai,Pune,Nagpur",
    subHeading: "Food Voucher",
    description: "50% off upto 75 on mimimum order 99",
    offer: "",
    rating: "4.6",
    buyNow: false
  },
  {
    imageUrl: "images/3.png",
    title: "Firange Bake",
    subTitle: "Mumbai,Pune,Nagpur,Delhi",
    subHeading: "Food Voucher",
    description: "Rs 150 off on mimimum order 99",
    offer: "",
    rating: "4.7",
    buyNow: false
  },
  {
    imageUrl: "images/4.png",
    title: "Good Bowl",
    subTitle: "Mumbai,Pune,Nagpur,Delhi",
    subHeading: "Food Voucher",
    description: "Rs 150 off on mimimum order 99",
    offer: "",
    rating: "4.7",
    buyNow: false
  },
  {
    imageUrl: "images/3.png",
    title: "Mardin  Oak",
    subTitle: "Mumbai,Pune,Nagpur,Delhi",
    subHeading: "Food Voucher",
    description: "Rs 150 off on mimimum order 99",
    offer: "",
    rating: "4.7",
    buyNow: false
  },
  {
    imageUrl: "images/2.png",
    title: "Sweet Truth",
    subTitle: "Mumbai,Pune,Nagpur,Delhi",
    subHeading: "Food Voucher",
    description: "Rs 150 off on mimimum order 99",
    offer: "",
    rating: "4.7",
    buyNow: false
  },
  {
    imageUrl: "images/1.png",
    title: "Bakingo",
    subTitle: "Mumbai,Pune,Nagpur,Delhi",
    subHeading: "Food Voucher",
    description: "Rs 150 off on mimimum order 99",
    offer: "",
    rating: "4.7",
    buyNow: false
  },
  {
    imageUrl: "images/4.png",
    title: "Roseate Hotel & R",
    subTitle: "Mumbai,Pune,Nagpur,Delhi",
    subHeading: "Food Voucher",
    description: "Rs 150 off on mimimum order 99",
    offer: "",
    rating: "4.7",
    buyNow: false
  }
];

const formatReponse = res => {
  $rowElement.innerHTML = "";
  const fragmets = document.createDocumentFragment();
  res.map(data => {
    const node = document.createElement("div");
    node.setAttribute("class", "item");
    node.innerHTML = responseModel(data);
    fragmets.appendChild(node);
  });
  $rowElement.appendChild(fragmets);
};
const responseModel = data => {
  const P1 = `
  <div class="image-div">
  <img
      src=${data.imageUrl}
      alt="Smiley face"
      />
</div>
<div class="title">
  <div class="title-container">
      <span class="heading">${data.title}</span>
      <span>${data.subTitle ? data.subTitle : ""}</span>
  </div>
  <div class="rating">
  ${data.rating ? `<i class="fa fa-star" aria-hidden="true"></i> ` : ""}
      <span>${data.rating ? data.rating : ""}</span>
  </div>
</div>
<div class="description">
  <p>${data.subHeading}</p>
  <p>${data.description}</p>
  <p>${data.offer}</p>
</div>
<div class="buy-rating">
  <i class="fa fa-heart-o" aria-hidden="true"></i>
  ${data.buyNow ? `<a href="buy.html" target="_blank">Buy</a>` : ""}
</div>`;
  return P1;
};
formatReponse(menuList);

function buy() {
  console.log("buy");
}
