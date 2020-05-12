var seaResFunc = (function() {
  return {
    func1: function fillRes(products) {

      //clear previous results
      var results = document.getElementById('resultsDiv');
      var old = document.getElementById("prodList");
      if (old != null) {
        results.removeChild(old);
      }
      var newPL = document.createElement('div');
      newPL.setAttribute('id', "prodList");
      newPL.setAttribute('class', "products");
      results.appendChild(newPL);

      //addItem('reclaimed-wood-floating-shelf.jpg','floating shelf 2','$550',3);
      for (var i = 0; i < products.length; i++) {
        addItem(newPL, products[i].link, products[i].name, products[i].price,
                products[i].rating, products[i].comp, products[i].deliver, products[i].available);
      }
    }
  }
})(seaResFunc || {})

//dynamically add search results to webpage
function addItem(newPL, img, name, price, rating, company, days, ava) {

  var newEle = document.createElement('div');
  newEle.setAttribute('_ngcontent-imk-c21', "");
  newEle.setAttribute('class', "found_item");

  var imgDiv = document.createElement('img');
  imgDiv.setAttribute('class', "found_item_img");
  imgDiv.src=img;
  newEle.appendChild(imgDiv);

  var product_info = document.createElement('div');
  product_info.setAttribute('class', "product_info");

  var product_text = document.createElement('div');
  product_text.setAttribute('class', "product_text_area");

  var pNam = document.createElement('div');
  pNam.setAttribute('class', "name");
  pNam.innerText = name;
  product_text.appendChild(pNam);

  var comp = document.createElement('div');
  comp.setAttribute('class', "company");
  comp.innerText = company;
  product_text.appendChild(comp);

  var br = document.createElement('br');
  product_text.appendChild(br.cloneNode(true));

  var pDiv = document.createElement('div');
  pDiv.setAttribute('class', "price");
  pDiv.innerText= price;
  product_text.appendChild(pDiv);

  var del = document.createElement('div');
  del.setAttribute('class', "delivery");
  del.innerText= days + " day shipping available";
  product_text.appendChild(del);

  product_text.appendChild(br.cloneNode(true));

  var strR = document.createElement('div');
  strR.setAttribute('class', "star_rating");

  var star = document.createElement('span');
  star.setAttribute('class', 'fa fa-star checked');

  var starO = document.createElement('span');
  starO.setAttribute('class', 'fa fa-star-o');

  for (var i = 0; i < rating; i++) {
    strR.appendChild(star.cloneNode(true));
  }

  for (var i = 0; i < 5-rating; i++) {
    strR.appendChild(starO.cloneNode(true));
  }
  product_text.appendChild(strR);

  var pAva = document.createElement('div');
  pAva.setAttribute('class', "availability");
  pAva.innerText= ava;
  product_text.appendChild(pAva);

  product_info.appendChild(product_text);
  newEle.appendChild(product_info);

  newPL.appendChild(newEle);
}
