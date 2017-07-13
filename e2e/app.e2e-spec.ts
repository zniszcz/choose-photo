import { ChoosePhotoPage } from './app.po';

describe('choose-photo App', () => {
  let page: ChoosePhotoPage;

  beforeEach(() => {
    page = new ChoosePhotoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
