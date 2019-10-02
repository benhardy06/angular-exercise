app.directive('profile', ['mainService','$q', function (mainService, $q) {
    return {
        restrict: 'E',
        scope: {
            title: "=",
            user:"=",
            namex:"=",
            storing:"=",
            loading:"=",
            button:"=",
            emailx:"="
        },
        templateUrl: 'js/directives/profile.directive.html',
        link: function (scope, element, attrs) {
            scope.profile = false
            scope.fetched = false;
            scope.getProfile = mainService.getProfileUser()
            scope.getProfile.then(function (response) {
                scope.profile = response;
                scope.fetched = true;
                scope.name = response.username
            })
            scope.error = false;
            scope.saving = false
            scope.errorMessage = ''
            scope.save = function () {
                if (scope.name) {
                    scope.saving = true
                    $q.all([
                    mainService.setUsername(scope.name),
                    mainService.setUserEmail(scope.name+"@blueface.com")
                    ])
                   .then(function (res) {
                        scope.saving = false
                        scope.error = false;
                    }, function (reason) {
                        scope.error = true;
                        scope.saving = false
                        if(reason.error=='name'){
                            scope.errorMessage = scope.namex
                        }else{
                            scope.errorMessage = scope.emailx
                        } 
                    });
                }
                
            }

        }
    }
}])