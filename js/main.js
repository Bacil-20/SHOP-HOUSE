/***********************************************************
 ******************** Index ********************
 *******************************************************
 */

// **************** window Preloader ************* //
$(document).ready(function () {
  $(".circle").fadeOut(1000, function () {
    $('body').css('overflow', " auto")
  });
});

// ************* Social Acount ************* //
$(".open-btn").click(function () {
  $(".social-links li a").toggleClass("hden");
  $(".plus").toggleClass("plusH");
  $(".minus").toggleClass("minusS");
});

// *************** overlay Part **************** //

$('.toggelbutton').click(function () {
  $('#nav-toggle').toggleClass('open');
  $('.overlay').addClass('opned');
})
$('.overlay').mousedown(function () {
  $('#nav-toggle').removeClass('open');
  if (window.screen.availWidth > 1024) {
    $('.overlay').removeClass('opned');
  }
  $('#cart').removeClass('open-cart');
})

// ************ navbar ************ //
// $(".nav-item .nav-link").click(function (e) {
//   e.preventDefault()
// });


// let one = document.querySelector(".one");
// let two = document.querySelector(".two");



if (window.screen.availWidth <= 1024) {
  $(".nav-item .dropdown-toggle").click(function (e) {
    console.log(this)
    $(this).next().slideToggle(500);
    $(".openslide").not($(this).next()).slideUp(500);
    $(this).parent().siblings().children().children().removeClass("rotate");
    $(this).children().toggleClass("rotate");
    // $(this).off()
  });
}
// ************** Cart ************** //
(function () {
  const cartBtn = document.querySelectorAll(".fa-shopping-cart");
  cartBtn.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      let fullPath =
        event.target.parentElement.parentElement.previousElementSibling.src;
      let pos = fullPath.indexOf("images");
      let partPath = fullPath.slice(pos);
      const item = {};
      item.img = partPath;
      let prodName =
        event.target.parentElement.parentElement.parentElement
          .nextElementSibling.children[0].children[0].children[0].innerHTML;
      item.name = prodName;
      let price =
        event.target.parentElement.parentElement.parentElement
          .nextElementSibling.children[0].children[2].innerHTML;
      let finalPrice = price.slice(1).trim();
      item.price = finalPrice;
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.setAttribute("id", "cart-item");
      cartItem.innerHTML = `   
      <img src="${item.img}" style="width: 80px" alt="product-image" />
      <div class="item-text">
        <p class="item-title">${item.name}</p>
        <p class="price">
          <span> $ </span>
          <span class="item-price">${item.price}</span>
        </p>
      </div>
      <a href="#" class="item-remover" id="remove-item">
        <i class="fal fa-times"></i>
      </a>
    `;
      const cart = document.getElementById("cart");
      const total = document.getElementById("Total");
      cart.insertBefore(cartItem, total);
      showTotal();
      const overlay = document.querySelector(".overlay");
      overlay.classList.add("opned");
      cart.classList.add("open-cart");
    });
  });
})();
function showTotal() {
  const TotalPrice = [];
  const items = document.querySelectorAll(".item-price");
  items.forEach(function (item) {
    TotalPrice.push(parseFloat(item.textContent));
  });
  let totalMoney = TotalPrice.reduce(function (TotalPrice, item) {
    TotalPrice += item;

    return TotalPrice;
  }, 0);
  let FinalMoney = totalMoney.toFixed(2);
  const Total = (document.querySelector(".total-price").textContent =
    FinalMoney);
  const itemsNum = (document.querySelector(".c2 .Items-num").textContent =
    TotalPrice.length);
  const price = (document.querySelector(".c1 .Price").textContent =
    FinalMoney);
  if (TotalPrice.length != 0) {
    document.getElementById("Total").classList.add("cart-is-empty");
    document.getElementById("empty-cart").style.display = "none";
  } else {
    document.getElementById("Total").classList.remove("cart-is-empty");
    document.getElementById("empty-cart").style.display = "flex";
  }
}
const removeItem = document.querySelectorAll(".item-remover");
cart.addEventListener("click", function (e) {
  if (e.target.className == "fal fa-times") {
    //cart.removeChild(e.target.parentElement);
    e.target.parentElement.parentElement.remove();
    showTotal();
  }
});
$("#open-cart").click(function () {
  $(".overlay").addClass("opned");
  $("#cart").addClass("open-cart");
});
$("#close-cart").click(function () {
  $("#cart").removeClass("open-cart");
  $(".overlay").removeClass("opned");
});

// ************** searchicon ************** //
let body = document.querySelector("body");
let search = document.getElementById("search");
let searchicon = document.querySelector(".searchicon");

body.addEventListener("click", (e) => {
  if (
    e.target.className == "searchicon" ||
    e.target.className == "far fa-search"
  ) {
    search.classList.toggle("open");
  } else if (e.target.className == "search open") {
    search.classList.add("open");
  } else if (e.target.className != "searchicon") {
    search.classList.remove("open");
  }
});

$("#dots1 , .pos1").hover(
  function () {
    $(".pos1").addClass("pop");
  },
  function () {
    $(".pos1").removeClass("pop");
  }
);
$("#dots2 , .pos2").hover(
  function () {
    $(".pos2").addClass("pop");
  },
  function () {
    $(".pos2").removeClass("pop");
  }
);
$("#dots3 , .pos3").hover(
  function () {
    $(".pos3").addClass("pop");
  },
  function () {
    $(".pos3").removeClass("pop");
  }
);


/***********************************************************
 ******************** Contact Us ********************
 *******************************************************
 */

$(".qus-list li a").click(function (e) {
  e.preventDefault()
  $(this).next().slideToggle(500);
  $(".qus-list p").not($(this).next()).slideUp(500);
  $(this).parent().siblings().children().children().removeClass("rotate2");
  $(this).children().toggleClass("rotate2");
});


/***********************************************************
 ******************** Filters area ********************
 *******************************************************
 */

$('.list li a').click(function (event) {
  event.preventDefault()
  $(this).children(".color").toggleClass('view');
  $(this).children(".name").toggleClass('font-w');
  $(this).children(".number").toggleClass('bg-color');
})

$('.cells-num p .def,.brev-def2').click(function (e) {
  e.preventDefault();
})
// *************** range *****************//

function rangeChange(value) {
  // let range = document.getElementById('range').innerHTML = value
  $('#range').text(value);
}

// *************** Slider *****************//

$('#showSidebar').click(function () {
  $('.filter-sesction .slider').toggleClass('slidin');
  $('.overlay').toggleClass('opned');
});

$('.overlay').mousedown(function () {
  $('.slider').removeClass('slidin');
  $('.overlay').removeClass('opned');
});

/***********************************************************
 ******************** Blog-Flat ********************
 *******************************************************
 */

$(".popup").hover(
  function () {
    $(this).children(".popup ul").addClass("up")
  },
  function () {
    $(".popup ul").removeClass("up");

  }
);
$('.pagination .page-item .link-p1').click(function () {
  $('body').css('overflow', 'hidden');
  $(".circle").show(100);
  $('.trends .page-2').fadeOut(500);
  $(".circle").hide(900);
  $('.trends .page-1').fadeIn(1000);
  $('body').css('overflow', 'auto');
  $('.pagination .page-item .link-p2').removeClass('active');
  $(this).addClass('active');
})
$('.pagination .page-item .link-p2').click(function () {
  $('body').css('overflow', 'hidden');
  $(".circle").show(100);
  $('.trends .page-1').fadeOut(500);
  $(".circle").hide(900);
  $('.trends .page-2').fadeIn(1000);
  $('body').css('overflow', 'auto');
  $('.pagination .page-item .link-p1').removeClass('active');
  $(this).addClass('active');
})

/***********************************************************
 ******************** Interior Design ********************
 *******************************************************
 */

$('#loadmore').click(function (e) {
  $('#loadmore .less').toggle();
  $('#loadmore .more').toggle();
  $('.inspir .load').slideToggle(1000)
})

/***********************************************************
 ******************** Shopping Cart  ********************
 ***********************--********************************
 */

let minus = document.getElementById('minus');
let num = document.getElementById('num');
let plus = document.getElementById('plus');
let price = document.getElementById('price').innerHTML;
let x = 1;
plus.addEventListener("click", function () {
  x++;
  if (x >= 0) {
    minus.disabled = false
  }
  num.value = x
  let total = price * num.value;
  document.getElementById('price').innerHTML = total
})
minus.addEventListener("click", function () {
  if (x > 1) {
    --x
  } else if (num.value == 1) {
    minus.disabled = true
  }
  num.value = x
  let total = price * num.value;
  document.getElementById('price').innerHTML = total
});
$(".prod-container")
  // title mouse actions
  .on("mouseover", function () {
    $(this)
      .children(".img-prod")
      .css({
        transform: "scale(" + $(this).attr("data-scale") + ")"
      });
  })
  .on("mouseout", function () {
    $(this)
      .children(".img-prod")
      .css({
        transform: "scale(1)"
      });
  })
  .on("mousemove", function (e) {
    $(this)
      .children(".img-prod")
      .css({
        "transform-origin": ((e.pageX - $(this).offset().left) / $(this).width()) * 100 +
          "% " +
          ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +
          "%"
      });
  });
