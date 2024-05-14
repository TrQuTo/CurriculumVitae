<template>
    <div class="container" style="padding-top:75px;">
        <div id="carouselExampleDark" class="carousel carousel-dark slide pb-2" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner" style="border-radius: 1em / 1em;">
                <div class="carousel-item active" data-bs-interval="10000">
                    <img src="../../assets/img/carousel1.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>{{ $t("templates_page.titleSlide1") }}</h5>
                        <p>{{ $t("templates_page.contentSlide1") }}</p>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src="../../assets/img/carousel2.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>{{ $t("templates_page.titleSlide2") }}</h5>
                        <p>{{ $t("templates_page.contentSlide2") }}</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../../assets/img/carousel3.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>{{ $t("templates_page.titleSlide3") }}</h5>
                        <p>{{ $t("templates_page.contentSlide3") }}</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">{{ $t("templates_page.btnPrevious") }}</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">{{ $t("templates_page.btnNext") }}</span>
            </button>
        </div>
        <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col">
                <div class="card">
                    <img src="@/assets/img/logo_cv.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ $t("templates_page.cardTitleBasic") }}</h5>
                        <p class="card-text">
                            <span class="badge bg-secondary">{{ $t("templates_page.cardHashtagProfessional") }}</span>
                            <span class="badge bg-secondary">{{ $t("templates_page.cardHashtagSimple") }}</span>
                            <span class="badge bg-dark">+2</span>
                        </p>
                        <a class="card-button">
                            <RouterLink class="btn btn-outline-primary" to="/templates/basic_template">{{ $t("templates_page.btnViewDemo") }}</RouterLink>
                        </a>
                        <a class="card-button">
                            <RouterLink class="btn btn-outline-success" to="#">{{ $t("templates_page.btnUsingThis") }}</RouterLink>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="@/assets/img/logo_cv.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ $t("templates_page.cardTitleModern") }}</h5>
                        <p class="card-text">
                            <span class="badge bg-secondary">{{ $t("templates_page.cardHashtagTechnology") }}</span>
                            <span class="badge bg-secondary">{{ $t("templates_page.cardHashtagModern") }}</span>
                            <span class="badge bg-dark">+4</span>
                        </p>
                        <a class="card-button">
                            <RouterLink class="btn btn-outline-primary" to="/templates/modern_template">{{ $t("templates_page.btnViewDemo") }}</RouterLink>
                        </a>
                        <a class="card-button">
                            <RouterLink class="btn btn-outline-success" to="#">{{ $t("templates_page.btnUsingThis") }}</RouterLink>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="@/assets/img/logo_cv.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ $t("templates_page.cardTitleBasic") }}</h5>
                        <p class="card-text">
                            <span class="badge bg-secondary">{{ $t("templates_page.cardHashtagProfessional") }}</span>
                            <span class="badge bg-secondary">{{ $t("templates_page.cardHashtagTechnology") }}</span>
                            <span class="badge bg-dark">+1</span>
                        </p>
                        <a class="card-button">
                            <RouterLink class="btn btn-outline-primary" to="/templates/basic_template">{{ $t("templates_page.btnViewDemo") }}</RouterLink>
                        </a>
                        <a class="card-button">
                            <RouterLink class="btn btn-outline-success" to="#">{{ $t("templates_page.btnUsingThis") }}</RouterLink>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="@/assets/img/logo_cv.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ $t("templates_page.cardTitleBasic") }}</h5>
                        <p class="card-text">
                            <span class="badge bg-secondary">{{ $t("templates_page.cardHashtagModern") }}</span>
                            <span class="badge bg-secondary">{{ $t("templates_page.cardHashtagSimple") }}</span>
                            <span class="badge bg-dark">+7</span>
                        </p>
                        <a class="card-button">
                            <RouterLink class="btn btn-outline-primary" to="/templates/basic_template">{{ $t("templates_page.btnViewDemo") }}</RouterLink>
                        </a>
                        <a class="card-button">
                            <RouterLink class="btn btn-outline-success" to="#">{{ $t("templates_page.btnUsingThis") }}</RouterLink>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="@/assets/img/logo_cv.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ $t("templates_page.cardTitleModern") }}</h5>
                        <p class="card-text">
                            <span class="badge bg-secondary">{{ $t("templates_page.cardHashtagProfessional") }}</span>
                            <span class="badge bg-secondary">{{ $t("templates_page.cardHashtagSimple") }}</span>
                            <span class="badge bg-dark">+2</span>
                        </p>
                        <a class="card-button">
                            <RouterLink class="btn btn-outline-primary" to="/templates/modern_template">{{ $t("templates_page.btnViewDemo") }}</RouterLink>
                        </a>
                        <a class="card-button">
                            <RouterLink class="btn btn-outline-success" to="#">{{ $t("templates_page.btnUsingThis") }}</RouterLink>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="@/assets/img/logo_cv.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ $t("templates_page.cardTitleBasic") }}</h5>
                        <p class="card-text">
                            <span class="badge bg-secondary">{{ $t("templates_page.cardHashtagTechnology") }}</span>
                            <span class="badge bg-secondary">{{ $t("templates_page.cardHashtagModern") }}</span>
                            <span class="badge bg-dark">+4</span>
                        </p>
                        <a class="card-button">
                            <RouterLink class="btn btn-outline-primary" to="/templates/basic_template">{{ $t("templates_page.btnViewDemo") }}</RouterLink>
                        </a>
                        <a class="card-button">
                            <RouterLink class="btn btn-outline-success" to="#">{{ $t("templates_page.btnUsingThis") }}</RouterLink>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="@/assets/img/logo_cv.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ $t("templates_page.cardTitleModern") }}</h5>
                        <p class="card-text">
                            <span class="badge bg-secondary">{{ $t("templates_page.cardHashtagProfessional") }}</span>
                            <span class="badge bg-secondary">{{ $t("templates_page.cardHashtagTechnology") }}</span>
                            <span class="badge bg-dark">+1</span>
                        </p>
                        <a class="card-button">
                            <RouterLink class="btn btn-outline-primary" to="/templates/modern_template">{{ $t("templates_page.btnViewDemo") }}</RouterLink>
                        </a>
                        <a class="card-button">
                            <RouterLink class="btn btn-outline-success" to="#">{{ $t("templates_page.btnUsingThis") }}</RouterLink>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="@/assets/img/logo_cv.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ $t("templates_page.cardTitleBasic") }}</h5>
                        <p class="card-text">
                            <span class="badge bg-secondary">{{ $t("templates_page.cardHashtagModern") }}</span>
                            <span class="badge bg-secondary">{{ $t("templates_page.cardHashtagSimple") }}</span>
                            <span class="badge bg-dark">+7</span>
                        </p>
                        <a class="card-button">
                            <RouterLink class="btn btn-outline-primary" to="/templates/basic_template">{{ $t("templates_page.btnViewDemo") }}</RouterLink>
                        </a>
                        <a class="card-button">
                            <RouterLink class="btn btn-outline-success" to="#">{{ $t("templates_page.btnUsingThis") }}</RouterLink>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./templates_page.js">
</script>

<style scoped>
.carousel-item {
    height: 300px;

    img {
        height: 300px;
        width: 200px;
        border-radius: 1em / 1em;
    }
}

.card {
    align-items: center;
}

.card img {
    width: 200px;
    height: 200px;
    object-fit: cover;
}

.card-body button {
    margin: 0 5px 0 5px;
}

.card-body .card-text span {
    margin: 0 5px 0 5px;
}

.card-button{
    margin: 0 5px 0 5px;
}
</style>