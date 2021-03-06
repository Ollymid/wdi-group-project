angular
  .module('wildside')
  .controller('ProfileCtrl', ProfileCtrl);

ProfileCtrl.$inject = ['$auth', 'User', '$state', 'Trail'];

function ProfileCtrl($auth, User, $state, Trail) {
  const vm = this;
  vm.user = User.get($state.params);

  vm.trails = Trail.query({
    createdBy: $state.params.id
  });

  vm.logout = logout;

  function logout() {
    $auth.logout(); // remove the token
    $state.go('login'); // send the user to the login state
  }

  function profilesDelete() {
    User
      .remove(vm.user)
      .$promise
      .then(() => {
        $auth.logout();
        $state.go('login');
      });
  }

  vm.delete = profilesDelete;
}
