Meteor.methods({
  toggleAdmin(id) {
    Roles.userIsInRole(id, 'admin')
    ? Roles.removeUsersFromRoles(id, ['admin'])
    : Roles.addUsersToRoles(id, ['admin'])
  }
})
