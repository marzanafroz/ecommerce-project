<template>
    <header>
      <div class="container">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">

                <RouterLink class="nav-link active" to="/">Home</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link " to="/about">About</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link " to="/products">Products</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link " to="/contact">Contact</RouterLink>
              </li>

               <li class="nav-item">
                <RouterLink class="nav-link position-relative " to="/cart"><i class="fa-solid fa-cart-plus "></i>
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                   {{ cartItemCount }}
                    <span class="visually-hidden">unread messages</span>
                  </span></RouterLink>
              </li>
              
             
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      </div>
    </header>
</template>