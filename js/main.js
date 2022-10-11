let imageBox = document.querySelector( '.the-body .left-content img' )
  , imagecontainer = document.querySelector( '.the-body .left-content .images-container' );

let imageArray = Array.from( imagecontainer.children ),
  leftButton1 = document.querySelector( ".the-body .to-left" )
  , rightButton1 = document.querySelector( ".the-body .to-right" ),
  currentPhoto1 = 0;

imageArray.forEach( ( img ) =>
{
  img.onclick = ( ( e ) =>
  {
    imageBox.setAttribute( 'src', e.target.getAttribute( 'src' ) )
    imageArray.forEach( ( img ) => img.classList.remove( "active" ) )
    img.classList.add( "active" )
  } )
} )

// the variables 
let overlayViewr = document.querySelector( ".overly-viwer" )
let imagecloned = document.querySelector( ".the-body .left-content img" ).cloneNode( true )
let imageclonedContainer = document.querySelector( ".the-body .left-content .images-container" ).cloneNode( true )

let closeIcon = document.querySelector( ".overly-viwer i" )
overlayViewr.appendChild( imagecloned )
overlayViewr.appendChild( imageclonedContainer )

// For the Big view to image 
imageBox.addEventListener( "click", () =>
{
  if ( window.innerWidth < 596 )
  {

  } else
  {
    overlayViewr.style.position = "fixed"
    overlayViewr.style.display = "block"
  }
} )
closeIcon.addEventListener( "click", () =>
{
  overlayViewr.style.position = "none"
  overlayViewr.style.display = "none"
} )

// For the slider background Image 
let leftButton = document.querySelector( ".overly-viwer .fa-angle-left" )
let rightButton = document.querySelector( ".overly-viwer .fa-angle-right" )
let mybackground = Array.from( imageclonedContainer.children );
let currentPhoto = 0;

checkerimage()
checkerimage1()
// important Variables for the code
console.log( mybackground )
console.log( currentPhoto )

// left Button
leftButton.addEventListener( "click", ( e ) =>
{
  currentPhoto--
  // backgroundContainer.style.backgroundImage = ( `url(../image/${ mybackground[ currentPhoto ] })` )
  checkerimage()
} )

// right Button 
rightButton.addEventListener( "click", ( e ) =>
{
  currentPhoto++;
  checkerimage();
} )

function checkerimage ()
{
  let Image = document.querySelector( ".overly-viwer .parent" );

  Image.setAttribute( "src", mybackground[ currentPhoto ].getAttribute( "src" ) )
  if ( currentPhoto === 0 )
  {
    leftButton.style.display = "none"
  } else
  {
    leftButton.style.display = "block"
  }
  if ( currentPhoto === mybackground.length - 1 )
  {
    rightButton.style.display = "none"
  } else
  {
    rightButton.style.display = "block"
  }

  // to Run  Add Active Class to the Bullets
  AddActiveClass()
}
function AddActiveClass ()
{
  mybackground.forEach( ( img, index ) =>
  {
    if ( index === currentPhoto )
    {
      img.classList.add( "active" )
    } else
    {
      img.classList.remove( "active" )
    }
  } )
}

//------------------------------------------------
// the button slider to the phone
leftButton1.addEventListener( "click", () =>
{
  currentPhoto1--
  checkerimage1()
} )

// right Button 
rightButton1.addEventListener( "click", () =>
{
  currentPhoto1++;
  checkerimage1();
} )


function checkerimage1 ()
{
  if ( window.innerWidth < 596 )
  {
    // backgroundContainer.style.backgroundImage = ( `url(./image/${ mybackground[ currentPhoto ] })` );
    let Image = document.querySelector( ".the-body .left-content .parent" );

    Image.setAttribute( "src", imageArray[ currentPhoto1 ].getAttribute( "src" ) )
    if ( currentPhoto1 === 0 )
    {
      leftButton1.style.display = "none"
    } else
    {
      leftButton1.style.display = "block"
    }
    if ( currentPhoto1 === mybackground.length - 1 )
    {
      rightButton1.style.display = "none"
    } else
    {
      rightButton1.style.display = "block"
    }

    // to Run  Add Active Class to the Bullets
    AddActiveClass1()
  }
}
function AddActiveClass1 ()
{
  imageArray.forEach( ( img, index ) =>
  {
    if ( index === currentPhoto1 )
    {
      img.classList.add( "active" )
    } else
    {
      img.classList.remove( "active" )
    }
  } )
}


//-------------------------------------------------
// the second image veiwer
let imageArray2 = Array.from( imageclonedContainer.children )
  , imageBox2 = document.querySelector( ".overly-viwer .parent" )

imageArray2.forEach( ( img ) =>
{
  img.onclick = ( ( e ) =>
  {
    imageBox2.setAttribute( 'src', e.target.getAttribute( 'src' ) )
    imageArray2.forEach( ( img ) => img.classList.remove( "active" ) )
    img.classList.add( "active" )
    currentPhoto = imageArray2.indexOf( img );
    checkerimage()
  } )
} )


// Nav links active class
let Navlinks = document.querySelectorAll( 'header nav ul li' )
console.log( Navlinks )

Navlinks.forEach( ( li ) =>
{
  li.onclick = ( ( e ) =>
  {
    Navlinks.forEach( ( li ) =>
    {
      li.classList.remove( 'active' )
    } )
    e.target.classList.add( 'active' )
  } )
} )

// the bars toggler
let closeUl = document.querySelector( ".to-exit" )
let showUl = document.querySelector( ".toggle-menu" )
let ul = document.querySelector( 'header nav ul' )

closeUl.onclick = ( () => ul.style.left = "-400px" )
showUl.onclick = ( () => ul.style.left = "-17px" )

// the price by the discount 
let price = document.querySelector( ".price span" ),
  discount = document.querySelectorAll( ".discount span" )[ 0 ],
  discountvalue = document.querySelectorAll( ".discount span" )[ 1 ];


if ( ( ~~( discountvalue.innerHTML ).slice( 0, -1 ) ) > 0 )
{
  let discountval = ~~( discountvalue.innerHTML ).slice( 0, -1 ),
    originPrice = ~~price.textContent;

  discount.innerHTML = originPrice - ( discountval * originPrice ) / 100
}



// the counter to Increase one or decrease one 
let minus = document.querySelector( '.the-body .right-content .minus' ),
  plus = document.querySelector( '.the-body .right-content .plus' ),
  inputcounter = document.querySelector( '.the-body .right-content .counter' ),
  theNumNotification = document.querySelector( "header .container .right-content" )


minus.addEventListener( 'click', () =>
{
  if ( ~~inputcounter.innerHTML <= 0 )
  {
    ""
  } else
  {
    ~~inputcounter.innerHTML--
    // checker( ~~inputcounter.innerHTML )
  }
} )

plus.addEventListener( 'click', () =>
{
  ~~inputcounter.innerHTML++
  // checker( ~~inputcounter.innerHTML )
} )



// the button to Add to Cart 
let cartButton = document.querySelector( ".the-body .right-content .the-last-sec-buy .buy" ),
  theImageCartUser = document.querySelector( "header .container .right-content img" ),
  svgCart = document.querySelector( "header .container .right-content i" ),
  checkout = document.querySelector( ".the-head .cart button" ),
  cart = document.querySelector( ".the-head .cart" )
let parentBox = cart.querySelector( ".parent-box" )

// the Event to run the buttons
theImageCartUser.addEventListener( "click", () => cart.classList.toggle( "is-active" ) )
svgCart.onclick = ( () => cart.classList.toggle( "is-active" ) )
// checkout.onclick = ( () => cart.style.display = "none" )
cartButton.addEventListener( "click", checker )



function checker ()
{
  let val = ~~inputcounter.innerHTML;

  if ( val > 0 )
  {
    // Add the notification after and Set value 
    theNumNotification.setAttribute( "data-val", val )
    theNumNotification.classList.add( "active-this" )
    theImageCartUser.style.border = "2px solid var(--orange-co)"

    // remove the text to the Cart is empty 
    if ( cart.querySelector( ".no-content" ) )
    {
      cart.querySelector( ".no-content" ).remove()
    }
    // Add the button to checkout 
    checkout.style.display = "block"

    // Add the product to the Cart 
    createingElement()
  } else
  {
    // Remove the button to checkout 
    // checkout.style.display = "none"
    // Add the text to the Cart is empty 
    checkp()

  }
}

// to check if the cart empty or no 
function checkp ()
{
  let arrayProducts = Array.from( parentBox.children )
  if ( arrayProducts.length >= 1 )
  {

  } else
  {
    if ( cart.querySelector( ".no-content" ) )
    {

    } else
    {
      // Remove the button to checkout 
      checkout.style.display = "none"

      // Remove the notification after
      theNumNotification.classList.remove( "active-this" )
      // the massage to no products 
      let p = document.createElement( "p" )
      p.appendChild( document.createTextNode( "your Cart is empty" ) )
      p.className = "no-content"
      cart.appendChild( p )

      console.log( arrayProducts )
    }

  }
}

// the putton to delete the product 
document.addEventListener( "click", ( e ) =>
{
  if ( e.target.id === "delete-product" )
  {
    e.target.parentElement.remove()
    checkp()
  }
} )


// function to create product  in cart 
function createingElement ()
{
  let parentBox = cart.querySelector( ".parent-box" );
  let arrayProducts = Array.from( parentBox.children )
  if ( arrayProducts.length >= 1 )
  {
    arrayProducts.forEach( ( product ) =>
    {
      let pro = product.querySelector( "p" ).textContent
      let oldPro = document.querySelector( ".the-body .right-content h1" ).textContent
      if ( pro === oldPro )
      {
        product.remove()
        createingElementChecked()
      } else
      {
        createingElementChecked()
      }

    } )
  } else
  {
    createingElementChecked()
  }
}

function createingElementChecked ()
{

  // the parent container 
  let parentDiv = document.createElement( "div" )
  parentDiv.className = "parent-container"

  // the Photo 
  let img = document.createElement( "img" )
  img.setAttribute( "src", imageArray[ 0 ].getAttribute( "src" ) )

  // create the content-text container 
  let ConttentParent = document.createElement( "div" )
  ConttentParent.className = "container-sourc"

  // create the description to the product 
  let descriptionP = document.createElement( "p" )
  let textdescription = document.querySelector( ".the-body .right-content h1" ).textContent
  descriptionP.appendChild( document.createTextNode( textdescription ) )

  // create the Spans to the price 
  // first span 
  let span1 = document.createElement( "span" )
    , spantext = document.createTextNode( `$${ discount.textContent }` )
  span1.appendChild( spantext )
  span1.className = "cart-price"

  // the second span 
  let span2 = document.createElement( "span" ),
    span2text = document.createTextNode( ` x ${ ~~inputcounter.innerHTML }` )
  span2.className = "cart-count"
  span2.appendChild( span2text )
  // the third span 
  let span3 = document.createElement( "span" )
  span3text = document.createTextNode( `$${ ~~( discount.textContent ) * ~~( inputcounter.innerHTML ) }` )
  span3.className = "cart-all-price"
  span3.appendChild( span3text )

  // Create the trash icon
  let icon = document.createElement( "i" )
  icon.className = "fa-solid fa-trash"
  icon.setAttribute( "id", "delete-product" )
  // appending all Element to the cart
  parentBox.appendChild( parentDiv )
  parentDiv.appendChild( img )
  parentDiv.appendChild( ConttentParent )
  ConttentParent.appendChild( descriptionP )
  ConttentParent.appendChild( span1 )
  ConttentParent.appendChild( span2 )
  ConttentParent.appendChild( span3 )
  parentDiv.appendChild( icon )
}