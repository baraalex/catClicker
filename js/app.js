var app = angular.module('cats', []);

app.controller('catsClicks', ['$scope', '$http', catsClicks]);

function catsClicks($scope, $http) {
  $scope.admin = false;
  var vm = $scope;
    $http.get('https://baraalex.github.io/catClicker/data/cats.json').then(function(response) {
      console.log("get");
      console.log(response.data);
        vm.cats = response.data;
        vm.catSelectedIndex = 0;
        vm.catSelected = vm.cats[0];
    });


    $scope.setCat = function setCat(index) {
        $scope.catSelectedIndex = index;
        $scope.catSelected = $scope.cats[$scope.catSelectedIndex];
    };

    $scope.catClick = function catClick() {
        $scope.catSelected.clicks++;
    };

    $scope.adminClick = function adminClick() {
        $scope.admin = true;
        $scope.newName = $scope.catSelected.name;
        $scope.newPicture = $scope.catSelected.picture;
        $scope.newClicks = $scope.catSelected.clicks;
    };

    $scope.adminSubmit = function adminSubmit() {
        $scope.catSelected.name = $scope.newName;
        $scope.catSelected.picture = $scope.newPicture;
        $scope.catSelected.clicks = $scope.newClicks;
        $scope.admin = false;

    };

    $scope.adminCancel = function adminCancel() {
        $scope.admin = false;
    };
};

var cats = [{
    name: 'cat 1',
    picture: 'https://pixabay.com/static/uploads/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
    clicks: 0
}, {
    name: 'cat 2',
    picture: 'https://www.royalcanin.com/~/media/Royal-Canin/Product-Categories/cat-adult-landing-hero.ashx',
    clicks: 0
}, {
    name: 'cat 3',
    picture: 'https://s2.graphiq.com/sites/default/files/stories/t2/tiny_cat_12573_8950.jpg',
    clicks: 0
}, {
    name: 'cat 4',
    picture: 'https://pixabay.com/static/uploads/photo/2016/05/18/20/57/cat-1401557_960_720.jpg',
    clicks: 0
}, {
    name: 'cat 5',
    picture: 'https://userscontent2.emaze.com/images/4c9f61c9-f869-490b-9cc0-3c4c3b918222/bb3367d629415534f4d3fbec83a04a6a.png',
    clicks: 0
}, {
    name: 'cat 6',
    picture: 'https://www.royalcanin.com/~/media/Royal-Canin/Product-Categories/cat-breed-landing-hero.ashx',
    clicks: 0
}, ];
