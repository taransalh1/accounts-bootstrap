// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by accounts-bootstrap.js.
import { name as packageName } from "meteor/taransalh:accounts-bootstrap";

// Write your tests here!
// Here is an example.
Tinytest.add('accounts-bootstrap - example', function (test) {
  test.equal(packageName, "accounts-bootstrap");
});
