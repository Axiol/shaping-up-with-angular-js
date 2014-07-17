(function() {
  var app = angular.module('store', []);

  var gems = [
    {
      name: 'Azurite',
      price: 110.50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      canPurchase: true,
      soldOut: false,
      images: [
        {
          full: 'fakeimg-1.png',
          thumb: 'fakeimg-0.png'
        },
        {
          full: 'fakeimg-1.png',
          thumb: 'fakeimg-0.png'
        }
      ],
      reviews: [
        {
          stars: 5,
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          author: "test@test.com"
        },
        {
          stars: 2,
          body: "Nulla arcu tortor, blandit sed fermentum eget, lacinia non nisi.",
          author: "foo@test.com"
        },
        {
          stars: 3,
          body: "Curabitur enim nisi, consequat a justo id, condimentum congue arcu.",
          author: "bar@test.com"
        }
      ]
    },
    {
      name: 'Bloodstone',
      price: 29.9,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      canPurchase: true,
      soldOut: false,
      images: [
        {
          full: 'fakeimg-1.png',
          thumb: 'fakeimg-0.png'
        },
        {
          full: 'fakeimg-1.png',
          thumb: 'fakeimg-0.png'
        }
      ],
      reviews: [
        {
          stars: 5,
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          author: "test@test.com"
        },
        {
          stars: 2,
          body: "Nulla arcu tortor, blandit sed fermentum eget, lacinia non nisi.",
          author: "foo@test.com"
        },
        {
          stars: 3,
          body: "Curabitur enim nisi, consequat a justo id, condimentum congue arcu.",
          author: "bar@test.com"
        }
      ]
    },
    {
      name: 'Zircon',
      price: 1100,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      canPurchase: true,
      soldOut: false,
      images: [
        {
          full: 'fakeimg-1.png',
          thumb: 'fakeimg-0.png'
        },
        {
          full: 'fakeimg-1.png',
          thumb: 'fakeimg-0.png'
        }
      ],
      reviews: [
        {
          stars: 5,
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          author: "test@test.com"
        },
        {
          stars: 2,
          body: "Nulla arcu tortor, blandit sed fermentum eget, lacinia non nisi.",
          author: "foo@test.com"
        },
        {
          stars: 3,
          body: "Curabitur enim nisi, consequat a justo id, condimentum congue arcu.",
          author: "bar@test.com"
        }
      ]
    }
  ];

  app.controller('StoreController', function() {
    this.products = gems;
  });

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  app.directive('productTitle', function() {
    return {
      restrict: 'E',
      templateUrl: './includes/gem-title.html'
    };
  });

  app.directive('productPanels', function() {
    return {
      restrict: 'E',
      templateUrl: './includes/gem-panels.html',
      controller: function() {
        this.tab = 1;

        this.selectTab = function(setTab) {
          this.tab = setTab;
        };

        this.isSelected = function(checkTab) {
          return this.tab === checkTab;
        };
      },
      controllerAs: 'panel'
    };
  });
}) ();
