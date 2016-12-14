import { AngstPage } from './app.po';

describe('angst App', function() {
  let page: AngstPage;

  beforeEach(() => {
    page = new AngstPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
