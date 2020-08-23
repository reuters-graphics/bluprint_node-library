const ProjectClass = require('../dist');
const expect = require('expect.js');

const projectInstance = new ProjectClass();

describe('test ProjectClass', function() {
  this.timeout(10000);

  it('Should return regions', function() {
    expect(projectInstance.run()).to.be('hello world');
  });
});
