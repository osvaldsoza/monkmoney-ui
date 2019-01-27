import { MonkmoneyUiPage } from './app.po';

describe('monkmoney-ui App', () => {
  let page: MonkmoneyUiPage;

  beforeEach(() => {
    page = new MonkmoneyUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
