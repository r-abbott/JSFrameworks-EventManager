import { EmAngularPage } from './app.po';

describe('em-angular App', () => {
  let page: EmAngularPage;

  beforeEach(() => {
    page = new EmAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
