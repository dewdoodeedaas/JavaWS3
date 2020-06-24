const searchInput = document.getElementById("search");
const productsDom = document.getElementById("products");

let products = []
let copy = []

searchInput.addEventListener("input", function (e) {
  let kw = this.value
  filterData(copy, kw)
})

const filterData = async (copy, kw) => {
  let data = await copy.filter((value) => {
    return value.title.toLowerCase().match(`${kw.toLowerCase().trim()}`)
  })
  products = data
  setTimeout(() => {
    renderProduct()
  }, 300)
}

const initializeApplication = async () => {
  try {
    let product = await axios.get("http://localhost:3000/products")
    products = product.data
    copy = product.data
    renderProduct()
  } catch (error) {
    console.log(error)
  }
}

initializeApplication();

const renderProduct = () => {
  productsDom.innerHTML = ``;
  products.forEach((product) => {
    productsDom.innerHTML += `
     <div class="col-lg-3 col-md-4 col-sm-12">
            <div class="card product_item">
              <div class="body">
                <div class="cp_img ">
                  <img
                   src=${product.image}
                    alt="Product"
                    class="img-fluid"
                  />
                  <div class="hover"></div>
                </div>
                <div class="product_details">
                  <h5>
                    <a href="#">${product.title}</a>
                  </h5>
                  <ul class="product_price list-unstyled">
                    <li class="old_price">$${product.price}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
    `
  })
}

const renderCopy = (copy) => {
  productsDom.innerHTML = ``
  copy.forEach((product) => {
    productsDom.innerHTML += `
     <div class="col-lg-3 col-md-4 col-sm-12">
            <div class="card product_item">
              <div class="body">
                <div class="cp_img ">
                  <img
                   src=${product.image}
                    alt="Product"
                    class="img-fluid"
                  />
                  <div class="hover"></div>
                </div>
                <div class="product_details">
                  <h5>
                    <a href="#">${product.title}</a>
                  </h5>
                  <ul class="product_price list-unstyled">
                    <li class="old_price">$${product.price}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
    `
  })
}
