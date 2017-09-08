Your issue is your the Node version 4.3.  Upgrading to 6.1 will resolve the issue.

I re-created the code snippet you provided [here]() and ran it in both environments.  The following errors were given for both cases respectively.

* 4.3
`at something.foo.module.exports.test (/var/task/handler.js:56:10)``

* 6.1
`at module.exports.test (/var/task/handler.js:56:10)`
