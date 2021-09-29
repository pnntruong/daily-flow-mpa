const features = [
    {
        name: 'タスク管理',
        img: `./assets/img/schedule.png`,
        description: '毎日のタスクを管理',
        link: './pages/features/todo.html'
    },
    // {
    //     name: 'ファイナンス管理',
    //     img: `/assets/img/budget.png`,
    //     description: '自分のお金を管理',
    //     link: '/comingsoon'
    // },
    {
        name: '高速読書',
        img: `./assets/img/reading.png`,
        description: 'SwiftReadで読書しよう！',
        link: './pages/features/swiftread.html'
    },
    {
        name: 'COVID-19情報',
        img: `./assets/img/healthcare.png`,
        description: 'COVID-19情報',
        link: './pages/features/coviddashboard.html'
    },
    {
        name: 'Pomodoro',
        img: `./assets/img/working.png`,
        description: 'Pomodoro方法で集中しよう。',
        link: './pages/features/pomodoro.html'
    },
];

function renderMenu(){
    const navbarMenu = $('.navbar-nav');

    var navItemsHTML = '';

    navItems.forEach(navItem => {
        let html = `<li>
        <a class="nav-link ${navItem.isActive ? "active" : ""}" href="${navItem.link}">${navItem.name}</a>
    </li>`
        navItemsHTML += html;
    })

    navbarMenu.html(navItemsHTML);
};

function renderFeaturesList(){
    const featuresList = $('.features-list');

    var featuresHTML = '';

    features.forEach(feature => {
        let html = `<li class="col col-sm-12 col-md-6 col-lg-3">
        <a href=${feature.link} class="feature-item card text-body text-center align-content-center bg-transparent" style="width: 16rem; margin: 3px auto;">
            <img 
                class="feature-item__img card-img-top align-self-center" 
                src=${feature.img} 
                alt=${feature.name}/>
            <div class="card-body">
                <p class="feature-item__description card-text">${feature.description}</p>
            </div>
        </a>
    </li>`
    featuresHTML += html;
    })

    featuresList.html(featuresHTML);
};

$(".navbar-toggler-icon").on('click', () => {
    $(".menu-btn").toggleClass("active");
})

function render(target, content){
    target.innerHTML = content;
}

renderMenu();
renderFeaturesList();