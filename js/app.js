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
      ]
    }
  ];

  app.controller('StoreController', function() {
    this.products = gems;
  });

  app.controller('PanelController', function() {
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });
}) ();
