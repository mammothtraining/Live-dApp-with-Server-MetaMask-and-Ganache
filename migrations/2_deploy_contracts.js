const Tally = artifacts.require("Tally");

module.exports = function (deployer) {
  deployer.deploy(Tally);
};
