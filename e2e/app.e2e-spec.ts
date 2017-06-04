import { Skillapp2Page } from './app.po';

describe('skillapp2 App', () => {
  let page: Skillapp2Page;

  beforeEach(() => {
    page = new Skillapp2Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
