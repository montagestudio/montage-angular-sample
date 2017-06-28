import { MontageAngularSamplePage } from './app.po';

describe('montage-angular-sample App', () => {
  let page: MontageAngularSamplePage;

  beforeEach(() => {
    page = new MontageAngularSamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
