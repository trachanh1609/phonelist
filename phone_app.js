(function() {
	var app = angular.module('phoneStore',[]);

	app.controller('StoreController',function(){
		this.products = phones ;
	});

  app.directive("productTabs", function(){
    return {
      restrict: "E",
      templateUrl : "product-tabs.html",
      controller: function() {
        this.tab = 1;

        this.isSet = function(checkTab){
          return this.tab === checkTab;
        };

        this.setTab = function(activeTab){
          this.tab = activeTab ;
        };

      },
      controllerAs : "tab"
    };
  });

  app.directive("productSpecs", function(){
    return {
      restrict: "E",
      templateUrl:"product-specs.html"
    };
  });

  app.directive("productReviews", function() {
    return {
      restrict: 'E',
      templateUrl: "product-reviews.html"
    };
  });

  app.directive("productImages", function() {
    return {
      restrict: 'E',
      templateUrl: "product-images.html",
      controller: function() {
        this.current = 0;
        this.setCurrent = function(imageNumber){
          this.current = imageNumber || 0;
        };
      },
      controllerAs: "gallery"
    };
  });

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);

      this.review = {};
    };
  });
	

	var phones = [
  {
    "_id": "575871061f66e09379610081",
    "index": 0,
    "name": "Iphone 6s",
    "price": 815.27,
    "weight": 143,
    "description": "143g, 7.1mm thickness,iOS 9, up to iOS 9.3.2, 16/64/128GB storage, no card slot",
    "screensize": "4.7",
    "cpu": "Dual-core 1.84 GHz Twister",
    "memory": "16/64/128 GB, 2 GB RAM",
    "primarycamera": "12 MP, f/2.2, 29mm",
    "secondarycamera": "5 MP, f/2.2, 31mm, 1080p@30fps, 720p@240fps",
    "battery": "1715",
    "reviews": [{
        stars: 5,
        body: "I love this phone!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "This phone is too expensive.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }],
    "images": [
        "images/apple-iphone-6s-1.jpg",
        "images/apple-iphone-6s-2.jpg",
        "images/apple-iphone-6s-3.jpg",
        "images/apple-iphone-6s-4.jpg"
      ]
  },
  {
    "_id": "575871064b1cf807c68c5afc",
    "index": 1,
    "name": "Lumia 950",
    "price": 714.81,
    "weight": "150",
    "description": "150g, 8.2mm thickness Microsoft Windows 10, 32GB storage, microSD card slot",
    "screensize": "5.0",
    "cpu": "Dual-core 1.82 GHz Cortex-A57 & quad-core 1.44 GHz Cortex-A53",
    "memory": "32GB, 3GB RAM",
    "primarycamera": "20 MP, f/1.9, 26mm, Carl Zeiss optics, OIS, autofocus, triple-LED RGB flash",
    "secondarycamera": "5 MP, f/2.4, 1080p",
    "battery": "3000",
    "reviews": [{
        stars: 3,
        body: "I think this phone was just OK, could honestly use more for games, IMO.",
        author: "JimmyDean@example.org",
        createdOn: 1397490980837
      }, {
        stars: 4,
        body: "Any phone with more than 20MP is for me!",
        author: "gemsRock@example.org",
        createdOn: 1397490980837
      }],
    "images": [
        "images/microsoft-lumia-950-2.jpg",
        "images/microsoft-lumia-950-1.jpg"
      ]
  },
  {
    "_id": "57587106ca33a724b5cdbaf1",
    "index": 2,
    "name": "Samsung Galaxy S7",
    "price": 799.97,
    "weight": 152,
    "description": "162g, 7.9mm thickness,Android OS, 32/64GB storage, microSD card slot",
    "screensize": "5.1",
    "cpu": "Dual-core 2.15 GHz Kryo & dual-core 1.6 GHz Kryo or Quad-core 2.3 GHz Mongoose + quad-core 1.6 GHz Cortex-A53",
    "memory": "32/64 GB, 4GB RAM",
    "primarycamera": "12 MP, f/1.7, 26mm, phase detection autofocus, OIS, LED flash",
    "secondarycamera": "5 MP, f/1.7, 22mm, dual video call, Auto HDR",
    "battery": "3000",
    "reviews": [{
        stars: 1,
        body: "This phone is WAY too expensive for its real value.",
        author: "turtleguyy@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: " High Specs == High Quality ?",
        author: "LouisW407@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "Don't waste your money!",
        author: "nat@example.org",
        createdOn: 1397490980837
      }],
    "images": [
        "images/samsung-galaxy-s7-1.jpg",
        "images/samsung-galaxy-s7-2.jpg",
        "images/samsung-galaxy-s7-3.jpg",
        "images/samsung-galaxy-s7-pink.jpg"
      ]
  },
  {
    "_id": "57587106e516b633648b5f3f",
    "index": 3,
    "name": "Sony Xperia X Performance",
    "price": 646.02,
    "weight": 164.4,
    "description": "4.4g, 8.7mm thickness,Android OS, v6.0.1,32GB storage, microSD card slot",
    "screensize": "5.0",
    "cpu": "Dual-core 2.15 GHz Kryo & dual-core 1.6 GHz Kryo",
    "memory": "32 GB, 3GB RAM",
    "primarycamera": "23 MP, f/2.0, 24mm, phase detection autofocus, LED flash",
    "secondarycamera": "13 MP, f/2.0, 22mm, 1/3 sensor size, 1080p, HDR",
    "battery": "2700",
    "reviews": [{
        stars: 1,
        body: "This phone is WAY too expensive for its real value.",
        author: "turtleguyy@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: " High Specs == High Quality ?",
        author: "LouisW407@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "Don't waste your money!",
        author: "nat@example.org",
        createdOn: 1397490980837
      }],
    "images": [
        "images/sony-xperia-x-performance-1.jpg",
        "images/sony-xperia-x-performance-2.jpg"
      ]
  },
  {
    "_id": "57587106244fb5c30260b452",
    "index": 4,
    "name": "Huawei P9 Plus",
    "price": 505.93,
    "weight": 162,
    "description": "162g, 7mm thickness,Android OS, v6.0,64GB storage, microSD card slot",
    "screensize": "5.5",
    "cpu": "Quad-core 2.5 GHz Cortex-A72 & quad-core 1.8 GHz Cortex-A53",
    "memory": "64 GB, 4 GB RAM",
    "primarycamera": "Dual 12 MP, f/2.2, 27 mm, Leica optics, phase detection autofocus, dual-LED ",
    "secondarycamera": "8 MP, f/1.9, autofocus, 1080p",
    "battery": "3400",
    "reviews": [{
        stars: 1,
        body: "This phone is WAY too expensive for its real value.",
        author: "turtleguyy@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: " High Specs == High Quality ?",
        author: "LouisW407@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "Don't waste your money!",
        author: "nat@example.org",
        createdOn: 1397490980837
      }],
    "images": [
        "images/huawei-p9-plus.jpg"
      ]
  }
  ];	


})();