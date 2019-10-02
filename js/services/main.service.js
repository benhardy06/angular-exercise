app.service('mainService', ['$timeout', '$q', function ($timeout, $q) {
    this.profileUser = {
        first_name: '',
        last_name: '',
        username: '',
        age: '',
        useremail:''

    }
    this.getProfileUser = (value) => {
        return $timeout(() => {
            this.profileUser = {
                first_name: 'Michael',
                last_name: 'Collins',
                username: 'michael.collins',
                age: 30,
                useremail:''
            }
        }, 3000).then((response) => {
            return this.profileUser
        })
    }


    this.setUsername = (username) => {

        return $q((resolve, reject) => {
                setTimeout(() => {
                    if (Math.round(Math.random())) {
                        this.profileUser.username = username;
                        resolve(this.profileUser);
                    } else {
                        reject({
                            error: 'name'
                        });
                    }
                }, 3000);

            });
    };

    this.setUserEmail = (useremail) => {
        return $q((resolve, reject) => {
                setTimeout(() => {
                    if (Math.round(Math.random())) {
                        this.profileUser.useremail= useremail;
                        resolve(this.profileUser);
                    } else {
                        reject({
                            error: 'mail'
                        });
                    }
                }, 3000);

            });
    };

}]);